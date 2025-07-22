// Cal.com type definitions
declare global {
  interface Window {
    Cal: {
      (action: string, namespace?: string, config?: any): void;
      ns: {
        [key: string]: (action: string, config?: any) => void;
      };
      loaded?: boolean;
      q?: any[];
    };
  }
}

export {};