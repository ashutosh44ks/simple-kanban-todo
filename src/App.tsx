import { useState } from "react";
import AddItem from "./components/AddItem";
import KanbanBoard from "./components/KanbanBoard";
import type { Card } from "./components/types";

function App() {
  const [todoItems, setTodoItems] = useState<Card[]>([]);
  const [inProgressItems, setInProgressItems] = useState<Card[]>([]);
  const [doneItems, setDoneItems] = useState<Card[]>([]);
  const handleAddNewCard = (newCard: Card) => {
    setTodoItems([...todoItems, newCard]);
  };
  return (
    <div className="h-screen p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <AddItem handleAddNewCard={handleAddNewCard} />
      </div>
      <KanbanBoard
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        doneItems={doneItems}
        setDoneItems={setDoneItems}
        inProgressItems={inProgressItems}
        setInProgressItems={setInProgressItems}
      />
    </div>
  );
}

export default App;
