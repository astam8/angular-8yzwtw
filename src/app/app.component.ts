import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  
  diseaseFrequency: number = 0;
  truePositives: number = 1;
  trueNegatives: number = 1;
  options: Options = {
    floor: 0,
    ceil: 1,
    step: 0.001
  };

  red = Math.round(this.diseaseFrequency * this.truePositives * 1000);
  orange = Math.round(this.diseaseFrequency * (1 - this.truePositives) * 1000);
  cyan = Math.round((1 - this.diseaseFrequency) * (1 - this.trueNegatives) * 1000);
  green = 1000 - this.red - this.orange - this.cyan;
  show = [1, 1, 1, 1];

  public onChange() {
    this.red = Math.round(this.diseaseFrequency * this.truePositives * 1000);
    this.orange = Math.round(this.diseaseFrequency * (1 - this.truePositives) * 1000);
    this.cyan = Math.round((1 - this.diseaseFrequency) * (1 - this.trueNegatives) * 1000);
    this.green = 1000 - this.red - this.orange - this.cyan;
  }

  public showAll() {
    this.show = [1, 1, 1, 1];
  }

  public showDisease() {
    this.show = [1, 1, 0, 0];
  }

  public showPositive() {
    this.show = [1, 0, 1, 0];
  }

  public showNegative() {
    this.show = [0, 1, 0, 1];
  }
}
