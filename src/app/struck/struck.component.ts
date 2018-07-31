import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struck',
  templateUrl: './struck.component.html',
  styleUrls: ['./struck.component.css']
})
export class StruckComponent implements OnInit {
  isShow = true;
  arrSubjects = ['Angular', 'NodeJS', 'React'];
  constructor() { }

  ngOnInit() {
  }

}
