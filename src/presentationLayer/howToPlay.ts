import { Component, RootElement } from './app.api';

export default class Header implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<header>
    <div class="wrapper">
      <div class="header_content">
        <div class="logo"></div>
        <ul class="navbar">
          <li class="navbar_active">
            <div class="navbar_about nav_icon"></div>
            <p class="navbar_text">About Game</p>
          </li>
          <li>
            <div class="navbar_best nav_icon"></div>
            <p class="navbar_text">Best Score</p>
          </li>
          <li>
            <div class="navbar_settings nav_icon"></div>
            <p class="navbar_text">Game Settings</p>
          </li>
        </ul>
        <button class="btn_register">REGISTER NEW PLAYER</button>
      </div>
    </div>
  </header>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }
}
