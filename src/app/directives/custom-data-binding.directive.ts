import { Directive, OnInit, Input, OnChanges } from '@angular/core';
import { DataBindingDirective, GridComponent } from '@progress/kendo-angular-grid';
import { FetchDataService } from '../services/fetch-data.service';

@Directive({
    selector: '[CustomDataBinding]'
})
export class CustomDataBindingDirective extends DataBindingDirective implements OnInit {

    constructor(
        public override grid: GridComponent,
        private fetchDataService: FetchDataService
    ) {
        super(grid);
    }

    public override ngOnInit(): void {
        super.ngOnInit();
        this.rebind();
    }

    public override rebind(): void {
        this.grid.loading = true;
        setTimeout(() => {
            this.fetchDataService.getSearchGridData()
            .subscribe(res => {
                this.grid.data = res;
                this.grid.loading = false;
            });
        }, 600);
    }
}
