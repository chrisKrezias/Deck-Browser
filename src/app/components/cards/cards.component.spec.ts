import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { CardInfoComponent } from '../card-info/card-info.component';
import { HttpClientModule } from '@angular/common/http';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponent, CardInfoComponent],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onSelect() should populate #selectedCard and #selectedCardName', () => {
    const app = fixture.debugElement.componentInstance;
    const card = {name: 'CardName'};
    app.onSelect(card);
    expect(app.selectedCard).toBe(card, 'gets the card');
    expect(app.selectedCardName).toBe('CardName', 'gets the name of the card');
  });
});
