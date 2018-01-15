import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { NewHeroComponent } from './new-hero.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Fantasy War Tactics R Helper';
  instructions = 'Click a hero image to add to party. Sort army list with dropdown buttons.';
  ETH = 'Donate ETH: 0xE3f8c25C959aFc77DDcdbD0b3E83466cc1702b8e';

  heroes: Hero[];
  masterHeroList: Hero[];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService){}
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.masterHeroList = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }


  showDetails(clickedHero: Hero) {
    this.selectedHero = clickedHero;
  }
  finishedEditing() {
    this.selectedHero = null;
  }
  addHero(newHeroFromChild: Hero) {
    this.masterHeroList.push(newHeroFromChild);
  }
}
