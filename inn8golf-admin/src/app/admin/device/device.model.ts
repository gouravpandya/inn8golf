export class Device {
    deviceId: number;
    deviceName: string;
    macAddress: string;
    zoneId: number;
    zoneName: string;
    tenantName: string;
    levelName: string;
    buildingId: number;
    buildingName: string;
    deviceAssociatedWithZoneFrom: Date;
    deviceAssociatedWithZoneTo?: Date;

    constructor(data?: Device) {
        if (data) {
            this.deviceId = data.deviceId;
            this.deviceName = data.deviceName;
            this.macAddress = data.macAddress;
            this.zoneId = data.zoneId;
            this.zoneName = data.zoneName;
            this.levelName = data.levelName;
            this.tenantName = data.tenantName;
            this.buildingId = data.buildingId;
            this.buildingName = data.buildingName;
            this.deviceAssociatedWithZoneFrom = data.deviceAssociatedWithZoneFrom;
            this.deviceAssociatedWithZoneTo = data.deviceAssociatedWithZoneTo;
        }
        else {
            this.deviceId = 0;
            this.deviceName = '';
            this.macAddress = '';
            this.zoneId = 0;
            this.buildingId = 0;
            this.zoneName = '';
            this.levelName = '';
            this.tenantName = '';
            this.buildingName = '';
            this.deviceAssociatedWithZoneFrom = new Date();
            this.deviceAssociatedWithZoneTo = null;
        }
    }
}

export class DeviceListFromEvexia {
    evexiaRawDataID: number;
    macAddress: string;
    constructor(data: DeviceListFromEvexia) {
        if (data) {

        }
        else {
            this.evexiaRawDataID = 0;
            this.macAddress = '';
        }
    }
}