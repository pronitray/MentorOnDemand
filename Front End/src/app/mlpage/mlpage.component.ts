import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlpage',
  templateUrl: './mlpage.component.html',
  styleUrls: ['./mlpage.component.css']
})
export class MlpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first.");
      document.location.pathname='/signin';
    }
    else
    {
      var getMData = JSON.parse(sessionStorage.getItem('storeMData'));
      console.log(getMData.technologies);
      document.getElementById('mentordisplay').innerHTML="Welcome " + getMData.fullName +" to your Dashboard!<br>Check for your Slots and Payments from here!";
      // document.getElementById('mentordisplay').innerHTML=getMData.fullName;
      document.getElementById('mentorDomain').innerHTML = "Facilities : " + getMData.facilities + "<br>" +  "Technologies : " +  getMData.technologies; 
      document.getElementById('navusername').innerHTML="Hi, "+getMData.fullName;
      window.onunload = function() {sessionStorage.clear(); localStorage.setItem('loadData','"/"');};
    }
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }

}
