import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';
import { SigninService } from '../signin/signin.service';
import { SignupService } from '../signup/signup.service';
import { MSignupService } from '../msignup/msignup.service';

declare const hideShowAB: any;
declare const usermentor: any;
@Component({
  selector: 'app-addblock',
  templateUrl: './addblock.component.html',
  styleUrls: ['./addblock.component.css']
})
export class AddblockComponent implements OnInit {
  user: User = new User();
  users: User[];
  mentor: Mentor = new Mentor();
  mentors: Mentor[];
  constructor(private router: Router,  private signinService: SigninService, private signupService: SignupService, private msignupService: MSignupService) { }

  ngOnInit() {
    this.getUsers();
    this.getMentors();

  }
  onchange () {
    hideShowAB();
    usermentor();
  }

  createMentor(): void {
    this.msignupService.createMentor(this.mentor).subscribe(data=>{
      alert("Mentor Created Successfully");
    })
  }

  createUser(): void {
    this.signupService.createUser(this.user).subscribe(data=>{
      alert("User Created Successfully");
    })
  }

  getUsers(): void {
    this.signinService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
      
    })
  }

  getMentors(): void {
    this.signinService.getMentors().subscribe(data => {
      this.mentors = data;
      console.log(this.mentors);
      
    })
  }

  blockUser(userId): void {
    var userStatus = "INACTIVE";
    this.signinService.getUser(userId).subscribe(data => {
      this.user = data;
      data.role = userStatus;
      this.signinService.updateUser(this.user).subscribe(data => {
        alert("User Blocked!");
        window.location.reload();
      })
    })
  }

  unblockUser(userId): void {
    var userStatus = "USER";
    this.signinService.getUser(userId).subscribe(data => {
      this.user = data;
      data.role = userStatus;
      this.signinService.updateUser(this.user).subscribe(data => {
        alert("User Unblocked!");
        window.location.reload();
      })
    })
  }
}
