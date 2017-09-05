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
    new Hero(1, "Momo","rock","Attack"),
    new Hero(2, "Mu","paper","Balance"),
    new Hero(3, "Carrot","paper","Attack"),
    new Hero(4, "Deborah","scissors","AreaAttack"),
    new Hero(5, "Kai","rock","Balance"),
    new Hero(6, "Alfred","rock","AreaAttack"),
    new Hero(7, "Lance","scissors","Defense"),
    new Hero(8, "Mas","paper","Support"),
    new Hero(9, "Ian","rock","Balance"),
    new Hero(10, "Sonic Boom","scissor","Balance"),
    new Hero(11, "Sraka","scissor","Attack"),
    new Hero(12, "Jack","rock","Defense"),
    new Hero(13, "Poni","scissor","Balance"),
    new Hero(14, "Rage","rock","Attack"),
    new Hero(15, "Serendi","rock","Balance"),
    new Hero(16, "Chris","paper","Defense"),
    new Hero(17, "Dolores","paper","Balance"),
    new Hero(18, "Jenny","paper","AreaAttack"),
    new Hero(19, "Gillan","rock","Support"),
    new Hero(20, "Jin","scissor","Attack"),
    new Hero(21, "Lily","paper","Attack"),
    new Hero(22, "Raboff","paper","Defense"),
    new Hero(23, "Dominique","rock","Attack"),
    new Hero(24, "Frankenstein","scissor","Attack"),
    new Hero(25, "Raskreia","scissor","AreaAttack"),
    new Hero(26, "Cleo","paper","Balance"),
    new Hero(27, "Valkyrie","paper","Defense"),
    new Hero(28, "Bearman","scissor","Defense"),
    new Hero(29, "Moa","paper","AreaAttack"),
    new Hero(30, "Lilid","rock","Defense"),
    new Hero(31, "Alex","paper","Balance"),
    new Hero(32, "Kitty","rock","AreaAttack"),
    new Hero(33, "Persona","rock","Balance"),
    new Hero(34, "Henry","rock","Attack"),
    new Hero(35, "Tao","scissor","Attack"),
    new Hero(36, "Shark","scissor","Balance"),
    new Hero(37, "Muang","scissor","AreaAttack"),
    new Hero(38, "Spooky","rock","Support"),
    new Hero(39, "Shu- Shu","rock","Support"),
    new Hero(40, "Banshee","scissor","Balance"),
    new Hero(41, "Unknown","rock","Attack"),
    new Hero(42, "Chenny","scissor","Balance"),
    new Hero(43, "Krut","rock","Attack"),
    new Hero(44, "Lena","scissor","Balance"),
    new Hero(45, "Nox","paper","Attack"),
    new Hero(46, "Zero","rock","Balance"),
    new Hero(47, "Nirvana","paper","Support"),
    new Hero(48, "Fruel","scissor","Attack"),
    new Hero(49, "Lucas","paper","Balance"),
    new Hero(50, "Celestial","paper","Support"),
    new Hero(51, "Ragna","scissor","Attack"),
    new Hero(52, "Noel","rock","Attack"),
    new Hero(53, "Rachel","paper","AreaAttack"),
    new Hero(54, "Elektra","scissor","Support"),
    new Hero(55, "Belle","scissor","Support"),
    new Hero(56, "Phantom","paper","Balance"),
    new Hero(57, "Evan","scissor","AreaAttack"),
    new Hero(58, "Mercedes","rock","Attack"),
    new Hero(59, "Deimos","scissor","Defense"),
    new Hero(60, "Angela","paper","Balance"),
    new Hero(61, "Reina","scissor","Balance"),
    new Hero(62, "Luminous","scissor","Support"),
    new Hero(63, "Aran","rock","Balance"),
    new Hero(64, "Cat Sidhe","rock","Attack"),
    new Hero(65, "Sephina","scissor","AreaAttack"),
    new Hero(66, "Thanatos","rock","Balance"),
    new Hero(67, "Lee","scissor","Attack"),
    new Hero(68, "Azrael","paper","Attack"),
    new Hero(69, "Klein","paper","AreaAttack"),
    new Hero(70, "Sione","scissor","Attack"),
    new Hero(71, "Ildo","paper","Defense"),
    new Hero(72, "Hongyeom","rock","AreaAttack"),
    new Hero(73, "Sol Badguy","rock","Balance"),
    new Hero(74, "Yeka","rock","Balance"),
    new Hero(75, "Taehwa","scissor","Balance"),
    new Hero(76, "Camelia","paper","Support"),
    new Hero(77, "Ramlethal Valentine","scissor","AreaAttack"),
    new Hero(78, "May","scissor","Attack")
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
