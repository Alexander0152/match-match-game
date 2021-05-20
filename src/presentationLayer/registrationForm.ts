import { Component, RootElement } from '../businessLayer/app.api';

export default class RegistrationForm implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = `<form class="register_form">
    <p class="title reg_form_title">Register new player</p>
    <div class="form-conteiner">
      <div class="form-content">
        <div class="form-input">
          <input
            class="reg_input"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
          />
          <input
            class="reg_input"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
          />
          <input class="reg_input" type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div class="avatar-container"></div>
      </div>
      <div class="form-btn-panel">
        <button class="btn_add_user">ADD USER</button>
        <button class="btn_cansel">CANCEL</button>
      </div>
    </div>
  </form>`;
    if (this.root) {
      this.root.appendChild(this.application);
    }
    return this.application;
  }
}
