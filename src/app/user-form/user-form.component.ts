import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  evenStyle = {color: 'red', fontSize: '20px'};
  oddStyle = {color: 'black', fontSize: '40px'};
  isShape = false;
  currentShape = {square: this.isShape, circle: !this.isShape}
  
  constructor() { }

  ngOnInit() {
  }
}
