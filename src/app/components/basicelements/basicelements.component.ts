import { dataModel } from "./../models/Riders.model";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { RidersService } from "../services/riders.service";
import { TeamModel } from "../models/team.model";

@Component({
  selector: "app-basicelements",
  templateUrl: "./basicelements.component.html",
  styleUrls: ["./basicelements.component.scss"],
})
export class BasicelementsComponent implements OnInit {
  data: dataModel;
  selectedFile: File;
  teamModel: TeamModel;
  constructor(public ridersService: RidersService) {}

  ngOnInit(): void {
    this.getAllRiders();
  }

  getAllRiders(): any {
    this.ridersService.getAllRiders().subscribe((data: any) => {
      this.data = data;
    });
  }

  onFileChanged(event) {
    const file = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append("myFile", this.selectedFile, this.selectedFile.name);
    this.ridersService.registerNewTeam(this.teamModel, uploadData).subscribe();
  }

  createProduct(event): void {
    const file = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append("myFile", this.selectedFile, this.selectedFile.name);

    this.ridersService.registerNewTeam(this.teamModel, uploadData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
