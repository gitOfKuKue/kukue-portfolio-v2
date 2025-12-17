import { create } from "zustand";

interface Methods {
  countingNumber: (num: number) => number;
}

const useMethods = create<Methods>((set) => ({
  countingNumber: (num: number) =>
    Math.floor(num / 10) == 0 ? num : Math.floor(num / 10) * 10,
}));

export default useMethods;
