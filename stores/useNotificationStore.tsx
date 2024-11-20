import { produce } from "immer";
import { create } from "zustand";

interface NotificationStore {
  notifications: Array<{
    type: string;
    message: string;
    description?: string;
    txid?: string;
  }>;
  set: (fn: (state: NotificationStore) => void) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  set: (fn) => set(produce(fn)),
}));

export default useNotificationStore;