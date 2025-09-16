import { DndContext, rectIntersection } from "@dnd-kit/core";
import KanbanArea from "./KanbanArea";
import type { Card, CardPassedDrag } from "./types";

interface KanbanBoardProps {
  todoItems: Card[];
  setTodoItems: React.Dispatch<React.SetStateAction<Card[]>>;
  doneItems: Card[];
  setDoneItems: React.Dispatch<React.SetStateAction<Card[]>>;
  inProgressItems: Card[];
  setInProgressItems: React.Dispatch<React.SetStateAction<Card[]>>;
}
const KanbanBoard = ({
  todoItems,
  setTodoItems,
  doneItems,
  setDoneItems,
  inProgressItems,
  setInProgressItems,
}: KanbanBoardProps) => {
  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const item = e.active.data.current as CardPassedDrag | undefined;
        if (!container || !item) return;
        if (container === item.parent) return;

        if (item.parent === "To Do") {
          setTodoItems((items) => items.filter((i) => i.id !== item.id));
        } else if (item.parent === "In Progress") {
          setInProgressItems((items) => items.filter((i) => i.id !== item.id));
        } else if (item.parent === "Done") {
          setDoneItems((items) => items.filter((i) => i.id !== item.id));
        }

        if (container === "To Do") {
          setTodoItems((items) => [...items, item]);
        } else if (container === "In Progress") {
          setInProgressItems((items) => [...items, item]);
        } else if (container === "Done") {
          setDoneItems((items) => [...items, item]);
        }
      }}
    >
      <div className="flex gap-2 flex-1">
        <KanbanArea title="To Do" items={todoItems} />
        <KanbanArea title="In Progress" items={inProgressItems} />
        <KanbanArea title="Done" items={doneItems} />
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
