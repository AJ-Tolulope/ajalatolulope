// Type for 'home' object
export type Home = {
  heroContent: Record<string, unknown>;
  aboutContent: {
    socialLinks: {
      a: string;
      i: string;
    };
  };
  services: Record<string, unknown>;
  portfolios: Array<Record<string, unknown>>;
};

export const home: Home = {
  heroContent: {},
  aboutContent: {
    socialLinks: {
      a: "https://www.twitter.com/tolex_tolulope",
      i: "fab fa-twitter",
    },
  },
  services: {},
  portfolios: [{}],
};

type timeline = {
  h: string;
  p: string;
};

// Type for 'textData' object
type TextData = {
  quote: string[];
  typingText: string;
  about: {
    main: string;
    education: timeline[];
    tools: timeline[];
  };
  services: {i: string,h:string,p:string}[]
};

export const textData: TextData = {
  quote: [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  ],
  typingText: "Front-end Web Development",
  about: {
    main: "Ajala Tolulope is a passionate web developer specializing in custom website creation that reflects the unique vision and goals of each business. With expertise in designing and developing various types of websites, including portfolios, blogs, and landing pages, Ajala simplifies the often overwhelming process of building a website, allowing business owners to focus on running their operations. Offering tailored website solutions, Ajala is dedicated to bringing ideas to life and enhancing the online presence of your brand. Reach out today to collaborate and turn your website dreams into reality.",
    education: [
      {
        h: "frontend developer",
        p: "I believe that great websites are the result of equal parts technical skill and creative vision. That is why, as a front-end web developer, I have dedicated myself to mastering the art and science of HTML, CSS, and JavaScript. Through a combination of classNameroom education and hands-on experience, I have honed my ability to translate complex concepts into intuitive, bringing your eye-catching designs to life.",
      },
      {
        h: "web designer",
        p: "Whether it's creating a visually stunning portfolio site or a high-performing e-commerce platform, I have the technical know-how and design finesse to bring any project to life. But I dont stop at just delivering a functional website. I aim to craft digital experiences that engage, inspire, and captivate.",
      },
      {
        h: "web developer",
        p: "From responsive design to dynamic animations, I infuse my work with a touch of creativity and a dash of innovation. So, if you are looking for a web developer who will bring a unique blend of technical acumen and creative vision to your project, look no further. Let's create something amazing together!",
      },
    ],
    tools: [
      {
        h: "html - css - javascript",
        p: "HTML, CSS, and JavaScript are the core technologies of web development. HTML structures the content, defining elements like headings, paragraphs, and links. CSS handles the design, controlling the layout, colors, fonts, and overall visual presentation of the website. JavaScript brings interactivity, enabling dynamic content, animations, and responsive user interfaces. Together, these three technologies form the foundation for creating functional, visually appealing, and engaging websites.",
      },
      {
        h: "Visual Studio Code (VS Code)",
        p: "A powerful code editor with features like syntax highlighting, debugging, and extensions that support a wide range of programming languages and frameworks. VS Code helps streamline development by providing a robust environment for writing, testing, and refining code efficiently.",
      },
      {
        h: "Git & GitHub",
        p: "Git is a version control system that tracks changes in your code, enabling collaboration and maintaining a history of project development. GitHub, a platform for hosting Git repositories, allows you to share your code with others, manage versions, and collaborate on projects. Together, they are essential for managing project workflows and ensuring code integrity.",
      },
      {
        h: "React",
        p: "A popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). React helps in creating dynamic and interactive web applications by allowing developers to build reusable UI components, improving efficiency and consistency in the development process.",
      },
    ],
  },
  services: [
    {
      i: "fa-mobile-alt",
      h: "Responsive Website",
      p: "Engaging designs, seamless experience on any device.",
    },
    {
      i: "fa-laptop-code",
      h: "Web Design",
      p: "Beautiful, functional websites that make an impact.",
    },
    {
      i: "fa-code",
      h: "Clean Code",
      p: "Efficient, effective, and easy-to-read code for optimal performance.",
    },
  ],
};

// Type for 'portfolioData' object
export type PortfolioDescription = {
  title: string;
  paragraph: string;
  year: string;
  client: string;
  tools: string;
  web: string;
};

export type Portfolio = {
  id: number;
  category: string;
  imageSrc: string[];
  description: PortfolioDescription;
};

export type PortfolioData = {
  filter: string[];
  portfolio: Portfolio[];
};

export const portfolioData: PortfolioData = {
  filter: ["all", "web app", "landing page", "portfolio", "blog"],
  portfolio: [
    {
      id: 645875238875,
      category: "landing-page",
      imageSrc: [
        "/assets/projects/project-7/1.png",
        "assets/projects/project-7/2.png",
        "assets/projects/project-7/3.png",
        "assets/projects/project-7/4.png",
      ],
      description: {
        title: "agency website",
        paragraph:
          "Studio is an interactive website builder for agencies, freelancers and for everyone who loves design - Check out the solutions and build your new website easily and quickly.",
        year: "2021",
        client: "xyz",
        tools: "HTML, CSS, JAVASCRIPT",
        web: "https://aj-tolulope.github.io/Demo07",
      },
    },
    {
      id: 86284666289,
      category: "landing-page",
      imageSrc: [
        "/assets/projects/project-8/1.png",
        "assets/projects/project-8/2.png",
        "assets/projects/project-8/3.png",
        "assets/projects/project-8/4.png",
      ],
      description: {
        title: "furniture business landing page",
        paragraph:
          "This is a landing page for business agency, responsive design.",
        year: "2020",
        client: "xyz",
        tools: "HTML, CSS, JAVASCRIPT (AOS.js, Swiper.js)",
        web: "https://aj-tolulope.github.io/Demo08",
      },
    },
    {
      id: 8276294763,
      category: "landing-page",
      imageSrc: [
        "/assets/projects/project-9/1.png",
        "assets/projects/project-9/2.png",
        "assets/projects/project-9/3.png",
        "assets/projects/project-9/4.png",
        "assets/projects/project-9/5.png",
      ],
      description: {
        title: "real estate landing page",
        paragraph: "Clean and well structured code of a real estate website",
        year: "2021",
        client: "xyz",
        tools: "HTML, CSS, JAVASCRIPT (Swiper.js)",
        web: "https://aj-tolulope.github.io/Demo09",
      },
    },
    {
      id: 647348289374,
      category: "landing-page",
      imageSrc: [
        "/assets/projects/project-1/1.png",
        "assets/projects/project-1/2.png",
        "assets/projects/project-1/3.png",
        "assets/projects/project-1/4.png",
        "assets/projects/project-1/5.png",
        "assets/projects/project-1/6.png",
      ],
      description: {
        title: "landing page",
        paragraph:
          "Business website for display and keeping in touch with your clients.",
        year: "2021",
        client: "xyz",
        tools: "HTML, CSS, JAVASCRIPT (JQUERY)",
        web: "https://aj-tolulope.github.io/Demo01",
      },
    },
    {
      id: 1224647253,
      category: "web-app",
      imageSrc: [
        "/assets/projects/project-2/1.png",
        "assets/projects/project-2/2.png",
        "assets/projects/project-2/3.png",
        "assets/projects/project-2/4.png",
        "assets/projects/project-2/5.png",
        "assets/projects/project-2/6.png",
      ],
      description: {
        title: "web app",
        paragraph:
          "Simple web application for food blog. Created just with html, css and Javascript.",
        year: "2021",
        client: "xyz",
        tools: "HTML, CSS, JAVASCRIPT",
        web: "https://aj-tolulope.github.io/Demo02",
      },
    },
    {
      id: 198746783658,
      category: "blog",
      imageSrc: [
        "/assets/projects/project-3/1.png",
        "assets/projects/project-3/2.png",
        "assets/projects/project-3/3.png",
        "assets/projects/project-3/4.png",
      ],
      description: {
        title: "blog site",
        paragraph:
          "A very nice layout design professionaly build, responsive website for food blog.",
        year: "2021",
        client: "xyz",
        tools: "HTML, CSS, JAVASCRIPT",
        web: "https://aj-tolulope.github.io/Demo03",
      },
    },
  ],
};
