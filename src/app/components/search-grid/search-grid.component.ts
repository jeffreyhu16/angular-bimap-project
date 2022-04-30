import { Component, OnInit } from '@angular/core';
import { GRID_DATA } from 'src/app/models/search-grid-data';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
    selector: 'app-search-grid',
    templateUrl: './search-grid.component.html',
    styleUrls: ['./search-grid.component.css']
})
export class SearchGridComponent implements OnInit {

    defaultDate: Date = new Date();
    gridData!: GridDataResult;
    pageSize: number = 10;
    pageSizes: number[] = [10, 15, 20];
    page: number = 0;
    loading: boolean = false;
    items!: any[];

    constructor(private fetchDataService: FetchDataService) { }

    ngOnInit(): void {
        this.loadItems();
    }

    loadItems(): void {
        this.loading = true;
        this.fetchDataService.getSearchGridData().subscribe(res => {
            this.items = res;
        })

        this.gridData = {
            data: this.items.slice(
                this.page * this.pageSize, 
                (this.page + 1) * this.pageSize
            ),
            total: this.items.length
        }
        console.log(this.gridData)
        setTimeout(() => {
            this.loading = false;
        }, 600);
    }

    pageChange(event: PageChangeEvent): void {
        this.page = event.skip;
        this.loadItems();
    }
}
