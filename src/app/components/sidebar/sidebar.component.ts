import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { HISTORY_DISCOVER, REPORT } from '../../models/sidebar-menu-items';
import * as $ from 'jquery';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    
    @Input() isShift!: boolean;
    @Input() module!: any;
    faBars = faBars;
    faArrow = faCaretDown;
    menuItems!: any[];
    menuClickStatus!: any[];

    constructor() { }

    ngOnChanges(change: SimpleChanges) {
        for (let prop in change) {
            if (prop === 'isShift') {
                this.isShift = change['isShift'].currentValue;
            } else {
                this.module = change['module'].currentValue;
            }
        }
        this.matchModule();
    }

    ngOnInit(): void {
        this.matchModule();
    }

    matchModule(): void {
        switch (this.module.value) {
            case 'historyDiscover':
                this.menuItems = HISTORY_DISCOVER;
                break;
            case 'report':
                this.menuItems = REPORT;
                this.assignClickStatus(this.menuItems);
                break;
            default:
                console.log('no menu titles matched')
        }
    }

    assignClickStatus(menuItems: any[]): void {
        this.menuClickStatus = [...Array(menuItems.length)].fill(false);
    }

    toggleShow(id: number): void {
        this.menuClickStatus[id] = !this.menuClickStatus[id];
    }

    toggleSlide(id: number): void {
        $('.sidebar-list-nested').eq(id).slideToggle(250, 'linear');
    }
}