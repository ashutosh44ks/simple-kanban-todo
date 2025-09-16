import { DndContext, rectIntersection, type DragEndEvent } from "@dnd-kit/core";
import KanbanArea from "./KanbanArea";
import type { Item } from "../utils/types";
import { ITEM_TYPES } from "../utils/constants";

interface KanbanBoardProps {
  itemList: Item[];
  setItemList: React.Dispatch<React.SetStateAction<Item[]>>;
}
import { useMemo } from "react";

const KanbanBoard = ({ itemList, setItemList }: KanbanBoardProps) => {
  const todoItems = useMemo(
    () => itemList.filter((item) => item.parent === ITEM_TYPES.TODO),
    [itemList]
  );
  const inProgressItems = useMemo(
    () => itemList.filter((item) => item.parent === ITEM_TYPES.IN_PROGRESS),
    [itemList]
  );
  const doneItems = useMemo(
    () => itemList.filter((item) => item.parent === ITEM_TYPES.DONE),
    [itemList]
  );
  const handleDragEnd = (e: DragEndEvent) => {
    const container = e.over?.id as string | undefined;
    const item = e.active.data.current as Item | undefined;
    if (!container || !item) return;
    if (container === item.parent) return;
    setItemList((prev) =>
      prev.map((it) => (it.id === item.id ? { ...it, parent: container } : it))
    );
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
