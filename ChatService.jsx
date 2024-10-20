import axios from 'axios';

const API_KEY = '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';

export const getChatGPTResponse = async (userInput) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        return dummyData;
    }
};

const dummyData = [{
    'Squats': 10,
    'Push-ups': 10,
    'Planks': 10,
    'Lunges': 10,
    'isComplete': false
},
{
    'Squats': 10,
    'Push-ups': 10,
    'Planks': 10,
    'Lunges': 10,
    'isComplete': false
},
{
    'Squats': 10,
    'Push-ups': 10,
    'Planks': 10,
    'Lunges': 10,
    'isComplete': false
},
{
    'Squats': 10,
    'Push-ups': 10,
    'Planks': 10,
    'Lunges': 10,
    'isComplete': false
},
{
    'Squats': 15,
    'Push-ups': 15,
    'Planks': 15,
    'Lunges': 15,
    'isComplete': false
},
{
    'Squats': 15,
    'Push-ups': 15,
    'Planks': 15,
    'Lunges': 15,
    'isComplete': false
},
{
    'Squats': 15,
    'Push-ups': 15,
    'Planks': 15,
    'Lunges': 15,
    'isComplete': false
},
{
    'Squats': 15,
    'Push-ups': 15,
    'Planks': 15,
    'Lunges': 15,
    'isComplete': false
},
{
    'Squats': 15,
    'Push-ups': 15,
    'Planks': 15,
    'Lunges': 15,
    'isComplete': false
},
{
    'Squats': 20,
    'Push-ups': 20,
    'Planks': 20,
    'Lunges': 20,
    'isComplete': false
},
{
    'Squats': 20,
    'Push-ups': 20,
    'Planks': 20,
    'Lunges': 20,
    'isComplete': false
},
{
    'Squats': 20,
    'Push-ups': 20,
    'Planks': 20,
    'Lunges': 20,
    'isComplete': false
},
{
    'Squats': 20,
    'Push-ups': 20,
    'Planks': 20,
    'Lunges': 20,
    'isComplete': false
},
{
    'Squats': 20,
    'Push-ups': 20,
    'Planks': 20,
    'Lunges': 20,
    'isComplete': false
},
{
    'Squats': 25,
    'Push-ups': 25,
    'Planks': 25,
    'Lunges': 25,
    'isComplete': false
},
{
    'Squats': 25,
    'Push-ups': 25,
    'Planks': 25,
    'Lunges': 25,
    'isComplete': false
},
{
    'Squats': 25,
    'Push-ups': 25,
    'Planks': 25,
    'Lunges': 25,
    'isComplete': false
},
{
    'Squats': 25,
    'Push-ups': 25,
    'Planks': 25,
    'Lunges': 25,
    'isComplete': false
},
{
    'Squats': 25,
    'Push-ups': 25,
    'Planks': 25,
    'Lunges': 25,
    'isComplete': false
},
{
    'Squats': 30,
    'Push-ups': 30,
    'Planks': 30,
    'Lunges': 30,
    'isComplete': false
},
{
    'Squats': 30,
    'Push-ups': 30,
    'Planks': 30,
    'Lunges': 30,
    'isComplete': false
},
{
    'Squats': 30,
    'Push-ups': 30,
    'Planks': 30,
    'Lunges': 30,
    'isComplete': false
},
{
    'Squats': 30,
    'Push-ups': 30,
    'Planks': 30,
    'Lunges': 30,
    'isComplete': false
},
{
    'Squats': 30,
    'Push-ups': 30,
    'Planks': 30,
    'Lunges': 30,
    'isComplete': false
},
{
    'Squats': 35,
    'Push-ups': 35,
    'Planks': 35,
    'Lunges': 35,
    'isComplete': false
},
{
    'Squats': 35,
    'Push-ups': 35,
    'Planks': 35,
    'Lunges': 35,
    'isComplete': false
},
{
    'Squats': 35,
    'Push-ups': 35,
    'Planks': 35,
    'Lunges': 35,
    'isComplete': false
},
{
    'Squats': 35,
    'Push-ups': 35,
    'Planks': 35,
    'Lunges': 35,
    'isComplete': false
},
{
    'Squats': 35,
    'Push-ups': 35,
    'Planks': 35,
    'Lunges': 35,
    'isComplete': false
},
{
    'Squats': 40,
    'Push-ups': 40,
    'Planks': 40,
    'Lunges': 40,
    'isComplete': false
}];
