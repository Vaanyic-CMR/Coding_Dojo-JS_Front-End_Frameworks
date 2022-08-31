import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: any[] = [
        {title: 'first task', status: false},
        {title: 'second task', status: true},
        {title: 'third task', status: false}
    ]

    constructor() {}
    ngOnInit(): void {}

    toggleTask( index: number ) {
        this.tasks[index].status = !this.tasks[index].status;
    }
}