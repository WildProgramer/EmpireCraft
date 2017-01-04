import {Component, OnInit, ElementRef} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-e-store',
  templateUrl: './e-store.component.html',
  styleUrls: ['./e-store.component.css']
})
export class EStoreComponent implements OnInit {

  constructor( private _elRef: ElementRef) { }

  ngOnInit(): any {
    jQuery(this._elRef.nativeElement).ready(function () {
      jQuery('.modal').modal();
    })

  }

}
