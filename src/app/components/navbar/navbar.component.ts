import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() shift = new EventEmitter();

    faBars = faBars;
    faGrip = faGrip;
    faSquare = faSquareFull;
    faShare = faShareFromSquare;
    isPop: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    setIsPop(): void {
        this.isPop = !this.isPop;
    }

    initShift(): void {
        this.setShift();
        this.shift.emit();
    }
}
