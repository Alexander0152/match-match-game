import { RouterOptions } from '../businessLayer/app.api';
import GameSettings from '../presentationLayer/gameSettings';
import HowToPlay from '../presentationLayer/howToPlay';
import RegistrationForm from '../presentationLayer/registrationForm';
import BestScore from './bestScore';

class Router {
  private readonly application: HTMLDivElement;

  tabs = document.getElementsByClassName('tab');

  constructor(private readonly root: Element) {
    this.application = document.createElement('div');
  }

  // routes = {
  //   '/about_game': new RegistrationForm(this.root).render(),
  //   '/best_score': `<h1>Best</h1>`,
  //   '/game_settings': `<h1>Settings</h1>`,
  // };

  changeActive(pathname: string) {
    for (let i = 0; i < this.tabs.length; i += 1) {
      this.tabs[i].classList.remove('navbar_active');
    }
    document.querySelector(`a[href='${pathname}']`).classList.add('navbar_active');
  }

  onNavigate = (pathname: string) => {
    // window.history.pushState(null, null, '#' + pathname);

    switch (pathname) {
      case '/#/about_game':
        new HowToPlay(this.root).render();
        break;
      case '/#/best_score':
        new BestScore(this.root).render();
        break;
      case '/#/game_settings':
        new GameSettings(this.root).render();
        break;
      default:
        new RegistrationForm(this.root).render();
        break;
    }
    this.changeActive(pathname);

    // window.onpopstate = () => {
    //   new HowToPlay(this.root).render();
    //   // this.getRoute(window.location.origin);
    // };
    // return this.application;
  };
}

export default Router;

//   routes: { path: string; cb: () => {} }[] = [];

//   mode: string = null;

//   root = '/';

//   current: string;

//   timerId: number;
//   //   timerId: NodeJS.Timeout;

//   constructor(options: RouterOptions) {
//     this.mode = window.history.pushState ? 'history' : 'hash';
//     if (options.mode) this.mode = options.mode;
//     if (options.root) this.root = options.root;
//     this.listen();
//   }

//   add = (path: string, cb: () => {}) => {
//     this.routes.push({ path, cb });
//     return this;
//   };

//   remove = (path: string) => {
//     for (let i = 0; i < this.routes.length; i += 1) {
//       if (this.routes[i].path === path) {
//         this.routes.slice(i, 1);
//         return this;
//       }
//     }
//     return this;
//   };

//   flush = () => {
//     this.routes = [];
//     return this;
//   };

//   clearSlashes = (path: string) => path.replace(/\/$/, '').replace(/^\//, '');

//   getFragment = () => {
//     let fragment = '';
//     if (this.mode === 'history') {
//       fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
//       fragment = fragment.replace(/\?(.*)$/, '');
//       fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
//     } else {
//       const match = window.location.href.match(/#(.*)$/);
//       fragment = match ? match[1] : '';
//     }
//     return this.clearSlashes(fragment);
//   };

//   navigate = (path = '') => {
//     if (this.mode === 'history') {
//       window.history.pushState(null, null, this.root + this.clearSlashes(path));
//     } else {
//       window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
//     }
//     return this;
//   };

//   listen = () => {
//     clearInterval(this.timerId);
//     this.timerId = window.setInterval(() => this.interval(), 50);
//   };

//   interval = (): void => {
//     if (this.current === this.getFragment()) return;
//     this.current = this.getFragment();

//     this.routes.some((route) => {
//       const match = this.current.match(route.path);
//       if (match) {
//         match.shift();
//         route.cb.apply({}, match);
//         return match;
//       }
//       return false;
//     });
//   };
// }

// export default Router;
