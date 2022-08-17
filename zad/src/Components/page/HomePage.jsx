import React, { useEffect, useState } from "react";

const HomePage = () => {

    const [books, setBooks] = useState([])

    useEffect(async () =>{
       const booksApi = await fetch("http://localhost/zad/wp-json/wp/v2/books").then((res) => {
            return res.json();
        })
        setBooks(booksApi)
    }, [])

    return (books && books.length > 0 ? books.map(book => {
        return (
            <h1 key={book.id}>{book.slug}</h1>
        )
    }): <h1></h1>)

}


export default HomePage;