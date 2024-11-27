import blog1 from '../../assets/blogs/blog1.jpeg'
import blog2 from '../../assets/blogs/blog2.jpeg'
import blog3 from '../../assets/blogs/blog3.jpeg'
import blog4 from '../../assets/blogs/blog4.jpeg'
import blog5 from '../../assets/blogs/blog5.jpeg'
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