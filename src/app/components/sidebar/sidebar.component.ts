import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    @Input() isShift!: boolean;
    faBars = faBars;

    constructor() { }

    ngOnInit(): void {
    }

}
