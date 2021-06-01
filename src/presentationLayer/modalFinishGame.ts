import UserDbConfig from '../dataAccessLayer/userDbConfig';
import UserService from '../serviceLayer/userService';

export default class ModalFinishGame {
  modalWindow: HTMLDivElement;

  closeGameBtn: HTMLDivElement;

  backBtn: HTMLDivElement;

  constructor(private readonly root: Element, time: string, score: string) {
    this.root.innerHTML = `
          <div id="modalFinishGame" class="modal">
             <div class="modal-content">
               <p>Congratulations!</p>
               <p>Your time: ${time} seconds</p>
               <p>Your score: ${score} points</p>
               <button class="modal_btn" id="closeGameBtn">Close</button>
             </div>
         </div>`;

    ModalFinishGame.addUser(score);

    this.modalWindow = document.querySelector('#modalFinishGame');
    this.closeGameBtn = document.querySelector('#closeGameBtn');

    this.closeGameBtn.addEventListener('click', () => this.closeGame());
  }

  static addUser(score: string) {
    // const user = localStorage.getItem('user');
    const retrievedUser = localStorage.getItem('newUser');
    const newUser = JSON.parse(retrievedUser);

    newUser.score = score;
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
    const btnStopGame: HTMLButtonElement = document.querySelector('#btnStopGame');
    btnStopGame.style.display = 'none';

    const btnRegister: HTMLButtonElement = document.querySelector('#btnRegisterNewPlayer');
    btnRegister.style.display = 'initial';
  }
}
