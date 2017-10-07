import { Component, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.sass']
})
export class NewHeroComponent {
  @Output() newHeroSender = new EventEmitter();
  addClicked(name: string, property: string, type: string, terr1: string, imgurl: string, ally1: string, ally2: string, ally3: string, id: number) {
    var newHeroToAdd: Hero = new Hero(name, property, type, terr1, imgurl, ally1, ally2, ally3, id);
    this.newHeroSender.emit(newHeroToAdd);
  }
}
