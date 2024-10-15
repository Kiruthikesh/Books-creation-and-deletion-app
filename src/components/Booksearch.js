import { useState } from "react";



function Booksearch({onSubmit}){
    const [value,setValue]=useState('')

    const handleSumbit=(event)=>{
        event.preventDefault();

        onSubmit(value);
        setValue('')

    }

    const handleChange=(event)=>{
        setValue(event.target.value);
    }

    return (
        <div className=" fixed bottom-0 left-0 right-0 w-full border border-black flex flex-col justify-center h-20 items-center rounded-md bg-green-400"> 
            <p>Create a Book</p>
            <form onSubmit={handleSumbit} >
                <input  className="border-black border rounded-md p-1" value={value} onChange={handleChange}/>
            </form>
            
        </div>
    )
}

export default Booksearch;