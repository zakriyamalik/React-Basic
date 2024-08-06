import React from 'react'


const Book = (props) => {
    const clickHandler1=()=>{
      console.log('Button clicked');
      alert('You clicked on '+ props.title+' button ');
    }
    const clickHandler2=(author)=>{
     console.log('Button clicked');
     alert('You clicked on '+ author+' button ');
   }
 
     const {img,title,author,job}=props;
     return (
       <article className='book'>
         <img src={img} alt=''/>
         <h2>{title}</h2>
         <h3>{author}</h3>
         <p>{job}</p>
         <button type="button" onClick={clickHandler1}>
           Click Me
         </button>
         <button type="button" onClick={()=>clickHandler2(props.author)}>
           Click Me Complex
         </button>
       </article>
      );
   }
   

export default Book
