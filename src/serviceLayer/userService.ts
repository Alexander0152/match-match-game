import UserDao from '../app/dataAccessLayer/userDao';
import User from '../businessLayer/user';

export default class UserService {
  public static addUser(dbName: string, dbVersion: number, user: User): void {
    const userDao: UserDao = new UserDao(dbName, dbVersion);
    userDao.addUser(user);
  }
}
