import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MSignupService } from './msignup.service';
import { from } from 'rxjs';
declare const hideShow: any;
@Component({
  selector: 'app-signup',
  templateUrl: './msignup.component.html',
  styleUrls: ['./msignup.component.css']
})
export class MSignupComponent implements OnInit {
  mentor: Mentor = new Mentor();

  constructor(private router: Router, private msignupService: MSignupService) { }

  ngOnInit() {
  }

  createMentor(): void {
    if(this.mentor.contactNumber==null||this.mentor.fullName==null||this.mentor.password==null||this.mentor.userName==null)
    alert("Please fill all fields");
    else{
    this.msignupService.createMentor(this.mentor).subscribe(data=>{
      alert("Mentor Created Successfully")
    })
  }

  };

  reload(): void {
    window.location.pathname='/signup';
  }

  mreload(): void {
    window.location.pathname='/msignup';
  }
}
