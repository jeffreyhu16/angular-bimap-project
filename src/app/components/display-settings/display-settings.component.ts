import { Component, OnInit } from '@angular/core';
import { DISPLAY_SETTINGS } from 'src/app/models/display-settings.data';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-display-settings',
  templateUrl: './display-settings.component.html',
  styleUrls: ['./display-settings.component.css']
})
export class DisplaySettingsComponent implements OnInit {

  gridData!: GridDataResult;
    pageSize!: number;
    skip: number = 0;
    items: any[] = DISPLAY_SETTINGS;

    constructor() { }

    ngOnInit(): void {
        this.checkHeight();
        this.loadItems();

        window.addEventListener('resize', () => {
            this.checkHeight();
            this.loadItems();
        });
    }

    checkHeight(): void {
        if (window.innerHeight > 1000) {
            this.pageSize = 4;
        } else if (window.innerHeight > 800) {
            this.pageSize = 3;
        } else {
            this.pageSize = 2;
        }
    }

    loadItems(): void {
        this.gridData = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        }
    }

    pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

}
