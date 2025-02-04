import { atom } from "recoil";

// true 이면 예약상태, false이면 앉아서 주문
export const reserveState = atom({
  key: "reserveState",
  default: false,
});
