import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dates',
    templateUrl: './dates.component.html',
    styleUrls: ['./dates.component.css', '../app.component.css']
})
export class DatesComponent implements OnInit {
    now: Date | undefined

    constructor() {}
    ngOnInit(): void {
        this.now = new Date()
    }
}
