import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroListComponent } from './hero-list.component';
import { NewHeroComponent } from './new-hero.component';
import { EditHeroComponent } from './edit-hero.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Fantasy War Tactics Helper';

  public masterHeroList: Hero[] = [
    new Hero(1, "Momo","Rock","Attack"),
    new Hero(2, "Mu","Paper","Balance"),
    new Hero(3, "Carrot","Paper","Attack"),
    new Hero(4, "Deborah","Scissorss","AreaAttack"),
    new Hero(5, "Kai","Rock","Balance"),
    new Hero(6, "Alfred","Rock","AreaAttack"),
    new Hero(7, "Lance","Scissorss","Defense"),
    new Hero(8, "Mas","Paper","Support"),
    new Hero(9, "Ian","Rock","Balance"),
    new Hero(10, "Sonic Boom","Scissors","Balance"),
    new Hero(11, "Sraka","Scissors","Attack"),
    new Hero(12, "Jack","Rock","Defense"),
    new Hero(13, "Poni","Scissors","Balance"),
    new Hero(14, "Rage","Rock","Attack"),
    new Hero(15, "Serendi","Rock","Balance"),
    new Hero(16, "Chris","Paper","Defense"),
    new Hero(17, "Dolores","Paper","Balance"),
    new Hero(18, "Jenny","Paper","AreaAttack"),
    new Hero(19, "Gillan","Rock","Support"),
    new Hero(20, "Jin","Scissors","Attack"),
    new Hero(21, "Lily","Paper","Attack"),
    new Hero(22, "Raboff","Paper","Defense"),
    new Hero(23, "Dominique","Rock","Attack"),
    new Hero(24, "Frankenstein","Scissors","Attack"),
    new Hero(25, "Raskreia","Scissors","AreaAttack"),
    new Hero(26, "Cleo","Paper","Balance"),
    new Hero(27, "Valkyrie","Paper","Defense"),
    new Hero(28, "Bearman","Scissors","Defense"),
    new Hero(29, "Moa","Paper","AreaAttack"),
    new Hero(30, "Lilid","Rock","Defense"),
    new Hero(31, "Alex","Paper","Balance"),
    new Hero(32, "Kitty","Rock","AreaAttack"),
    new Hero(33, "Persona","Rock","Balance"),
    new Hero(34, "Henry","Rock","Attack"),
    new Hero(35, "Tao","Scissors","Attack"),
    new Hero(36, "Shark","Scissors","Balance"),
    new Hero(37, "Muang","Scissors","AreaAttack"),
    new Hero(38, "Spooky","Rock","Support"),
    new Hero(39, "Shu- Shu","Rock","Support"),
    new Hero(40, "Banshee","Scissors","Balance"),
    new Hero(41, "Unknown","Rock","Attack"),
    new Hero(42, "Chenny","Scissors","Balance"),
    new Hero(43, "Krut","Rock","Attack"),
    new Hero(44, "Lena","Scissors","Balance"),
    new Hero(45, "Nox","Paper","Attack"),
    new Hero(46, "Zero","Rock","Balance"),
    new Hero(47, "Nirvana","Paper","Support"),
    new Hero(48, "Fruel","Scissors","Attack"),
    new Hero(49, "Lucas","Paper","Balance"),
    new Hero(50, "Celestial","Paper","Support"),
    new Hero(51, "Ragna","Scissors","Attack"),
    new Hero(52, "Noel","Rock","Attack"),
    new Hero(53, "Rachel","Paper","AreaAttack"),
    new Hero(54, "Elektra","Scissors","Support"),
    new Hero(55, "Belle","Scissors","Support"),
    new Hero(56, "Phantom","Paper","Balance"),
    new Hero(57, "Evan","Scissors","AreaAttack"),
    new Hero(58, "Mercedes","Rock","Attack"),
    new Hero(59, "Deimos","Scissors","Defense"),
    new Hero(60, "Angela","Paper","Balance"),
    new Hero(61, "Reina","Scissors","Balance"),
    new Hero(62, "Luminous","Scissors","Support"),
    new Hero(63, "Aran","Rock","Balance"),
    new Hero(64, "Cat Sidhe","Rock","Attack"),
    new Hero(65, "Sephina","Scissors","AreaAttack"),
    new Hero(66, "Thanatos","Rock","Balance"),
    new Hero(67, "Lee","Scissors","Attack"),
    new Hero(68, "Azrael","Paper","Attack"),
    new Hero(69, "Klein","Paper","AreaAttack"),
    new Hero(70, "Sione","Scissors","Attack"),
    new Hero(71, "Ildo","Paper","Defense"),
    new Hero(72, "Hongyeom","Rock","AreaAttack"),
    new Hero(73, "Sol Badguy","Rock","Balance"),
    new Hero(74, "Yeka","Rock","Balance"),
    new Hero(75, "Taehwa","Scissors","Balance"),
    new Hero(76, "Camelia","Paper","Support"),
    new Hero(77, "Ramlethal Valentine","Scissors","AreaAttack"),
    new Hero(78, "May","Scissors","Attack")
  ];
  selectedHero: Hero = null;
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
