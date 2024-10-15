import { useState } from "react";


function Bookedit({book,showEdit}){
    const [term,setTerm]=useState(book.title)

    const handleChange=(event)=>{
        setTerm(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        
        showEdit(term);
    }

    return (
        <div className="flex justify-center m-3">
            <form onSubmit={handleSubmit}>
                <input className="border-black border rounded-md" value={term} onChange={handleChange}/>
                
            </form>
            
        </div>
       
        
    )
}

export default Bookedit;