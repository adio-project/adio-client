import { Component, ElementRef, ViewChild } from '@angular/core';
import { Renderer } from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('joinGame') joinGame!: ElementRef;

  @ViewChild('loginForm') loginForm!: ElementRef;

  constructor() {}

}
