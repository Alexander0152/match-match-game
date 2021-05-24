import Header from './presentationLayer/header';
import HowToPlay from './presentationLayer/howToPlay';
// import RegistrationForm from './presentationLayer/registrationForm';
import Router from './serviceLayer/router';

const rootNode = document.querySelector('#root');
new Header(rootNode).render();
const content = document.querySelector('#content');
new HowToPlay(content).render();

const btnAboutGame = document.querySelector('#btnAboutGame');
const btnBestScore = document.querySelector('#btnBestScore');
const btnGameSettings = document.querySelector('#btnGameSettings');
const btnRegistry = document.querySelector('#btnRegistry');

function navigate(pathname: string) {
  new Router(content).onNavigate(pathname);
}

btnAboutGame.addEventListener('click', () => navigate(btnAboutGame.getAttribute('href')));
btnBestScore.addEventListener('click', () => navigate(btnBestScore.getAttribute('href')));
btnGameSettings.addEventListener('click', () => navigate(btnGameSettings.getAttribute('href')));
btnRegistry.addEventListener('click', () => navigate(btnRegistry.getAttribute('href')));

// Open the database
// const dBOpenRequest = window.indexedDB.open('users', 4);

// dBOpenRequest.onupgradeneeded = (event) => {
//   const db = (event.target as IDBOpenDBRequest).result;

//   // Create an objectStore for this database
//   const objectStore = db.createObjectStore('users', { keyPath: 'email' });

//   // define what data items the objectStore will contain
//   objectStore.createIndex('firstName', 'firstName', { unique: false });
//   objectStore.createIndex('lastName', 'lastName', { unique: false });
//   objectStore.createIndex('email', 'email', { unique: false });
// };

// dBOpenRequest.onsuccess = (event) => {
//   const db = dBOpenRequest.result;

//   // open a read/write db transaction, ready for adding the data
//   const transaction = db.transaction(['users'], 'readwrite');

//   const objectStore = transaction.objectStore('users');
//   const newItem = {
//     firstName: 'Steave',
//     lastName: 'Smith',
//     email: 'steave@gmail.com',
//   };

//   const objectStoreRequest = objectStore.add(newItem);
// };

// btnRegistry.addEventListener('click', s);

// function s() {
//   alert('addss: ');

//   let request = openRequest.result.transaction(['test'], 'readwrite').objectStore('test').add({
//     id: '00-03',
//     name: 'Kenny',
//     age: 19,
//     email: 'kenny@planet.org',
//   });
//   alert('d: ');
// }
