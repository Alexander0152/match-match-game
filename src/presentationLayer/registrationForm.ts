import UserDbConfig from '../app/dataAccessLayer/userDbConfig';
import { Component, RootElement } from '../businessLayer/app.api';
import User from '../businessLayer/user';
import UserService from '../serviceLayer/userService';
import ModalStartGame from './modalStartGame';

export default class RegistrationForm implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  static checkName(field: HTMLInputElement): void {
    const fieldLength = field.value.length;
    const fieldValue: string = field.value;

    if (fieldLength === 0 || fieldLength > 30) {
      field.setCustomValidity('Value can not be ampty or longer then 30 symbols!');
      return;
    }
    field.setCustomValidity('');

    const hasOnlyDigitsRegExp = /^\d+$/;

    if (hasOnlyDigitsRegExp.test(fieldValue)) {
      field.setCustomValidity('Value can not consist only of numbers!');
      return;
    }
    field.setCustomValidity('');

    const hasForbiddenSymbolsRegExp = /[ ~ ! @ # $ % * () _ — + = | : ; " ' ` < > , . ? / ^ ]/;

    if (hasForbiddenSymbolsRegExp.test(fieldValue)) {
      field.setCustomValidity(
        'Value can not include specific symbols such as @ # % = * > / and others!',
      );
      return;
    }
    field.setCustomValidity('');
  }

  static submitForm(firstName: string, lastName: string, email: string): void {
    const user = new User(firstName, lastName, email);

    const dbName = UserDbConfig.databaseName;
    const dbVersion = UserDbConfig.databaseVersion;
    UserService.addUser(dbName, dbVersion, user);
  }

  render(): HTMLElement {
    this.root.innerHTML = `<form id="regForm"class="register_form">
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
          />
          <input
            class="reg_input"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            required
          />
          <input
            class="reg_input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="avatar-container"></div>
      </div>
      <div class="form-btn-panel">
        <button id="btnAddUser" type="submit" class="btn_add_user">ADD USER</button>
        <button type="reset" class="btn_cansel">CANCEL</button>
      </div>
    </div>
  </form>
  <div class="new_modal" id='modalBox'>`;

    const firstNameField = <HTMLInputElement>document.querySelector('#firstName');
    const lastNameField = <HTMLInputElement>document.querySelector('#lastName');
    const emailField = <HTMLInputElement>document.querySelector('#email');
    const form = document.querySelector('#regForm');

    firstNameField.addEventListener('input', () => RegistrationForm.checkName(firstNameField));
    lastNameField.addEventListener('input', () => RegistrationForm.checkName(lastNameField));

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      RegistrationForm.submitForm(firstNameField.value, lastNameField.value, emailField.value);

      const modalBox = document.querySelector('#modalBox');
      new ModalStartGame(modalBox).show();
    });

    return this.application;
  }
}
