import { GridsterItem } from 'angular-gridster2';

export class Zone {
  zoneId: number;
  zoneName: string;
  tenantId: number;
  levelId: number;
  levelName: string;
  deviceId: number;
  deviceName: string;
  zoneFloorPlan: any[];

  constructor(data?: Zone) {
    if (data) {
      this.zoneId = data.zoneId;
      this.zoneName = data.zoneName;
      this.tenantId = data.tenantId;
      this.levelId = data.levelId;
      this.deviceId = data.deviceId;
      this.zoneFloorPlan = data.zoneFloorPlan;
    } else {
      this.zoneId = 0;
      this.zoneName = '';
      this.tenantId = 0;
      this.levelId = 0;
      this.deviceId = 0;
      this.zoneFloorPlan = [];
    }
  }
}