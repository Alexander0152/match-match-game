export interface Component {
  render(): HTMLElement;
}

export type RootElement = HTMLElement | null | Element;

export type RouterOptions = { mode: string; root: string };
