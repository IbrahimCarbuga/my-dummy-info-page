export type NavItem = {
    tabIndex : number;
    name: string;
    path: string;
  }

export const navItemList: Array<NavItem> = [{tabIndex: 0 , name: "Home", path: "/"},{tabIndex: 1 , name: "Contact Page", path:"contact"}];
