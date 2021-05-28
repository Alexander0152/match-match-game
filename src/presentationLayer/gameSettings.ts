import { Component, RootElement } from '../businessLayer/app.api';

export default class GameSettings implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.innerHTML = `<section class="settings">
    <form class="settings-form">
      <label class="settings_label" for="cardsType">Game cards</label>
      <select id="cardsType" name="cardsType">
        <option class="placeholder" value="" disabled selected>select game cards type</option>
        <option value="hurr">Dogs</option>
        <option value="volvo">Volvo</option>
      </select>
      <label class="settings_label" for="difficulty">Difficulty</label>
      <select id="difficulty" name="difficulty">
        <option class="placeholder" value="" disabled selected>select game type</option>
        <option value="volvo">4x4</option>
        <option value="saab">6x6</option>
      </select>
    </form>
  </section>`;

    return this.application;
  }
}
