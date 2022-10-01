import { Component, OnInit } from '@angular/core';

import { WidgetService } from './widget.service';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
    widgets: Array<any> = [];
    selectedWidget: any;

    setSelectedWidget( data: any ) { this.selectedWidget = Object.assign( {}, { id: data.id }, this.widgets[data.id] ); };

    // Service functions.
    getWidgets() {
        this._widgetService.getAll()
            .then( (data: any) => {
                console.log("Server returned this data: ", data);
                this.widgets = data
            })
            .catch( (err: any) => console.log("Server returned this error: ", err))
    }
    // getWidget( id: number ) {
    //     this._widgetService.getById( id )
    //         .then( (data: any) => {
    //             console.log("Server returned this data: ", data);
    //             this.selectedWidget = { id: id, data }
    //             console.log(this.selectedWidget)
    //         })
    //         .catch( (err: any) => console.log("Server returned this error: ", err))
    // }

    constructor(private _widgetService: WidgetService) { }
    ngOnInit(): void { this.getWidgets() }
};