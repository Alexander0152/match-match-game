import { Component, RootElement } from '../businessLayer/app.api';

export default class BestScore implements Component {
  private readonly application: HTMLDivElement;

  // btnBestScore = document.querySelector('#btnBestScore');

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.innerHTML = `<section class="score">
    <p class="title">Best Players</p>
  </section>`;
    return this.application;
  }
}
