import { Component, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.sass']
})
export class NewHeroComponent {
  @Output() newHeroSender = new EventEmitter();
  addClicked(id: number, name: string, property: string, type: string) {
    var newHeroToAdd: Hero = new Hero(id, name, property, type);
    this.newHeroSender.emit(newHeroToAdd);
  }
}


