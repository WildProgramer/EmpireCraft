import {Component, OnInit, ElementRef} from '@angular/core';
import {EnglishEn} from "../languages/eng-en";
import {TemplateController} from "./template.controller";
declare var jQuery: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  private title:string;
  private navBar;


  controller = new TemplateController();







 englishSelected(){

  this.title = EnglishEn.title;
  this.navBar = EnglishEn.navBar;
}




  constructor(private _elRef: ElementRef) {









    this.englishSelected();

  }


  ngOnInit(): any {
    jQuery(this._elRef.nativeElement).ready(function () {
      jQuery(".button-collapse").sideNav();
    })

  }




}
