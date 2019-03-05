import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProspectionPrevoyanceCC } from './cc-prospection-prevoyance';

@Injectable({
  providedIn: 'root'
})
export class CCPPService {
 apiURL: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  public getAllPPCC(){
    return this.httpClient.get<ProspectionPrevoyanceCC[]>(`${this.apiURL}/v1/els/pprevoyance/all`);
  }

  public getPPCCById(id: number){
    return this.httpClient.get<ProspectionPrevoyanceCC>(`${this.apiURL}/v1/els/pprevoyance/${id}`);
  }
}
