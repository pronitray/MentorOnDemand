import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';
import { Mentor } from '../models/mentor.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomepageService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8028/';
  private trainingUrl = 'http://localhost:8028/trainings';
  private mentorUrl = 'http://localhost:8028/mentors';
  //private userUrl = '/api';

  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

  public findTrainingByUserId(userId) {
    return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByUserId/" + userId);
  }

  public getMentors() {
    return this.http.get<Mentor[]>(this.mentorUrl);
  }
}
