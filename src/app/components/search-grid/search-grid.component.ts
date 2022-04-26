import { Component, OnInit } from '@angular/core';
import { GRID_DATA } from 'src/app/models/search-grid-data';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
    selector: 'app-search-grid',
    templateUrl: './search-grid.component.html',
    styleUrls: ['./search-grid.component.css']
})
export class SearchGridComponent implements OnInit {

    defaultDate: Date = new Date();
    gridData!: GridDataResult;
    pageSize!: number;
    skip: number = 0;
    items: any[] = GRID_DATA;

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
