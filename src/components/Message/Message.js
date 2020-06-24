import React,{useState} from 'react';

import Button from '../Common/Button/Button';

const Message = () => { 

    const [name,setName] = useState('User Management');
    
    const onChangeHandler = () =>{
        setName('Lets Start');
    }

    return(
     <>
         <h1>Welcome to {name}</h1>
         {/* <button className="btn btn-primary" value="Change Name" onClick={onChangeHandler} >Change Message</button> */}
         <Button onClickHandler={onChangeHandler} value="Change Message" isPrimay  />
     </>
    )
 }

export default Message;