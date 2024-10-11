import React, {useEffect, useState} from 'react';
import {getTodosByUserId } from '../services/api';

const UserDetails = ({ userId }) => {
    // initial state to handle completed todos and total todos
    const [todoStatus, setTodoStatus] = useState({ completed: 0, total: 0 });
    // to show a loading state
    const [loading, setLoading] = useState(true);
    // to handle errors
    const [error, setError] = useState(null);     

    useEffect(() => {
        const fetchTodos = async () => {
            try{
                // fetches all the todos of the user using the UserId
                const todos = await getTodosByUserId(userId);
                // calculates completed (i.e completed==true)and total todos
                const completed = todos.filter(todo => todo.completed).length;
                const total = todos.length;

                setTodoStatus({ completed, total });
            }catch(error){
                setError('Error fetching todos. Please try again.');
            }finally{
                setLoading(false);
            }
        };
        fetchTodos();
    }, [userId]);

    // also handles the edge case if no todos exist, set completionPercentage to 0 else stores actual percentage
    const completionPercentage = todoStatus.total === 0 ? 0 : (todoStatus.completed / todoStatus.total) * 100;

    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>{error}</div>;
    }

    return (
        <div>
            <p>Completed: {todoStatus.completed}/{todoStatus.total}</p>   {/*shows how many tasks completed of total todos*/}
            {todoStatus.total === 0 ? (
                <p>No tasks available for this user.</p>
            ) : (
              // shows completion percentage of  todos
                <p>Completion Percentage: {completionPercentage.toFixed(2)}%</p> 
            )}
            {completionPercentage > 50 ? <span>✅</span> : <span>❌</span>} {/*symbolic representation of user's todo has greater 50% or not*/}
        </div>
    );
};

export default UserDetails;
