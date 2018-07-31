import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  arrPerson = [
    {name : "Khoa", age : "21"},
    {name : "Sáu", age : "25"},
    {name : "Huy", age : "22"}
  ]
  constructor() { }

  ngOnInit() {
  }
  removePersonByName(name: string){
    const index = this.arrPerson.findIndex(e => e.name === name);
    this.arrPerson.splice(index, 1);
  }

}
