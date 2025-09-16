import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Item } from "../utils/types";

const KanbanItem = ({
  itemDetails,
  index,
  parent,
}: {
  itemDetails: Item;
  index: number;
  parent: string;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: itemDetails.title,
    data: {
      ...itemDetails,
      index,
      parent,
    },
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