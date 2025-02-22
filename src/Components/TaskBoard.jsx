













// import { useState, useEffect, useContext } from 'react';
// import { SortableTask } from './SortableTask';
// import { DroppableColumn } from './DroppableColumn';
// import { AuthContext } from '../Provider/AuthProvider';
// import axios from 'axios'; // Import Axios

// export default function App() {
//   const { user } = useContext(AuthContext);
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({ title: '', description: '' });
//   const [loading, setLoading] = useState(true);


//   // Fetch tasks on component mount or when user changes
//   useEffect(() => {
//     if (user?.email) {
//       fetchTasks();
//     }
//   }, [user]);

//   // Fetch tasks from the backend using Axios
//   const fetchTasks = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`http://localhost:5000/tasks/${user?.email}`);
//       setTasks(res.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add a new task using Axios
//   const addTask = async () => {
//     if (!newTask.title.trim()) return;

//     const task = {
//       ...newTask,
//       category: 'TO-DO',
//       createdAt: new Date().toISOString(),
//       email: user.email,
//       position: tasks.filter(t => t.category === 'TO-DO').length
//     };

//     try {
//       const res = await axios.post('http://localhost:5000/tasks', task);
//       if (res.status === 200) {
//         setNewTask({ title: '', description: '' });
//         fetchTasks();
//       }
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   // Update a task using Axios
//   const updateTask = async (id, updates) => {
//     try {
//       const res = await axios.put(`http://localhost:5000/tasks/${id}`, updates);
//       if (res.status === 200) {
//         fetchTasks();
//       }
//     } catch (error) {
//       console.error('Error updating task:', error);
//     }
//   };

//   // Delete a task using Axios
//   const deleteTask = async (id) => {
//     console.log(id)
//     try {
//       const res = await axios.delete(`http://localhost:5000/tasks/${id}`);
//       if (res.data.deletedCount) {
//         fetchTasks();
//       }
//       console.log(res.data)
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   // Handle drag start
//   const handleDragStart = (event) => {
//     const { active } = event;
//     const task = tasks.find(task => task._id === active.id);
//     setActiveTask(task); // Set the currently dragged task
//   };

//   // Handle drag end
//   const handleDragEnd = async (event) => {
//     const { active, over } = event;

//     // Early return if there's no valid drop target
//     if (!active || !over || active.id === over.id) return;

//     // Find the dragged task and the target task
//     const activeTask = tasks.find(task => task._id === active.id);
//     const overTask = tasks.find(task => task._id === over.id);

//     if (!activeTask || !overTask) return;

//     const oldCategory = activeTask.category; // Original category of the dragged task
//     const newCategory = overTask.category;   // Target category where the task is dropped

//     // Create a copy of the tasks array
//     let updatedTasks = [...tasks];

//     // Remove the dragged task from its original position
//     updatedTasks = updatedTasks.filter(task => task._id !== active.id);

//     // Find the index where the dragged task should be inserted in the new category
//     const overIndex = updatedTasks.findIndex(task => task._id === over.id);

//     // Insert the dragged task into the new category at the correct position
//     updatedTasks.splice(overIndex, 0, {
//       ...activeTask,
//       category: newCategory, // Update the category
//       position: overTask.position // Use the position of the over task
//     });

//     // Reindex positions in the new category
//     const newCategoryTasks = updatedTasks
//       .filter(task => task.category === newCategory)
//       .map((task, index) => ({
//         ...task,
//         position: index // Reassign positions based on their order
//       }));

//     // Reindex positions in the old category (if the category changed)
//     let oldCategoryTasks = [];
//     if (oldCategory !== newCategory) {
//       oldCategoryTasks = updatedTasks
//         .filter(task => task.category === oldCategory)
//         .map((task, index) => ({
//           ...task,
//           position: index // Reassign positions based on their order
//         }));
//     }

//     // Merge the reindexed tasks back into the full list
//     updatedTasks = updatedTasks.map(task => {
//       const updatedTask = newCategoryTasks.find(t => t._id === task._id) ||
//                          oldCategoryTasks.find(t => t._id === task._id);
//       return updatedTask || task;
//     });

//     // Update the state with the new task order
//     setTasks(updatedTasks);

//     // Prepare all tasks that need backend updates
//     const tasksToUpdate = [
//       ...newCategoryTasks,
//       ...oldCategoryTasks
//     ];

//     // Send updates to the backend using Axios
//     try {
//       await Promise.all(
//         tasksToUpdate.map(task =>
//           axios.put(`http://localhost:5000/tasks/${task._id}`, {
//             category: task.category,
//             position: task.position
//           })
//         )
//       );
//     } catch (error) {
//       console.error('Error updating tasks:', error);
//     }

//     // Reset the active task
//     setActiveTask(null);
//   };

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 px-9">
//       <div className="flex flex-col md:flex-row gap-4">
//         <DndContext
//           sensors={sensors}
//           collisionDetection={closestCenter}
//           onDragStart={handleDragStart}
//           onDragEnd={handleDragEnd}
//         >
//           <SortableContext
//             items={tasks.map(task => task._id)} // Pass an array of task IDs
//             strategy={verticalListSortingStrategy}
//           >
//             {['TO-DO', 'InProgress', 'Done'].map((category) => (
//               <DroppableColumn
//                 key={category}
//                 id={category} // Unique ID for the droppable area
//               >
//                 <h2 className="text-lg font-semibold mb-4 capitalize">
//                   {category.replace(/([A-Z])/g, ' $1')}
//                 </h2>

//                 {tasks
//                   .filter(task => task.category === category)
//                   .sort((a, b) => a.position - b.position)
//                   .map(task => (
//                     <SortableTask
//                       key={task._id}
//                       id={task._id} // Pass the task ID as a prop
//                       task={task}
//                       onUpdate={updateTask}
//                       deleteTask={deleteTask}
//                     />
//                   ))}
//               </DroppableColumn>
//             ))}
//           </SortableContext>
//         </DndContext>
//       </div>

//       <div className="mt-8 max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder="Task title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           className="w-full mb-2 p-2 border rounded"
//           maxLength={50}
//         />
//         <textarea
//           placeholder="Description"
//           value={newTask.description}
//           onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//           className="w-full mb-2 p-2 border rounded"
//           maxLength={200}
//         />
//         <button
//           onClick={addTask}
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//         >
//           Add Task
//         </button>
//       </div>
//     </div>
//   );
// }

{/* <div className="mt-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
          maxLength={50}
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
          maxLength={200}
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </div> */}