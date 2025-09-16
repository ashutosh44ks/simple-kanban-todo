import { useState, useEffect } from "react";
import type { Item } from "./types";
import { STORAGE_KEY } from "./constants";

const useItemList = () => {
  const [itemList, setItemList] = useState<Item[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itemList));
  }, [itemList]);

  const handleAddNewItem = (newItem: Item) => {
    setItemList((prev) => [...prev, newItem]);
  };

  const updateItemParent = (itemId: number, newParent: string) => {
    setItemList((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, parent: newParent } : item
      )
    );
  };

  return { itemList, handleAddNewItem, updateItemParent };
};

export default useItemList;
