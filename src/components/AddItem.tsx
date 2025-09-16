import { useState } from "react";
import type { Card } from "./types";

interface AddItemProps {
  handleAddNewCard: (newCard: Card) => void;
}
let nextCardId = 1;

export default function AddCard({ handleAddNewCard }: AddItemProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddNewCard({ id: nextCardId++, title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg p-2 flex-4 mr-4 hover:border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Enter card title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg p-2 flex-4 mr-4 hover:border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Enter card description (optional)"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Card
      </button>
    </form>
  );
}
