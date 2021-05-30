import { Component } from '../app.api';

export default class Page implements Component {
  private readonly page: HTMLElement;

  constructor(private readonly root: HTMLDivElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'hello from page';
    if (this.root) {
      this.root.appendChild(this.page);
    }
    return this.page;
  }
}
