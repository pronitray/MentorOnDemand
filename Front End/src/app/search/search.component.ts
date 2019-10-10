import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { Training } from '../models/training.model';
import { HomepageService } from '../homepage/homepage.service';
import { StorageService } from '../homepage/storage.service';
import { TsresultsComponent } from '../tsresults/tsresults.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HomepageService, TsresultsComponent]
})
export class SearchComponent implements OnInit {
  mentor: Mentor = new Mentor();
  mentors: Mentor[];
  ment: Mentor[];
  trainings: Training[];
  training: Training = new Training();
  constructor(private router: Router, private homepageService: HomepageService, private storageService: StorageService, private comp: TsresultsComponent) { }

  ngOnInit() {

    if(sessionStorage.length == 0)
    {
      alert("You need to Signin first!");
      document.location.pathname='/signin';
    }
    else
    {
      var getData = JSON.parse(sessionStorage.getItem('storeData'));
      document.getElementById('navusername').innerHTML="Hi, "+getData.fullName;
      this.homepageService.getMentors().subscribe(data => {
        this.mentors = data;
        console.log(this.mentors);
        
      })
  
      this.homepageService.getTrainings().subscribe(data => {
        this.trainings = data;
        console.log(this.trainings);
        
      })
    }
  }

  logout(): void {
    sessionStorage.clear();
    window.location.pathname = '/loading';
    localStorage.setItem('loadData', '"/signin"');
  }

  check(startingDate, endingDate, trainingName): void {
    var x=0;
    let name;
    let rout = this.router;
    let men = this.mentors;
    let train = this.trainings;
    var ment = new Array();
    var t = new Array();
    for (let i =0; i< men.length;i++)
    {
      if(startingDate == men[i].startingDate || endingDate == men[i].endingDate || trainingName == train[i].trainingName )
      {
        ment[x] = men[i];
        t[x] = train[i];
        x++;
        this.storageService.setScope(ment);
        this.storageService.setTScope(t);
        this.comp.ngOnInit();
        rout.navigate(['tsresults']);
      }
    }
    
  }

}
