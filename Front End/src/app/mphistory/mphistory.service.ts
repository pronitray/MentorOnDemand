import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Payment } from '../models/payment.model';
import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MpHistoryService {

  constructor(private http:HttpClient) {}

  private baseurl = 'http://localhost:8028/';
  private paymentUrl = 'http://localhost:8028/payments';
  private trainingUrl = 'http://localhost:8028/trainings';
  //private userUrl = '/api';

  public getPayments() {
      return this.http.get<Payment[]>(this.paymentUrl);
  }

  public findTrainingByMentorId(mentorId) {
    return this.http.get<Training[]>(this.trainingUrl + "/findTrainingByMentorId/" + mentorId);
  }

  public getTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }

}
