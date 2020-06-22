import React,{useState} from 'react';

const Message = () => { 

    const [name,setName] = useState('User Management');
    
    const onChangeHandler = () =>{
        setName('Lets Start');
    }

    return(
     <>
         <h1>Welcome to {name}</h1>
         <button className="btn btn-primary" value="Change Name" onClick={onChangeHandler} >Change Message</button>
     </>
    )
 }

export default Message;