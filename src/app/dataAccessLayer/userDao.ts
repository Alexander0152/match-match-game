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
      this.objectStore.createIndex('score', 'score', { unique: false });
    });

    this.dBOpenRequest.addEventListener('success', () => {
      this.db = this.dBOpenRequest.result;

      this.transaction = this.db.transaction(['users'], 'readwrite');
      this.objectStore = this.transaction.objectStore('users');

      const newUser = {
        firsName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        score: user.score,
      };
      this.objectStore.add(newUser);
    });
  }

  public getAllUsers(): User[] {
    this.dBOpenRequest = window.indexedDB.open(this.dbName, this.dbVersion);

    const userList: User[] = [];

    this.dBOpenRequest.addEventListener('upgradeneeded', (event) => {
      this.db = (event.target as IDBOpenDBRequest).result;

      // Create an objectStore for this database
      this.objectStore = this.db.createObjectStore('users', { keyPath: 'email' });

      // define what data items the objectStore will contain
      this.objectStore.createIndex('firstName', 'firstName', { unique: false });
      this.objectStore.createIndex('lastName', 'lastName', { unique: false });
      this.objectStore.createIndex('email', 'email', { unique: false });
      this.objectStore.createIndex('score', 'score', { unique: false });
    });

    this.dBOpenRequest.addEventListener('success', () => {
      this.db = this.dBOpenRequest.result;

      this.transaction = this.db.transaction(['users'], 'readonly');
      this.objectStore = this.transaction.objectStore('users');
      const showCursor = this.objectStore.openCursor();

      showCursor.onsuccess = (event) => {
        const cursor: IDBCursorWithValue = (event.target as any).result;

        if (cursor) {
          const newUser = new User(
            cursor.value.firsName,
            cursor.value.lastName,
            cursor.value.email,
            cursor.value.score,
          );
          userList.push(newUser);
          cursor.continue();
        }
      };
    });
    return userList;
  }
}
