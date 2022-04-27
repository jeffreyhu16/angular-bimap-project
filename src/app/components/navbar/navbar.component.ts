import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MODULES } from 'src/app/models/sidebar-menu-items';
import {
    faBars,
    faGrip,
    faSquareFull,
    faShareFromSquare
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Input() isShift!: boolean;
    @Input() setShift!: () => void;
    @Output() shiftNav = new EventEmitter();

    faBars = faBars;
    faGrip = faGrip;
    faSquare = faSquareFull;
    faShare = faShareFromSquare;
    isPop: boolean = false;
    modules = MODULES;
    module: any = MODULES[1];

    constructor() { }

    ngOnInit(): void {
    }

    setIsPop(): void {
        this.isPop = !this.isPop;
    }

    initShift(): void {
        this.setShift();
        this.shiftNav.emit();
    }

    setModule(module: any): void {
        this.module = module;
        this.isPop = false;
    }
}
