export const products = [
    {
        id: "yelpcamp",
        title: "YelpCamp",
        description: "A comprehensive platform for camping enthusiasts to share and discover campgrounds.",
        longDescription: `YelpCamp is a full-stack web application designed for camping enthusiasts. It allows users to create, view, and review campgrounds from all over the world. 

Key features include:
- **User Authentication**: Secure login and registration using Passport.js.
- **Campground Management**: Create, edit, and delete campgrounds.
- **Reviews & Ratings**: Leave reviews and ratings for campgrounds.
- **Interactive Maps**: visual location of campgrounds using Mapbox.
- **Image Uploads**: Cloud-based image storage with Cloudinary.`,
        techStack: ["Node.js", "Express", "MongoDB", "Passport.js", "Bootstrap", "Mapbox", "Cloudinary"],
        repoLink: "https://github.com/Anish07/yelpcamp",
        liveLink: "https://yelp-camp-fzrm.vercel.app/",
        previewLink: "/products/yelpcamp/site",
        images: [], // Add screenshots here
    },
    {
        id: "smartresumeanalyzer",
        title: "Smart Resume Analyzer",
        description: "An AI-powered tool designed to analyze resumes and provide actionable feedback. Cover Letter Analysis coming soon!",
        longDescription: `Smart Resume Analyzer leverages Google's Gemini AI to help job seekers improve their resumes. It parses PDF resumes, extracts key information, and provides detailed feedback on how to improve.

Key features include:
- **Resume Parsing**: Automatically extracts text from PDF resumes using Apache Tika.
- **AI Analysis**: Uses Google Gemini to summarize and rate resumes.
- **Interactive Dashboard**: Visualizes analysis results.
- **Secure Authentication**: JWT-based user security.`,
        techStack: ["Angular", "Spring Boot", "Java", "Google Gemini API", "PostgreSQL", "Apache Tika"],
        repoLink: "https://github.com/Anish07/smartresumeanalyzer",
        liveLink: "https://smartresumeanalyzer-anish07.vercel.app/",
        previewLink: "/products/smartresumeanalyzer/site",
        images: [],
    },
    {
        id: "tvsearchapp",
        title: "TV Search App",
        description: "A web application to search for TV shows and view details.",
        longDescription: `The TV Search App allows users to search for their favorite TV shows and get detailed information including cast, ratings, and summaries. It utilizes a public TV API to fetch real-time data.`,
        techStack: ["JavaScript", "HTML", "CSS", "TV Maze API"], // Inferring standard stack for this type of app
        repoLink: "https://github.com/Anish07/TvSearchApp",
        liveLink: "https://tvsearchapp-anish07.vercel.app/",
        previewLink: "/products/tvsearchapp/site",
        images: [],
    },
    {
        id: "artauctionportfolio",
        title: "Art Auction Portfolio",
        description: "A digital markplace platform for buying, selling, and auctioning artwork.",
        longDescription: `A specialized markplace site designed to showcase art items available for auction. It features a gallery view, item details, and potential bidding mechanisms or status updates.`,
        techStack: ["React", "JavaScript", "CSS", "Firebase", "Tailwind CSS", "Vite"],
        repoLink: "https://github.com/Anish07/ArtAuctionPortfolio",
        liveLink: "https://online-art-auctioning-platform.vercel.app/",
        previewLink: "/products/artauctionportfolio/site",
        images: [],
    },
];
