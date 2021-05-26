import BaseCardComponent from './base-card-component';

export default class Card extends BaseCardComponent {
  FLIP_CLASS = 'flipped';

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
    <div class="card">
      <div class="card__front" style="background-image: url('./assets/images/${image}')">Front</div>
      <div class="card__back">Back</div>
    </div>
    `;
  }

  flipToBack() {
    return this.flip(true);
  }

  flipToFront() {
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(this.FLIP_CLASS, !isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
