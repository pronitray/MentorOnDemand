import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MtCompleteService } from './mtcomplete.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-utcomplete',
  templateUrl: './mtcomplete.component.html',
  styleUrls: ['./mtcomplete.component.css']
})
export class MtcompleteComponent implements OnInit {
  trainings: Training[];
  ctrainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private mtcompleteService: MtCompleteService) { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
        var mentorData = JSON.parse(sessionStorage.getItem('storeMData'));
        console.log(mentorData.id);
        document.getElementById('navusername').innerHTML="Hi, "+mentorData.fullName;
        this.mtcompleteService.findTrainingByMentorId(mentorData.id).subscribe(data => {
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
