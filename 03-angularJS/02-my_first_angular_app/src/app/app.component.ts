import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '02-my_first_angular_app';

    first_name: string = "";

    printName = () => console.log("first_name is:", this.first_name)
}
