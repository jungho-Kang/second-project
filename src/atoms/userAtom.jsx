import { atom } from "recoil";

export const loginAtom = atom({
  key: "loginAtom",
  default: false,
});

export const userDataAtom = atom({
  key: "userDataAtom",
  default: {
    companyId: 0,
    companyName: "",
    email: "",
    name: "",
    phone: "",
    pic: null,
    point: 0,
    roleId: "",
    uid: "",
    userId: 0,
  },
});
