// import { create } from 'lodash';
import { Component, RootElement } from './app.api';
import Page from './page/page';

export default class App implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `
    <div class='myClass'>
      <h1>HELL</h1>
    </div>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    this.application.appendChild(new Page(this.application).render());

    return this.application;
  }
}
