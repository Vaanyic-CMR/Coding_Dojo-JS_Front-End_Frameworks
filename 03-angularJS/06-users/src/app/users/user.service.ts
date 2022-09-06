import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
    users: Array<User> = [ new User( {name: "Initial User"} ) ]

    getAll() { return this.users }
    add( data: any ) { this.users.push(new User()) }
    remove( user: any ) {  }

    constructor() {}
}
