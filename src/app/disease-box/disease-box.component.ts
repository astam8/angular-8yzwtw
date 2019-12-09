import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-disease-box',
  templateUrl: './disease-box.component.html',
  styleUrls: ['./disease-box.component.scss']
})
export class DiseaseBoxComponent implements OnInit {

  @Input() red = 2500;
  @Input() orange = 2500;
  @Input() cyan = 2500;
  @Input() green = 2500;
  @Input() show = [1, 1, 1, 1];

  arr(n: number): any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit() {
  }
}