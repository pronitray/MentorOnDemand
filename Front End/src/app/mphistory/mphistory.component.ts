import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { MpStatusService } from './mpstatus.service';
import { MtProgressService } from '../mtprogress/mtprogress.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-mphistory',
  templateUrl: './mphistory.component.html',
  styleUrls: ['./mphistory.component.css']
})
export class MphistoryComponent implements OnInit {
  trainings: Training[];
  constructor(private router: Router,  private mtprogressService: MtProgressService) { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
      // this.getPayments();
      this.findTrainingByMentorId();
      var getMData = JSON.parse(sessionStorage.getItem('storeMData'));
      document.getElementById('navusername').innerHTML="Hi, "+getMData.fullName;
    }
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }

  findTrainingByMentorId(): void {
    var mentorData = JSON.parse(sessionStorage.getItem('storeMData'));
    
    console.log(mentorData.id);
    
    this.mtprogressService.findTrainingByMentorId(mentorData.id).subscribe(data => {
      this.trainings = data;
      console.log(this.trainings);
      
    })  
  }

}
