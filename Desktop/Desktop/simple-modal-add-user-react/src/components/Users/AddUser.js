import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUserName, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);

    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal title="An error occured!" message="something went wrong!" />
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;