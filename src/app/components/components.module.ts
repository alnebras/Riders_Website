import { RidersService } from "./services/riders.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { RouterModule } from "@angular/router";

import { BasicelementsComponent } from "./basicelements/basicelements.component";
import { ComponentsComponent } from "./components.component";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,

    BrowserModule,
  ],
  declarations: [ComponentsComponent, BasicelementsComponent],
  providers: [RidersService],
  entryComponents: [],
  exports: [ComponentsComponent],
})
export class ComponentsModule {}
