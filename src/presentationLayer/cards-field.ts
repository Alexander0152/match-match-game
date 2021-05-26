import BaseCardComponent from './base-card-component';
import Card from './card';

const SHOW_TIME = 15;
export default class CardsField extends BaseCardComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));

    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
