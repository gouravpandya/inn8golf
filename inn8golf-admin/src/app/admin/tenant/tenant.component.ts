import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import * as Global from './../../globalvariable/global';
import { NgForm } from '@angular/forms';
import { TenantService } from './tenant.service';
import { Router } from '@angular/router';
import { Tenant, LevelIds } from './tenant.model';
import { BuildingLevelService } from '../building-level/building-level.service';
import { Building, Level } from '../building-level/building-level.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {
  @ViewChild('tenantForm', { static: false }) tenantForm: NgForm;

  buildingList: Building[] = [];
  selectedBuildings: Building[] = [];
  selectedLevels = [];
  siteRefNo: string = '123456';
  tenant: Tenant;
  tenantList: Tenant[] = [];
  selectedItems = [];
  buildingDropdownSettings: IDropdownSettings = {};
  whiteSpacePattern = Global.RESTRICT_PRECEDING_SPACE;
  constructor(private buildingService: BuildingLevelService, private tenantService: TenantService, private router: Router) {
    this.tenant = new Tenant();

  }

  ngOnInit() {
    this.get();
    this.getBuildingWithoutTenant(this.siteRefNo);

    this.buildingDropdownSettings = {
      singleSelection: false,
      idField: 'buildingId',
      textField: 'buildingName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onBuildingItemSelect(item: any) {
    const selectedItem = this.buildingList.filter(b => b.buildingId === item.buildingId);
    if (selectedItem != null && selectedItem.length > 0)
      this.selectedBuildings.push(selectedItem[0]);

  }
  onBuildingAllItemSelect(items: any) {
    this.selectedBuildings = this.buildingList;
  }
  onBuildingAllItemDeSelect(items: any) {
    this.selectedBuildings = [];
  }
  onBuildingItemDeSelect(items: any) {

    const item = this.selectedBuildings.find(b => b.buildingId === items.buildingId);
    if (item != null)
      this.selectedBuildings.splice(this.selectedBuildings.indexOf(item), 1);
  }
  onLevelItemSelect(event, levelId) {

    if (event.target.checked) {
      this.selectedLevels.push(new LevelIds(levelId));
    }
    else {
      const item = this.selectedLevels.find(l => l.levelId === levelId);
      if (item != null)
        this.selectedLevels.splice(this.selectedBuildings.indexOf(item), 1);
    }
    this.tenant.levelList = this.selectedLevels;
  }

  checkAllBuildingLevels(buildingId: number, event) {

    const item = this.selectedBuildings.find(b => b.buildingId === buildingId);
    if (item != null && item.levels != null && item.levels.length > 0) {
      if (event.target.checked) {
        item.levels.forEach(level => {

          level.isChecked = true;
          const levelItem = this.selectedLevels.find(b => b.id === level.levelId);
          if (levelItem != null) {
            this.selectedLevels.push(new LevelIds(level.levelId));
          }

        });
      }
      else {
        item.levels.forEach(level => {
          level.isChecked = false;
          const item = this.selectedLevels.find(l => l.levelId === level.levelId);
          this.selectedLevels.splice(this.selectedBuildings.indexOf(item), 1);
        });
      }
      this.tenant.levelList = this.selectedLevels;
    }

    console.log(this.selectedLevels)
  }

  checkTenantAlreadyExists() {
    if (this.tenant.tenantName != '') {
      this.tenantService.checkIsExists(this.tenant).subscribe((tenantResponse) => {
        if (tenantResponse.status === 200 && !tenantResponse.body.didError) {
          Swal.fire(tenantResponse.body.message);
          this.tenant.tenantName = '';
        }
      });
    }
  }

  onSubmit(): void {

    this.tenantService.post(this.tenant).subscribe((tenantResponse) => {
      if (tenantResponse.status === 200 && !tenantResponse.body.didError) {

        this.tenantForm.reset();
        this.tenant = new Tenant();
        Swal.fire('Success', tenantResponse.body.message, 'success');
        this.get();
      } else {
        Swal.fire('Error', tenantResponse.body.errorMessage, 'error');
      }
    }, (error) => {
      this.handleError(error);
    },
    );
  }

  getById(tenantId: number): void {
    this.tenantService.getById(tenantId).subscribe((tenantResponse) => {
      if (tenantResponse.status === 200 && !tenantResponse.body.didError) {

        const item = tenantResponse.body.model;
        this.tenant.tenantName = item.tenantName;
        this.buildingList = this.buildingList.filter(b => b.buildingId == item.buildingId)
        if (this.buildingList != null && this.buildingList.length > 0) {
          this.buildingList[0].levels.forEach(element => {
            element.isChecked = true;
          });
        }
        this.selectedItems = this.buildingList;
        this.onBuildingItemSelect(this.buildingList[0]);
        this.buildingList[0] && this.buildingList[0].levels ? this.buildingList[0].levels = item.levels : '';
        this.getBuildingWithoutTenant(this.siteRefNo);
      }
    });
  }
  delete(tenantId: number): void {
    Swal.fire({
      title: 'Are you sure to delete it?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.tenantService.delete(tenantId).subscribe((tenantResponse) => {
          if (tenantResponse.status === 200 && !tenantResponse.body.didError) {
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
  private get(): void {
    this.tenantService.get().subscribe((tenantResponse) => {
      if (tenantResponse.status == 200 && !tenantResponse.body.didError) {
        this.tenantList = tenantResponse.body.model;
      }
    }, (error) => {
      this.handleError(error);
    });
  }

  private getBuildingWithoutTenant(siteRefNo: string): void {
    this.buildingService.getBuildingWithoutTenant(siteRefNo).subscribe((buildingResponse) => {
      if (buildingResponse.status == 200 && !buildingResponse.body.didError) {

        this.buildingList = buildingResponse.body.model;
      }
    }, (error) => {
      this.handleError(error);
    });
  }

  private handleError(errorCode: number): void {
    if (errorCode === 401) {
      this.router.navigateByUrl('/error');
    }
  }
}
