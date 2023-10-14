import { useState } from "react";

const Question1 = () => {

    const [todos, setTodos] = useState([]);
    const [data , newData] = useState('')

    console.log(todos);
    console.log(data);

    const handleChange = (event) => {
        newData(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, data]);
        newData('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <br />
                <input type='text' name="text" onChange={handleChange} value={data} /> <br /><br />
                <input type='submit' value='Add Todo' /><br/><br/>
                {todos.map((todo , i) => (
                    <div key={i}>{todo}</div>
                ))}
            </form>
        </div>
    )
}

export default Question1;