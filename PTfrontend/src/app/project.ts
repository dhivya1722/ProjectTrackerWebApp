// import { ArrayType } from "@angular/compiler";

import { User } from "./user";

export class Project {

    projectname!:string;
    startdate!:string;
    enddate!:string;
    users:string[] = [];


    getUserCount():string {
        // return this.users.length.toString()

        return "2"
    }


    // addAsUserIds(userEmails : string[] , userList : User[]){
    //     this.userIds = userEmails
    //       console.log(this.userIds)
    // }


}
