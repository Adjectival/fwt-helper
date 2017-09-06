import { Component, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.sass']
})
export class NewHeroComponent {
  @Output() newHeroSender = new EventEmitter();
  addClicked(name: string, property: string, type: string, imgurl: string, id: number) {
    var newHeroToAdd: Hero = new Hero(name, property, type, imgurl, id);
    this.newHeroSender.emit(newHeroToAdd);
  }
}
