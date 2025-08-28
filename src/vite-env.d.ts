/// <reference types="vite/client" />

// X (Twitter) widgets type declaration
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

export {};