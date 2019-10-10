import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtCompleteService } from './utcomplete.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-utcomplete',
  templateUrl: './utcomplete.component.html',
  styleUrls: ['./utcomplete.component.css']
})
export class UtcompleteComponent implements OnInit {
  trainings: Training[];
  ctrainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private utcompleteService: UtCompleteService) { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
        var userData = JSON.parse(sessionStorage.getItem('storeData'));
        console.log(userData.id);
        document.getElementById('navusername').innerHTML="Hi, "+userData.fullName; 
        this.utcompleteService.findTrainingByUserId(userData.id).subscribe(data => {
          console.log(data);
          for (let i = 0; i< data.length; i++)
          {
            if(data[i].progress == 100)
            {
              console.log(data[i].progress);
              
              var compTraining  = new Array();
              compTraining[i] = data[i];
              this.trainings = compTraining;
              console.log(this.trainings[i]);
              
              
            }

            else{
              document.getElementById("completeTable").style.display = "none";
              document.getElementById("completeHeader").innerHTML = "Nothing to look for!" + "<br>" + "Please finish some Trainings first!";
            }
            
          }          
        })    
    }
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }

}
