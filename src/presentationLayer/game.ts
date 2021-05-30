import delay from '../businessLayer/delay';
import BaseCardComponent from './base-card-component';
import Card from './card';
import CardsField from './cards-field';
import ModalFinishGame from './modalFinishGame';
import Timer from './timer';

const FLIP_DELAY = 1000;

export default class Game extends BaseCardComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private cardsList: HTMLCollection;

  private timer: Timer;

  private amountOfComparisons: number = 0;

  private amountOfMistakes: number = 0;

  private difficulty: string;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.cardsList = document.getElementsByClassName('card-container');
  }

  newGame(images: string[], newTimer: Timer) {
    this.timer = newTimer;
    this.cardsField.clear();
    this.checkSettings();

    const cards = images
      .concat(images)
      .map((url) => new Card(url, this.difficulty))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  checkSettings() {
    const retrievedUser = localStorage.getItem('settings');
    const settings = JSON.parse(retrievedUser);

    if (settings !== null && settings.difficulty === 'hard') {
      this.difficulty = 'hard';
    }
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
      this.amountOfComparisons += 1;
      this.amountOfMistakes += 1;

      this.activeCard.element.classList.add('wrong_card');
      card.element.classList.add('wrong_card');
      await delay(FLIP_DELAY);

      this.activeCard.element.classList.remove('wrong_card');
      card.element.classList.remove('wrong_card');
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.amountOfComparisons += 1;

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
    this.timer.stopGameProcessTimer();
    const content = document.querySelector('#content');
    const time: HTMLSpanElement = document.querySelector('#base-timer-label');

    const score = this.calculateScore(time.innerText);

    new ModalFinishGame(content, time.innerText, score.toString()).show();
  }

  calculateScore(time: string) {
    let result = (this.amountOfComparisons - this.amountOfMistakes) * 100 - +time * 10;
    if (result < 0) {
      result = 0;
    }
    return result;
  }
}
