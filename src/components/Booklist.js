import './Booklist.css'
import Bookshow from './BookShow'

function Booklist({books,onDelete,onEdit}){

    const newbooklist=books.map((book)=>{
        return (
              <Bookshow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
            )
    })

    return (
        <div className='books-container'>
            {newbooklist}
        </div>
    )
}

export default Booklist;