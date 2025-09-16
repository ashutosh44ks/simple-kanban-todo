import { useDroppable } from "@dnd-kit/core";
import { type Item } from "../utils/types";
import KanbanItem from "./KanbanItem";

interface KanbanAreaProps {
  title: string;
  items: Item[];
}
export default function KanbanArea({ title, items }: KanbanAreaProps) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <div className="flex flex-1 flex-col">
      <span className="font-bold">{title}</span>
      <div
        ref={setNodeRef}
        className="bg-gray-200 rounded-lg flex-1 p-2 flex flex-col"
      >
        {items.map((itemDetails, key) => (
          <KanbanItem itemDetails={itemDetails} key={key} index={key} parent={title} />
        ))}
      </div>
    </div>
  );
}
