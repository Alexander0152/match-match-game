// import img from '../assets/images/dog1.png';

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
               <p>New game</p>
               <p class="modal_hint">Press start to play the game...</p>
               <button class="modal_btn" id="backBtn">Back</button>
               <button class="modal_btn" id="startGameBtn">Start</button>
             </div>
         </div>`;

    this.modalWindow = document.querySelector('#modalStartGame');
    this.backBtn = document.querySelector('#backBtn');
    this.startGameBtn = document.querySelector('#startGameBtn');

    this.backBtn.addEventListener('click', () => this.back());
    this.startGameBtn.addEventListener('click', () => this.startGame());
  }

  back() {
    this.modalWindow.style.display = 'none';
  }

  startGame() {
    this.modalWindow.style.display = 'none';

    const regForm: HTMLDivElement = document.querySelector('#regForm');
    const content = document.querySelector('#content');
    regForm.style.display = 'none';

    new GamePage(content).start();
  }

  show(): void {
    this.modalWindow.style.display = 'block';
  }
}
