import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';
import { Technology } from '../models/technology.model';
import { Skill } from '../models/skill.model';
import {  Training } from '../models/training.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddTrainingService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8028/';
  private userUrl = 'http://localhost:8028/users';
  private mentorUrl = 'http://localhost:8028/mentors';
  private trainingUrl = 'http://localhost:8028/trainings';
  private techUrl = 'http://localhost:8028/technologies';
  private skillUrl = 'http://localhost:8028/skills';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public getTrainings() {
      return this.http.get<Training[]>(this.trainingUrl);
  }

//   public getTraining() {
//       return this.http.get<Training>(this.trainingUrl);
//   }

  public createTraining(training) {
      return this.http.post<Training>(this.trainingUrl, training);
  }

  public getMentors() {
      return this.http.get<Mentor[]>(this.mentorUrl);
  }

  public getTechnologies() {
      return this.http.get<Technology[]>(this.techUrl);
  }

  public getSkills() {
      return this.http.get<Skill[]>(this.skillUrl);
  }
}
