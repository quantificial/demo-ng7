import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  textArea: String = '';

  toggle: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.textArea = 'test';
    this.toggle = !this.toggle;
    console.log('click');
  }

}
