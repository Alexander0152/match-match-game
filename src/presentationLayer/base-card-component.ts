export default class BaseCardComponent {
  readonly element: Element;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement(tag);

    BaseCardComponent.checkSettings(styles);
    this.element.classList.add(...styles);
  }

  static checkSettings(styles: string[]) {
    const retrievedUser = localStorage.getItem('settings');
    const settings = JSON.parse(retrievedUser);

    if (settings !== null && settings.difficulty === 'hard') {
      styles.push('cards-field-difficult');
    }
  }
}
