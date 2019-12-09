import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.scss']
})
export class TreeDiagramComponent implements OnInit {
  math = Math;

  @Input() diseaseFrequency = 0;
  @Input() truePositives = 1;
  @Input() trueNegatives = 1;

  constructor() { }

  ngOnInit() {
  }

  public truncate(x: number, digits: number) {
    if (digits % 1 !== 0) return NaN;
    return Math.round(x * Math.pow(10, digits)) / Math.pow(10, digits);
  }

}