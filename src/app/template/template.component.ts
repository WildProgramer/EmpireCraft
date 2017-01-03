import { Component, OnInit } from '@angular/core';
import {EnglishEn} from "../languages/eng-en";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  private title:string;
  private navBar;



 englishSelected(){

  this.title = EnglishEn.title;
  this.navBar = EnglishEn.navBar;
}


  constructor() {

    this.englishSelected();

  }

  ngOnInit() {

  }




}
