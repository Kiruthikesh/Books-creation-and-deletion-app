import './Bookshow.css'
import { TiDelete} from "react-icons/ti";
import {MdEdit} from 'react-icons/md'
import Bookedit from './Editbook';
import { useState } from 'react';


function Bookshow({book,onDelete,onEdit}){
    const [edit,setEdit]=useState(false)
    const showEdit=()=>{
        setEdit(!edit)
    }
    const showAfterEdit=(term)=>{
        setEdit(!edit)
        onEdit(term,book.id)
    }
    let content=<div>{book.title}</div>

    if(edit){
        content=<Bookedit  book={book}  showEdit={showAfterEdit}/>
    }
    const deleteBook=()=>{
        return onDelete(book.id)
    }

    return (
         <div className="book-container m-3 rounded-md  w-52 ">
            <div className='button-container m-1 p-1 '>
            <button onClick={showEdit}><MdEdit /></button> 
            <button onClick={deleteBook}><TiDelete /></button>
            </div>
            <div>
                <img className='mx-auto' alt='books' src={`https://picsum.photos/seed/${book.id}/150/150`}/>
            </div>
            <div className='w-full flex justify-center m-1'>
            {content}
            </div>
            
           
        
        </div>
        )
}

export default Bookshow;