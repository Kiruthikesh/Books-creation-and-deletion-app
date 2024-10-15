import Booksearch from './components/Booksearch'
import { useState } from 'react';
import Booklist from './components/Booklist'


function App(){
    const [books,setBooks]=useState([])

    const onSubmit=(text)=>{
        const updatearray=[
            ...books,
            {id:books.length+1,title:text}
        ]
        
        setBooks(updatearray);
    }
    const handleDelete=(id)=>{
        const updatearray=books.filter((book)=>{
            return book.id!==id
        })

        setBooks(updatearray)
    }

    const handleEdit=(term,id)=>{
        const updatearray=books.map((book)=>{
            if(book.id===id){
               return  {...book,title:term}
            }
            return book;
    })
    setBooks(updatearray)
    }
        

    console.log(books)
    return (
        <div className='h-screen flex  items-start justify-center'>
            <Booklist books={books} onDelete={handleDelete} onEdit={handleEdit}/>
            <Booksearch  onSubmit={onSubmit} />
        </div>
    )
}

export default App;