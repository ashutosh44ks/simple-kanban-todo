import { useState } from "react";
import type { Item } from "../utils/types";
import { ITEM_TYPES } from "../utils/constants";

interface AddItemProps {
  handleAddNewItem: (newItem: Item) => void;
}
let nextItemId = 1;

export default function AddItem({ handleAddNewItem }: AddItemProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    // Add new item with TODO as default parent
    handleAddNewItem({
      id: nextItemId++,
      title,
      description,
      parent: ITEM_TYPES.TODO,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      className="flex items-center md:flex-row flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg p-2 hover:border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Enter card title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg p-2 hover:border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Enter card description (optional)"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Add Card
      </button>
    </form>
  );
}
