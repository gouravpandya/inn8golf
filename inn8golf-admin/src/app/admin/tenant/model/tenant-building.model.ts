import { Level } from '../../building-level/building-level.model';

export class TenantBuilding {
    tenantId:number;
    tenantName:string;
    buildingId:number;
    buildingName:string;
    levels: Level[];

    constructor(data?: TenantBuilding) {
        if (data) {
            this.tenantId = data.tenantId;
            this.tenantName = data.tenantName;
            this.buildingId = data.buildingId;
            this.buildingName = data.buildingName;
            this.levels = data.levels;
        } else {
            this.tenantId = 0;
            this.tenantName = '';
            this.buildingId = 0;
            this.buildingName ='';
            this.levels = [];
        }
    }
}