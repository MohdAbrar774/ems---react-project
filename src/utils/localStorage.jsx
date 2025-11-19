const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile the performance metrics into the monthly report.",
        date: "2025-11-20",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Contact client regarding pending invoice.",
        date: "2025-11-21",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend weekly team alignment meeting.",
        date: "2025-11-22",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Product Listing Update",
        description: "Update price and description on product pages.",
        date: "2025-11-19",
        category: "E-commerce",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Inventory Check",
        description: "Verify remaining stock in warehouse.",
        date: "2025-11-18",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "System Error Report",
        description: "Report a bug found in the dashboard.",
        date: "2025-11-17",
        category: "Technical",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Call Supplier",
        description: "Discuss delivery delays with supplier.",
        date: "2025-11-23",
        category: "Supply Chain",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Content",
        description: "Create 3 new social media posts.",
        date: "2025-11-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Design Review",
        description: "Review new promotional poster designs.",
        date: "2025-11-21",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Email Campaign",
        description: "Schedule the email campaign for Black Friday.",
        date: "2025-11-22",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review pull requests submitted by team members.",
        date: "2025-11-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Documentation",
        description: "Update API docs for new feature rollout.",
        date: "2025-11-20",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve reported issue from QA team.",
        date: "2025-11-17",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Sprint Planning",
        description: "Plan tasks for the next sprint cycle.",
        date: "2025-11-24",
        category: "Agile",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Run backup for production database.",
        date: "2025-11-15",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Support Emails",
        description: "Respond to customer queries.",
        date: "2025-11-19",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Complaint Resolution",
        description: "Resolve two pending customer complaints.",
        date: "2025-11-18",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Feedback Form Update",
        description: "Improve UI for feedback form.",
        date: "2025-11-21",
        category: "Improvement",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Training Session",
        description: "Attend internal product knowledge training.",
        date: "2025-11-22",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
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
export const getLocalStorage = ()=>{

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin)
}