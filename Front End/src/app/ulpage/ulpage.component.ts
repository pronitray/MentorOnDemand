import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulpage',
  templateUrl: './ulpage.component.html',
  styleUrls: ['./ulpage.component.css']
})
export class UlpageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
      var getData = JSON.parse(sessionStorage.getItem('storeData'));
      console.log(getData.fullName);
      
      document.getElementById('welcome').innerHTML="Welcome " + getData.fullName +" to your Dashboard!<br>Explore from a variety of Courses and Mentors!";
      document.getElementById('navusername').innerHTML="Hi, "+getData.fullName;
      window.onunload = function() {sessionStorage.clear(); localStorage.setItem('loadData','"/"');};
    }
  }

  logout(): void {

    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');


  }
  
}
