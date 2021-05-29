import UserDao from '../app/dataAccessLayer/userDao';
import User from '../businessLayer/user';

export default class UserService {
  public static addUser(dbName: string, dbVersion: number, user: User): void {
    const userDao: UserDao = new UserDao(dbName, dbVersion);
    userDao.addUser(user);
  }

  public static getAllUsers(dbName: string, dbVersion: number): User[] {
    const userDao: UserDao = new UserDao(dbName, dbVersion);
    return userDao.getAllUsers();
  }
}
