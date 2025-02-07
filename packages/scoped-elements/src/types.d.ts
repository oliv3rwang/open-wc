import { Constructor } from '@open-wc/dedupe-mixin';
import { ReactiveElement } from '@lit/reactive-element';

export { Constructor };

export type ScopedElementsMap = {
  [key: string]: typeof HTMLElement;
};

export interface RenderOptions {
  creationScope: Node | ShadowRoot;
  renderBefore: Node | undefined;
}

export declare class ScopedElementsHost {
  constructor(...args: any[]);

  /**
   * Obtains the scoped elements definitions map
   */
  static scopedElements: ScopedElementsMap;

  static shadowRootOptions: ShadowRootInit;

  /**
   * Obtains the CustomElementRegistry
   */
  registry: CustomElementRegistry;

  /**
   * Defines a scoped element inside the CustomElementRegistry bound to the shadowRoot.
   */
  defineScopedElement<T extends HTMLElement>(tagName: string, klass: Constructor<T>): void;

  /**
   * Create a scoped element inside the CustomElementRegistry bound to the shadowRoot.
   *
   * @param tagName string The tag name of the element to create
   */
  createScopedElement(tagName: string): HTMLElement;

  public declare renderOptions: RenderOptions;
}

declare function ScopedElementsMixinImplementation<T extends Constructor<ReactiveElement>>(
  superclass: T,
): T & Constructor<ScopedElementsHost> & typeof ScopedElementsHost;

export type ScopedElementsMixin = typeof ScopedElementsMixinImplementation;

declare global {
  interface ShadowRootInit {
    customElements?: CustomElementRegistry;
    registry?: CustomElementRegistry;
  }

  interface Window {
    scopedElementsVersions: string[]
  }
}
