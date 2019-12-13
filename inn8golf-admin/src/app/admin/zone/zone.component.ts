import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DragDropService } from './drag-drop.service';
import { Zone } from './zone.model';
import { ZoneService } from './zone.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit, AfterViewInit {
  @ViewChild('zoneForm', { static: false }) zoneForm: NgForm;
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Zone> = new Subject();
  // levelList: Level[] = [];
  zone: Zone;
  zoneList: Zone[] = [];
  workspaceName: string = '';
  currentWorkspaceIndex?: number = null;

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }


  constructor(public layoutService: DragDropService, private router: Router, private zoneService: ZoneService) {
    this.zone = new Zone();
  }

  ngOnInit() {
    this.get(false);
    this.getAllLevel('123456');
  }

  ngAfterViewInit(): void {
  }

  save(): void {
    this.zone.zoneFloorPlan = this.layout;
    this.zoneService.post(this.zone).subscribe((zoneResponse) => {
      if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
        this.zoneForm.reset();
        this.zone = new Zone();
        this.layoutService.layout = [];
        Swal.fire('Success', zoneResponse.body.message, 'success');
        this.get(true);
      } else {
        Swal.fire('Error', zoneResponse.body.errorMessage, 'error');
      }
    }, (error) => {
      this.handleError(error);
    });
  }

  checkZoneAlreadyExists(): void {
    this.zoneService.checkZoneNameExists(this.zone).subscribe((zoneResponse) => {
      if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
        this.zone.zoneName = '';
        Swal.fire(zoneResponse.body.message);
      }
    });
  }

  setCurrentWorkspaceIndex(index: number): void {
    this.currentWorkspaceIndex = index;
    this.workspaceName = this.layoutService.layout[this.currentWorkspaceIndex].workSpaceName;
  }
  updateWorkspaceName(): void {
    this.layoutService.layout[this.currentWorkspaceIndex].workSpaceName = this.workspaceName;
    this.workspaceName = '';
    this.currentWorkspaceIndex = null;
  }

  clearWorkspaceName(): void {
    this.workspaceName = '';
    this.currentWorkspaceIndex = null;
  }

  delete(zoneId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.zoneService.delete(zoneId).subscribe((zoneResponse) => {
          if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
            this.rerender();
            this.get(true);
            Swal.fire('Deleted', zoneResponse.body.message, 'success');
          }
        });
        Swal.fire(
          'Deleted!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    });
  }

  private get(recreate: boolean): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.zoneService.get('123456').subscribe((zoneResponse) => {
      if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
        if (recreate) {
          this.rerender();
        }
        else {
          this.dtTrigger.next();
        }
        this.zoneList = zoneResponse.body.model;
      }
    });
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  private getAllLevel(siteRefNo: string): void {
    // this.buildingServie.getAllLevel(siteRefNo).subscribe((levelResponse) => {
    //   if (levelResponse.status === 200 && !levelResponse.body.didError) {
    //     this.levelList = levelResponse.body.model;
    //   }
    // });
  }

  getById(zoneId: number): void {
    this.zoneService.getById(zoneId).subscribe((zoneResponse) => {
      if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
        this.zone = zoneResponse.body.model;
        this.layoutService.layout = this.zone.zoneFloorPlan;
        this.layoutService.workspaceId = this.zone.zoneFloorPlan[this.zone.zoneFloorPlan.length - 1].zoneBlockId + 1;
      }
    });
  }

  onReset(): void {
    this.zoneForm.reset();
    this.zone.zoneId = 0;
    this.layoutService.layout = [];
    this.workspaceName = '';
    this.currentWorkspaceIndex = null;
  }

  private handleError(errorCode: number): void {
    if (errorCode === 401) {
      this.router.navigateByUrl('/error');
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
