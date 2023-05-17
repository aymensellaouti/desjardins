import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  // Créer un event
  @Output() sendDataToDad = new EventEmitter<string>();
  ngOnInit(): void {
    console.log('init');
  }
  constructor() {
    console.log('constructor');
  }
  @Input() messageDePapa = '';
  sendMessage() {
    // Emettre l'event avec les données à l'intérieur
    this.sendDataToDad.emit('cc papa');
  }

}
