import GameSettings from '../presentationLayer/gameSettings';
import HowToPlay from '../presentationLayer/howToPlay';
import RegistrationForm from '../presentationLayer/registrationForm';
import BestScore from '../presentationLayer/bestScore';

export default class Router {
  private readonly application: HTMLDivElement;

  tabs = document.getElementsByClassName('tab');

  routes: { path: string; cb: () => {} }[] = [];

  currentRoute: string;

  timerId: number;

  constructor(private readonly root: Element) {
    this.application = document.createElement('div');

    this.add('/game_settings', () => new GameSettings(this.root).render())
      .add('/best_score', () => new BestScore(this.root).render())
      .add('/about_game', () => new HowToPlay(this.root).render())
      .add('/registry', () => new RegistrationForm(this.root).render());

    this.listen();
  }

  changeActive(path: string) {
    for (let i = 0; i < this.tabs.length; i += 1) {
      this.tabs[i].classList.remove('navbar_active');
    }
    document.querySelector(`a[href='/#${path}']`).classList.add('navbar_active');
  }

  add = (path: string, cb: () => {}) => {
    this.routes.push({ path, cb });
    return this;
  };

  getFragment = () => {
    const match = window.location.href.match(/#(.*)$/);
    return match ? match[1] : '';
  };

  navigate = (path = '') => {
    const newPath = path.substring(2); // cut off `/#`
    window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${newPath}`;
    this.changeActive(newPath);
    return this;
  };

  listen = () => {
    clearInterval(this.timerId);
    this.timerId = window.setInterval(() => this.interval(), 50);
  };

  interval = (): void => {
    if (this.currentRoute === this.getFragment()) return;
    this.currentRoute = this.getFragment();

    this.routes.some((route) => {
      const match = this.currentRoute.match(route.path);
      if (match) {
        match.shift();
        route.cb.apply({}, match);
        this.changeActive(route.path);
        return match;
      }
      return false;
    });
  };
}

// class Router {
//   private readonly application: HTMLDivElement;

//   tabs = document.getElementsByClassName('tab');

//   constructor(private readonly root: Element) {
//     this.application = document.createElement('div');
//   }

//   changeActive(pathname: string) {
//     for (let i = 0; i < this.tabs.length; i += 1) {
//       this.tabs[i].classList.remove('navbar_active');
//     }
//     document.querySelector(`a[href='${pathname}']`).classList.add('navbar_active');
//   }

//   onNavigate = (pathname: string) => {
//     // window.history.pushState(null, null, '#' + pathname);

//     switch (pathname) {
//       case '/#/about_game':
//         new HowToPlay(this.root).render();
//         break;
//       case '/#/best_score':
//         new BestScore(this.root).render();
//         break;
//       case '/#/game_settings':
//         new GameSettings(this.root).render();
//         break;
//       default:
//         new RegistrationForm(this.root).render();
//         break;
//     }
//     this.changeActive(pathname);

//     // window.onpopstate = () => {
//     //   new HowToPlay(this.root).render();
//     //   // this.getRoute(window.location.origin);
//     // };
//     // return this.application;
//   };
// }

// export default Router;
