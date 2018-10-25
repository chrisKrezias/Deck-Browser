import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class CardsService {

  constructor(private http: HttpClient) { }

  getCard(card: any) {
    return this.http.get(`http://52.57.88.137/api/card_data/${card.name}`);
  }
}
