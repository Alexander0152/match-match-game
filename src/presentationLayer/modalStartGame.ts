import GamePage from './game-page';

export default class ModalStartGame {
  modalWindow: HTMLDivElement;

  startGameBtn: HTMLDivElement;

  backBtn: HTMLDivElement;

  // btnBestScore = document.querySelector('#btnBestScore');

  constructor(private readonly root: Element) {
    this.root.innerHTML = `
          <div id="modalStartGame" class="modal">
             <div class="modal-content">
               <p>User registered successfully!</p>
               <p class="modal_hint">You can start the game at any time</p>
               <button class="modal_btn" id="backBtn">OK</button>
             </div>
         </div>`;

    this.modalWindow = document.querySelector('#modalStartGame');
    this.backBtn = document.querySelector('#backBtn');
    this.startGameBtn = document.querySelector('#btnStartGame');

    this.backBtn.addEventListener('click', () => this.back());
    this.startGameBtn.style.display = 'block';
    this.startGameBtn.addEventListener('click', () => this.startGame());

    const btnRegister: HTMLButtonElement = document.querySelector('#btnRegisterNewPlayer');
    btnRegister.style.display = 'none';
  }

  back() {
    this.modalWindow.style.display = 'none';
  }

  startGame() {
    this.modalWindow.style.display = 'none';

    // const regForm: HTMLDivElement = document.querySelector('#regForm');
    const content: HTMLDivElement = document.querySelector('#content');
    const btnStopGame: HTMLButtonElement = document.querySelector('#btnStopGame');
    const btnStartGame: HTMLButtonElement = document.querySelector('#btnStartGame');

    btnStartGame.style.display = 'none';
    content.innerHTML = '';
    btnStopGame.style.display = 'block';

    new GamePage(content).start();
  }

  show(): void {
    this.modalWindow.style.display = 'block';
  }
}
