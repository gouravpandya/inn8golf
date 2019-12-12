import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Injectable({
    providedIn: 'root'
})
export class DragDropService {

    public options: GridsterConfig = {
        draggable: {
            enabled: true
        },
        pushItems: true,
        resizable: {
            enabled: true
        }
    };

    public layout: GridsterItem[] = [];
    dropId: string;
    public workspaceId: number = 1;
    constructor() { }

    addItem(): void {
        this.layout.push({
            cols: 5,
            workSpaceId: this.workspaceId++,
            workSpaceName: '',
            rows: 5,
            x: 0,
            y: 0
        });
    }

    deleteItem(id: string): void {
        const item = this.layout.find(d => d.workSpaceId == id);
        this.layout.splice(this.layout.indexOf(item), 1);
    }

    setDropId(dropId: string): void {
        this.dropId = dropId;
    }
}
