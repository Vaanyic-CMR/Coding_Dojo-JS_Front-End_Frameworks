import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { WidgetService } from './widgets/widget.service';
import { WidgetsComponent } from './widgets/widgets.component';
import { CreateWidgetComponent } from './widgets/create-widget/create-widget.component';
import { EditWidgetsComponent } from './widgets/edit-widgets/edit-widgets.component';
import { ListWidgetsComponent } from './widgets/list-widgets/list-widgets.component';

@NgModule({
    declarations: [
        AppComponent,
        WidgetsComponent,
        CreateWidgetComponent,
        EditWidgetsComponent,
        ListWidgetsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [WidgetService],
    bootstrap: [AppComponent]
})
export class AppModule { }
