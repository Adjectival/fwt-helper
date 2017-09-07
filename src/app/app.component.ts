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
  title = 'Fantasy War Tactics R Helper';
  instructions = 'Please click a hero to add to party. Sort army list with buttons.';

  public masterHeroList: Hero[] = [
new Hero("Alex", "Paper", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/f/f3/Illust_Alex_01.png/revision/latest/scale-to-width-down/270?cb=20160123020948", 31),
new Hero("Alfred", "Rock", "AreaAttack", "https://vignette2.wikia.nocookie.net/fwt/images/8/87/Illust_Alfred_01.png/revision/latest/scale-to-width-down/270?cb=20160123020949", 6),
new Hero("Angela", "Paper", "Balance", "https://vignette1.wikia.nocookie.net/fwt/images/2/25/Illust_Angela_01.png/revision/latest/scale-to-width-down/270?cb=20160123020949", 60),
new Hero("Aran", "Rock", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/a/ab/Illust_Aran_01.png/revision/latest/scale-to-width-down/270?cb=20170607082252", 63),
new Hero("Azrael", "Paper", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/2/2c/Illust_Azrael_01.png/revision/latest/scale-to-width-down/270?cb=20160123020949", 68),
new Hero("Banshee", "Scissors", "Balance", "https://vignette2.wikia.nocookie.net/fwt/images/3/31/Illust_Banshee_01.png/revision/latest/scale-to-width-down/270?cb=20160909023149", 40),
new Hero("Bearman", "Scissors", "Defense", "https://vignette3.wikia.nocookie.net/fwt/images/7/75/Illust_Bearman_01.png/revision/latest/scale-to-width-down/270?cb=20160123020949", 28),
new Hero("Belle", "Scissors", "Support", "https://vignette.wikia.nocookie.net/fwt/images/d/d6/Illust_Belle_01.png/revision/latest/scale-to-width-down/270?cb=20160123020950", 55),
new Hero("Camelia", "Paper", "Support", "https://vignette.wikia.nocookie.net/fwt/images/5/56/Illust_Camelia_01.png/revision/latest/scale-to-width-down/270?cb=20170904193912", 76),
new Hero("Carrot", "Paper", "Attack", "https://vignette2.wikia.nocookie.net/fwt/images/5/5f/Illust_Carrot_01.png/revision/latest/scale-to-width-down/270?cb=20160123020950", 3),
new Hero("Cat_Sidhe", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/3/3b/Illust_Cat_Sidhe_01.png/revision/latest/scale-to-width-down/270?cb=20170608030737", 64),
new Hero("Celestial", "Paper", "Support", "https://vignette2.wikia.nocookie.net/fwt/images/c/c7/Illust_Celestial_01.png/revision/latest/scale-to-width-down/270?cb=20170608024630", 50),
new Hero("Chenny", "Scissors", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/0/08/Illust_Chenny_01.png/revision/latest/scale-to-width-down/270?cb=20160123020950", 42),
new Hero("Chris", "Paper", "Defense", "https://vignette.wikia.nocookie.net/fwt/images/b/bf/Illust_Chris_01.png/revision/latest/scale-to-width-down/270?cb=20160123020951", 16),
new Hero("Cleo", "Paper", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/5/51/Illust_Cleo_01.png/revision/latest/scale-to-width-down/270?cb=20160123020951", 26),
new Hero("Deborah", "Scissorss", "AreaAttack", "https://vignette.wikia.nocookie.net/fwt/images/3/3a/Illust_Deborah_01.png/revision/latest/scale-to-width-down/270?cb=20160123020951", 4),
new Hero("Deimos", "Scissors", "Defense", "https://vignette1.wikia.nocookie.net/fwt/images/0/05/Illust_Deimos_01.png/revision/latest/scale-to-width-down/270?cb=20160907132146", 59),
new Hero("Dolores", "Paper", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/3/34/Illust_Dolores_01.png/revision/latest/scale-to-width-down/270?cb=20160123020952", 17),
new Hero("Dominique", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/b/b8/Illust_Dominique_01.png/revision/latest/scale-to-width-down/270?cb=20160123020952", 23),
new Hero("Elektra", "Scissors", "Support", "https://vignette2.wikia.nocookie.net/fwt/images/6/6c/Illust_Elektra_01.png/revision/latest/scale-to-width-down/270?cb=20160123020952", 54),
new Hero("Evan", "Scissors", "AreaAttack", "https://vignette2.wikia.nocookie.net/fwt/images/8/89/Illust_Evan_01.png/revision/latest/scale-to-width-down/270?cb=20161224063103", 57),
new Hero("Frankenstein", "Scissors", "Attack", "https://vignette3.wikia.nocookie.net/fwt/images/0/02/Illust_Frankenstein_01.png/revision/latest/scale-to-width-down/270?cb=20160414023156", 24),
new Hero("Fruel", "Scissors", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/9/90/Illust_Fruel_01.png/revision/latest/scale-to-width-down/270?cb=20160123020952", 48),
new Hero("Gillan", "Rock", "Support", "https://vignette1.wikia.nocookie.net/fwt/images/9/9e/Illust_Gillan_01.png/revision/latest/scale-to-width-down/270?cb=20160123020953", 19),
new Hero("Henry", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/4/43/Illust_Henry_01.png/revision/latest/scale-to-width-down/270?cb=20160123020953", 34),
new Hero("Hongyeom", "Rock", "AreaAttack", "../assets/hongyeom.png", 72),
new Hero("Ian", "Rock", "Balance", "https://vignette3.wikia.nocookie.net/fwt/images/1/1e/Illust_Ian_01.png/revision/latest/scale-to-width-down/270?cb=20160123020954", 9),
new Hero("Ildo", "Paper", "Defense", "https://vignette1.wikia.nocookie.net/fwt/images/7/76/Illust_Ildo_01.png/revision/latest/scale-to-width-down/270?cb=20170831020442", 71),
new Hero("Jack", "Rock", "Defense", "https://vignette.wikia.nocookie.net/fwt/images/3/37/Illust_Jack_01.png/revision/latest/scale-to-width-down/270?cb=20160123020954", 12),
new Hero("Jenny", "Paper", "AreaAttack", "https://vignette3.wikia.nocookie.net/fwt/images/4/45/Illust_Jenny_01.png/revision/latest/scale-to-width-down/270?cb=20160123021119", 18),
new Hero("Jin", "Scissors", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/0/08/Illust_Jin_01.png/revision/latest/scale-to-width-down/270?cb=20160123021120", 20),
new Hero("Kai", "Rock", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/1/1e/Illust_Kai_01.png/revision/latest/scale-to-width-down/270?cb=20160123021120", 5),
new Hero("Kitty", "Rock", "AreaAttack", "https://vignette2.wikia.nocookie.net/fwt/images/8/87/Illust_Kitty_01.png/revision/latest/scale-to-width-down/270?cb=20160123021121", 32),
new Hero("Klein", "Paper", "AreaAttack", "https://vignette4.wikia.nocookie.net/fwt/images/8/85/Illust_Klein_01.png/revision/latest/scale-to-width-down/270?cb=20160123021121", 69),
new Hero("Krut", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/f/ff/Illust_Krut_01.png/revision/latest/scale-to-width-down/270?cb=20160512023818", 43),
new Hero("Ky_Kiske", "Paper", "Balance", "../assets/ky_kiske.jpg", 79),
new Hero("Lance", "Scissorss", "Defense", "https://vignette1.wikia.nocookie.net/fwt/images/8/87/Illust_Lance_01.png/revision/latest/scale-to-width-down/270?cb=20160123021121", 7),
new Hero("Lee", "Scissors", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/d/de/Illust_Lee_01.png/revision/latest/scale-to-width-down/270?cb=20160123021121", 67),
new Hero("Lena", "Scissors", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/a/ac/Illust_Lena_01.png/revision/latest/scale-to-width-down/270?cb=20160123021122", 44),
new Hero("Lilid", "Rock", "Defense", "https://vignette.wikia.nocookie.net/fwt/images/8/89/Illust_Lilid_01.png/revision/latest/scale-to-width-down/270?cb=20160123021122", 30),
new Hero("Lily", "Paper", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/6/6d/Illust_Lily_01.png/revision/latest/scale-to-width-down/270?cb=20160123021122", 21),
new Hero("Lucas", "Paper", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/f/f6/Illust_Lucas_01.png/revision/latest/scale-to-width-down/270?cb=20161018122320", 49),
new Hero("Luminous", "Scissors", "Support", "https://vignette.wikia.nocookie.net/fwt/images/1/18/Illust_Luminous_01.png/revision/latest/scale-to-width-down/270?cb=20170607080918", 62),
new Hero("Mas", "Paper", "Support", "https://vignette3.wikia.nocookie.net/fwt/images/c/c5/Illust_Mas_01.png/revision/latest/scale-to-width-down/270?cb=20160123021124", 8),
new Hero("May", "Scissors", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/e/e4/Illust_May_01.png/revision/latest/scale-to-width-down/270?cb=20170830132413", 78),
new Hero("Mercedes", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/9/9a/Illust_Mercedes_01.png/revision/latest/scale-to-width-down/270?cb=20161222225230", 58),
new Hero("Moa", "Paper", "AreaAttack", "https://vignette.wikia.nocookie.net/fwt/images/b/bc/Illust_Moa_01.png/revision/latest/scale-to-width-down/270?cb=20160123021125", 29),
new Hero("Momo", "Rock", "Attack", "https://vignette4.wikia.nocookie.net/fwt/images/4/40/Illust_Momo_01.png/revision/latest/scale-to-width-down/270?cb=20160123021125", 1),
new Hero("Mu", "Paper", "Balance", "https://vignette1.wikia.nocookie.net/fwt/images/8/83/Illust_Mu_01.png/revision/latest/scale-to-width-down/270?cb=20160123021125", 2),
new Hero("Muang", "Scissors", "AreaAttack", "https://vignette.wikia.nocookie.net/fwt/images/5/52/Illust_Muang_01.png/revision/latest/scale-to-width-down/270?cb=20160123021125", 37),
new Hero("Nirvana", "Paper", "Support", "https://vignette.wikia.nocookie.net/fwt/images/8/8a/Illust_Nirvana_01.png/revision/latest/scale-to-width-down/270?cb=20160123021126", 47),
new Hero("Noel", "Rock", "Attack", "https://vignette2.wikia.nocookie.net/fwt/images/e/ec/Illust_Noel_01.png/revision/latest/scale-to-width-down/270?cb=20161224044717", 52),
new Hero("Nox", "Paper", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/3/38/Illust_Nox_01.png/revision/latest/scale-to-width-down/270?cb=20160123021255", 45),
new Hero("Persona", "Rock", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/b/bd/Illust_Persona_01.png/revision/latest/scale-to-width-down/270?cb=20160123021255", 33),
new Hero("Phantom", "Paper", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/c/c3/Illust_Phantom_01.png/revision/latest/scale-to-width-down/270?cb=20161224063241", 56),
new Hero("Poni", "Scissors", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/7/77/Illust_Poni_01.png/revision/latest/scale-to-width-down/270?cb=20160123021255", 13),
new Hero("Raboff", "Paper", "Defense", "https://vignette1.wikia.nocookie.net/fwt/images/a/aa/Illust_Raboff_01.png/revision/latest/scale-to-width-down/270?cb=20160123021256", 22),
new Hero("Rachel", "Paper", "AreaAttack", "https://vignette.wikia.nocookie.net/fwt/images/d/d4/Illust_Rachel_Alucard_01.png/revision/latest/scale-to-width-down/270?cb=20161224050029", 53),
new Hero("Rage", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/7/72/Illust_Rage_01.png/revision/latest/scale-to-width-down/270?cb=20160123021256", 14),
new Hero("Ragna", "Scissors", "Attack", "https://vignette1.wikia.nocookie.net/fwt/images/9/93/Illust_Ragna_01.png/revision/latest/scale-to-width-down/270?cb=20161224045615", 51),
new Hero("Ramlethal", "Scissors", "AreaAttack", "../assets/ramlethal.jpg", 77),
new Hero("Raskreia", "Scissors", "AreaAttack", "https://vignette.wikia.nocookie.net/fwt/images/d/dd/Illust_Raskreia_01.png/revision/latest/scale-to-width-down/270?cb=20160425033929", 25),
new Hero("Reina", "Scissors", "Balance", "https://vignette4.wikia.nocookie.net/fwt/images/d/d7/Illust_Reina_01.png/revision/latest/scale-to-width-down/270?cb=20160730012159", 61),
new Hero("Serendi", "Rock", "Balance", "https://vignette2.wikia.nocookie.net/fwt/images/d/d4/Illust_Serendi_01.png/revision/latest/scale-to-width-down/270?cb=20160123021257", 15),
new Hero("Serphina", "Scissors", "AreaAttack", "../assets/serphina.png", 65),
new Hero("Shark", "Scissors", "Balance", "https://vignette2.wikia.nocookie.net/fwt/images/c/c0/Illust_Shark_01.png/revision/latest/scale-to-width-down/270?cb=20160123021257", 36),
new Hero("Shu-Shu", "Rock", "Support", "https://vignette3.wikia.nocookie.net/fwt/images/5/5e/Illust_Shu-Shu_01.png/revision/latest/scale-to-width-down/270?cb=20160123021257", 39),
new Hero("Sione", "Scissors", "Attack", "https://vignette4.wikia.nocookie.net/fwt/images/b/b2/Illust_Sione_01.png/revision/latest/scale-to-width-down/270?cb=20160123021258", 70),
new Hero("Sol_Badguy", "Rock", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/f/f4/Illust_Sol_Badguy_01.png/revision/latest/scale-to-width-down/270?cb=20170830052100", 73),
new Hero("Sonic Boom", "Scissors", "Balance", "https://vignette.wikia.nocookie.net/fwt/images/1/11/Illust_Sonic_Boom_01.png/revision/latest/scale-to-width-down/270?cb=20160123021258", 10),
new Hero("Spooky", "Rock", "Support", "https://vignette.wikia.nocookie.net/fwt/images/9/99/Illust_Spooky_01.png/revision/latest/scale-to-width-down/270?cb=20160911003702", 38),
new Hero("Sraka", "Scissors", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/8/8a/Illust_Sraka_01.png/revision/latest/scale-to-width-down/270?cb=20160123021258", 11),
new Hero("Taehwa", "Scissors", "Balance", "https://vignette2.wikia.nocookie.net/fwt/images/5/5e/Illust_Taehwa_01.png/revision/latest/scale-to-width-down/270?cb=20170831020127", 75),
new Hero("Tao", "Scissors", "Attack", "https://vignette3.wikia.nocookie.net/fwt/images/0/00/Illust_Tao_01.png/revision/latest/scale-to-width-down/270?cb=20160123021259", 35),
new Hero("Thanatos", "Rock", "Balance", "../assets/thanatos.png", 66),
new Hero("Unknown", "Rock", "Attack", "https://vignette.wikia.nocookie.net/fwt/images/9/93/Illust_Unknown_01.png/revision/latest/scale-to-width-down/270?cb=20160123021259", 41),
new Hero("Valkyrie", "Paper", "Defense", "https://vignette3.wikia.nocookie.net/fwt/images/4/4f/Illust_Valkyrie_01.png/revision/latest/scale-to-width-down/270?cb=20160609012917", 27),
new Hero("Yeka", "Rock", "Balance", "../assets/yeka.jpg", 74),
new Hero("Zero", "Rock", "Balance", "https://vignette2.wikia.nocookie.net/fwt/images/4/48/Illust_Zero_01.png/revision/latest/scale-to-width-down/270?cb=20160123021300", 46)
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
