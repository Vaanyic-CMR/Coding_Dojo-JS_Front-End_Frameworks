import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: any

    constructor(private _userService: UserService) {}
    ngOnInit(): void {
        console.log(this._userService);
        this.users = this._userService
    }
}
