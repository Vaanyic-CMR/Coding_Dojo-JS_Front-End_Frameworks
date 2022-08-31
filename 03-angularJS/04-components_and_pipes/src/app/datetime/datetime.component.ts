import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.component.html',
    styleUrls: ['./datetime.component.css', '../app.component.css']
})
export class DatetimeComponent implements OnInit {
    now:Date | undefined

    constructor() { }
    ngOnInit(): void {
        this.now = new Date()
    }

}
