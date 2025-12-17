import { create } from "zustand";

interface RoleState {
  role: string;
}

const useRole = create<RoleState>((set) => ({
  role: "Full Stack Developer",
}));

export default useRole;
