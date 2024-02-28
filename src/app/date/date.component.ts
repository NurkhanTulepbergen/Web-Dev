import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent implements OnInit{

  loggedIn = false;
  text: string = "Hello World";
  constructor() {
  }
  ngOnInit() {

  }

  myEvent({event}: { event: any }){
    window.alert(event)
  }

  isCollapsed = true

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

}
