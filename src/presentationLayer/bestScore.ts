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
    this.application = document.createElement('div');
  }

  getUsersHistory() {
    const dbName = UserDbConfig.databaseName;
    const dbVersion = UserDbConfig.databaseVersion;

    this.usersList = UserService.getAllUsers(dbName, dbVersion);
    // console.log(this.usersList[0]);
  }

  render(): HTMLElement {
    const recordsField = document.createElement('div');
    recordsField.innerHTML = `
    <div id="recordsField" class="records-field"></div>
    `;

    for (let i = 0; i < 10; i += 1) {
      const newRecord = document.createElement('div');
      newRecord.innerHTML = `
         <div class="record">
           <p class="record_name">${this.usersList[0].firstName}</p>
           <p class="record_name">${this.usersList[0].lastName}</p>
           <p class="record_email">${this.usersList[0].email}</p>
           <p class="record_score">Score:</p>
         </div>`;

      recordsField.appendChild(newRecord);
    }

    this.root.innerHTML = `<section class="score">
      <p class="title">Best Players</p>
      <div id="recordsField" class="records-field"></div>
    </section>`;

    this.root.appendChild(recordsField);
    return this.application;
  }
}
