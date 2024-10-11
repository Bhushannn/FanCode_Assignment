import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

//gets all the Users data
export const getUsers = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    }catch(error){
        console.error('Error fetching users', error);
        return [];
    }
};

//gets the User's Todo list based on userID
export const getTodosByUserId = async (userId) => {
    try{
        const response = await axios.get(`${BASE_URL}/todos?userId=${userId}`);
        return response.data;
    }catch(error){
        console.error('Error fetching todos', error);
        return [];
    }
};
