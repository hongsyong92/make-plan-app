import { atom } from "recoil";

interface IForm {
  toDo: string;
}
interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const loginState = atom<boolean>({
  key: "isLogin",
  default: false,
});
