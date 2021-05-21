import { Component, RootElement } from '../businessLayer/app.api';

export default class RegistrationForm implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  checkFirstName(value: string) {}

  render(): HTMLElement {
    this.root.innerHTML = `    <form class="register_form">
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
            required
            minlength="1"
            maxlength="30"
          />
          <input
            class="reg_input"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            required
            minlength="1"
            maxlength="30"
          />
          <input
            class="reg_input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            minlength="1"
            maxlength="30"
          />
        </div>
        <div class="avatar-container"></div>
      </div>
      <div class="form-btn-panel">
        <button id="btnAddUser" type="submit" class="btn_add_user">ADD USER</button>
        <button type="reset" class="btn_cansel">CANCEL</button>
      </div>
    </div>
  </form>`;

    const firstNameField = <HTMLInputElement>document.querySelector('#firstName');
    const lastNameField = <HTMLInputElement>document.querySelector('#lastName');
    const emailField = <HTMLInputElement>document.querySelector('#email');

    firstNameField.addEventListener('input', () => this.checkFirstName(firstNameField.value));

    return this.application;
  }
}
