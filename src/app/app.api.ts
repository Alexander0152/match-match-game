export interface Component {
  render(): HTMLElement;
}

export type RootElement = HTMLElement | null | Element;
