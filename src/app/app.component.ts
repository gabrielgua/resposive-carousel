import { Component } from '@angular/core';
import { CarouselItem } from './types/carouselItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel-example';

  items: CarouselItem[] = [
    {
      nome: 'God Of War Ragnarök', 
      nota: '9.5', 
      likes: 5.892,
      urlImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg?',
      descricao: 'Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo.'
    },
    {
      nome: 'God Of War', 
      nota: '9.6', 
      likes: 9.867,
      urlImage: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg?',
      descricao: 'Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.'
    },
    {
      nome: 'Bloodborne', 
      nota: '9.2', 
      likes: 10.907,
      urlImage: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg?', 
      descricao: 'Enfrente seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada com uma estranha doença endêmica que se espalha pelas ruas como fogo. Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver.'
    },
    {
      nome: 'The Last of Us Part II', 
      nota: '9.8', 
      likes: 8.456,
      urlImage: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg?',
      descricao: 'Cinco anos depois de uma jornada perigosa pelos Estados Unidos num cenário pós-pandêmico, Ellie e Joel se acomodaram em Jackson, Wyoming. A vida numa comunidade próspera de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados.'
    },
    {
      nome: "Marvel's Spider-Man: Miles Morales", 
      nota: '9.0', 
      likes: 3.240,
      urlImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg?',
      descricao: "Na mais nova aventura do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man.",
    },
  ]

  carouselWidth: number = 0;
  positionX: number = 0; // x position of the carousel component, updating this number moves the carousel
  gapBetweenItems: number = 16; // gap between items in the carousel in px
  currentIndex: number = 0;

  getInitialCarouselWidth(initialWidth: number) {
    this.updateCarouselWidth(initialWidth);    
  }

  updateCarouselWidth(width: number) {
    this.carouselWidth = width;
  }

  animate(): number {
    return this.positionX = this.carouselWidth * this.currentIndex + (this.gapBetweenItems * this.currentIndex);
  }

  goToNext(): void {
    const isLastItem = this.currentIndex === this.items.length - 1; 
    this.currentIndex = isLastItem ? 0 : this.currentIndex + 1;
  }

  goToPrevious(): void {
    const isFirstItem = this.currentIndex === 0;
    this.currentIndex = isFirstItem ? this.items.length - 1 : this.currentIndex - 1;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
