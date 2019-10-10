import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { ResultsService } from './tsresults.service';
import { StorageService } from '../homepage/storage.service';
@Component({
  selector: 'app-tsresults',
  templateUrl: './tsresults.component.html',
  styleUrls: ['./tsresults.component.css']
})
export class TsresultsComponent implements OnInit {
  mentors: Mentor[];
  trainings: Training[];
  user: User = new User();
  myData;
  myTData;
  x;
  y;
  constructor(private router: Router, private resultsService: ResultsService, private storageService: StorageService) { }

  ngOnInit() {
    this.x = this.storageService.getScope();
    console.log(this.x);
    this.myData = this.x;
    this.y  =this.storageService.getTScope();
    console.log(this.y);
    this.myTData = this.y;
    
  }

  enroll(mentorId): void {
    if(sessionStorage.length == 0)
    {
      alert("You need to signin first!");
      this.router.navigate(['signin']);
    }
    else
    {
      console.log(mentorId);
      this.router.navigate(['checkout']);
      this.resultsService.findTrainingByMentorId(mentorId).subscribe(data => {
        this.trainings = data;
        console.log(this.trainings);
        console.log(this.user);
        
        // this.resultsService.updateTraining(this.trainings)
      })
    }
  }

  reload(): void {
    window.location.pathname='/signup';
  }
  mreload(): void {
    window.location.pathname='/msignup';
  }

}
