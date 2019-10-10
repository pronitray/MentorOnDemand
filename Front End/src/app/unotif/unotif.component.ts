import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unotif',
  templateUrl: './unotif.component.html',
  styleUrls: ['./unotif.component.css']
})
export class UnotifComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }

  dismiss(): void {
    document.getElementById('myToast').style.display = "none";
    document.getElementById('clearNotif').innerHTML = "You have no Notifications left!";
  }

}
