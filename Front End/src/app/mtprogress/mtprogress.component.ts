import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MtProgressService } from './mtprogress.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-mtprogress',
  templateUrl: './mtprogress.component.html',
  styleUrls: ['./mtprogress.component.css']
})
export class MtprogressComponent implements OnInit {
  trainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private mtprogressService: MtProgressService) { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
      this.findTrainingByMentorId();
      var getMData = JSON.parse(sessionStorage.getItem('storeMData'));
      document.getElementById('navusername').innerHTML="Hi, "+getMData.fullName;
    }
  }

  findTrainingByMentorId(): void {
    var mentorData = JSON.parse(sessionStorage.getItem('storeMData'));
    
    console.log(mentorData.id);
    
    this.mtprogressService.findTrainingByMentorId(mentorData.id).subscribe(data => {
      this.trainings = data;
      console.log(this.trainings);
      
    })  
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }


}
