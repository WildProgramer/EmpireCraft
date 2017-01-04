import {Component, OnInit, HostListener, NgZone} from '@angular/core';
import {EnglishEn} from "../languages/eng-en";
import {TemplateController} from "./template.controller";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  private title:string;
  private navBar;
  private hideElement: boolean = true;
  private width: number;

  controller = new TemplateController();


  // @HostListener('window:resize', ['$event'])
  //   onResize(event)
  //   {
  //     this.innerWidth = event.target.innerWidth;
  //     if (this.innerWidth <= 992) {
  //
  //       console.log("E menor");
  //     } else {
  //
  //       console.log("E maior");
  //
  //     }
  //
  //   }





 englishSelected(){

  this.title = EnglishEn.title;
  this.navBar = EnglishEn.navBar;
}




  constructor(ngZone:NgZone) {




//   Changing navbar with the size
    window.onresize = (e) =>
    {
      console.log("here called");
      ngZone.run(() => {
        this.width = window.innerWidth;

        if(this.width <= 992){

          this.hideElement = false;

        }else{

          this.hideElement = true;



        }
      });
    };





    this.englishSelected();

  }


  ngOnInit() {


  }




}
