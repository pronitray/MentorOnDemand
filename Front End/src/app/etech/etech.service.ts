import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Technology } from '../models/technology.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EtechService {
  
  constructor(private http:HttpClient) {}
  
  private baseurl = 'http://localhost:8028/';
  private techUrl = 'http://localhost:8028/technologies';
  //private userUrl = '/api';

  public getTechs() {
    return this.http.get<Technology[]>(this.techUrl);
  }

  public getTech (techId) {
    return this.http.get<Technology>(this.techUrl + "/" + techId);
  }

  public deleteTech(tech) {
    return this.http.delete(this.techUrl + "/"+ tech.id);
  }

  public createTech(tech) {
    return this.http.post<Technology>(this.techUrl, tech);
  }

  public updateTech(tech) {
    return this.http.put<Technology>(this.techUrl+ "/"+ tech.id, tech);
  }

}
