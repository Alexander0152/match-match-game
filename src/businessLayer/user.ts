export default class User {
  currentFirstName: string;

  currentLastName: string;

  currentEmail: string;

  constructor(newFirstName: string, newLastName: string, newEmail: string) {
    this.currentFirstName = newFirstName;
    this.currentLastName = newLastName;
    this.currentEmail = newEmail;
  }

  get firstName() {
    return this.currentFirstName;
  }

  set firstName(newFirstName: string) {
    this.currentFirstName = newFirstName;
  }

  get lastName() {
    return this.currentLastName;
  }

  set lastName(newLastName: string) {
    this.currentLastName = newLastName;
  }

  get email() {
    return this.currentLastName;
  }

  set email(newEmail: string) {
    this.currentEmail = newEmail;
  }
}
