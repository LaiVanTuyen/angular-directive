import { Component, OnInit } from '@angular/core';
import { NgStyleClass } from '../ng-style-class';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  colorInput: string = 'red';
  ngStyleClass = new NgStyleClass();

  constructor() { }

  ngOnInit(): void {
  }


}
