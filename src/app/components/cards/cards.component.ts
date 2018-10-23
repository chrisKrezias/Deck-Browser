import { Component, OnInit } from '@angular/core';
import { CARDS } from '../../deck';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = CARDS;
  selectedCard: any;

  constructor() {}

  ngOnInit() {}

  onSelect(card: any): void {
    this.selectedCard = card;
  }
}
