import User from '../../businessLayer/user';

export default class UserDao {
  private dbName: string;

  private dbVersion: number;

  constructor(newDbName: string, newDbVersion: number) {
    this.dbName = newDbName;
    this.dbVersion = newDbVersion;
  }

  public addUser(user: User): void {
    let openRequest = indexedDB.open(this.dbName, this.dbVersion);

    let db;
    const dbReq = indexedDB.open('myDB', 1);
    dbReq.onupgradeneeded = (event) => {
      // Зададим переменной db ссылку на базу данных
      db = event.target.result;
      // Создадим хранилище объектов с именем notes.
      let notes = db.createObjectStore('notes', { autoIncrement: true });
    };
    dbReq.onsuccess = (event) => {
      db = event.target.result;
    };
    dbReq.onerror = (event) => {
      alert('error opening database ' + event.target.errorCode);
    };
  }
}
