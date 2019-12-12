
export class Building {
    buildingId: number;
    buildingName: string;
    siteRefNo: string;
    isActive: boolean;
    levelNo: number;
    isChecked :boolean;
    levels: Level[];

    constructor(data?: Building) {
        if (data) {
          this.buildingId = data.buildingId;
          this.buildingName = data.buildingName;
          this.siteRefNo = data.siteRefNo;
          this.levels = data.levels;
          this.isChecked = data.isChecked;
        } else {
          this.buildingId = 0;
          this.buildingName = '';
          this.siteRefNo = '123456';
          this.isChecked = false;
        }
      }
}

export class Level {
    levelId: number;
    levelName: string;
    fK_buildingId: number;
    isActive: boolean;
    isChecked :boolean;
    constructor() {
        this.levelId = 0;
        this.levelName = '';
        this.fK_buildingId = 0;
        this.isActive = false;
        this.isChecked = false;
    }
}