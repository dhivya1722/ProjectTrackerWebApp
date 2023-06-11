export class Projectwithstatus {

     projectname!:string;
    startdate!:string;
    enddate!:string;
    users:string[] = [];
    status!:number;


    getUserCount():string {
        // return this.users.length.toString()

        return "2"
    }
}
