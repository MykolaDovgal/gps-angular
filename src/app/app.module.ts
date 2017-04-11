import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';

import { Md2Module }  from 'md2';
import { MaterialModule } from '@angular/material';

import { HeaderComponent } from './common/header.component';
import { NavbarComponent } from './common/navbar.component';
import { BodyComponent } from './body/body.component';
import { RoutePageComponent } from './body/route-page/route-page.component';
import { LeftBlockComponent } from './body/route-page/left-block/left-block.component';
import { SelectBarComponent } from './body/route-page/left-block/select-bar/select-bar.component';
import { RouteBarComponent } from './body/route-page/left-block/route-bar/route-bar.component';
import { BtnBarComponent } from './body/route-page/left-block/btn-bar/btn-bar.component';
import { RightBlockComponent } from './body/route-page/right-block/right-block.component';
import { HttpService } from "./Services/http.service";
import { DataService } from "./Services/data.service";
import {StringCutPipe} from "./common/string-cut.pipe";
import {DragulaModule} from "ng2-dragula";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    RoutePageComponent,
    LeftBlockComponent,
    SelectBarComponent,
    RouteBarComponent,
    BtnBarComponent,
    RightBlockComponent,
    StringCutPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Md2Module,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DragulaModule
  ],
  providers: [HttpService,DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
