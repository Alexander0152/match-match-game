import { Component, RootElement } from '../businessLayer/app.api';

export default class Header implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<div class="how_to_play">
    <p class="how_to_play_title title">How to play?</p>
    <section class="how_to_play_register">
      <div class="step_block">
        <div class="number_box">
          <p class="number_box_digit">1</p>
        </div>
        <p class="step_block_title">Register new playerin game</p>
      </div>
      <div class="picture_block form_picture"></div>
    </section>
    <section class="how_to_play_register">
      <div class="step_block">
        <div class="number_box">
          <p class="number_box_digit">2</p>
        </div>
        <p class="step_block_title">Configure your game settings</p>
      </div>
      <div class="picture_block">
        <div class="picture_settings">
          <div class="navbar_settings nav_icon"></div>
          <p class="navbar_text">Game Settings</p>
        </div>
      </div>
    </section>
    <section class="how_to_play_register">
      <div class="step_block">
        <div class="number_box">
          <p class="number_box_digit">3</p>
        </div>
        <p class="step_block_title">
          Start you new game! Remember card positions and match it before times up.
        </p>
      </div>
    </section>
  </div>`;

    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }
}
