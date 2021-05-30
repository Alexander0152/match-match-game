import { Component, RootElement } from '../businessLayer/app.api';
import UserService from '../serviceLayer/userService';
import UserDbConfig from '../app/dataAccessLayer/userDbConfig';
import User from '../businessLayer/user';

export default class BestScore implements Component {
  private readonly application: HTMLDivElement;

  private usersList: User[];

  // btnBestScore = document.querySelector('#btnBestScore');

  constructor(private readonly root: RootElement) {
    this.getUsersHistory();
    // this.application = document.createElement('div');
  }

  getUsersHistory() {
    const dbName = UserDbConfig.databaseName;
    const dbVersion = UserDbConfig.databaseVersion;

    this.usersList = UserService.getAllUsers(dbName, dbVersion);
  }

  renderRecords() {
    const recordsField = document.createElement('div');
    recordsField.innerHTML = `
    <div id="recordsField" class="records-field"></div>
    `;

    for (let i = 0; i < 10; i += 1) {
      if (!this.usersList[i]) {
        break;
      }
      const newRecord = document.createElement('div');
      newRecord.innerHTML = `
         <div class="record">
           <p class="record_name">${this.usersList[i].firstName}</p>
           <p class="record_name">${this.usersList[i].lastName}</p>
           <p class="record_email">${this.usersList[i].email}</p>
           <p class="record_score">Score: ${this.usersList[i].score}</p>
         </div>`;

      recordsField.appendChild(newRecord);
    }

    this.root.innerHTML = `<section class="score">
      <p class="title">Best Players</p>
      ${recordsField.innerHTML}
      <div id="recordsField" class="records-field"></div>
    </section>`;
  }

  render(): HTMLElement {
    this.getUsersHistory();

    setTimeout(() => this.renderRecords(), 200);
    return this.application;
  }
}
