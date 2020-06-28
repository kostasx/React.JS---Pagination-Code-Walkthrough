/*

NEXT STEPS?

- Create a Pagination Component
- Change the way the available Pages are being displayed:
    - Instead of: PREV 1/4 NEXT
    - Display this: 1 2 3 4
        - Don't forget to highlight the currently selected page
- Implement Tests and test with different `list` lengths and values for `postsPerPage`
- Load the posts from an external Server using Ajax
- Apply styling using Bootstrap 4

*/
import React, { useState } from 'react';            
import { render } from 'react-dom';   

const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];

function Post({ title }){
  return <div>{ title }</div>;  
}

const postsPerPage = 3; 
const totalPages = Math.ceil( list.length / postsPerPage ); 

function App(){
  const [ posts ] = useState( list ); 
  const [ currentPage, setCurrentPage ]= useState( 1 );
  const prev = ()=>{
    if ( currentPage > 1 ){ setCurrentPage( currentPage - 1 ); } 
  }
  const next = ()=>{
    if ( currentPage < totalPages ){ setCurrentPage( currentPage + 1 ); } 
  }
  let from = ( currentPage - 1 ) * postsPerPage; 
  let upTo = from + postsPerPage;                

  return (
    <div>
      <button onClick={ prev }>Prev</button> <span>{currentPage}/{totalPages}</span> <button onClick={ next }>Next</button>
      <hr/>
      {
        posts.slice( from, upTo ).map( ( post, index ) => <Post key={ index } title={ post } /> ) 
      }
    </div>
  )
}

render( <App/>, document.getElementById("root") );