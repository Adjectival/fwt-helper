import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NewHeroComponent } from './new-hero.component';
import { EditHeroComponent } from './edit-hero.component';
import { Hero } from './hero';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent {
  @Input() childHeroList: Hero[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = 'notDone';
  public selectedProperty: string = 'all';
  public selectedType: string = 'all';
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  propertyChange(optionFromMenu) {
    this.selectedProperty = optionFromMenu;
    console.log(this.selectedProperty);
  }
  typeChange(optionFromMenu) {
    this.selectedType = optionFromMenu;
    console.log(this.selectedType);
  }
  editButtonHasBeenClicked(heroToEdit: Hero) {
    this.clickSender.emit(heroToEdit);
  }


}
