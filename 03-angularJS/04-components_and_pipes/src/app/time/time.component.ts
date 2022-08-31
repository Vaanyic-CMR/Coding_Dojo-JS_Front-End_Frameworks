import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-time',
    templateUrl: './time.component.html',
    styleUrls: ['./time.component.css', '../app.component.css']
})
export class TimeComponent implements OnInit {
    now:Date | undefined

    constructor() {}
    ngOnInit(): void {
        this.now = new Date()
    }
}
