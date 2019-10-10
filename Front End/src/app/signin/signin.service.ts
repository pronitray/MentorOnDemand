import {Injectable, RenderComponentType} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SigninService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8028/';
  private userUrl = 'http://localhost:8028/users';
  private mentorUrl = 'http://localhost:8028/mentors';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUser(userId) {
    return this.http.get<User>(this.userUrl + "/" + userId);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public findUser(userName, password) {
      return this.http.get<User>(this.userUrl + "/" + userName + "/" + password);
  }

  public findMentor(userName, password) {
    return this.http.get<Mentor>(this.mentorUrl + "/" + userName + "/" + password);
  }

  public getMentors() {
      return this.http.get<Mentor[]>(this.mentorUrl);
  }

  public updateUser(user) {
    return this.http.put<User>(this.userUrl + "/" + user.id,  user);
  }


}
