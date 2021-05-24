import User from '../../businessLayer/user';

export default class UserDao {
  private dbName: string;

  private dbVersion: number;

  private dBOpenRequest: IDBOpenDBRequest;

  private db: IDBDatabase;

  private objectStore: IDBObjectStore;

  private transaction: IDBTransaction;

  constructor(newDbName: string, newDbVersion: number) {
    this.dbName = newDbName;
    this.dbVersion = newDbVersion;
  }

  public addUser(user: User): void {
    this.dBOpenRequest = window.indexedDB.open(this.dbName, this.dbVersion);

    this.dBOpenRequest.addEventListener('upgradeneeded', (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;

      // Create an objectStore for this database
      this.objectStore = this.db.createObjectStore('users', { keyPath: 'email' });

      // define what data items the objectStore will contain
      this.objectStore.createIndex('firstName', 'firstName', { unique: false });
      this.objectStore.createIndex('lastName', 'lastName', { unique: false });
      this.objectStore.createIndex('email', 'email', { unique: false });
    });

    this.dBOpenRequest.addEventListener('success', () => {
      this.db = this.dBOpenRequest.result;

      this.transaction = this.db.transaction([this.dbName], 'readwrite');
      this.objectStore = this.transaction.objectStore(this.dbName);

      const newUser = {
        firsName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      this.objectStore.add(newUser);
    });
  }
}
