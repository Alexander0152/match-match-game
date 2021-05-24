import User from '../../businessLayer/user';

export default class UserDao {
  private dbName: string;

  private dbVersion: number;

  constructor(newDbName: string, newDbVersion: number) {
    this.dbName = newDbName;
    this.dbVersion = newDbVersion;
  }

  public addUser(user: User): void {
    const openRequest = indexedDB.open(this.dbName, this.dbVersion);

    // prefixes of implementation that we want to test
    indexedDB = window.indexedDB;

    // prefixes of window.IDB objects
    // window.IDBTransaction =
    //   window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    // window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
      window.alert("Your browser doesn't support a stable version of IndexedDB.");
    }

    openRequest.onerror = function (event) {
      console.log('error: ');
    };

    // openRequest.addEventListener('error');
  }
}
// public addUser(user: User): void {
//     let openRequest = indexedDB.open(this.dbName, this.dbVersion);

//     let db;
//     const dbReq = indexedDB.open('myDB', 1);

//     dbReq.onupgradeneeded = (event) => {
//       // Зададим переменной db ссылку на базу данных
//       db = event.target.result;
//       // Создадим хранилище объектов с именем notes.
//       let users = db.createObjectStore('users', { autoIncrement: true });
//     };
//     dbReq.onsuccess = (event) => {
//       db = event.target.result;
//     };
//     dbReq.onerror = (event) => {
//       alert('error opening database ' + event.target.errorCode);
//     };

//     dbReq.onsuccess = (event) => {
//       db = event.target.result;
//       addStickyNote(db, 'Hello world first time!');
//     };
//   }
