import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-currencies',
    templateUrl: './currencies.component.html',
    styleUrls: ['./currencies.component.css', '../app.component.css']
})
export class CurrenciesComponent implements OnInit {
    value: number | undefined

    constructor() {}
    ngOnInit(): void {
        this.value = 33.33;
    }

}
