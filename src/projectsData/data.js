// project images import
import entertainmentImage from '../assets/images/projectImages/entertainment.png'
import flashcardImage from '../assets/images/projectImages/flashcard.png'
import bookmyshowImage from '../assets/images/projectImages/bookmyshow.png'
import todoappImage from '../assets/images/projectImages/todoapp.png'
import skyImage from '../assets/images/projectImages/sky.png'

// project tech import
import HTML from '../assets/images/skills/html.png'
import CSS from '../assets/images/skills/css.png'
import JAVASCRIPT from '../assets/images/skills//javascript.png'
import TAILWIND from '../assets/images/skills/tailwind.png'
import REACT from '../assets/images/skills/react.png'
import GITHUB from '../assets/images/skills/github.png'
import MONGODB from '../assets/images/skills/mongodb.png'
import NODEJS from '../assets/images/skills/nodejs.png'
import EXPRESS from '../assets/images/skills/express.png'
import REDUX from '../assets/images/skills/redux.png'


// project icons import

import entertainmentIcon from '../assets/images/projectIcons/entertainmentIcon.png'
import flashcardIcon from '../assets/images/projectIcons/flashcardIcon.jpg'
import bookmyshowIcon from '../assets/images/projectIcons/bookMyShowIcon.png'
import todoIcon from '../assets/images/projectIcons/todoIcon.png'
import skyIcon from '../assets/images/projectIcons/sky.jpeg'


const data = [
    { name:'Entertainment App',
        icon:entertainmentIcon,
        source:"https://github.com/muneeb41/entertainment",
        live: 'https://entertainment-client.onrender.com/',
        image:entertainmentImage,
        description:'The Entertainment App is a full-stack application designed to provide users with access to a vast collection of movies and TV shows, leveraging the TMDB API for fetching media details. It features user authentication, media exploration, and personal bookmarks, offering a comprehensive and personalized media browsing experience.',
        features:[
            'User Authentication: Utilizes JWT for secure login and registration, ensuring user data protection.',
            'Media Exploration: Allows users to discover trending movies and TV shows, with detailed views available for each media item.',
            'Bookmarks: Enables users to bookmark their favorite media, creating a personalized list of favorites accessible at any time.',
            'Detailed Media Information: Provides in-depth details about movies and TV shows, including cast, genres, ratings, and more.'
        ],
        tech:[
            {
                name: 'React js',
                image:REACT
            },
            {
                name: 'Node js',
                image:NODEJS
            },
            {
                name: 'MongoDB',
                image:MONGODB
            },
            {
                name: 'Express js',
                image:EXPRESS
            },
            {
                name: 'Tailwind CSS',
                image:TAILWIND
            }
        ]
    },
    { name:'Flashcard App',
        icon:flashcardIcon,
        source:"https://github.com/muneeb41/Flashcard-Generator",
        live: 'https://flashcard-generator-six.vercel.app/',
        image:flashcardImage,
        description:'The Flashcard Generator enables users to create, customize, share, download, and print flashcards with text and images. It offers a responsive, dark-mode-enabled design and three main pages: Create Flashcard, My Flashcards, and Flashcard Details. Built with React, Redux, Tailwind CSS, and Vitest for testing, it is deployed on Vercel.',
        features:[
            "Card Creation: Easily create and customize flashcards with text and images.",
            "Sharing: Share your flashcards with others seamlessly.",
            "Download and Print: Download flashcards in various formats and print them for offline use.",
            "Deletion: Remove unwanted flashcards with ease.",
            "Dark Mode: There is also a Dark Mode that can be enabled by clicking the dark button at the top of the website."
          ],
          tech:[
            {
                name: 'React js',
                image:REACT
            },
            {
                name: 'Tailwind CSS',
                image:TAILWIND
            },
            {
                name: 'Java Script',
                image:JAVASCRIPT
            },
            {
                name: 'Redux',
                image:REDUX
            },
        ]  
    },
    { name:'BookMyShow App',
        icon:bookmyshowIcon,
        source:"https://github.com/muneeb41/bookMyShow",
        live: 'https://bookmyshow-mzlb.onrender.com/',
        image:bookmyshowImage,
        description:'This is a Ticket Booking website where the user can book a movie ticket with specified seats at a specified slot and get a confirmation that, whether booking was successful or not. The movie booked by the user will be stored in the database and is retrieved and shown to the user.',
        features:[
            "Ticket Booking System: Allows users to book movie tickets with specific seats and time slots.",
            "Booking Confirmation: Provides confirmation on successful booking or errors.",
            "Database Integration: Stores and retrieves booked movies from a database.",
            "Frontend: Built with React, featuring a fully interactive user interface.",
            "API Integration: Uses Axios/Fetch for handling API calls."
          ],
        tech:[
            {
                name: 'React js',
                image:REACT
            },
            {
                name: 'Node js',
                image:NODEJS
            },
            {
                name: 'MongoDB',
                image:MONGODB
            },
            {
                name: 'Express js',
                image:EXPRESS
            },
            {
                name: 'Tailwind CSS',
                image:TAILWIND
            }
        ]
    },
    { name:'TodoApp App',
        icon:todoIcon,
        source:"https://github.com/muneeb41/TodoApp-mern",
        live: 'https://todoapp-mern-client.onrender.com/',
        image:todoappImage,
        description:'The Todo App offers seamless task management with sign-up, log-in, and log-out features. It supports full CRUD operations, enabling users to create, view, update, and delete tasks efficiently. With a responsive, user-friendly interface, users can organize tasks across devices, improving productivity and keeping daily goals on track.',
        features:[
            "User Authentication: Sign-up functionality",
            "User Authentication: Log-in functionality",
            "User Authentication: Log-out functionality",
            "Full CRUD operations: Create , Read , Update and Delete Tasks ",
        ],
        tech:[
            {
                name: 'React js',
                image:REACT
            },
            {
                name: 'Node js',
                image:NODEJS
            },
            {
                name: 'MongoDB',
                image:MONGODB
            },
            {
                name: 'Express js',
                image:EXPRESS
            },
            {
                name: 'Tailwind CSS',
                image:TAILWIND
            }
        ]
    },
    { name:'SKY Coaching Centre App',
        icon:skyIcon,
        source:"https://github.com/muneeb41/sky-coaching-centre",
        live: 'https://muneeb41.github.io/sky-coaching-centre/',
        image:skyImage,
        description:'this is sky coaching centre website which provide courses and information of about coaching . also it contain form which help to student to contact with coaching regarding his query.',
        features:[
            "Course Offerings: Information about various courses available at the coaching center.",
            "Coaching Information: Details about the coaching center, its philosophy, and methodologies.",
            "Contact Form: A form for students to submit queries and contact the coaching center.",
            "User-Friendly Interface: Easy navigation for users to find information quickly."
        ],
        tech:[
            {
                name: 'Java Script',
                image:JAVASCRIPT
            }, 
            {
                name: 'HTML',
                image:HTML
            }, 
            {
                name: 'CSS',
                image:CSS
            }, 
        ]
    }
]

export default data;