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
- **Interactive Maps**: Visual location of campgrounds is provided using Mapbox and GeoCoding.
- **Image Uploads**: Cloud-based image storage done using Cloudinary.`,
        techStack: ["Node.js", "Express", "MongoDB", "Passport.js", "Bootstrap", "Mapbox", "Cloudinary"],
        repoLink: "https://github.com/Anish07/yelpcamp",
        liveLink: "https://yelp-camp-fzrm.vercel.app/",
        previewLink: "/products/yelpcamp/site",
        images: ["/assets/projects/yelpcamp-home.png"],
    },
    {
        id: "smartresumeanalyzer",
        title: "Smart Resume Analyzer",
        description: "An AI-powered tool designed to analyze resumes and provide actionable feedback. Cover Letter Analysis coming soon!",
        longDescription: `Smart Resume Analyzer leverages Google's Gemini AI to help job seekers improve their resumes. It parses PDF resumes, extracts key information, and provides detailed feedback on how to improve.

Key features include:
- **Resume Parsing**: Automatically extracts text from PDF resumes using Apache Tika.
- **AI Analysis**: Uses Google Gemini to summarize and rate resumes.
- **Interactive Dashboard**: Visualizes analysis results to support your resume improvement journey.
- **Secure Authentication**: Provides JWT-based user security.`,
        techStack: ["Angular", "Spring Boot", "Java", "Google Gemini API", "PostgreSQL", "Apache Tika"],
        repoLink: "https://github.com/Anish07/smartresumeanalyzer",
        liveLink: "https://smartresumeanalyzer-43ii.onrender.com",
        previewLink: "/products/smartresumeanalyzer/site",
        images: ["/assets/projects/smart-resume-home.png"],
    },
    {
        id: "tvsearchapp",
        title: "TV Show Search", // Updated title from README
        description: "A simple, premium-styled web application to search for TV shows.",
        longDescription: `A simple, premium-styled web application that allows users to search for TV shows and view their posters. Built using the TVMaze API.

Key features include:
- **Search Functionality**: Instantly find TV shows by title.
- **Premium UI**: Modern dark mode design with responsive grid layout and hover effects.
- **Dynamic Content**: Fetches and displays show posters dynamically.`,
        techStack: ["JavaScript", "HTML5", "CSS3", "Axios", "TVMaze API"],
        repoLink: "https://github.com/Anish07/TvSearchApp",
        liveLink: "https://tv-search-app-beta.vercel.app",
        previewLink: "/products/tvsearchapp/site",
        images: ["/assets/projects/tv-search-home.png"],
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
        images: ["/assets/projects/artx-home.png"],
    },
];
