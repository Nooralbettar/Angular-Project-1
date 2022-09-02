import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',// الي ممكن نعمل منه تاج 
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fillUsersArray();
    this.Creat();
    this.updates(this.idForm);
    
    
  }
  // هنا كتابة اكواد التايب سكريبت 
  arrayOfUser : user[]=[];

  fillUsersArray():void{
    this.arrayOfUser.push({
      id:"1",
      name :{
        first_name:"noor",
        last_name:"albettar"
      },
      birthdate:"9-3-2002",
      email:"nooraladdin2002@gmail.com",
      phone:"0592190214",
      address:"alnaser street"
    },{
      id:"2",
      name :{
        first_name:"ismail",
        last_name:"albettar"
      },
      birthdate:"8-2-1997",
      email:"eng.ismail@gmail.com",
      phone:"0596194234",
      address:"elremal street"
    },{
      id:"3",
      name :{
        first_name:"Noha",
        last_name:"albettar"
      },
      birthdate:"4-2-1997",
      email:"noha22@gmail.com",
      phone:"059224234",
      address:"elremal street"
    });
    
};
edit(index :any):void{
  if(this.arrayOfUser[index].id=="1"){ 
    console.log(this.arrayOfUser[index].name.first_name="Noha");// عملت تعديل للاسم مرة ومرة تعديل للاي دي 
  }
  else{
    console.log(this.arrayOfUser[index].id="10");
  }
  if(this.arrayOfUser[index].id == this.idForm){
    this.Creat();
    this.updates(this.arrayOfUser[index].id == this.idForm);

  }else{
    console.log("no update")
  }

 
}
deleteItem(index:any):void{
  if(this.arrayOfUser[index].id=="1"){ 
    console.log(this.arrayOfUser.shift());
  }
  else{
    console.log(this.arrayOfUser.pop());
  }
  if(this.arrayOfUser[index].id == this.idForm2){
    delete this.arrayOfUser[index];
  }else{
    console.log("no delete item ")
  }
};


div1:boolean=false;
  preview():void{
  this.div1=true;};

div2:boolean=false;
newForm():void{
  this.div2=true;
}

  idForm:string ="";
  first_nameForm:string="";
  last_nameForm:string="";
  emailForm :string="";
  birthdateForm :string="";
  phoneForm:string="";
  addressForm:string= "";
Creat():void{
  this.arrayOfUser.push({id :this.idForm,
  name :{first_name :this.first_nameForm,
         last_name:this.last_nameForm},
         email :this.emailForm,
         birthdate :this.birthdateForm,
         phone:this.phoneForm,
         address: this.addressForm})

  };

  idForm2:string ="";
  first_nameForm2:string="";
  last_nameForm2:string="";
  emailForm2 :string="";
  birthdateForm2 :string="";
  phoneForm2:string="";
  addressForm2:string= "";
updates(indexw:any):void{
  if(this.arrayOfUser[indexw].id == this.idForm2){
    this.arrayOfUser.push({id :this.idForm2,
      name :{first_name :this.first_nameForm2,
             last_name:this.last_nameForm2},
             email :this.emailForm2,
             birthdate :this.birthdateForm2,
             phone:this.phoneForm2,
             address: this.addressForm2})
  }
  

}





}
interface user {
  id :string ,
  name :{
    first_name :string,
    last_name : string
    },
    birthdate : string,
    email : string,
    phone : string,
    address:string
} ;






  // array : any[]=[{
  //   name:"noor",
  //   age:20
  // }]
  // islogin : boolean = true