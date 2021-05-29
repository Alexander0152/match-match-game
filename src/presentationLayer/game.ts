import delay from '../businessLayer/delay';
import BaseCardComponent from './base-card-component';
import Card from './card';
import CardsField from './cards-field';
import ModalStartGame from './modalFinishGame';

const FLIP_DELAY = 1000;

export default class Game extends BaseCardComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private cardsList: HTMLCollection;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.cardsList = document.getElementsByClassName('card-container');
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.element.classList.add('wrong_card');
      card.element.classList.add('wrong_card');
      await delay(FLIP_DELAY);

      this.activeCard.element.classList.remove('wrong_card');
      card.element.classList.remove('wrong_card');
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.activeCard.element.classList.add('right_card');
      card.element.classList.add('right_card');

      await delay(FLIP_DELAY);
      this.activeCard.element.classList.remove('right_card');
      card.element.classList.remove('right_card');
    }
    this.activeCard = undefined;
    this.isAnimation = false;

    this.checkFinish();
  }

  checkFinish() {
    for (let i = 0; i < this.cardsList.length; i += 1) {
      if (this.cardsList[i].classList.contains('flipped')) {
        return;
      }
    }
    const content = document.querySelector('#content');
    new ModalStartGame(content).show();
  }
}
