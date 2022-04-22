import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-search-grid',
    templateUrl: './search-grid.component.html',
    styleUrls: ['./search-grid.component.css']
})
export class SearchGridComponent implements OnInit {

    @Input() isShift!: boolean;
    defaultDate: Date = new Date();

    constructor() { }

    ngOnInit(): void {
    }

}
