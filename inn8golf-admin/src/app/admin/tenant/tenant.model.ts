export class Tenant {
    tenantId: number;
    tenantName: string;
    buildingList: any[];
    levelList: LevelIds[];

    constructor(data?: Tenant) {
        if (data) {
            this.tenantId = data.tenantId;
            this.tenantName = data.tenantName;
            this.buildingList = data.buildingList;
            this.levelList = data.levelList;
        } else {
            this.tenantId = 0;
            this.tenantName = '';
            this.buildingList = [];
            this.levelList = [];
        }
    }

}

export class LevelIds {
    id: number;
    constructor(id?: number) {
        if (id) {
            this.id = id;

        } else {
            this.id = 0;

        }
    }
}