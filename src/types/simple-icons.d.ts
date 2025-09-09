declare module 'simple-icons/icons/*' {
  const icon: {
    title: string;
    slug: string;
    hex: string;
    path: string;
    source: string;
  };
  export default icon;
}

declare module 'simple-icons/icons' {
  export interface SimpleIcon {
    title: string;
    slug: string;
    hex: string;
    path: string;
    source: string;
  }

  export const siBootstrap: SimpleIcon;
  export const siWordpress: SimpleIcon;
  export const siBlazor: SimpleIcon;
}


