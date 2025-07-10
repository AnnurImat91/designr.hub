import { faker } from "@faker-js/faker";
// List view one
export const listOne = Array.from({ length: 40 }).map((_, i) => {
    return {
        id: i + 1,
        team: faker.helpers.arrayElements(
            [
                '/images/user.png',
                '/images/user-2.png',
                '/images/user-3.png',
                '/images/user-4.png',
                '/images/user-5.png'
            ],
            { min: 2, max: 5 }
        ),
        title: faker.person.firstName(),
        img: `/images/user-${faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}.png`,
        country: faker.location.country(),
        projects: faker.number.int({ min: 50, max: 200 }),
        designation: faker.person.jobTitle()
    }
})

// list view two
export const hotelList = Array.from({ length: 24 }).map((_, i) => {
    return {
        id: i + 1,
        img: `/images/hotel-${faker.helpers.arrayElement([1, 2, 3, 4, 5])}.png`,
        title: faker.company.name(),
        rating: faker.number.float({ max: 5, min: 3, precision: 0.1 }),
        location: faker.location.city(),
        price: faker.number.int({ max: 800, min: 400 }),
        favourite: faker.datatype.boolean({ probability: 0.1 })
    }
})

// list view three
export const jobs = Array.from({ length: 38 }).map((_, i) => {
    return {
        id: i + 1,
        title: faker.person.jobTitle(),
        icon: `/images/list-3/${faker.helpers.arrayElement([
            "github",
            "ux",
            "html",
            "react-native",
            "react",
            "fullstack",
            "digital",
            "figma",
            "linkedin",
            "nodejs",
        ])}.png`,
        location: faker.location.country(),
        time: faker.helpers.arrayElement([
            "Full Time",
            "Part Time",
            "Freelance",
            "Contract",
        ]),
        experience: `${faker.number.int({ max: 10, min: 2 })} Years`,
    };
});

// List Four 
export const foods = Array.from({ length: 48 }).map((_, i) => {
    return {
        id: i + 1,
        title: faker.commerce.productName(),
        icon: `/images/list-4/food-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        location: faker.location.country(),
        type: faker.helpers.arrayElement([
            "Cake",
            "Chocolate",
            "Desert",
            "Vanilla",
        ]),
        time: faker.helpers.arrayElement(["1h 20m", "2h 20m", "1h 40m", "3h"]),
        links: faker.number.int({ max: 10, min: 2 }),
    };
});

// Flex list one
export const flexListOne = Array.from({ length: 40 }).map((_, i) => {
    return {
        id: i + 1,
        industry: faker.helpers.arrayElement([
            "Gaming",
            "Health",
            "Pharma",
            "Business",
            "Agriculture",
            "Automotive",
        ]),
        name: faker.person.firstName(),
        img: `/images/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        country: faker.location.country(),
        designation: faker.person.jobTitle(),
        status: faker.helpers.arrayElement([
            "Online",
            "Offline",
            "Suspended",
        ]),
    };
});

// Flex list two
export const flexListTwo = Array.from({ length: 40 }).map((_, i) => {
    return {
        id: i + 1,
        industry: faker.helpers.arrayElement([
            "Gaming",
            "Health",
            "Pharma",
            "Business",
            "Agriculture",
            "Automotive",
        ]),
        name: faker.person.firstName(),
        img: `/images/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        country: faker.location.country(),
        designation: faker.person.jobTitle(),
        status: faker.helpers.arrayElement([
            "Online",
            "Working",
            "Offline",
            "Suspended",
        ]),
        relations: faker.helpers.arrayElements(
            [
                "/images/user.png",
                "/images/user-2.png",
                "/images/user-3.png",
                "/images/user-4.png",
                "/images/user-5.png",
            ],
            { min: 2, max: 5 }
        ),
    };
});

// Flex list three
export const flexListThree = Array.from({ length: 47 }).map((_, i) => {
    return {
        id: i + 1,
        industry: faker.helpers.arrayElement([
            "Gaming",
            "Health",
            "Pharma",
            "Business",
            "Agriculture",
            "Automotive",
        ]),
        name: faker.person.firstName(),
        img: `/images/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        country: faker.location.country(),
        designation: faker.person.jobTitle(),
        status: faker.helpers.arrayElement([
            "Online",
            "Working",
            "Offline",
            "Suspended",
        ]),
        difficulty: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
        skill: faker.helpers.arrayElement([
            {
                icon: "/images/skills/html.png",
                name: "Html5",
            },
            {
                icon: "/images/skills/css.png",
                name: "CSS3",
            },
            {
                icon: "/images/skills/vue.png",
                name: "Vue",
            },
            {
                icon: "/images/skills/laravel.png",
                name: "Laravel",
            },
            {
                icon: "/images/skills/python.png",
                name: "Python",
            },
            {
                icon: "/images/skills/react.png",
                name: "React.js",
            },
            {
                icon: "/images/skills/node.png",
                name: "Node.js",
            },
            {
                icon: "/images/skills/kubernate.png",
                name: "Kubernates",
            },
            {
                icon: "/images/skills/angular.png",
                name: "Angular",
            },
            {
                icon: "/images/skills/docker.png",
                name: "Docker",
            },
        ]),
    };
});

// Table list style one
export const tableListOne = Array.from({ length: 40 }).map((_, i) => {
    return {
        id: i + 1,
        date: faker.date.anytime({ refDate: new Date() }),
        name: faker.person.firstName(),
        img: `/images/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        country: faker.location.country(),
        designation: faker.person.jobTitle(),
        status: faker.helpers.arrayElement(["New", "Available", "Busy"]),
        percent: faker.number.int({ max: 100, min: 10 }),
    };
});

// table list two
export const tableListTwo = Array.from({ length: 40 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.commerce.productName(),
        img: `/images/products/product-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        sku: faker.string.alphanumeric({ length: 7 }),
        price: faker.number.int({ min: 200, max: 800 }),
        stock: faker.number.int({ min: 2, max: 20 }),
        category: faker.helpers.arrayElement([
            "Tuxedo Sofas",
            "Modular Sofas",
            "Lawson Sofas",
            "Camelback Sofas",
            "Convertible Sofas",
            "Reclining Sofas",
            "Loveseats",
            "Chesterfield Sofas",
            "Sleeper Sofas",
            "Sectional Sofas",
        ]),
    };
});

// Table List three
export const tableListThree = Array.from({ length: 40 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.firstName(),
        icon: `/images/files/${faker.helpers.arrayElement([
            "mp4",
            "html",
            "gif",
            "wma",
            "pdf",
        ])}.png`,
        img: `/images/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        type: faker.word.words({ count: 3 }),
        size: `${faker.number.float({ max: 9, min: 2, precision: 0.1 })}MB`,
        version: "1.0.0",
        time: faker.date.recent(),
    };
});

// card grid one
export const gridCardOne = Array.from({ length: 48 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/user-big-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        percent: faker.helpers.rangeToNumber({ max: 90, min: 20 }),
        designation: faker.person.jobTitle(),
    };
});

// card grid two
export const gridCardTwo = Array.from({ length: 43 }).map((_, i) => {
    return {
        id: i + 1,
        title: faker.helpers.arrayElement([
            "UI/UX Design Projects",
            "Web Disign Projects",
            "App Development Projects",
            "Front end development",
            "Backend Development",
            "Laravel Development Projects",
            "Python Gaming Projects",
            "NodeJS Website",
            "Machine Learning Projects",
        ]),
        img: `/images/projects/project-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        date: faker.date.past(),
    };
});


// card grid three

export const cardGridThree = Array.from({ length: 34 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/user-big-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        designation: faker.person.jobTitle(),
    };
});

// card grid four
export const cardGridFour = Array.from({ length: 35 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.firstName(),
        tag: "Productivity",
        img: `/images/gridfour/img-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        title: faker.word.words({ count: 7 }),
        author: faker.person.fullName(),
        authorImg: `/images/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        time: faker.date.past({ refDate: new Date() }),
    };
});

// Tile grid one
export const tileOneData = Array.from({ length: 80 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/user-big-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])}.png`,
        designation: faker.person.jobTitle(),
    };
});

// Tile Grid two
export const tileTwoData = Array.from({ length: 80 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.word.words({ count: 3 }),
        img: `/images/files/${faker.helpers.arrayElement([
            "gif-big",
            "html-big",
            "wma-big",
            "html-big",
            "mp4-big",
        ])}.png`,
        size: `${faker.number.float({ max: 9, min: 2, precision: 0.1 })}MB`,
        version: "1.2.0",
    };
});

// Tile Grid three
export const tileThreeData = Array.from({ length: 70 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.helpers.arrayElement([
            "Chocolate Cake",
            "Vanilla Cake",
            "Red Velvet Cake",
            "Carrot Cake",
            "Lemon Cake",
            "Marble Cake",
            "Chocolate Cake",
            "Strawberry Cake",
        ]),
        img: `/images/cakes/cake-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8,
        ])}.png`,
        type: "Cakes",
        time: faker.helpers.arrayElement(["1h 20m", "2h 10m", "3h 30m"]),
        attachment: faker.helpers.rangeToNumber({ max: 9, min: 2 }),
    };
});

// user grid one
export const userGridOneData = Array.from({ length: 42 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/user-big-${faker.helpers.arrayElement([
            2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        designation: faker.person.jobTitle(),
    };
});

// user grid two
export const userGridTwoData = Array.from({ length: 38 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/user-big-${faker.helpers.arrayElement([
            2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        designation: faker.person.jobTitle(),
    };
});

// user grid three
export const userGridThreeData = Array.from({ length: 38 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/users/user-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        designation: faker.person.jobTitle(),
    };
});

// user grid four
export const userGridFourData = Array.from({ length: 38 }).map((_, i) => {
    return {
        id: i + 1,
        name: faker.person.fullName(),
        img: `/images/users/user-${faker.helpers.arrayElement([
            2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        designation: faker.person.jobTitle(),
    };
});

// Project one
export const projectsDataOne = Array.from({ length: 38 }).map((_, i) => {
    return {
        id: i + 1,
        title: faker.word.words({ count: 3 }),
        img: `/images/projectgrid/project-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        companyImg: `/images/company/company-${faker.helpers.arrayElement([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ])}.png`,
        category: faker.helpers.arrayElement(["NLP", "Mobile", "Cloud", "Virtual"]),
        desc: faker.helpers.arrayElement([
            "Data Management",
            "Training Solutions",
            "App Development",
            "Web Development",
            "Machine Learning",
        ]),
        likes: faker.helpers.rangeToNumber({ max: 50, min: 10 }),
        comments: faker.helpers.rangeToNumber({ max: 50, min: 10 }),
        remainingTasks: faker.helpers.rangeToNumber({ max: 50, min: 10 }),
    };
});

// comments
export const comments = [
    {
        date: "Mar 03, 2023",
        id: 1,
        time: "09.01 am",
        comment:
            "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
        commenterImg: "/images/user-big-2.png",
        commenter: "Cameron Williamson",
        designation: "Actress",
        replierImg: "/images/user-big-3.png",
    },
    {
        date: "Mar 03, 2023",
        id: 2,
        time: "09.01 am",
        comment:
            "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
        commenterImg: "/images/user-big-2.png",
        commenter: "Cameron Williamson",
        designation: "Actress",
        replierImg: "/images/user-big-3.png",
    },
    {
        date: "Mar 03, 2023",
        id: 3,
        time: "09.01 am",
        comment:
            "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
        commenterImg: "/images/user-big-2.png",
        commenter: "Cameron Williamson",
        designation: "Actress",
        replierImg: "/images/user-big-3.png",
    },
];

// inbox data 
export const inboxMessages = Array.from({ length: 55 }).map((_, i) => {
    return {
        id: i + 1,
        sender: faker.person.firstName(),
        title: faker.helpers.arrayElement([
            'New Slack Message',
            'Important Discord Notification',
            'Message from a friend',
            'Message From Hasan',
            `New message from ${faker.person.firstName()}`,
            `Message from ${faker.person.firstName()}`,
            `Important message from ${faker.person.firstName()}`,
        ]),
        desc: faker.word.words({ count: 10 }),
        date: '10 Jul',
        isChecked: false
    }
})