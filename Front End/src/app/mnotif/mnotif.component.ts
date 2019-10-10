import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnotif',
  templateUrl: './mnotif.component.html',
  styleUrls: ['./mnotif.component.css']
})
export class MnotifComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }

}
