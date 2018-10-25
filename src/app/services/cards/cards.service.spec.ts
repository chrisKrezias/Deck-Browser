import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CardsService } from './cards.service';
import { asyncData, asyncError } from '../../../../testing/async-observable-helpers';

describe('CardsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let cardsService: CardsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardsService],
      imports: [HttpClientModule]
    });
  });

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cardsService = new CardsService(<any>httpClientSpy);
  });

  it('should return expected cards (HttpClient called once)', () => {
    const card = { name: 'Infernoid Antra' };
    const expectedCard: any = {
      status: 'success',
      data: {
        name: 'Infernoid Antra',
        // tslint:disable-next-line:max-line-length
        text: 'Cannot be Normal Summoned/Set. Must be Special Summoned (from your hand) by banishing 1 \'Infernoid\' monster from your hand or Graveyard, while the total Levels and Ranks of all Effect Monsters you control are 8 or lower, and cannot be Special Summoned by other ways. Once per turn: You can target 1 face-up card your opponent controls; return it to the hand. Once per turn, during your opponent\'s turn: You can Tribute 1 monster, then target 1 card in your opponent\'s Graveyard; banish it (this is a Quick Effect).',
        card_type: 'monster',
        type: 'Fiend / Effect',
        family: 'fire',
        atk: 0,
        def: 2000,
        level: 2,
        property: null
      }
    };

    httpClientSpy.get.and.returnValue(asyncData(expectedCard));

    cardsService
      .getCard(card)
      .subscribe(
        cards => expect(cards).toEqual(expectedCard, 'expected card'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const card = { name: 'CardName' };
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    cardsService
      .getCard(card)
      .subscribe(
        cards => fail('expected an error, not cards'),
        error => expect(error.message)
      );
  });

  it('should be created', inject([CardsService], (service: CardsService) => {
    expect(service).toBeTruthy();
  }));
});
