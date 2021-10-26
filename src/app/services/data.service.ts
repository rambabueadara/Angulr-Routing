import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    title : string = 'Hello From Data Service' ;

    getUsers() {

        return "User List  from here.."
    }
}