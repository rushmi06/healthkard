import steps from '../../../assets/challenges/steps.jpeg';
import { googleFitService } from './services/googleFitService';

export const challenges = [
    {
        id: 1,
        name: '30-Day Step Challenge',
        description: 'Walk 10,000 steps every day for 30 days to improve your fitness and win exciting prizes!',
        termsandconditions: [
            'Must complete 10,000 steps daily',
            'Steps must be tracked through Google Fit',
            'Challenge starts from the day of registration',
            'Prize money will be awarded upon successful completion'
        ],
        target: 10000,
        duration: 30,
        prize: 10000,
        image: steps,
        button: {
            label: 'Register for Challenge',
            onClick: async () => {
                try {
                    await googleFitService.authenticate();
                    // Add your registration logic here
                } catch (error) {
                    console.error('Failed to connect to Google Fit:', error);
                }
            }
        }
    }
];