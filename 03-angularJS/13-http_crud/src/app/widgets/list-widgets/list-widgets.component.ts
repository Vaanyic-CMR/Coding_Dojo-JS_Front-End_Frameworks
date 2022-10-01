import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WidgetService } from '../widget.service';

@Component({
    selector: 'app-list-widgets',
    templateUrl: './list-widgets.component.html',
    styleUrls: ['./list-widgets.component.css']
})
export class ListWidgetsComponent implements OnInit {
    @Input() widgets: any;
    @Output() getWidgetsEmitter = new EventEmitter();
    @Output() setSelectedWidgetEmitter = new EventEmitter<{id: number}>();

    deleteWidget( idx: number ) {
        this._widgetService.delete(idx)
            .then( (_res: any) => this.getWidgetsEmitter.emit() )
            .catch( (error: any) => console.log(error) )
    };
    editWidget( idx: number ) { this.setSelectedWidgetEmitter.emit({id: idx}); }

    constructor(private _widgetService: WidgetService) {}
    ngOnInit(): void {}
}
