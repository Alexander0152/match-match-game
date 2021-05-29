import UserDbConfig from '../app/dataAccessLayer/userDbConfig';
import UserService from '../serviceLayer/userService';

export default class ModalStartGame {
  modalWindow: HTMLDivElement;

  closeGameBtn: HTMLDivElement;

  backBtn: HTMLDivElement;

  constructor(private readonly root: Element) {
    this.root.innerHTML = `
          <div id="modalFinishGame" class="modal">
             <div class="modal-content">
               <p>Congratulations!</p>
               <button class="modal_btn" id="closeGameBtn">Close</button>
             </div>
         </div>`;

    ModalStartGame.addUser();

    this.modalWindow = document.querySelector('#modalFinishGame');
    this.closeGameBtn = document.querySelector('#closeGameBtn');

    this.closeGameBtn.addEventListener('click', () => this.closeGame());
  }

  static addUser() {
    // const user = localStorage.getItem('user');
    const retrievedUser = localStorage.getItem('newUser');
    const newUser = JSON.parse(retrievedUser);

    const dbName = UserDbConfig.databaseName;
    const dbVersion = UserDbConfig.databaseVersion;

    UserService.addUser(dbName, dbVersion, newUser);
  }

  closeGame() {
    this.modalWindow.style.display = 'none';

    const score = document.querySelector('#btnBestScore');
    (score as HTMLDivElement).click();
  }

  show(): void {
    this.modalWindow.style.display = 'block';
  }
}
