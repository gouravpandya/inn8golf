import { Component, OnInit, ViewChild } from '@angular/core';
import { Device, DeviceListFromEvexia } from './device.model';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { DeviceService } from './device.service';
import Swal from 'sweetalert2';
import { Zone } from '../zone/zone.model';
import { BuildingLevelService } from '../building-level/building-level.service';
import { Building } from '../building-level/building-level.model';
import { ZoneService } from '../zone/zone.service';

@Component({
  selector: 'device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  @ViewChild('deviceForm', { static: false }) deviceForm: NgForm;
  device: Device;
  deviceList: Device[] = [];
  buildingList: Building[] = [];
  deviceListFromEvexia: DeviceListFromEvexia[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Device> = new Subject();
  zoneList: Zone[] = [];
  constructor(private buildingService: BuildingLevelService, private deviceService: DeviceService, private router: Router, private zoneService : ZoneService) {
    this.device = new Device();
  }

  ngOnInit() {
    this.getBuildings();
    this.get();
    this.getDeviceListFromEvexia();
  }

  private get(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.deviceService.get('123456').subscribe((deviceResponse) => {
      if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
        this.deviceList = deviceResponse.body.model;
        this.dtTrigger.next();
      }
    });
  }

  getDeviceListFromEvexia() {
    this.deviceService.getDeviceListFromEvexia().subscribe((deviceRawDataResponse) => {
      if (deviceRawDataResponse.status === 200 && !deviceRawDataResponse.body.didError) {
        this.deviceListFromEvexia = deviceRawDataResponse.body.model;
      }
    });
  }

  getDeviceByMAC() {
    this.deviceService.getDeviceByMAC(this.device.macAddress).subscribe((deviceResponse) => {
      if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
        this.device = deviceResponse.body.model;
      }
    });
  }

  getBuildings(): void {
    this.buildingService.get('123456').subscribe((deviceResponse) => {
      if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
        this.buildingList = deviceResponse.body.model;
      }
    });
  }

  getZonesByBuildingId():void{
    this.zoneService.getZonesByBuildingId(this.device.buildingId).subscribe((zoneResponse) => {
      if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
        this.zoneList = zoneResponse.body.model;
      }
    });
  }

  getBuildingZones():void{

  }

  getById(deviceId: number): void {
    this.deviceService.getById(deviceId).subscribe((deviceResponse) => {
      if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
        this.device = deviceResponse.body.model;
      }
    });
  }

  save(): void {
    this.deviceService.post(this.device).subscribe((deviceResponse) => {
      if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
        this.deviceForm.reset();
        this.device = new Device();
        Swal.fire('Success', deviceResponse.body.message, 'success');
        this.get();
      } else {
        Swal.fire('Error', deviceResponse.body.errorMessage, 'error');
      }
    }, (error) => {
      this.handleError(error);
    });
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
        this.deviceService.delete(zoneId).subscribe((deviceResponse) => {
          if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
            Swal.fire('Deleted', deviceResponse.body.message, 'success');
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

  onReset(): void {
    this.deviceForm.reset();
    this.device.deviceId = 0;
  }


  private handleError(errorCode: number): void {
    if (errorCode === 401) {
      this.router.navigateByUrl('/error');
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
