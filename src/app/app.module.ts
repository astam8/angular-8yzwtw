import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { DiseaseBoxComponent } from './disease-box/disease-box.component';
import { TreeDiagramComponent } from './tree-diagram/tree-diagram.component';
import { ConditionalProbabilitiesComponent } from './conditional-probabilities/conditional-probabilities.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng5SliderModule, MatSliderModule ],
  declarations: [ AppComponent, DiseaseBoxComponent, TreeDiagramComponent, ConditionalProbabilitiesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
