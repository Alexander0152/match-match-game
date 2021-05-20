import { RootElement } from '../app/app.api';
import { RouterOptions } from '../businessLayer/app.api';
import Header from '../presentationLayer/header';
import RegistrationForm from '../presentationLayer/registrationForm';

class Router {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: Element) {
    this.application = document.createElement('div');
    // window.history.pushState({}, pathname, window.location.origin + pathname);
    // this.application.innerHTML = `<h1>Hello</h1>`;
    // this.application.innerHTML = this.routes[window.location.pathname];
  }

  routes = {
    '/about_game': `<h1>About</h1>`,
    '/best_score': `<h1>Best</h1>`,
    '/game_settings': `<h1>Score</h1>`,
  };

  onNavigate = (pathname: string) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    if (pathname === '/about_game') {
      this.root.innerHTML = this.routes['/about_game'];
    } else {
      this.root.innerHTML = this.routes['/best_score'];
    }
    console.log(window.location.pathname);

    window.onpopstate = () => {
      this.root.innerHTML = this.routes['/about_game'];
    };
    return this.application;
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
