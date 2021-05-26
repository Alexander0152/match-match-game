export default class BaseCardComponent {
  readonly element: Element;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
