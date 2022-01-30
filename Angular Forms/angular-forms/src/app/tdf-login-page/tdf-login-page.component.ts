import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(nameRef:NgForm){
    let login = nameRef.value;
   // console.log(login);
   if(login.user=="Raj" && login.pass=="123"){
      this.msg="Successfully login"
   }else {
      this.msg = "Failure try once again"
   }nameRef.reset();
  }

}
