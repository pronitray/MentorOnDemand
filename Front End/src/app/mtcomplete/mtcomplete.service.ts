import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MtCompleteService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8028/';
  private trainingUrl = 'http://localhost:8028/trainings';
  //private userUrl = '/api';

  public findTrainingByMentorId(mentorId) {
    return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByMentorId/" + mentorId);
  }

//   public findTrainingByUserId(userId) {
//     return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByUserId/" + userId);
//   }

//   public findTrainingByMentorIdAndId(mentorId, id) {
//     return this.http.get<Training>(this.trainingUrl + "/" + mentorId + "/" + id);
//   }

//   public findTrainingByUserIdAndId(userId, id) {
//     return this.http.get<Training>(this.trainingUrl + "/" + userId + "/" + id);
//   }

  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

}
