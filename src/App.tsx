import AddItem from "./components/AddItem";
import KanbanBoard from "./components/KanbanBoard";
import useItemList from "./utils/useItemList";

function App() {
  const { itemList, handleAddNewItem, updateItemParent } = useItemList();
  return (
    <div className="h-screen p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 md:flex-row flex-col gap-2">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <AddItem handleAddNewItem={handleAddNewItem} />
      </div>
      <KanbanBoard itemList={itemList} updateItemParent={updateItemParent} />
    </div>
  );
}

export default App;
