import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    baseColor: string;
    modalColor: string;
    accentColor: string;
    subTextColor: string;
    borderColor: string;
  }
}
