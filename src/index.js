import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import './index.css'

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

//     (5)


function BookList() {
  return (
   <section className='BookList'>
    <h1>My Book List</h1>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  
   </section>
  );
} 

const Book = () => {
  return (
   <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
   </article>
  );
}

const Image =()=>{
  return (
   <img src="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL254_SR254,254_.jpg" alt="Book Cover"/>
  );
}
const Title =()=>{
  return (
   <h3>Title: The Great Gatsby</h3>
  );
}

const Author =()=>{
  return (
   <h4>Author: Muhammad Zakriya</h4>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
