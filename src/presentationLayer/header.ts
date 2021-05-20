import { Component, RootElement } from '../businessLayer/app.api';

export default class Header implements Component {
  private readonly application: HTMLDivElement;

  // btnBestScore = document.querySelector('#btnBestScore');

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
    // this.btnBestScore.addEventListener('click', () => alert());
  }

  // show(): void {
  //   alert();
  // }

  render(): HTMLElement {
    this.application.innerHTML = `<header>
    <div class="wrapper">
      <div class="header_content">
        <div class="logo"></div>
        <ul class="navbar">
          <li class="navbar_active">
          <a href="/#" id="btnAboutGame">
            <div class="navbar_about nav_icon"></div>
            <p class="navbar_text">About Game</p>
            </a>
          </li>
          <li>
            <a href="/#/about" id="btnBestScore">
              <div class="navbar_best nav_icon"></div>
              <p class="navbar_text">Best Score</p>
            </a>
          </li>
          <li>
          <a href="/#/about" id="btnGameSettings">
              <div class="navbar_settings nav_icon"></div>
              <p class="navbar_text">Game Settings</p>
            </a>
          </li>
        </ul>
        <button class="btn_register">REGISTER NEW PLAYER</button>
      </div>
    </div>
  </header>
  <section id="content"></section>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }
}
