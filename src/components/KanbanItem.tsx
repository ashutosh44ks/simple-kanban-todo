import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Item } from "../utils/types";

const KanbanItem = ({ itemDetails }: { itemDetails: Item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: itemDetails.id,
    data: itemDetails,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      className="p-3 bg-white m-2 rounded-lg border-2 border-gray-500 shadow-md"
      style={{ transform: style.transform }}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <span>{itemDetails.title}</span>
      <div className="text-sm text-gray-600">{itemDetails.description}</div>
    </div>
  );
};

export default KanbanItem;
