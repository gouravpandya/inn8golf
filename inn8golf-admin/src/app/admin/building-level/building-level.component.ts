import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Building, Level } from './building-level.model';
import { BuildingLevelService } from './building-level.service';
import Swal from 'sweetalert2';
import * as Global from './../../globalvariable/global';
import { filter } from 'minimatch';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-building-level',
  templateUrl: './building-level.component.html',
  styleUrls: ['./building-level.component.css']
})
export class BuildingLevelComponent implements OnInit {
  @ViewChild('buildingLevelForm', { static: false }) buildingLevelForm: NgForm;

  building: Building;
  buildingList: Building[] = [];
  IsActive = false;
  IsValid = true;
  levelList: Level[] = [];
  whiteSpacePattern = Global.RESTRICT_PRECEDING_SPACE;
  numberPatter = Global.DIGIT_ONLY;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Building> = new Subject();
  siteRefNo: string;
  constructor(private buildingLevelService: BuildingLevelService, private router: Router) {
    this.building = new Building();

  }

  ngOnInit() {
    this.initialize();
  }
  onSubmit(): void {
    this.buildingLevelService.post(this.building).subscribe((buildingResponse) => {
      if (buildingResponse.status === 200 && !buildingResponse.body.didError) {
        this.buildingLevelForm.reset();
        this.building = new Building();
        Swal.fire('Success', buildingResponse.body.message, 'success');
        this.get();
      } else {
        Swal.fire('Error', buildingResponse.body.errorMessage, 'error');
      }
    }, (error) => {
      this.handleError(error);
    },
    );
  }

  getById(buildingId: number): void {
    this.IsActive = true;
    this.buildingLevelService.getById(buildingId).subscribe((buildingResponse) => {
      if (buildingResponse.status === 200 && !buildingResponse.body.didError) {
        this.building = buildingResponse.body.model;
        this.building.levelNo = this.building.levels.length;
      }
    });
  }

  delete(buildingId: number): void {
    Swal.fire({
      title: 'Are you sure to delete it?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.buildingLevelService.delete(buildingId).subscribe((buildingResponse) => {
          if (buildingResponse.status === 200 && !buildingResponse.body.didError) {
            Swal.fire(
              'Deleted!',
              'success'
            )
            this.get();
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
        )
      }
    });

  }

  onReset(): void {
    this.IsActive = false;
    this.buildingLevelForm.reset();
    this.building = new Building();
    this.levelList = [];
  }

  checkBuildingAlreadyExists() {
    this.buildingLevelService.checkBuildingAlreadyExists(this.building).subscribe((buildingResponse) => {
      if (buildingResponse.status === 200 && !buildingResponse.body.didError) {
        Swal.fire(buildingResponse.body.message);
        this.building.buildingName = '';
      }
    });
  }
  checkValidInput() {
    // tslint:disable-next-line:radix
    // var levelNo = parseInt(this.building.levelNo);

    // if (levelNo === 0) {
    //   this.IsValid = false;
    // }

    // else
    //   this.IsValid = true;
  }
  deleteLevel(levelId: number) {
    const item = this.building.levels.find(l => l.levelId === levelId);
    this.building.levels.splice(this.building.levels.indexOf(item), 1);
  }
  private initialize(): void {
    this.getSite();
    this.get();
  }
  private getSite() {
    this.siteRefNo = localStorage.getItem('siteId');
  }

  private get(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.buildingLevelService.get(this.siteRefNo).subscribe((buildingResponse) => {
      if (buildingResponse.status === 200 && !buildingResponse.body.didError) {
        this.buildingList = buildingResponse.body.model;
        this.dtTrigger.next();
      }
    });
  }

  private handleError(errorCode: number): void {
    if (errorCode === 401) {
      this.router.navigateByUrl('/error');
    }
  }

  private showMessage(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}


