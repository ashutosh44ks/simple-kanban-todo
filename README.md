## Basic Kanban Application

A simple Kanban board application built with React and TypeScript, featuring drag-and-drop functionality using the `@dnd-kit` library. The application allows users to add, move, and manage tasks across different stages: To Do, In Progress, and Done.

### Features

- Add new tasks to the To Do column.
- Drag and drop tasks between To Do, In Progress, and Done columns.
- Responsive design for better usability on different screen sizes.

### Technologies Used

- React
- TypeScript
- @dnd-kit for drag-and-drop functionality
- Tailwind CSS for styling

### Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd kanban-joyzai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Project Structure

```
kanban-joyzai/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── KanbanArea.tsx
│   │   └── KanbanBoard.tsx
│   ├── utils/
│   │   ├── constants.ts
│   │   └── types.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── ...
```
