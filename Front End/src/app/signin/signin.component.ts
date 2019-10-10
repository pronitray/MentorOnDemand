import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


import { User } from '../models/user.model';
import { SigninService } from './signin.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  users: User[];
  user: User = new User();
  mentor: Mentor  = new Mentor();
  constructor(private router: Router,  private signinService: SigninService) {

   }

   ngOnInit() {

    if(sessionStorage.length != 0)
    {
      alert("You are already signed in!");
      if(sessionStorage.key(0)=='storeData')
      {
        this.router.navigate(['ulpage']);
      }
    }

    // for (var i =0; i<sessionStorage.length;i++)
    // {
    //   console.log(sessionStorage.key(i));
      
    // }
   }

 findUser(userName, password): void {
    this.signinService.findUser(userName, password)
        .subscribe( data => {


          if(data == null)
          {
            alert("Invalid Credentials!");
            document.location.reload(true);
          }
          else
          {
            
            console.log(data.role);
            
            if(data.role == 'INACTIVE') {
              alert("Your access has been revoked by the Administrator!")
              this.router.navigate(['/']);
            }
            else {
              this.router.navigate(['loading']);
              localStorage.setItem('loadData','"/ulpage"');
              sessionStorage.setItem('storeData', JSON.stringify(data));

            }
          }
        });

  };

  findMentor(userName, password): void {
    this.signinService.findMentor(userName, password)
        .subscribe( data => {


          if(data == null)
          {
            alert("Invalid Credentials!");
            document.location.reload(true);
          }
          else
          {
            this.router.navigate(['loading']);
            localStorage.setItem('loadData','"/mlpage"');
            sessionStorage.setItem('storeMData', JSON.stringify(data));
          }
        });

  };


  check(userName, password, role): void {
    if(role == 'User')
    this.findUser(userName, password);
    else if (role == 'Mentor')
    this.findMentor(userName, password);
    else if (role == 'Administrator' && userName == 'admin' && password == 'admin1234' )
    {
        window.location.pathname = '/loading';
        localStorage.setItem('loadData','"/alpage"');
    }
  }

  reload(): void {
    window.location.pathname='/signup';
  }

  mreload(): void {
    window.location.pathname='/msignup';
  }
}
