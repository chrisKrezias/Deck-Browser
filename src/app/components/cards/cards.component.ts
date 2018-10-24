import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CARDS } from '../../deck';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = CARDS;
  selectedCard: any;
  selectedCardName: string;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.cards.map(card => {
      this.httpClient
      .get(`http://52.57.88.137/api/card_data/${card.name}`)
      .subscribe((data: any) => {
        card.card_type = data.data.card_type;
        card.property = data.data.property;
        card.text = data.data.text;
      });
    });

    this.selectedCard = this.cards[0];
    this.selectedCardName = this.cards[0].name;
  }

  onSelect(card: any): void {
    this.selectedCard = card;
    this.selectedCardName = card.name;
  }

}
