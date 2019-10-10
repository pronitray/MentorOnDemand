import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtProgressService } from './utprogress.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-utprogress',
  templateUrl: './utprogress.component.html',
  styleUrls: ['./utprogress.component.css']
})
export class UtprogressComponent implements OnInit {
  trainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private utprogressService: UtProgressService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
      var getData = JSON.parse(sessionStorage.getItem('storeData'));
      this.findTrainingByUserId();
      document.getElementById('navusername').innerHTML="Hi, "+getData.fullName;  
    }
    

  }

  findTrainingByUserId(): void {
    var userData = JSON.parse(sessionStorage.getItem('storeData'));
    
    console.log(userData.id);
    
    this.utprogressService.findTrainingByUserId(userData.id).subscribe(data => {
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
