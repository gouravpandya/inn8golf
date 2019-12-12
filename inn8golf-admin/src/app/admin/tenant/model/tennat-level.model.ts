import { Level } from '../../building-level/building-level.model';

export class TenantLevel {
    tenantId: number;
    tenantName: string;
    levels: Level[];

    constructor(data?: TenantLevel) {
        if (data) {
            this.tenantId = data.tenantId;
            this.tenantName = data.tenantName;
            this.levels = data.levels;
        } else {
            this.tenantId = 0;
            this.tenantName = '';
            this.levels = [];
        }
    }
}