export interface BlogPost {
    id: number;
    category: string;
    title: string;
    subtitle?: string;
    date: string;
    readTime: string;
    reviewedBy: string;
    image: string;
    description: string;
    link: string;
    intro: string;
    toc: string[];
    sections: { title: string; content: string }[];
    faqs: { question: string; answer: string }[];
}

export const blogs: BlogPost[] = [
    {
        id: 1,
        category: "Mobile Medical Units",
        title: "Lump Behind Ear:",
        subtitle: "Causes, Diagnosis And Treatment",
        date: "12 March 2025",
        readTime: "6 min read",
        reviewedBy: "Atharv Clinical Team",
        image: "/Blog/BlogPet.png",
        description: "Lump behind the ear causes, diagnosis and treatment. Understand the symptoms and when to see a doctor.",
        link: "#",
        intro: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...",
        toc: [
            "What Are Mobile Medical Units?",
            "Key Components Of An MMU",
            "Use Cases In CSR & Government Programs",
            "Operational Challenges",
            "Implementation Best Practices",
            "Frequently Asked Questions"
        ],
        sections: [
            {
                title: "What are Mobile Medical Units?",
                content: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y..."
            },
            {
                title: "Key Components Of An MMU",
                content: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y..."
            },
            {
                title: "Use Cases In CSR & Government Programs",
                content: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y..."
            },
            {
                title: "Operational Challenges",
                content: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y..."
            },
            {
                title: "Implementation Best Practices",
                content: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y...Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways. Even easy activities like walking, standing, or doing your daily routine work can make y..."
            }
        ],
        faqs: [
            {
                question: "How long does it take to deploy an MMU?",
                answer: "MMUs can be configured to deliver primary consultations, basic screenings, medicine distribution, referral support, and health awareness activities based on program scope."
            },
            {
                question: "Can MMUs replace PHCs?",
                answer: "While MMUs provide essential healthcare services, they are designed to complement Primary Health Centers (PHCs) rather than replace them, by reaching remote areas where PHCs might be inaccessible."
            },
            {
                question: "What staffing is required per unit?",
                answer: "Typically, an MMU requires a doctor, a nurse, a pharmacist, a lab technician, and a driver, but this can vary based on the specific services offered."
            }
        ]
    },
    {
        id: 2,
        category: "Occupational Health",
        title: "Leg Weakness:",
        subtitle: "Causes, Symptoms and Treatment",
        date: "13 March 2026",
        readTime: "5 min read",
        reviewedBy: "Atharv Clinical Team",
        image: "/Blog/LatestBlog.png",
        description: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways.",
        link: "#",
        intro: "Leg weakness or weak, painful legs can be very uncomfortable. It may affect your everyday life in so many ways.",
        toc: ["Introduction", "Causes", "Treatment"],
        sections: [
            { title: "Causes", content: "Various causes including nerve damage, muscle strain, etc." },
            { title: "Treatment", content: "Physical therapy, medication, and rest." }
        ],
        faqs: []
    },
    {
        id: 3,
        category: "Preventive Healthcare",
        title: "Heathy Lifestyle:",
        subtitle: "Tips for a Better Life",
        date: "14 March 2026",
        readTime: "4 min read",
        reviewedBy: "Atharv Clinical Team",
        image: "/Blog/Train.png",
        description: "Discover simple tips to improve your daily routine and overall health.",
        link: "#",
        intro: "Living a healthy lifestyle is crucial for longevity and happiness.",
        toc: ["Diet", "Exercise", "Sleep"],
        sections: [
            { title: "Diet", content: "Eat a balanced diet rich in fruits and vegetables." },
            { title: "Exercise", content: "Regular exercise helps maintain a healthy weight." }
        ],
        faqs: []
    },
    {
        id: 4,
        category: "CSR & Community Health",
        title: "Community Health:",
        subtitle: "Importance and Impact",
        date: "15 March 2026",
        readTime: "7 min read",
        reviewedBy: "Atharv Clinical Team",
        image: "/Blog/Train.png",
        description: "The role of community health initiatives in improving public welfare.",
        link: "#",
        intro: "Community health programs are vital for underserved populations.",
        toc: ["Overview", "Impact", "Future"],
        sections: [
            { title: "Overview", content: "Community health focuses on the well-being of entire populations." },
            { title: "Impact", content: "Reduces disease spread and improves quality of life." }
        ],
        faqs: []
    },
    {
        id: 5,
        category: "Compliance",
        title: "Healthcare Compliance:",
        subtitle: "Navigating Regulations",
        date: "16 March 2026",
        readTime: "8 min read",
        reviewedBy: "Atharv Clinical Team",
        image: "/Blog/Train.png",
        description: "Understanding the complex world of healthcare regulations.",
        link: "#",
        intro: "Compliance is key to operating a successful healthcare facility.",
        toc: ["Regulations", "Challenges", "Solutions"],
        sections: [
            { title: "Regulations", content: "HIPAA, OSHA, and other standards." },
            { title: "Challenges", content: "Keeping up with changing laws." }
        ],
        faqs: []
    },
    {
        id: 6,
        category: "General",
        title: "Mental Health:",
        subtitle: "Breaking the Stigma",
        date: "17 March 2026",
        readTime: "5 min read",
        reviewedBy: "Atharv Clinical Team",
        image: "/Blog/LatestBlog.png",
        description: "Why talking about mental health is more important than ever.",
        link: "#",
        intro: "Mental health is just as important as physical health.",
        toc: ["Stigma", "Support", " Resources"],
        sections: [
            { title: "Stigma", content: "Many people fear judgment when seeking help." },
            { title: "Support", content: "Therapy and counseling are effective tools." }
        ],
        faqs: []
    }
];

// For backward compatibility with BlogDetail which expects a single object
export const blogData = blogs[0];
