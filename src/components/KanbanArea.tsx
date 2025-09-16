import { useDroppable } from "@dnd-kit/core";
import { type Card } from "./types";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface KanbanAreaProps {
  title: string;
  items: Card[];
}

const KanbanItem = ({
  itemDetails,
  index,
  parent,
}: {
  itemDetails: Card;
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
