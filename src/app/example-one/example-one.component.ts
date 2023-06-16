import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselItem } from '../types/carouselItem';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent {

  @ViewChild('carousel') carousel!: ElementRef;

  items: CarouselItem[] = [
    {
      nome: 'God Of War Ragnarök', 
      nota: '9.5', 
      likes: 5.892,
      urlImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg?',
      urlVideo: '',
      descricao: 'Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo.'
    },
    {
      nome: 'God Of War', 
      nota: '9.6', 
      likes: 9.867,
      urlVideo: '',
      urlImage: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg?',
      descricao: 'Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.'
    },
    {
      nome: 'Bloodborne', 
      nota: '9.2', 
      likes: 10.907,
      urlVideo: '',
      urlImage: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg?', 
      descricao: 'Enfrente seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada com uma estranha doença endêmica que se espalha pelas ruas como fogo. Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver.'
    },
    {
      nome: 'The Last of Us Part II', 
      nota: '9.8', 
      likes: 8.456,
      urlVideo: '',
      urlImage: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg?',
      descricao: 'Cinco anos depois de uma jornada perigosa pelos Estados Unidos num cenário pós-pandêmico, Ellie e Joel se acomodaram em Jackson, Wyoming. A vida numa comunidade próspera de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados.'
    },
    {
      nome: "Marvel's Spider-Man: Miles Morales", 
      nota: '9.0', 
      likes: 3.240,
      urlVideo: '',
      urlImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg?',
      descricao: "Na mais nova aventura do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man.",
    },
  ]

  carouselWidth: number = 0;
  currentIndex: number = 0;
  autoPlay: boolean = false;
  autoPlayIntervalId: any;
  autoPlayIntervalAmount: number = 5000; //ms

  carouselWidthMap = new Map<number, number>;

  scroll: number = 0;

  

  ngOnInit(): void {
    // this.playAutoSlide();
  }

  resetCarouselScroll(): void {
    this.carousel.nativeElement.scrollLeft = 0;

  }

  populateMap(width: number) {
    this.items.forEach((item, index) => {
      this.carouselWidthMap.set(index, index * width);
    })

    
    this.updateCarouselWidth(width);    
  }

  getScroll(scroll: number): void {
    this.scroll = Math.floor(scroll);
  }

  handleScroll(): void {
    let scrollOffset = Math.floor(this.carousel.nativeElement.scrollLeft);
    for (let [index, width] of this.carouselWidthMap.entries()) {
      if (scrollOffset === width) this.currentIndex = index;
    }   
    
    this.resetAutoSlide();
  }


  getInitialCarouselWidth(initialWidth: number) {
    this.updateCarouselWidth(initialWidth);    
  }

  updateCarouselWidth(width: number) {
    this.carouselWidth = width;
  }

  scrollCarousel(amount: number): void {
    this.carousel.nativeElement.scrollLeft = amount;
  }

  scrollToIndex(index: number) {
    this.currentIndex = index;
    this.scrollCarousel(this.currentIndex * this.carouselWidth);
  }

  scrollToNext(): void {
    const isLastItem = this.currentIndex === this.items.length - 1; 
    this.currentIndex = isLastItem ? 0 : this.currentIndex + 1;
    this.scrollCarousel(this.currentIndex * this.carouselWidth);
  }

  scrollToPrevious(): void {
    const isFirstItem = this.currentIndex === 0; 
    this.currentIndex = isFirstItem ? this.items.length - 1 : this.currentIndex - 1;
    this.scrollCarousel(this.currentIndex * this.carouselWidth); 
  }
  

  resetAutoSlide(): void {
    clearInterval(this.autoPlayIntervalId);
    if (this.autoPlay) {
      this.autoPlayIntervalId = setInterval(() => {
        this.scrollToNext();
      }, this.autoPlayIntervalAmount)
    }
  }

  playAutoSlide(): void {
    this.autoPlay = true;
    this.resetAutoSlide();
  }

  pauseAutoSlide(): void {
    this.autoPlay = false;
    this.resetAutoSlide();
  }
}
