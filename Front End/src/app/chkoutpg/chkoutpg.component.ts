import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { ResultsService } from '../tsresults/tsresults.service';
import { StorageService } from '../homepage/storage.service';

@Component({
  selector: 'app-chkoutpg',
  templateUrl: './chkoutpg.component.html',
  styleUrls: ['./chkoutpg.component.css']
})
export class ChkoutpgComponent implements OnInit {
  mentors: Mentor[];
  trainings: Training[];
  user: User = new User();
  myData;
  myTData;
  x;
  y;
  constructor(private router: Router, private resultsService: ResultsService, private storageService: StorageService) { }

  ngOnInit() {

    this.y  =this.storageService.getTScope();
    console.log(this.y);
    this.myTData = this.y;

    document.getElementById('trainingCourse').innerHTML = this.myTData[0].trainingName;
    document.getElementById('trainerDetails').innerHTML = "Trainer : "+this.myTData[0].mentor.fullName;
    document.getElementById('trainingPrice').innerHTML = "₹" + this.myTData[0].fees;
    document.getElementById('trainingTotal').innerHTML = "₹" + this.myTData[0].fees;
  }

}
