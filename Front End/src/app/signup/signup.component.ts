import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SignupService } from './signup.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  users: User[];
  constructor(private router: Router, private signupService: SignupService) { }
  
  ngOnInit() {  
    this.signupService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  createUser(): void {
    var flag = 0;
    var x;
    if(this.user.contactNumber==null||this.user.fullName==null||this.user.password==null||this.user.userName==null)
    alert("Please fill all fields");
    else{

      x=this.user.userName;
      this.users.forEach(function(element){
        console.log(element.userName);
        if(x == element.userName)
        {
          flag = 1;
        }
      })

      if(flag == 1)
      alert("User Name already exists!");
      else
      {
        this.signupService.createUser(this.user).subscribe(data=>{
        alert("User Created Successfully");
      })
      }


  }
  };

  reload(): void {
    window.location.pathname='/signup';
  }
  mreload(): void {
    window.location.pathname='/msignup';
  }
}
