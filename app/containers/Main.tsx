import React, { useEffect, useState } from "react";


export default function Main() {
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/all-tasks');
                const result = await response.json();
                setTasks(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData()
    },[]);

    return (
        <div>
            <h2>Testing API</h2>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
               
        </div>
    )
}