import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TaskService } from './tasks/task.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {}
