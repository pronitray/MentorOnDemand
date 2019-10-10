import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadingscreen',
  templateUrl: './loadingscreen.component.html',
  styleUrls: ['./loadingscreen.component.css']
})
export class LoadingscreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var getLoadData = JSON.parse(localStorage.getItem('loadData'));
    setTimeout(function() {
      window.location.pathname= getLoadData;
      localStorage.clear();
  }, 3000);

    }
  }

