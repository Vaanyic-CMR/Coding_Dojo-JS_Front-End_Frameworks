import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    @Input() task: any;
    @Output() toggleTaskStatus = new EventEmitter()

    constructor() {}
    ngOnInit(): void {}

    buttonClick() { this.toggleTaskStatus.emit() }
}
