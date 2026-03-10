import {
  Bitcoin,
  Calendar,
  GraduationCap,
  Home,
  Hospital,
  Store,
  Truck,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  heroImage?: string;
  title: string;
  shortTitle: string;
  period: string;
  description: string;
  fullDescription: string;
  features: string[];
  detailedFeatures: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  mobileSpecificFeatures?: string[];
  techDetails: {
    name: string;
    purpose: string;
  }[];
  category: string;
  icon: LucideIcon;
  color: string;
  status: string;
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
  impact: {
    metric: string;
    value: string;
  }[];
  role: string;
  team: string;
  duration: string;
}

export const projectsData: Project[] = [
  {
    id: "event-management",

    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1071&q=80",

    title: "Event Vendor Booking Platform",
    shortTitle: "Event Management",
    period: "2023",

    description: "Marketplace platform connecting event vendors with users planning events.",

    fullDescription:
      "The Event Vendor Booking Platform allows vendors such as photographers, anchors, caterers, and performers to showcase their services and portfolios. Users can search for vendors based on city, budget, and event requirements and book them directly through the platform.",

    features: [
      "Vendor account registration and profile management",
      "Vendor portfolio including photos, videos, and reels",
      "City-based vendor discovery",
      "Budget-based vendor filtering",
      "Vendor booking system",
      "Service categories like photographers, anchors, caterers, and dhol players",
    ],

    detailedFeatures: [
      {
        title: "Vendor Profile Management",
        description:
          "Vendors can create profiles showcasing their services, experience, and media such as photos and reels.",
      },
      {
        title: "City-Based Vendor Discovery",
        description: "Users can search vendors based on their event location to find nearby professionals.",
      },
      {
        title: "Budget-Based Filtering",
        description: "Users can filter vendors according to their budget and event requirements.",
      },
      {
        title: "Vendor Booking Workflow",
        description: "Users can contact and book vendors directly through the platform.",
      },
    ],

    techStack: ["Node.js", "Express.js", "React.js", "MongoDB"],

    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend API development for vendor management and booking logic.",
      },
      {
        name: "Express.js",
        purpose: "Handled REST API routing and middleware.",
      },
      {
        name: "MongoDB",
        purpose: "Database for storing vendor profiles, services, and bookings.",
      },
      {
        name: "React.js",
        purpose: "Frontend interface for vendor discovery and booking.",
      },
    ],

    category: "Marketplace",
    icon: Calendar,
    color: "gradient-primary",
    status: "completed",

    challenges: [
      {
        title: "Vendor Discovery Optimization",
        description: "Efficiently filtering vendors by location, category, and budget.",
        solution: "Implemented optimized database queries with indexing for faster vendor search results.",
      },
    ],

    impact: [
      {
        metric: "Vendor Discovery Speed",
        value: "2x Faster",
      },
    ],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "5 Months",
  },
  {
    id: "restaurant-analytics",

    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1071&q=80",

    title: "Restaurant Analytics & Inventory Management",
    shortTitle: "Restaurant Analytics",
    period: "2024",

    description: "Restaurant management system tracking menu sales, ingredient usage, and business analytics.",

    fullDescription:
      "This system helps restaurants monitor their operations by tracking menu item sales on daily and monthly bases. The platform calculates ingredient consumption based on ordered items and provides analytics to help restaurants manage inventory and optimize their menu performance.",

    features: [
      "Daily and monthly menu item sales tracking",
      "Ingredient usage calculation",
      "Restaurant inventory monitoring",
      "Sales analytics dashboard",
      "Menu performance analysis",
      "Restaurant business insights",
    ],

    detailedFeatures: [
      {
        title: "Sales Tracking System",
        description: "Tracks how many menu items are sold daily and monthly to generate restaurant sales insights.",
      },
      {
        title: "Ingredient Consumption Calculation",
        description: "Automatically calculates ingredient usage based on menu orders and predefined recipe quantities.",
      },
      {
        title: "Inventory Monitoring",
        description: "Restaurants can monitor ingredient stock levels based on sales data.",
      },
      {
        title: "Business Analytics",
        description: "Provides insights into popular menu items and restaurant performance.",
      },
    ],

    techStack: ["Node.js", "Express.js", "React.js", "MongoDB"],

    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend APIs for sales tracking and analytics calculations.",
      },
      {
        name: "Express.js",
        purpose: "API routing and middleware handling.",
      },
      {
        name: "MongoDB",
        purpose: "Stores menu items, ingredient data, and sales records.",
      },
      {
        name: "React.js",
        purpose: "Frontend interface for restaurant dashboards.",
      },
    ],

    category: "Business Management",
    icon: Utensils,
    color: "gradient-accent",
    status: "completed",

    challenges: [
      {
        title: "Ingredient Usage Calculation",
        description: "Calculating ingredient consumption based on menu item recipes and order quantities.",
        solution:
          "Created a recipe-based data model linking menu items to ingredients and computed consumption dynamically.",
      },
    ],

    impact: [
      {
        metric: "Inventory Accuracy",
        value: "Improved",
      },
      {
        metric: "Sales Insights",
        value: "Real-time Tracking",
      },
    ],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "4 Months",
  },
  {
    id: "elearn",

    title: "E-Learning Video Platform",
    shortTitle: "E-Learning",
    period: "2024",

    description: "Video learning platform where creators upload educational content and earn revenue from purchases.",

    fullDescription:
      "Creators upload educational videos to the platform and earn revenue when users purchase their courses. Videos are stored in AWS S3 and payment is handled through PayTabs. The platform supports multiple languages for global accessibility.",

    features: [
      "Video upload by creators",
      "Course purchasing system",
      "Creator earning model",
      "AWS S3 storage",
      "Multi-language platform",
    ],
    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend APIs for video uploads, purchases, and creator earnings.",
      },
      {
        name: "React.js",
        purpose: "Frontend interface for watching and purchasing courses.",
      },
      {
        name: "MongoDB",
        purpose: "Stores user data, courses, and purchase history.",
      },
      {
        name: "AWS S3",
        purpose: "Cloud storage used for storing uploaded video content.",
      },
      {
        name: "PayTabs",
        purpose: "Payment gateway used for course purchases.",
      },
    ],

    techStack: ["Node.js", "React.js", "MongoDB", "AWS S3", "PayTabs"],
    detailedFeatures: [
      {
        title: "Video Upload & Storage",
        description: "Creators can upload learning videos which are securely stored using AWS S3 cloud storage.",
      },
      {
        title: "Course Purchase System",
        description: "Users can purchase video courses through integrated PayTabs payment gateway.",
      },
      {
        title: "Creator Earnings Model",
        description: "Course creators earn revenue whenever users purchase their learning videos.",
      },
      {
        title: "Multilingual Platform",
        description:
          "Platform supports multiple languages allowing users from different regions to access learning content.",
      },
    ],

    category: "Education",
    icon: GraduationCap,
    color: "gradient-primary",
    status: "completed",

    challenges: [],
    impact: [],

    role: "Backend Developer",
    team: "4 Developers",
    duration: "6 Months",
  },
  {
    id: "property-platform",

    title: "Property Rental Platform",
    shortTitle: "Property",
    period: "2024",

    description: "Platform connecting property owners and renters with multilingual support and online payments.",

    fullDescription:
      "Property owners can list their properties while renters can search and contact owners. The platform supports multiple languages and integrates Rapid payment gateway for online transactions.",

    features: [
      "Property listing by owners",
      "Search and browse properties",
      "Multilingual support",
      "Online payment integration",
    ],
    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend APIs for property listing and renter-owner communication.",
      },
      {
        name: "React.js",
        purpose: "Frontend interface for property browsing and management.",
      },
      {
        name: "MongoDB",
        purpose: "Database for storing property listings and user data.",
      },
      {
        name: "Rapid Payment Gateway",
        purpose: "Used for handling secure property related payments.",
      },
    ],
    techStack: ["Node.js", "React.js", "MongoDB"],
    detailedFeatures: [
      {
        title: "Property Listing by Owners",
        description:
          "Property owners can create listings with details such as location, price, images, and property specifications.",
      },
      {
        title: "Property Discovery for Renters",
        description: "Renters can browse available properties and filter them based on their requirements.",
      },
      {
        title: "Multi-language Support",
        description:
          "The platform supports multiple languages allowing users from different regions to easily access property listings.",
      },
      {
        title: "Payment Integration",
        description:
          "Rapid payment gateway is integrated to handle secure online payments for property related transactions.",
      },
    ],
    category: "Real Estate",
    icon: Home,
    color: "gradient-accent",
    status: "completed",

    challenges: [],
    impact: [],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "5 Months",
  },
  {
    id: "delivery-management",

    title: "Delivery Management System",
    shortTitle: "Delivery System",
    period: "2024",

    description: "Parcel delivery platform with agents and delivery boys managing order fulfillment.",

    fullDescription:
      "A logistics platform that allows agents to create delivery tasks which are then accepted by delivery boys. Delivery tracking is implemented using Google APIs and payment processing is integrated using PayPal.",

    features: [
      "Agent-based delivery creation",
      "Delivery boy acceptance system",
      "Parcel delivery tracking",
      "PayPal payment integration",
      "Google Maps API tracking",
    ],

    detailedFeatures: [
      {
        title: "Delivery Assignment",
        description: "Agents create delivery requests which are accepted by available delivery boys.",
      },
      {
        title: "Location Tracking",
        description: "Google Maps APIs used to track delivery routes and location.",
      },
    ],
    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend APIs for video uploads, purchases, and creator earnings.",
      },
      {
        name: "React.js",
        purpose: "Frontend interface for watching and purchasing courses.",
      },
      {
        name: "MongoDB",
        purpose: "Stores user data, courses, and purchase history.",
      },
      {
        name: "AWS S3",
        purpose: "Cloud storage used for storing uploaded video content.",
      },
      {
        name: "PayTabs",
        purpose: "Payment gateway used for course purchases.",
      },
    ],
    techStack: ["Node.js", "React.js", "MongoDB", "Google Maps API", "PayPal"],

    category: "Logistics",
    icon: Truck,
    color: "gradient-primary",
    status: "completed",

    challenges: [],
    impact: [],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "4 Months",
  },
  {
    id: "crypto-simulation",

    heroImage: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1071&q=80",

    title: "Crypto Trading Simulation Game",
    shortTitle: "Crypto Game",
    period: "2024",

    description: "Virtual cryptocurrency trading game where users build portfolios and compete based on profit.",

    fullDescription:
      "This project is a cryptocurrency trading simulation game where users receive virtual points and create crypto portfolios within a defined time window. Admin creates trading tables with defined dates such as creation date, freeze date, and closing date. Users can buy coins like Bitcoin and others using virtual funds until the freeze date. Winners are determined based on portfolio profit calculated using real-time crypto prices fetched from CoinMarketCap APIs.",

    features: [
      "Virtual crypto trading with dummy funds",
      "Portfolio creation for each game table",
      "Freeze date to stop new purchases",
      "Automatic winner calculation",
      "Real-time coin prices from CoinMarketCap",
    ],

    detailedFeatures: [
      {
        title: "Portfolio Management",
        description: "Users create portfolios by purchasing different cryptocurrencies using virtual points.",
      },
      {
        title: "Time-Based Game Logic",
        description: "Game tables have creation, freeze, and closing dates controlling trading activity.",
      },
      {
        title: "Real-Time Crypto Prices",
        description: "CoinMarketCap API used to fetch real-time cryptocurrency prices.",
      },
    ],

    techStack: ["Node.js", "React.js", "MongoDB", "CoinMarketCap API"],

    techDetails: [
      {
        name: "Node.js",
        purpose: "Handled trading logic and portfolio calculations.",
      },
      {
        name: "MongoDB",
        purpose: "Stored portfolio and user trading data.",
      },
      {
        name: "CoinMarketCap API",
        purpose: "Fetched real-time cryptocurrency prices.",
      },
    ],

    category: "FinTech",
    icon: Bitcoin,
    color: "gradient-accent",
    status: "completed",

    challenges: [
      {
        title: "Profit Calculation",
        description: "Calculating portfolio profit using real-time crypto values.",
        solution: "Stored purchase price and compared it with latest market price fetched from API.",
      },
    ],

    impact: [{ metric: "User Engagement", value: "High" }],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "5 Months",
  },
  {
    id: "restaurant-management",

    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1071&q=80",

    title: "Restaurant Management & Discovery Platform",
    shortTitle: "Restaurant Management",
    period: "2024",

    description:
      "Restaurant discovery platform with multilingual menu translation, distance-based search, and subscription system.",

    fullDescription:
      "This platform allows restaurants to onboard their businesses and manage menus while customers can discover nearby restaurants based on location. Restaurant data and menus are uploaded via Excel or JSON and automatically translated into multiple languages using the DeepL API. The system includes distance-based restaurant discovery and Stripe-based subscription plans for restaurants.",

    features: [
      "Restaurant onboarding using Excel or JSON upload",
      "Automatic multilingual menu translation",
      "Distance-based restaurant discovery",
      "Subscription system using Stripe",
      "Restaurant menu management",
      "User-friendly restaurant browsing experience",
    ],

    detailedFeatures: [
      {
        title: "Bulk Restaurant Import",
        description:
          "Restaurants can be created by uploading structured Excel or JSON files, making onboarding faster.",
      },
      {
        title: "Multilingual Menu Translation",
        description: "Integrated DeepL API to automatically translate restaurant menus into six different languages.",
      },
      {
        title: "Distance-Based Search",
        description: "Users can discover restaurants nearby using geolocation-based sorting.",
      },
      {
        title: "Subscription Management",
        description: "Stripe integration allows restaurants to subscribe to platform plans.",
      },
    ],

    techStack: ["Node.js", "React.js", "MongoDB", "Stripe", "DeepL API"],

    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend APIs for restaurant, menu, and subscription management.",
      },
      {
        name: "MongoDB",
        purpose: "Stores restaurant details, menus, and user data.",
      },
      {
        name: "DeepL API",
        purpose: "Used for automatic translation of restaurant menus.",
      },
      {
        name: "Stripe",
        purpose: "Subscription payment system for restaurants.",
      },
    ],

    category: "Food & Hospitality",
    icon: Store,
    color: "gradient-primary",
    status: "completed",

    challenges: [
      {
        title: "Menu Translation Automation",
        description: "Automatically translating restaurant menus into multiple languages.",
        solution: "Integrated DeepL API and built a pipeline to translate menu data during upload.",
      },
    ],

    impact: [{ metric: "Restaurant Onboarding Speed", value: "3x Faster" }],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "6 Months",
  },
  {
    id: "nursing-management",

    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1071&q=80",

    title: "Nursing Workforce Management System",
    shortTitle: "Nursing Management",
    period: "Aug 2023 - Dec 2023",

    description:
      "Healthcare workforce system for managing nurse shift scheduling and payment calculation across multiple hospitals.",

    fullDescription:
      "The Nursing Workforce Management System allows hospitals to manage nurse scheduling through predefined shift slots. Nurses can select available time slots based on their availability, and the system automatically calculates total working hours and payment based on completed shifts.",

    features: [
      "Multi-hospital management",
      "Nurse shift slot selection",
      "Working hours calculation",
      "Automated nurse payment calculation",
      "Nurse shift history tracking",
      "Hospital-wise workforce management",
    ],

    detailedFeatures: [
      {
        title: "Multi-Hospital Management",
        description: "System allows multiple hospitals to manage nurse schedules in a centralized platform.",
      },
      {
        title: "Shift Slot Selection",
        description: "Hospitals create time slots and nurses select shifts according to their availability.",
      },
      {
        title: "Working Hours Calculation",
        description: "System calculates total hours worked by nurses based on selected shift slots.",
      },
      {
        title: "Payment Calculation",
        description: "Automatic calculation of nurse payments depending on total hours worked.",
      },
    ],

    techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript"],

    techDetails: [
      {
        name: "Node.js",
        purpose: "Used to build backend services for scheduling and payment calculation.",
      },
      {
        name: "Express.js",
        purpose: "Handled routing and API architecture.",
      },
      {
        name: "MongoDB",
        purpose: "Stored nurse, hospital, and shift scheduling data.",
      },
    ],

    category: "Healthcare Software",
    icon: Hospital,
    color: "gradient-primary",
    status: "completed",

    challenges: [
      {
        title: "Accurate Working Hour Calculation",
        description: "Calculating hours across multiple selected shift slots.",
        solution: "Implemented time slot based calculation logic to compute total working hours.",
      },
      {
        title: "Handling Multiple Hospitals",
        description: "Ensuring efficient nurse scheduling across multiple hospitals.",
        solution: "Separated hospital data and optimized queries for shift allocation.",
      },
    ],

    impact: [
      {
        metric: "Scheduling Efficiency",
        value: "60% ↑",
      },
      {
        metric: "Manual Work Reduction",
        value: "High",
      },
    ],

    role: "Backend Developer",
    team: "3 Developers",
    duration: "5 Months",
  },
  {
    id: "hrms",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1071&q=80",
    title: "HRMS – Human Resource Management System",
    shortTitle: "HRMS",
    period: "Jan 2023 - Aug 2023",

    description:
      "Enterprise HR management platform for project tracking, employee collaboration, and automated leave policy management.",

    fullDescription:
      "HRMS is an internal enterprise platform designed to manage employees, projects, and organizational workflows efficiently. The system includes project management with milestones and tasks, real-time project chat using Socket.IO, and an automated leave management system based on company HR policies.",

    features: [
      "Project management with milestones and tasks",
      "Task status tracking (Completed, In Review, Reassigned)",
      "Project-wise real-time group chat",
      "Automated leave management system",
      "Employee task tracking",
      "Role-based system for employees and managers",
    ],

    detailedFeatures: [
      {
        title: "Project & Milestone Management",
        description:
          "Projects are divided into milestones and tasks allowing teams to track development progress efficiently.",
      },
      {
        title: "Task Workflow Tracking",
        description:
          "Tasks move through workflow statuses like Completed, In Review, and Reassigned to ensure better project visibility.",
      },
      {
        title: "Real-Time Team Chat",
        description:
          "Socket.IO based group chat system allowing employees to communicate within project-specific rooms.",
      },
      {
        title: "Automated Leave Policy",
        description:
          "Leave system automatically credits casual, sick, and emergency leaves according to company HR rules.",
      },
    ],

    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "JavaScript"],

    techDetails: [
      {
        name: "Node.js",
        purpose: "Backend runtime used to build scalable REST APIs.",
      },
      {
        name: "Express.js",
        purpose: "Web framework used for routing and middleware management.",
      },
      {
        name: "MongoDB",
        purpose: "Database used to store employee, project, milestone, and task data.",
      },
      {
        name: "Socket.IO",
        purpose: "Implemented real-time project group chat functionality.",
      },
    ],

    category: "Enterprise Software",
    icon: Users,
    color: "gradient-accent",
    status: "completed",

    challenges: [
      {
        title: "Automating Leave Allocation",
        description: "Different leave types needed to be credited automatically at specific times.",
        solution:
          "Implemented scheduled logic that credits casual leave monthly and other leaves during predefined months.",
      },
      {
        title: "Real-Time Chat Between Project Members",
        description: "Ensuring messages are delivered instantly within project teams.",
        solution: "Used Socket.IO rooms to create project-specific communication channels.",
      },
    ],

    impact: [
      {
        metric: "Project Tracking Efficiency",
        value: "70% ↑",
      },
      {
        metric: "Team Communication",
        value: "Real-time Collaboration",
      },
    ],

    role: "Backend Developer",
    team: "4 Developers",
    duration: "8 Months",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
