import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: any[] = [];
    task = { title: "", content: "", }

    getTasks() {
        this._taskService.getTasks()
            .then( (data: any) => {
                console.log("Server returned this data: ", data);
                this.tasks = data
            })
            .catch( (err: any) => console.log("Server returned this error: ", err))
    }
    createTask( formData: NgForm ) {
        // console.log( formData.form.value )
        this._taskService.createTask( formData.form.value );
        this.task = { title: "", content: "", };
        this.getTasks();
    }

    constructor(private _taskService: TaskService) {}
    ngOnInit(): void { this.getTasks() }
}
