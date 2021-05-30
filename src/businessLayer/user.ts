export default class User {
  currentFirstName: string;

  currentLastName: string;

  currentEmail: string;

  currentScore: string;

  constructor(newFirstName: string, newLastName: string, newEmail: string, newScore: string) {
    this.currentFirstName = newFirstName;
    this.currentLastName = newLastName;
    this.currentEmail = newEmail;
    this.currentScore = newScore;
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
    return this.currentEmail;
  }

  set email(newEmail: string) {
    this.currentEmail = newEmail;
  }

  get score() {
    return this.currentScore;
  }

  set score(newScore: string) {
    this.currentScore = newScore;
  }
}
