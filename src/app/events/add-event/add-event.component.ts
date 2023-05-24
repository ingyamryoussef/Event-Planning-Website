import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addEvent(){
    this.router.navigateByUrl('/events');
  }


}
