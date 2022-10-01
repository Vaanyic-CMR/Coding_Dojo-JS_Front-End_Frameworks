import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import "rxjs";

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private _http: HttpClient) {}

    getTasks = () => this._http.get('http://localhost:8000/api/tasks').toPromise();
    createTask = (data: any) => {
        this._http.post<any>('http://localhost:8000/api/tasks', data)
            .subscribe();
    }
};