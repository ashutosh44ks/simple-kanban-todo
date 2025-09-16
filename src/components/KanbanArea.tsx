import { useDroppable } from "@dnd-kit/core";
import { type Item } from "../utils/types";
import KanbanItem from "./KanbanItem";

// KanbanArea component to represent each area in the Kanban board
interface KanbanAreaProps {
  title: string;
  items: Item[];
}
export default function KanbanArea({ title, items }: KanbanAreaProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold">{title}</span>
        <span className="text-gray-700 text-sm">({items.length})</span>
      </div>
      <div
        ref={setNodeRef}
        className={
          "bg-gray-200 rounded-lg flex-1 p-2 flex flex-col" +
          (isOver ? " outline-2 outline-blue-500" : "")
        }
      >
        {isOver && items.length === 0 && (
          <span className="text-gray-500 text-sm italic m-auto">Drop here</span>
        )}
        {items.length === 0 && !isOver && (
          <span className="text-gray-500 text-sm italic m-auto">
            No items in this area
          </span>
        )}
        {items.map((itemDetails, key) => (
          <KanbanItem itemDetails={itemDetails} key={key} />
        ))}
      </div>
    </div>
  );
}
