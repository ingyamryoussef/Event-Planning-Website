import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox-component',
  templateUrl: './lightbox-component.component.html',
  styleUrls: ['./lightbox-component.component.css']
})
export class LightboxComponentComponent implements OnInit {

  /*let _album : {src: String}[] = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = 'demo/img/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'demo/img/image' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }*/
  constructor(){}

  ngOnInit(): void {
  }


}
