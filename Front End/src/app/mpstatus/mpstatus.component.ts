import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { MpStatusService } from './mpstatus.service';
import { MtProgressService } from '../mtprogress/mtprogress.service';
import { Training } from '../models/training.model';
// import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-mpstatus',
  templateUrl: './mpstatus.component.html',
  styleUrls: ['./mpstatus.component.css']
})
export class MpstatusComponent implements OnInit {
  // payments: Payment[];
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

  // getPayments(): void {

  //   this.mpstatusService.getPayments().subscribe(data =>{
  //     this.payments = data;
  //     console.log(this.payments);
      
  //   })
  // }

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
