import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarouselItem } from '../types/carouselItem';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent  {

  items: CarouselItem[] = [
    {
      nome: 'Dark Souls™: Remastered', 
      nota: '9.5', 
      likes: 5.892,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg?t=1682652141',
      urlVideo: 'https://www.youtube.com/embed/nzwnFYKNNdc'
    },
    {
      nome: 'Red Dead Redemption 2', 
      nota: '9.6', 
      likes: 9.867,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009',
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'
    },
    {
      nome: 'EA SPORTS™ FIFA 23', 
      nota: '9.2', 
      likes: 10.907,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg?t=1682117049', 
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'
    },
    {
      nome: 'God of War', 
      nota: '9.8', 
      likes: 8.456,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420',
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'

    },
    {
      nome: 'Sekiro™: Shadows Die Twice - GOTY Edition', 
      nota: '9.0', 
      likes: 3.240,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg?t=1678991267',
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'
    },
  ]

  item: CarouselItem = this.items[0];
  currentIndex: number = 0;

  goToNext(): void {
    const isLastItem = this.currentIndex === this.items.length - 1;    
    this.currentIndex = isLastItem ? 0 : this.currentIndex + 1;    
  }

  goToPrevious(): void {
    const isFirstItem = this.currentIndex === 0;
    this.currentIndex = isFirstItem ? this.items.length - 1 : this.currentIndex - 1;
  }
}
