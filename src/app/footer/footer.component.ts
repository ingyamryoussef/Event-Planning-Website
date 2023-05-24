import { Component, OnInit } from '@angular/core';
import {faFacebook, faInstagram, faTwitter, faSnapchat} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faSnapchat = faSnapchat;

  

  constructor() { }

  ngOnInit(): void {
  }

}
