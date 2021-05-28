import { Component, RootElement } from '../businessLayer/app.api';
// import img from '../assets/images/dog1.png';

export default class Header implements Component {
  private readonly application: HTMLDivElement;

  // btnBestScore = document.querySelector('#btnBestScore');

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
    // this.btnBestScore.addEventListener('click', () => alert());
  }

  render(): HTMLElement {
    this.application.innerHTML = `<header>
    <div class="wrapper">
      <div class="header_content">
        <div class="logo"></div>
        <ul class="navbar">
        <a class="tab navbar_active" href="/#/about_game" id="btnAboutGame">
          <li>
            <div class="navbar_about nav_icon"></div>
            <p class="navbar_text">About Game</p>
          </li>
          </a>
          <a class="tab" href="/#/best_score" id="btnBestScore">
          <li>
              <div class="navbar_best nav_icon"></div>
              <p class="navbar_text">Best Score</p>
          </li>
          </a>
          <a class="tab" href="/#/game_settings" id="btnGameSettings">
          <li>
              <div class="navbar_settings nav_icon"></div>
              <p class="navbar_text">Game Settings</p>
          </li>
          </a>
        </ul>
        <a id="btnRegistry" href="/#/registry">
        <button class="btn_register">REGISTER NEW PLAYER</button>
        </a>
      </div>
    </div>
  </header>
  <section id="timer"></section>
  <section id="content"></section>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }
}
