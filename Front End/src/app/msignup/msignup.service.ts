import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MSignupService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8028/';
  private mentorUrl = 'http://localhost:8028/mentors';
  //private userUrl = '/api';


  public createMentor(mentor) {
    return this.http.post<Mentor>(this.mentorUrl, mentor);
  }

}
