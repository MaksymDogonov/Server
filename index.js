const express = require('express');
const cors = require('cors');
const app = express();

const jsCourse = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        date: "August 3, 2022 20:00",
        description: "Overview of basic concepts and syntax",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=_y9oxzTGERs',
        homeworksIds: [],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 2,
        title: "Working with Variables and Data Types",
        date: "August 5, 2022 20:30",
        description: "Exploring variable usage, numbers, and strings",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=KxVQitQ3a8Y&t=1s',
        homeworksIds: [1],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 3,
        title: "Conditional Statements and Loops",
        date: "August 8, 2022 21:00",
        description: "Using if-else, switch, for, and while",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 4,
        title: "Functions in JavaScript",
        date: "September 20, 2022 19:00",
        description: "Creating and invoking functions",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [1],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 5,
        title: "Working with Arrays",
        date: "September 22, 2022 18:30",
        description: "Manipulating data in arrays",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 6,
        title: "Object-Oriented Programming",
        date: "October 5, 2022 20:00",
        description: "Creating and using objects and classes",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 7,
        title: "Working with APIs",
        date: "October 10, 2022 19:30",
        description: "Fetching and sending data through APIs",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [1],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 8,
        title: "Advanced JavaScript Topics",
        date: "October 15, 2022 21:30",
        description: "Exploring advanced concepts like closures and prototypes",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 9,
        title: "Web Development with JavaScript",
        date: "October 20, 2022 20:00",
        description: "Building interactive web applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 10,
        title: "Node.js Basics",
        date: "November 5, 2022 19:00",
        description: "Introduction to server-side JavaScript with Node.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 11,
        title: "Express.js Fundamentals",
        date: "November 10, 2022 18:30",
        description: "Building web applications with Express.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 12,
        title: "Database Integration with MongoDB",
        date: "November 15, 2022 20:30",
        description: "Working with MongoDB for data storage",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 13,
        title: "Asynchronous JavaScript",
        date: "November 20, 2022 21:00",
        description: "Understanding asynchronous programming with callbacks and promises",
        lessonVideoUrl: '',
        homeworksIds: [1],
        additionalResources: [],
    },
    {
        id: 14,
        title: "React.js Basics",
        date: "December 5, 2022 19:30",
        description: "Introduction to building user interfaces with React.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 15,
        title: "State Management in React",
        date: "December 10, 2022 20:00",
        description: "Managing state in React applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 16,
        title: "React Router and Navigation",
        date: "December 15, 2022 18:30",
        description: "Implementing navigation in React applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 17,
        title: "Redux for State Management",
        date: "January 5, 2023 20:00",
        description: "Using Redux for state management in React",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 18,
        title: "Introduction to Vue.js",
        date: "January 10, 2023 19:30",
        description: "Getting started with the Vue.js framework",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 19,
        title: "Vue.js Components and Props",
        date: "January 15, 2023 21:00",
        description: "Understanding components and props in Vue.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 20,
        title: "Vue.js Directives and Events",
        date: "January 20, 2023 20:30",
        description: "Working with directives and handling events in Vue.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 21,
        title: "Advanced Vue.js Features",
        date: "February 5, 2023 19:00",
        description: "Exploring advanced features like Vuex and Vue Router",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 22,
        title: "Building RESTful APIs with Express",
        date: "February 10, 2023 18:30",
        description: "Creating RESTful APIs using Express.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 23,
        title: "Authentication and Authorization",
        date: "February 15, 2023 20:00",
        description: "Implementing authentication and authorization in web applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 24,
        title: "Testing JavaScript Applications",
        date: "March 5, 2023 19:30",
        description: "Overview of testing methodologies for JavaScript applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 25,
        title: "Deployment Strategies for Web Apps",
        date: "March 10, 2023 21:00",
        description: "Strategies for deploying web applications to various platforms",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 26,
        title: "Introduction to TypeScript",
        date: "March 15, 2023 20:30",
        description: "Getting started with the TypeScript programming language",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 27,
        title: "Advanced TypeScript Concepts",
        date: "April 5, 2023 19:00",
        description: "Exploring advanced concepts like interfaces and generics in TypeScript",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 28,
        title: "Building Progressive Web Apps (PWAs)",
        date: "April 10, 2023 18:30",
        description: "Creating progressive web applications with JavaScript",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 29,
        title: "Introduction to D3.js",
        date: "April 15, 2023 20:00",
        description: "Getting started with data visualization using D3.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
]
const reactCourse = [
    {
        id: 1,
        title: "Introduction to React",
        date: "August 3, 2022 20:00",
        description: "Overview of basic concepts and syntax",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=_y9oxzTGERs',
        homeworksIds: [],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 2,
        title: "Working with Variables and Data Types",
        date: "August 5, 2022 20:30",
        description: "Exploring variable usage, numbers, and strings",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=KxVQitQ3a8Y&t=1s',
        homeworksIds: [1],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 3,
        title: "Conditional Statements and Loops",
        date: "August 8, 2022 21:00",
        description: "Using if-else, switch, for, and while",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
    },
    {
        id: 4,
        title: "Functions in JavaScript",
        date: "September 20, 2022 19:00",
        description: "Creating and invoking functions",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [1],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 5,
        title: "Working with Arrays",
        date: "September 22, 2022 18:30",
        description: "Manipulating data in arrays",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 6,
        title: "Object-Oriented Programming",
        date: "October 5, 2022 20:00",
        description: "Creating and using objects and classes",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 7,
        title: "Working with APIs",
        date: "October 10, 2022 19:30",
        description: "Fetching and sending data through APIs",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [1],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 8,
        title: "Advanced JavaScript Topics",
        date: "October 15, 2022 21:30",
        description: "Exploring advanced concepts like closures and prototypes",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 9,
        title: "Web Development with JavaScript",
        date: "October 20, 2022 20:00",
        description: "Building interactive web applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 10,
        title: "Node.js Basics",
        date: "November 5, 2022 19:00",
        description: "Introduction to server-side JavaScript with Node.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Intermediate',
    },
    {
        id: 11,
        title: "Express.js Fundamentals",
        date: "November 10, 2022 18:30",
        description: "Building web applications with Express.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Advanced',
    },
    {
        id: 12,
        title: "Database Integration with MongoDB",
        date: "November 15, 2022 20:30",
        description: "Working with MongoDB for data storage",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Advanced',
    },
    {
        id: 13,
        title: "Asynchronous JavaScript",
        date: "November 20, 2022 21:00",
        description: "Understanding asynchronous programming with callbacks and promises",
        lessonVideoUrl: '',
        homeworksIds: [1],
        additionalResources: [],
        complexity: 'Advanced',
    },
    {
        id: 14,
        title: "React.js Basics",
        date: "December 5, 2022 19:30",
        description: "Introduction to building user interfaces with React.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Advanced',
    },
    {
        id: 15,
        title: "State Management in React",
        date: "December 10, 2022 20:00",
        description: "Managing state in React applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Advanced',
    },
    {
        id: 16,
        title: "React Router and Navigation",
        date: "December 15, 2022 18:30",
        description: "Implementing navigation in React applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Advanced',
    },
    {
        id: 17,
        title: "Redux for State Management",
        date: "January 5, 2023 20:00",
        description: "Using Redux for state management in React",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 18,
        title: "Introduction to Vue.js",
        date: "January 10, 2023 19:30",
        description: "Getting started with the Vue.js framework",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 19,
        title: "Vue.js Components and Props",
        date: "January 15, 2023 21:00",
        description: "Understanding components and props in Vue.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 20,
        title: "Vue.js Directives and Events",
        date: "January 20, 2023 20:30",
        description: "Working with directives and handling events in Vue.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 21,
        title: "Advanced Vue.js Features",
        date: "February 5, 2023 19:00",
        description: "Exploring advanced features like Vuex and Vue Router",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 22,
        title: "Building RESTful APIs with Express",
        date: "February 10, 2023 18:30",
        description: "Creating RESTful APIs using Express.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 23,
        title: "Authentication and Authorization",
        date: "February 15, 2023 20:00",
        description: "Implementing authentication and authorization in web applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 24,
        title: "Testing JavaScript Applications",
        date: "March 5, 2023 19:30",
        description: "Overview of testing methodologies for JavaScript applications",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 25,
        title: "Deployment Strategies for Web Apps",
        date: "March 10, 2023 21:00",
        description: "Strategies for deploying web applications to various platforms",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 26,
        title: "Introduction to TypeScript",
        date: "March 15, 2023 20:30",
        description: "Getting started with the TypeScript programming language",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 27,
        title: "Advanced TypeScript Concepts",
        date: "April 5, 2023 19:00",
        description: "Exploring advanced concepts like interfaces and generics in TypeScript",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 28,
        title: "Building Progressive Web Apps (PWAs)",
        date: "April 10, 2023 18:30",
        description: "Creating progressive web applications with JavaScript",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
    {
        id: 29,
        title: "Introduction to D3.js",
        date: "April 15, 2023 20:00",
        description: "Getting started with data visualization using D3.js",
        lessonVideoUrl: 'https://www.youtube.com/watch?v=ryDq0St7luw&t=3s',
        homeworksIds: [2],
        additionalResources: [
            { id: 1, title: 'Introduction', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
            { id: 2, title: 'JavaScript Introduction', link: 'https://www.w3schools.com/js/js_intro.asp' },
        ],
        complexity: 'Easy',
    },
]

const jsCourseHomeworks = [
    { id: 1, title: 'Variables mix', isDone: false, dueDate: "August 7, 2022", difficulty: 2 },
    { id: 2, title: 'Magic conditions', isDone: true, dueDate: "August 10, 2022", difficulty: 3 },
]

const reactCourseHomeworks = [
    { id: 1, title: 'Variables mix', isDone: false, dueDate: "August 7, 2022", difficulty: 2 },
    { id: 2, title: 'Magic conditions', isDone: true, dueDate: "August 10, 2022", difficulty: 3 },
]

app.use(cors());

const handlers = {
    'js-course/lessons': () => jsCourse,
    'js-course/homeworks': () => jsCourseHomeworks,
    'react-course/lessons': () => reactCourse,
    'react-course/homeworks': () => reactCourseHomeworks,
};

app.get('/:course/:resource', (req, res) => {
    const { course, resource } = req.params;
    const endpoint = `${course}/${resource}`;

    const handler = handlers[endpoint];

    if (handler) {
        const result = handler();
        res.json(result);
    } else {
        res.status(404).send('Not Found');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
