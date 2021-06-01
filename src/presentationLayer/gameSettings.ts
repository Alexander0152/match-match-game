import { Component, RootElement } from '../businessLayer/app.api';

export default class GameSettings implements Component {
  private readonly application: HTMLDivElement;

  cardsType: string = null;

  difficulty: string = null;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.innerHTML = `<section class="settings">
    <form class="settings-form">
      <label class="settings_label" for="cardsType">Game cards</label>
      <select id="cardsType" name="cardsType">
        <option class="placeholder" value="" disabled selected>select game cards type</option>
        <option value="dogs">Dogs</option>
        <option value="birds">Birds</option>
      </select>
      <label class="settings_label" for="difficulty">Difficulty</label>
      <select id="difficulty" name="difficulty">
        <option class="placeholder" value="" disabled selected>select game type</option>
        <option value="4x4">4x4</option>
        <option value="6x6">6x6</option>
      </select>
    </form>
  </section>`;

    this.addSettingsListener();
    return this.application;
  }

  addSettingsListener() {
    const cardsTypeField = <HTMLInputElement>document.querySelector('#cardsType');
    const difficultyField = <HTMLInputElement>document.querySelector('#difficulty');

    cardsTypeField.addEventListener('change', () => {
      this.cardsType = cardsTypeField.value;
      this.addSettingsToLocalStorage();
    });

    difficultyField.addEventListener('change', () => {
      this.difficulty = difficultyField.value;
      this.addSettingsToLocalStorage();
    });
  }

  addSettingsToLocalStorage() {
    const retrievedUser = localStorage.getItem('settings');
    const settings = JSON.parse(retrievedUser);

    if (settings === null) {
      const newSettings = { cardsType: this.cardsType, difficulty: this.difficulty };
      localStorage.setItem('settings', JSON.stringify(newSettings));
      return;
    }

    if (this.cardsType !== null) {
      settings.cardsType = this.cardsType;
    }

    if (this.difficulty !== null) {
      settings.difficulty = this.difficulty;
    }

    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
