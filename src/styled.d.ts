import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor01: string;
    bgColor02: string;
    bgColor03: string;
    bgColor04: string;
    baseColor: string;
    modalColor: string;
    accentColor: string;
    borderColor: string;
    textColor01: string;
    textColor02: string;
    textColor03: string;
    textColor04: string;
    toDoStatusColor: string;
    doingStatusColor: string;
    doneStatusColor: string;
  }
}
