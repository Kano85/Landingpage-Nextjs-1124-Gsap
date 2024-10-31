// types/global.d.ts

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: HTMLElement | null;
    name?: string;
    offset?: number;
    repeat?: boolean;
    smooth?: boolean;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal' | 'both';
    reloadOnContextChange?: boolean;
    lerp?: number;
    class?: string;
    scrollbarContainer?: HTMLElement | null;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getDirection?: boolean;
    getSpeed?: boolean;
    mobile?: {
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal' | 'both';
    };
    tablet?: {
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal' | 'both';
    };
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    init(): void;
    destroy(): void;
    update(): void;
    scrollTo(target: HTMLElement | number | string, options?: unknown): void;
    start(): void;
    stop(): void;
    isActive: boolean;
    on(event: string, callback: (event: Event) => void): void;
    off(event: string, callback: (event: Event) => void): void;
  }

  export default LocomotiveScroll;
}

declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: unknown;
  export default ScrollTrigger;
}

declare module 'gsap/Observer' {
  export const Observer: unknown;
  export default Observer;
}
