import { RootElement } from '../businessLayer/app.api';

export default class Game {
  private readonly application: HTMLDivElement;

  constructor(private readonly rootElement: Element) {}

  render(): HTMLElement {
    this.rootElement.innerHTML = `<div class="cards-field">
    <div class="card-container">
      <div class="card">
        <div class="card__front">Front</div>
        <div class="card__back">Back</div>
      </div>
    </div>

    <div class="card-container">
      <div class="card">
        <div class="card__front">Front</div>
        <div class="card__back">Back</div>
      </div>
    </div>

    <div class="card-container">
      <div class="card">
        <div class="card__front">Front</div>
        <div class="card__back">Back</div>
      </div>
    </div>
  </div>`;
    return this.application;
  }
}
