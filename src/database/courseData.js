const courseData = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },

  {
    id: 2,
    name: "Web Development with React",
    instructor: "Jane Smith",
    description:
      "Master web development using React and create dynamic websites.",
    enrollmentStatus: "Open",
    thumbnail: "your.image2.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["HTML, CSS, and JavaScript fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started with React",
        content: "Introduction to React, setting up a React project.",
      },
      {
        week: 2,
        topic: "Component-Based Development",
        content: "Creating and using React components.",
      },
    ],
    students: [
      {
        id: 201,
        name: "Eva Brown",
        email: "eva@example.com",
      },
      {
        id: 202,
        name: "Charlie Wilson",
        email: "charlie@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Advanced Python Programming",
    instructor: "Sarah Miller",
    description:
      "Dive deep into Python programming with advanced concepts and real-world projects.",
    enrollmentStatus: "Open",
    thumbnail: "your.image3.here",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Virtual Classroom",
    prerequisites: ["Intermediate Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Python Data Structures",
        content:
          "Exploring data structures like lists, dictionaries, and sets.",
      },
      {
        week: 2,
        topic: "Object-Oriented Programming",
        content: "Understanding classes, objects, and inheritance in Python.",
      },
    ],
    students: [
      {
        id: 301,
        name: "David Anderson",
        email: "david@example.com",
      },
      {
        id: 302,
        name: "Sophia Adams",
        email: "sophia@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Maria Rodriguez",
    description:
      "Learn the fundamentals of data science, including data analysis and machine learning.",
    enrollmentStatus: "Open",
    thumbnail: "your.image4.here",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of statistics and programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content:
          "Overview of data science, data collection, and data cleaning.",
      },
      {
        week: 2,
        topic: "Exploratory Data Analysis",
        content: "Techniques for exploring and visualizing data.",
      },
    ],
    students: [
      {
        id: 401,
        name: "Emily Clark",
        email: "emily@example.com",
      },
      {
        id: 402,
        name: "Daniel Brown",
        email: "daniel@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Digital Marketing Strategies",
    instructor: "Michael Turner",
    description:
      "Master the art of digital marketing and create effective online marketing campaigns.",
    enrollmentStatus: "Open",
    thumbnail: "your.image5.here",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Virtual Classroom",
    prerequisites: ["Basic understanding of marketing principles"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing channels and strategies.",
      },
      {
        week: 2,
        topic: "Content Marketing",
        content:
          "Creating and promoting engaging content for online audiences.",
      },
    ],
    students: [
      {
        id: 501,
        name: "Olivia Wilson",
        email: "olivia@example.com",
      },
      {
        id: 502,
        name: "Jacob Harris",
        email: "jacob@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "Machine Learning with Python",
    instructor: "Laura Evans",
    description:
      "Explore the world of machine learning using Python and work on real-world projects.",
    enrollmentStatus: "Open",
    thumbnail: "your.image6.here",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate Python knowledge",
      "Basic understanding of machine learning",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content:
          "Overview of machine learning, types of algorithms, and data preprocessing.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content:
          "Exploring supervised learning algorithms like regression and classification.",
      },
    ],
    students: [
      {
        id: 601,
        name: "Sophia Rodriguez",
        email: "sophia@example.com",
      },
      {
        id: 602,
        name: "Ethan Anderson",
        email: "ethan@example.com",
      },
    ],
  },
  {
    id: 7,
    name: "Graphic Design Fundamentals",
    instructor: "Alex Turner",
    description:
      "Learn the basics of graphic design, including design principles and digital tools.",
    enrollmentStatus: "Open",
    thumbnail: "your.image7.here",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Virtual Classroom",
    prerequisites: ["No prior design experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Design Principles",
        content:
          "Fundamental design principles, including layout, color, and typography.",
      },
      {
        week: 2,
        topic: "Introduction to Adobe Photoshop",
        content: "Basic tools and techniques for digital image editing.",
      },
    ],
    students: [
      {
        id: 701,
        name: "Ava Harris",
        email: "ava@example.com",
      },
      {
        id: 702,
        name: "Noah Smith",
        email: "noah@example.com",
      },
    ],
  },
  {
    id: 8,
    name: "Photography Fundamentals",
    instructor: "Emma Baker",
    description:
      "Master the art of photography, from camera basics to composition and editing.",
    enrollmentStatus: "Open",
    thumbnail: "your.image8.here",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "On-location and virtual sessions",
    prerequisites: ["No prior photography experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Camera Basics",
        content: "Understanding your camera settings and functions.",
      },
      {
        week: 2,
        topic: "Composition and Framing",
        content: "Exploring the art of framing and composition in photography.",
      },
    ],
    students: [
      {
        id: 801,
        name: "Liam Turner",
        email: "liam@example.com",
      },
      {
        id: 802,
        name: "Olivia Green",
        email: "olivia@example.com",
      },
    ],
  },
  {
    id: 9,
    name: "Healthy Cooking Workshop",
    instructor: "Sophia Miller",
    description:
      "Learn to prepare delicious and nutritious meals for a healthy lifestyle.",
    enrollmentStatus: "Open",
    thumbnail: "your.image9.here",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 5:30 PM - 7:30 PM",
    location: "Cooking School",
    prerequisites: ["No prior cooking experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Healthy Eating",
        content: "Understanding the principles of healthy nutrition.",
      },
      {
        week: 2,
        topic: "Meal Planning and Prep",
        content: "Planning and preparing balanced and tasty meals.",
      },
    ],
    students: [
      {
        id: 901,
        name: "Ella Johnson",
        email: "ella@example.com",
      },
      {
        id: 902,
        name: "William Davis",
        email: "william@example.com",
      },
    ],
  },
  {
    id: 10,
    name: "Spanish Language Immersion",
    instructor: "Carlos Sanchez",
    description:
      "Immerse yourself in the Spanish language and culture through interactive lessons and activities.",
    enrollmentStatus: "Open",
    thumbnail: "your.image10.here",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Virtual Classroom",
    prerequisites: ["No prior Spanish language experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Basic Spanish Conversations",
        content: "Introduction to common Spanish phrases and conversations.",
      },
      {
        week: 2,
        topic: "Exploring Spanish Culture",
        content: "Learn about Spanish traditions, food, and customs.",
      },
    ],
    students: [
      {
        id: 1001,
        name: "Sophie Taylor",
        email: "sophie@example.com",
      },
      {
        id: 1002,
        name: "Mason Clark",
        email: "mason@example.com",
      },
    ],
  },
];
export default courseData;
