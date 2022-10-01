import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { WidgetService } from '../widget.service';

@Component({
    selector: 'app-create-widget',
    templateUrl: './create-widget.component.html',
    styleUrls: ['./create-widget.component.css']
})
export class CreateWidgetComponent implements OnInit {
    widget = { name: "" }

    onSubmit(formData: NgForm) {
        // console.log( formData.form.value )
        this._widgetService.create(formData.form.value);
        this.widget = { name: "" }
    }
    constructor(private _widgetService: WidgetService) {}

    ngOnInit(): void {
    }

}
