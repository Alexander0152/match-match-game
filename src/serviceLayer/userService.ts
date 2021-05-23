import UserDao from '../app/dataAccessLayer/userDao';
import User from '../businessLayer/user';

export default class UserService {
  public static addUser(dbName: string, user: User): void {
    const userDao: UserDao = new UserDao(dbName);
    userDao.addUser(user);
  }
}
