import { Component, OnInit } from '@angular/core';
import {Event} from '../events.model';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  isadmin=true;
  //should be dynamic (backend)

  events : Event[]=[
    new Event('Engagements','Engagements Description','../../assets/events/engagements/e1p1.jpg','engagements'),
    new Event('Birthdays','Birthdays Description','../../assets/events/birthdays/e2p1.jpg','birthdays')
  ];//should be dynamic (backend)

  constructor(private _lightbox: Lightbox) { }

  ngOnInit(): void {
  }
  addEvent(){
    this.events.push(new Event('Birthdays','Birthdays Description','../../assets/events/birthdays/e2p1.jpg','birthdays'));
  //should be dynamic (backend)
  }
  removeEvent(i:any){
    this.events.splice(i,1);
  }
  openForm(){}


}
