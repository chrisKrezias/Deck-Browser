import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards/cards.service';
import { CARDS } from '../../deck';

@Component({
  selector: 'app-cards',
  providers: [CardsService],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  cards = CARDS;
  selectedCard: any;
  selectedCardName: string;
  error: any;
  constructor(private cardsService: CardsService) { }
  ngOnInit() {
    this.cards.map(card => {
      this.cardsService.getCard(card)
      .subscribe((data: any) => {
        card.card_type = data.data.card_type;
        card.property = data.data.property;
        card.text = data.data.text;
      },
      error => this.error = error);
    });

    this.selectedCard = this.cards[0];
    this.selectedCardName = this.cards[0].name;
  }

  onSelect(card: any): void {
    this.selectedCard = card;
    this.selectedCardName = card.name;
  }

}
