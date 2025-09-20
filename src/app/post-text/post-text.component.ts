import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './post-text.component.html',
  styleUrl: './post-text.component.scss'
})
export class PostTextComponent {
  images:PostCarousel[];

  activeCarousel:number = 0;

  constructor(){

    this.images = [
      {
        imagePath:"../../assets/photos/img1.jpg",
        imageTitle:"First slide label",
        imagePara:"Some representative placeholder content for the first slide."
      },
      {
        imagePath:"../../assets/photos/img2.jpg",
        imageTitle:"Second slide label",
        imagePara:null
      },
      {
        imagePath:"../../assets/photos/img3.webp",
        imageTitle:"Third slide label",
        imagePara:null
      }

    ]
  }

}

interface  PostCarousel{
  imagePath:string;
  imageTitle:string;
  imagePara:string|null;

}
