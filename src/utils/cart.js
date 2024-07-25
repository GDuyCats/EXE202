import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useItemStore = create(
  persist(
    (set, get) => ({
      userID: null,
      items: [],
      selectedItems: [],
      total: 0,
      addItem: (n) => {
        const updatedItems = get().items;
        const index = updatedItems.findIndex(item => item.id === n.id);
        if (index === -1) {
            updatedItems.push(n);
        }
        else {
            updatedItems[index].count += n.count;
        }
        console.log(get().total ? get().total + n.count*n.priceSold : n.count*n.priceSold);
        set({ items: updatedItems, total: get().total ? get().total + n.count*n.priceSold : n.count*n.priceSold })
      },
      removeItem: (id, count, priceSold) => {
        const updatedItems = get().items.filter(item => item.id !== id);
        set({ items: updatedItems, total: get().total ? get().total - count*priceSold : 0 });
      },
      setSelectedItems: (selectedItems) => {
        set({ selectedItems });
      },
      addUserID: (userID) => {
        set({ userID });
      }
    }),
    {
      name: 'oheca-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
