import { DndContext, rectIntersection, type DragEndEvent } from "@dnd-kit/core";
import KanbanArea from "./KanbanArea";
import type { Item, ItemPassedDrag } from "../utils/types";
import { ITEM_TYPES } from "../utils/constants";

interface KanbanBoardProps {
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
  doneItems: Item[];
  setDoneItems: React.Dispatch<React.SetStateAction<Item[]>>;
  inProgressItems: Item[];
  setInProgressItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
const KanbanBoard = ({
  todoItems,
  setTodoItems,
  doneItems,
  setDoneItems,
  inProgressItems,
  setInProgressItems,
}: KanbanBoardProps) => {
  const handleDragEnd = (e: DragEndEvent) => {
    const container = e.over?.id;
    const item = e.active.data.current as ItemPassedDrag | undefined;
    if (!container || !item) return;
    if (container === item.parent) return;

    if (item.parent === ITEM_TYPES.TODO) {
      setTodoItems((items) => items.filter((i) => i.id !== item.id));
    } else if (item.parent === ITEM_TYPES.IN_PROGRESS) {
      setInProgressItems((items) => items.filter((i) => i.id !== item.id));
    } else if (item.parent === ITEM_TYPES.DONE) {
      setDoneItems((items) => items.filter((i) => i.id !== item.id));
    }

    if (container === ITEM_TYPES.TODO) {
      setTodoItems((items) => [...items, item]);
    } else if (container === ITEM_TYPES.IN_PROGRESS) {
      setInProgressItems((items) => [...items, item]);
    } else if (container === ITEM_TYPES.DONE) {
      setDoneItems((items) => [...items, item]);
    }
  };
  return (
    <DndContext collisionDetection={rectIntersection} onDragEnd={handleDragEnd}>
      <div className="flex gap-2 flex-1">
        <KanbanArea title={ITEM_TYPES.TODO} items={todoItems} />
        <KanbanArea title={ITEM_TYPES.IN_PROGRESS} items={inProgressItems} />
        <KanbanArea title={ITEM_TYPES.DONE} items={doneItems} />
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
