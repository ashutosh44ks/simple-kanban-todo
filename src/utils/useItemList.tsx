import { useState } from "react";
import type { Item } from "./types";

const useItemList = () => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const handleAddNewItem = (newItem: Item) => {
    setItemList([...itemList, newItem]);
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
