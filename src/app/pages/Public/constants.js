import blog1 from '../../assets/blogs/blog1.jpeg'
import blog2 from '../../assets/blogs/blog2.jpeg'
import blog3 from '../../assets/blogs/blog3.jpeg'
import blog4 from '../../assets/blogs/blog4.jpeg'
import blog5 from '../../assets/blogs/blog5.jpeg'
// social media icons
import instagram from "../../assets/home/social-media/instagram.png"
import facebook from "../../assets/home/social-media/facebook.png"
import linkedin from "../../assets/home/social-media/linkedin.png"
import whatsapp from "../../assets/home/social-media/whatsapp.png"

// blogs data
export const blogs = [
    {
        id: 1,
        title: "Cold and Cough",
        question: 'What are cold and cough?',
        answer: 'Cold and cough are viral infections that affect the respiratory system.',
        symptoms: ['Runny nose', 'Stuffy nose', 'Coughing', 'Sore throat'],
        firstAid: ['Stay hydrated by drinking plenty of fluids', 'Rest and avoid strenuous activities', 'Use over-the-counter medication like acetaminophen or ibuprofen to reduce fever'],
        preventions: [
            {
                heading: '1. Wash hands frequently',
                description: 'Wash your hands with soap and water for at least 20 seconds.'
            },
            {
                heading: '2. Stay hydrated and rest',
                description: 'Drink plenty of fluids and get plenty of rest to help your body fight off the infection.'
            },
            {
                heading: '3. Avoid sharing personal items',
                description: 'Don\'t share personal items like towels, clothes, or makeup.'
            }
        ],
        description: 'If you\'re experiencing symptoms of cold and cough, visit a doctor near you without any fees using Healthkard. Get diagnosed and start treatment.',
        image: blog1
    },
    {
        id: 2,
        title: "Skin Diseases",
        question: 'What are skin diseases?',
        answer: 'Skin diseases are conditions that affect the skin, like acne, eczema, or psoriasis.',
        symptoms: ['Redness and inflammation', 'Itching or burning sensation', 'Skin lesions or rashes'],
        firstAid: ['Keep the affected area clean and dry', 'Apply topical creams or ointments as prescribed', 'Avoid scratching or rubbing the affected area'],
        preventions: [
            {
                heading: '1. Wash hands and skin regularly',
                description: 'Wash your hands and skin with soap and water.'
            },
            {
                heading: '2. Avoid sharing personal items',
                description: 'Don\'t share personal items like towels, clothes, or makeup.'
            },
            {
                heading: '3. Wear sunscreen outdoors',
                description: 'Wear sunscreen with at least SPF 30 when going outdoors.'
            }
        ],
        description: 'If you\'re experiencing symptoms of skin disease, visit a doctor near you without any fees using Healthkard. Get diagnosed and start treatment today!',
        image: blog2
    },
    {
        id: 3,
        title: "COPD (Breathing Problem)",
        question: 'What is COPD?',
        answer: 'COPD, or Chronic Obstructive Pulmonary Disease, is a breathing problem that makes it hard to breathe. It\'s like trying to breathe through a straw.',
        symptoms: ['Shortness of breath', 'Wheezing', 'Chest tightness', 'Coughing up mucus'],
        firstAid: ['Sit upright and try to relax', 'Use an inhaler if prescribed', 'Call emergency services if symptoms worsen'],
        preventions: [
            {
                heading: '1. Don\'t smoke',
                description: 'Smoking is the leading cause of COPD. Quitting smoking can help prevent COPD.'
            },
            {
                heading: '2. Avoid polluted areas',
                description: 'Stay away from areas with high levels of air pollution.'
            },
            {
                heading: '3. Exercise regularly',
                description: 'Regular exercise can help improve lung function.'
            }
        ],
        description: 'If you\'re experiencing symptoms of COPD, visit a doctor near you without any fees using Healthkard. Get diagnosed and start treatment today!',
        image: blog3
    },
    {
        id: 4,
        title: "Infections",
        question: 'What are infections?',
        answer: 'Infections are conditions caused by bacteria, viruses, or fungi.',
        symptoms: ['Fever', 'Chills', 'Fatigue', 'Muscle aches'],
        firstAid: [
            'Stay hydrated by drinking plenty of fluids',
            'Rest and avoid strenuous activities',
            'Use over-the-counter medication like acetaminophen or ibuprofen to reduce fever'
        ],
        preventions: [
            {
                heading: '1. Wash hands frequently',
                description: 'Wash your hands with soap and water for at least 20 seconds.'
            },
            {
                heading: '2. Get vaccinated',
                description: 'Get vaccinated against infections like flu and pneumonia.'
            },
            {
                heading: '3. Avoid sharing food and drinks',
                description: 'Don\'t share food and drinks with others.'
            }
        ],
        description: 'If you\'re experiencing symptoms of infection, visit a doctor near you without any fees using Healthkard. Get diagnosed and start treatment today!',
        image: blog4
    },
    {
        id: 5,
        title: "Viral Fevers",
        question: 'What are viral fevers?',
        answer: 'Viral fevers are infections caused by viruses, like the flu or common cold.',
        symptoms: ['High fever', 'Headache', 'Fatigue', 'Muscle aches'],
        firstAid: [
            'Stay hydrated by drinking plenty of fluids',
            'Rest and avoid strenuous activities',
            'Use over-the-counter medication like acetaminophen or ibuprofen to reduce fever'
        ],
        preventions: [
            {
                heading: '1. Wash hands frequently',
                description: 'Wash your hands with soap and water for at least 20 seconds.'
            },
            {
                heading: '2. Get vaccinated',
                description: 'Get vaccinated against flu and other viral infections.'
            },
            {
                heading: '3. Stay hydrated and rest',
                description: 'Drink plenty of fluids and get plenty of rest to help your body fight off the infection.'
            }
        ],
        description: 'If you\'re experiencing symptoms of viral fever, visit a doctor near you without any fees using Healthkard. Get diagnosed and start treatment today!',
        image: blog5
    },
]

// feedbacks data
export const FEEDBACKS = [
    {
        id: 1,
        name: "Shiva Challa",
        feedback: "I went to Manasa Skin Care Clinic with Healthkard, I really felt happy for saving doctor fees and also I really appreciate Dr. Ramakrishna for his expertise and gave me in detail the reason for my hair loss ",
        image: instagram,
        rating: 4.5
    },
    {
        id: 2,
        name: "Akram Shaik",
        feedback: "I have taken Healthkard for my mother and visited Anji Reddy Hospital, I was happy with Healthkard service because the team is really doing a great job by providing qualified Doctors and helping us",
        image: facebook,
        rating: 5
    },
    {
        id: 3,
        name: "Prathyusha Gunda",
        feedback: "My family visited Sri Balaji Hospitals, We found the best  neuro doctor here that has zero Consultation fees with Healthkard. Hospital management is too understandable, big shout out to Dr. Chandrasekhar and Manager Gopi ",
        image: whatsapp,
        rating: 3.5
    },
    {
        id: 4,
        name: "Teja Venkatesh",
        feedback: "Healthkard is a pocket saver. For my wife's maternity I shifted from X hospital to Asian Hospital to avoid high consultation fees but I found the best one here 🙌 too professional and very helpful staff. I thank you Dr. Trivani, Venkat garu and Healthkard I'll definitely refer my friends and family to get Healthkard",
        image: linkedin,
        rating: 5
    },
    {
        id: 5,
        name: "Fathima",
        feedback: "I'm having knee pain for the last 2 years, I have visited all the hospitals in Narasaraopet. After that I visited Asian Hospitals with Healthkard and was really thankful for Dr. Vamsi is an understandable and down to earth doctor. I haven't seen a doctor like him. Thank you team Healthkard you are solving a real problem ",
        image: instagram,
        rating: 4.5
    },
    {
        id: 6,
        name: "lokesh Dara",
        feedback: "HealthKard has transformed my approach to Doctor. Previously, I relied on nearby pharmacies for medications, avoiding hospital visits. With its low monthly fee and unlimited free consultations, HealthKard makes accessing qualified medical doctors easy and affordable.",
        image: facebook,
        rating: 5
    }
]