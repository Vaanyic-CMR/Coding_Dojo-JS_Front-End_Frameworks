import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WidgetService {
    constructor(private _http: HttpClient) {}

    getAll = () => this._http.get('http://localhost:8000/api/widgets').toPromise();
    getById = (id: number) => this._http.get(`http://localhost:8000/api/widgets/${id}`).toPromise();
    create = (data: any) => this._http.post<any>('http://localhost:8000/api/widgets', data).toPromise();
    delete = (id: number) => this._http.delete(`http://localhost:8000/api/widgets/${id}`).toPromise();
    update = (data: any) => this._http.put<any>(`http://localhost:8000/api/widgets/${data.id}`, data).toPromise();
};