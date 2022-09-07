import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
    user = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        state: ""
    }

    formSubmit(formData: NgForm) { console.log(formData.form.value) }

    constructor() {}
    ngOnInit(): void {}
}