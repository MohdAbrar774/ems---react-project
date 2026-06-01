const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: "task-1-1",
        title: "Prepare Monthly Report",
        description: "Compile the performance metrics into the monthly report.",
        date: "2025-11-20",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-1-2",
        title: "Client Follow-up",
        description: "Contact client regarding pending invoice.",
        date: "2025-11-21",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        followUps: []
      },
      {
        id: "task-1-3",
        title: "Team Meeting",
        description: "Attend weekly team alignment meeting.",
        date: "2025-11-22",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        followUps: []
      }
    ]
  },
  {
    id: 2,
    firstname: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: "task-2-1",
        title: "Product Listing Update",
        description: "Update price and description on product pages.",
        date: "2025-11-19",
        category: "E-commerce",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-2-2",
        title: "Inventory Check",
        description: "Verify remaining stock in warehouse.",
        date: "2025-11-18",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        followUps: []
      },
      {
        id: "task-2-3",
        title: "System Error Report",
        description: "Report a bug found in the dashboard.",
        date: "2025-11-17",
        category: "Technical",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        followUps: []
      },
      {
        id: "task-2-4",
        title: "Call Supplier",
        description: "Discuss delivery delays with supplier.",
        date: "2025-11-23",
        category: "Supply Chain",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      }
    ]
  },
  {
    id: 3,
    firstname: "Reyansh",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id: "task-3-1",
        title: "Social Media Content",
        description: "Create 3 new social media posts.",
        date: "2025-11-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-3-2",
        title: "Design Review",
        description: "Review new promotional poster designs.",
        date: "2025-11-21",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-3-3",
        title: "Email Campaign",
        description: "Schedule the email campaign for Black Friday.",
        date: "2025-11-22",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        followUps: []
      }
    ]
  },
  {
    id: 4,
    firstname: "Aditya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        id: "task-4-1",
        title: "Code Review",
        description: "Review pull requests submitted by team members.",
        date: "2025-11-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-4-2",
        title: "API Documentation",
        description: "Update API docs for new feature rollout.",
        date: "2025-11-20",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        followUps: []
      },
      {
        id: "task-4-3",
        title: "Fix Login Bug",
        description: "Resolve reported issue from QA team.",
        date: "2025-11-17",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        followUps: []
      },
      {
        id: "task-4-4",
        title: "Sprint Planning",
        description: "Plan tasks for the next sprint cycle.",
        date: "2025-11-24",
        category: "Agile",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-4-5",
        title: "Database Backup",
        description: "Run backup for production database.",
        date: "2025-11-15",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        followUps: []
      }
    ]
  },
  {
    id: 5,
    firstname: "Vihaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: "task-5-1",
        title: "Customer Support Emails",
        description: "Respond to customer queries.",
        date: "2025-11-19",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-5-2",
        title: "Complaint Resolution",
        description: "Resolve two pending customer complaints.",
        date: "2025-11-18",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        followUps: []
      },
      {
        id: "task-5-3",
        title: "Feedback Form Update",
        description: "Improve UI for feedback form.",
        date: "2025-11-21",
        category: "Improvement",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        followUps: []
      },
      {
        id: "task-5-4",
        title: "Training Session",
        description: "Attend internal product knowledge training.",
        date: "2025-11-22",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        followUps: []
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const initializeLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees))
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin))
    }
}

export const getLocalStorage = ()=>{

    initializeLocalStorage()
    const employees = normalizeEmployees(JSON.parse(localStorage.getItem('employees')) || [])
    const admin = JSON.parse(localStorage.getItem('admin')) || []
    localStorage.setItem('employees', JSON.stringify(employees))
    return {employees,admin}
}

const getTaskCount = (tasks) => ({
    active: tasks.filter((task) => task.active).length,
    newTask: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    failed: tasks.filter((task) => task.failed).length,
})

const normalizeEmployees = (savedEmployees) =>
    savedEmployees.map((employee) => {
        const tasks = (employee.tasks || []).map((task, index) => ({
            id: task.id || `task-${employee.id}-${index}-${Date.now()}`,
            title: task.title || task.taskTitle || 'Untitled task',
            description: task.description || task.taskDescription || '',
            date: task.date || task.taskDate || '',
            category: task.category || 'General',
            active: Boolean(task.active),
            newTask: Boolean(task.newTask),
            completed: Boolean(task.completed),
            failed: Boolean(task.failed),
            followUps: task.followUps || [],
        }))

        return {
            ...employee,
            tasks,
            taskCount: getTaskCount(tasks),
        }
    })
