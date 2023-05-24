import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed=true;
  //isactive=false;
  isactivee : boolean[] = [];
  j=0;
  constructor() { }

  ngOnInit(): void {
  }

  activate(event:any){
    
  }
  checkactive(i:any){
    for(this.j=0 ; this.j<6 ; this.j++){
      if(this.j==i){
        this.isactivee[i]=true;
      }
      else{
        this.isactivee[this.j]=false;
      }
    }
  }


}
