import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { dataModel, RidersModel } from "../models/Riders.model";
import { TeamModel } from "../models/team.model";

const apiRidersyUrl = "http://15.184.90.114";

@Injectable({
  providedIn: "root",
})
export class RidersService {
  constructor(private http: HttpClient) {}

  getAllRiders(): Observable<dataModel[]> {
    return this.http.get<dataModel[]>(apiRidersyUrl + "/riders_list/");
  }

  registerNewTeam(data: TeamModel, file: any): Observable<TeamModel> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set("Content-Type", "application/json");
    console.log("request from service");

    return this.http.post<TeamModel>(
      apiRidersyUrl + "/register_new_team/",
      data,
      {
        headers: httpHeaders,
      }
    );
  }
}
