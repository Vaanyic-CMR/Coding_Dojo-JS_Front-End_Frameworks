import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { WidgetService } from '../widget.service';

@Component({
    selector: 'app-edit-widgets',
    templateUrl: './edit-widgets.component.html',
    styleUrls: ['./edit-widgets.component.css']
})
export class EditWidgetsComponent implements OnInit {
    @Input() widget: any;
    @Output() getWidgetsEmitter = new EventEmitter();

    onSubmit(formData: NgForm) {
        this._widgetService.update(formData.form.value)
            .then( (_res: any) => {
                console.log(_res)
                this.getWidgetsEmitter.emit();
                this.widget = { id: null, name: "" }
            })
            .catch( (error: any) => console.log(error) );
    }

    constructor(private _widgetService: WidgetService) {}
    ngOnInit(): void { }

}
