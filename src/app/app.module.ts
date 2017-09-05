import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';
import { HeroComponent } from './hero.component';
import { EditHeroComponent } from './edit-hero.component';
import { NewHeroComponent } from './new-hero.component';
import { PropertyPipe } from './property.pipe';
import { TypePipe } from './type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroComponent,
    EditHeroComponent,
    NewHeroComponent,
    PropertyPipe,
    TypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
