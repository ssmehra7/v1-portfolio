import wordwave from "../assets/images/wordwave.png"
import paypro from "../assets/images/paypro.png"
import renthub from "../assets/images/renthub.png"
import cms from "../assets/images/ecommerce-cms.png"
import article from "../assets/images/Screenshot 2024-08-13 203608.png"
import tictactoe from "../assets/images/tictactoe.png"
import store from "../assets/images/ecommerce.png";
import cli from "../assets/images/cli.png";


export const Languages =[
    {
        label:"HTML",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        label:"CSS",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        label:"React.js",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    
    {
        label:"JavaScript",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        label:"TypeScript",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        label:"C++",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
        label:"Python",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        label: "Node",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    
    

]

export const Frameworks=[
   
    {
        label:"Express",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
    {
        label: "Next.js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
        label: "Redux",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
    },
    {
        label: "Django",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
    },
    {
        label:"TailwindCss",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        label:"FramerMotion",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
    },
   
   
    {
        label: "MongoDB",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        label: "Prisma",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
    },
    {
        label: "PostgreSQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    },
    {
        label: "Firebase",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    }
]


export const Tools = [
    {
        label:"Github",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
        label:"Git",
        url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        label: "Cloudflare",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
    },
    {
        label: "AWS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    {
        label: "Docker",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
        label: "Redis",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
    },
    {
        label: "Vercel",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
    },
];






export const ProjectImages = [
    {
        url: wordwave, 
        label: "WordWave",
        description: "Developed a blog application utilizing Cloudflare Worker for serverless backend deployment.", 
        github:"https://github.com/ssmehra7/medium-blog", 
        LiveLink:"https://wordwave-blog-kappa.vercel.app/"
    },
    {
        url: paypro, 
        label: "PayPro",
        description: "Enables users to securely transfer money between accounts and manage their finances effortlessly. Utilized MongoDB transaction model to enforce constraints, preventing users from sending money to multiple recipients simultaneously, ensuring transaction integrity and accountability.", 
        github:"https://github.com/ssmehra7/Paypro", 
        LiveLink:""
    },
    {
        url: store, 
        label: "Ecommerce-Store",
        description: "Made a Client side Ecommerce Store where the data is fetched from the CMS",
        github:"https://github.com/ssmehra7/ecommerce-store", 
        LiveLink:"https://ecommerce-store-ddfcyqo43-ssmehra7s-projects.vercel.app/"
    },
    
    
    

    {
        url: article, 
        label: "Article",
        description: "An article summarizing tool powered by the OpenAI API.", 
        github:"https://github.com/ssmehra7/Ai-summerizer", 
        LiveLink:"https://sumzai.netlify.app/"
    },
    {
        url: cms, 
        label: "E-commerce CMS",
        description: "A content management system for e-commerce platforms.", 
        github:"https://github.com/ssmehra7/E-commerce", 
        LiveLink:"https://e-commerce-admin-red.vercel.app/", 
    },

    {
        url:cli,
        label:"CLI for directory management",
        description:"Developed a Cli tool for Directory management",
        github:"https://github.com/ssmehra7/cli-dir-manager",
        LiveLink:""
    },
    
    
   
   
   
    {
        url: renthub, 
        label: "RentHub",
        description: "Developed a responsive MERN stack app for apartment rentals.", 
        github:"https://github.com/ssmehra7/RentHub",
        LiveLink:"https://renthub-gnse.onrender.com/"
    },
   
  
    {
        url: tictactoe, 
        label: "TicTacToe",
        description: "Made a TicTacToe game when I was learning HTML , CSS, JS",
        github:"https://github.com/ssmehra7/TIcTacToe", 
        LiveLink:""
    },
];





export const links = [
    {
        name:'Home', 
        hash:'#home', 
    },
    {
        name:'About', 
        hash:'#about', 
    },
    
    {
        name:'Skills', 
        hash:'#skills', 
    },
    {
        name:'Projects', 
        hash:'#projects', 
    },
    {
        name:'Contact', 
        hash:'#contact', 
    },
    
]




export const Resume_link = "https://drive.google.com/file/d/1cp7hKT1EGwXTh-gEAgYSUryAMiMlR_XE/view?usp=sharing";