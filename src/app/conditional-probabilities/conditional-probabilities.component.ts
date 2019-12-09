import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-conditional-probabilities',
  templateUrl: './conditional-probabilities.component.html',
  styleUrls: ['./conditional-probabilities.component.scss']
})
export class ConditionalProbabilitiesComponent implements OnInit {
  math = Math;
  number = Number

  @Input() diseaseFrequency = 0;
  @Input() truePositives = 1;
  @Input() trueNegatives = 1;

  red = 0;
  orange = 0;
  cyan = 0;
  green = 1;
  diseaseGivenPositive = NaN;
  diseaseGivenNegative = 0;
  healthyGivenPositive = NaN;
  healthyGivenNegative = 1;

  ngOnChanges() {
    this.red = Math.round(this.diseaseFrequency * this.truePositives * 1000) / 1000;
    this.orange = Math.round(this.diseaseFrequency * (1 - this.truePositives) * 1000) / 1000;
    this.cyan = Math.round((1 - this.diseaseFrequency) * (1 - this.trueNegatives) * 1000) / 1000;
    this.green = Math.round((1 - this.red - this.orange - this.cyan) * 1000) / 1000;

    this.diseaseGivenPositive = Math.round((this.red / (this.red + this.cyan)) * 1000) / 1000;
    this.diseaseGivenNegative = Math.round((this.orange / (this.orange + this.green)) * 1000) / 1000;
    this.healthyGivenPositive = Math.round((this.cyan / (this.red + this.cyan)) * 1000) / 1000;
    this.healthyGivenNegative = Math.round((this.green / (this.orange + this.green)) * 1000) / 1000;
  }

  constructor() { }

  ngOnInit() {
  }

}