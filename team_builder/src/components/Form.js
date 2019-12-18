import React, { useState } from "react";

const TeamForm = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        })
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''})
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor={'name'}>Name:   </label>
            <input name='name' id='name' type='text' placeholder='Name' onChange={handleChanges} value={member.name}/>
            <label htmlFor={'email'}>email:   </label>
            <input name='email' id='email' type='text' onChange={handleChanges} placeholder='email' value={member.email}/>
            <label htmlFor={'role'}>Role:   </label>
            <input name='role' id='role' type='text' onChange={handleChanges} placeholder='role' value={member.role}/>
            <button type={"submit"}>Add Member</button>
        </form>
    )
};

export default TeamForm