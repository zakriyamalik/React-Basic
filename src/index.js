import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import './index.css'
import {books} from './books'
import  Book from  './Book'
//    (1)
// function Greeting() {
//     return (
//         <div>
//             <h1>No Hello, World!</h1>
//         </div>
//     );
// }


//    (2)
// function Greeting() {
//   return React.createElement('h1',{},'hello world')
// }

 


//    (3)
// function Greeting() {
//   return (
//     <div>
//       <  Person /> 
//       <h1>Hello, World!</h1>
//     </div>
//   );
// } 
// const Person=() =><h2>Muhammad Zakriya</h2>
// 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting />);


//    (4)
// function Greeting() {
//   return (
//     <div>
//       <  Person /> 
//       <Message />
//     </div>
//   );
// } 
// const Person=() =><h2>Muhammad Zakriya</h2>

// const Message=() =><h1>Hello, World!</h1>

//     (5) Book List 


// function BookList() {
//   return (
//    <section className='BookList'>
//     <h1>My Book List</h1>
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
  
//    </section>
//   );
// } 

// const Book = () => {
//   return (
//    <article className='book'>
//     <Image></Image>
//     <Title></Title>
//     <Author></Author>
//    </article>
//   );
// }

// const Image =()=>{
//   return (
//    <img src="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL254_SR254,254_.jpg" alt="Book Cover"/>
//   );
// }
// const Title =()=>{
//   return (
//    <h3>Title: The Great Gatsby</h3>
//   );
// }

// const Author =()=>{
//   return (
//    <h4>Author: Muhammad Zakriya</h4>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);




//    (6) Variables and Props



// function BookList() {
//   return (
//    <section className='BookList'>
//     <h1>My Book List</h1>
//     <Book job='SE'/>
//     <Book title='king'/>
    
  
//    </section>
//   );
// } 
// const image="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL254_SR254,254_.jpg"
// const author='Author: Muhammad Zakriya'
// const Book = (props) => {
//   const title = 'Title: The Great Gatsby'
//   return (
//    <article className='book'>
//      <img src={image} alt=''/>
//      <h2>{title}</h2>
//      <h3>{author.toUpperCase}</h3>
//      <p>{props.title}</p>
//      <p>{props.job}</p>
   
//    </article>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);


// (7) Objects


// const firstBook={
//   title: 'The Great Gatsby',
//   author: 'Muhammad Zakriya',
//   image: 'https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL254_SR254,254_.jpg',
//   job: 'SE'
// }

// const secondBook={
//   title: '1984',
//   author: 'George Orwell',
//   image: 'https://m.media-amazon.com/images/I/815GWEqlkOL._AC_UY218_.jpg',
//   job: 'Writer'
 
// }


// function BookList() {
//   return (
//    <section className='BookList'>
//     <h1>My Book List</h1>
//     <Book img={firstBook.image} title={firstBook.title} author={firstBook.author} job={firstBook.job}>
//     <p>
//     <span class="highlight">Description</span><br></br>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac consectetur ex. Sed vel lacus in arcu bibendum tincidunt. Nulla facilisi. Vestibulum vel velit vel ligula molestie pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam vel justo vel neque tempus gravida. Donec vestibulum, erat in auctor vestibulum, ante velit scelerisque velit, non porttitor
      
//       </p> 
//     </Book>
//     <Book img={secondBook.image} title={secondBook.title} author={secondBook.author} job={secondBook.job} />
    
  
//    </section>
//   );
// } 

// // Also in params  we can get properties like {img,title,author,job}

// const Book = (props) => {
//   // return (
//   //  <article className='book'>
//   //    <img src={props.img} alt=''/>
//   //    <h2>{props.title}</h2>
//   //    <h3>{props.author}</h3>
//   //    <p>{props.job}</p>
   
//   //  </article>
//   // );

//   const {img,title,author,job,children}=props;
//   return (
//     <article className='book'>
//       <img src={img} alt=''/>
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//       <p>{job}</p>
//       {children}
//     </article>
//    );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);



// (8) Array of components

// const books=[
// {
//   title: 'The Great Gatsby',
//   author: 'Muhammad Zakriya',
//   image: 'https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL254_SR254,254_.jpg',
//   job: 'SE'
// },

// {
//   title: '1984',
//   author: 'George Orwell',
//   image: 'https://m.media-amazon.com/images/I/815GWEqlkOL._AC_UY218_.jpg',
//   job: 'Writer'
 
// },
// {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   image: 'https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
//   job: 'Writer'
// }
// ,
// {
//   title: 'To Kill a Mockingbird',
//   author: 'Harper Lee',
//   image: 'https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
//   job: 'Writer'
// }
// ];

// // const names=['john','peter','susan'];

// // const newName=names.map((name)=>{
// //   return <h1 key={name}>{name}</h1>
// // });
// function BookList() {
//   return (
//    <section className='BookList'>
//    {books.map((book)=>{
//      return <Book key={book.title} img={book.image} title={book.title} author={book.author} job={book.job} />
//   // return <Book key={book.title} {...book}></Book>;
//   })}
  
//    </section>
//   );
// } 


// const Book = (props) => {
 
//   const {img,title,author,job}=props;
//   return (
//     <article className='book'>
//       <img src={img} alt=''/>
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//       <p>{job}</p>
      
//     </article>
//    );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />);


 

// (9) Events and export


  // const names=['john','peter','susan'];
  
  // const newName=names.map((name)=>{
  //   return <h1 key={name}>{name}</h1>
  // });
  function BookList() {
    return (
     <section className='BookList'>
     {books.map((book)=>{
       return <Book key={book.title} img={book.image} title={book.title} author={book.author} job={book.job} />
    // return <Book key={book.title} {...book}></Book>;
    })}
    
     </section>
    );
  } 
  
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BookList />);
  
  
   
