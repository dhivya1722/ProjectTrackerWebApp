export class Userwithstatus {

  name!:string
  email!:string;
  password!:string;
  role!:string;
  status!:number;


  getStatusStr():string {
    if (this.status == 0) {
        return 'Open'
    }else if (this.status == 1){
        return 'Closed'
    }else if (this.status == 2){
        return 'In Progress'
    }else{
        return '-----'
    }
  }

}