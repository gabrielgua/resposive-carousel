<<<<<<< HEAD
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
import { CarouselItem } from '../types/carouselItem';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
<<<<<<< HEAD
export class ExampleTwoComponent  {
=======
export class ExampleTwoComponent implements OnInit {
  
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43

  items: CarouselItem[] = [
    {
      nome: 'Dark Souls™: Remastered', 
      nota: '9.5', 
      likes: 5.892,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg?t=1682652141',
<<<<<<< HEAD
      urlVideo: 'https://www.youtube.com/embed/nzwnFYKNNdc'
=======
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
    },
    {
      nome: 'Red Dead Redemption 2', 
      nota: '9.6', 
      likes: 9.867,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009',
<<<<<<< HEAD
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'
=======
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
    },
    {
      nome: 'EA SPORTS™ FIFA 23', 
      nota: '9.2', 
      likes: 10.907,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg?t=1682117049', 
<<<<<<< HEAD
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'
=======
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
    },
    {
      nome: 'God of War', 
      nota: '9.8', 
      likes: 8.456,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420',
<<<<<<< HEAD
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'

=======
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
    },
    {
      nome: 'Sekiro™: Shadows Die Twice - GOTY Edition', 
      nota: '9.0', 
      likes: 3.240,
      urlImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg?t=1678991267',
<<<<<<< HEAD
      urlVideo: 'https://www.youtube.com/embed/SXvQ1nK4oxk'
    },
  ]

  item: CarouselItem = this.items[0];
  currentIndex: number = 0;
=======
    },
  ]

  


  carouselWidth: number = 0;
  carouselItemWidth: number = 0;
  currentIndex: number = 0;
  gapBetweenItems = 8;
  positionX: number = 0;

  ngOnInit(): void {
  }

  getCarouselWidth(initialWidth: number): void {
    this.carouselWidth = initialWidth;    
  }

  getCarouselItemWidth(initialWidth: number): void {
    this.carouselItemWidth = initialWidth;
  }

  animateForwards(): void {    
    this.positionX = (this.carouselItemWidth + this.gapBetweenItems);
  }
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43

  goToNext(): void {
    const isLastItem = this.currentIndex === this.items.length - 1;    
    this.currentIndex = isLastItem ? 0 : this.currentIndex + 1;    
<<<<<<< HEAD
=======
    this.animateForwards();

    setTimeout(() => {
      this.items.push(this.items.shift()!);
      this.positionX = 0;
    }, 250)
>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
  }

  goToPrevious(): void {
    const isFirstItem = this.currentIndex === 0;
    this.currentIndex = isFirstItem ? this.items.length - 1 : this.currentIndex - 1;
<<<<<<< HEAD
  }
=======
    this.animateForwards();
  }




>>>>>>> 652756ffad449af47ba48df818330234c6e85e43
}
