import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useItemStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (n) => {
        const updatedItems = get().items;
        const index = updatedItems.findIndex(item => item.id === n.id);
        console.log(n);
        if (index === -1) {
            updatedItems.push(n);
        }
        else {
            updatedItems[index].count += n.count;
        }
        set({ items: updatedItems })
        
    },
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)