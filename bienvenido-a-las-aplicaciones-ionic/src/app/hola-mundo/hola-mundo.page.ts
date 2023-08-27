import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.page.html',
  styleUrls: ['./hola-mundo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HolaMundoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
