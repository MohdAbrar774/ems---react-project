import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const CreateTask = () => {
   const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const assignedEmployee = userData.find((employee) => employee.id === Number(assignTo))

    if (!assignedEmployee) {
      alert("Please select an employee")
      return
    }

    const createdTask = {
      id: `task-${assignedEmployee.id}-${Date.now()}`,
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
      followUps: [],
    }

    setUserData((employees) =>
      employees.map((employee) => {
        if (employee.id !== assignedEmployee.id) return employee

        const tasks = [...employee.tasks, createdTask]
        return {
          ...employee,
          tasks,
          taskCount: {
            active: tasks.filter((task) => task.active).length,
            newTask: tasks.filter((task) => task.newTask).length,
            completed: tasks.filter((task) => task.completed).length,
            failed: tasks.filter((task) => task.failed).length,
          },
        }
      })
    )

    setTaskTitle('')
    setTaskDescription('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    
  };
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/20 sm:p-6">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="grid gap-5 lg:grid-cols-[1fr_1fr]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="mb-1 text-sm font-medium text-slate-300">Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="mb-1 text-sm font-medium text-slate-300">Due date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="mb-1 text-sm font-medium text-slate-300">Assign to</h3>
            <select
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
            >
              <option value="">Select employee</option>
              {userData?.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.firstname} ({employee.email})
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="mb-1 text-sm font-medium text-slate-300">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-1 text-sm font-medium text-slate-300">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            required
            className="min-h-36 flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
          ></textarea>
          <button className="mt-4 rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
