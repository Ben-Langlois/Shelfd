import './App.scss';
import $, { event } from 'jquery';
import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';


/*Profile

*/
export const Profile = () => {
  // this would be set with backend
  const [shelves, setShelves] = useState([{title: 'Favourite', books: [{isbn: null, title: '1984'}, {isbn: null, title: 'to catch a bird'}]}, {title: 'Read', books: []}, {title: 'Currently Reading', books: []}, {title: 'Want to Read', books: []}])

  return(
    <div className='flex flex-col flex-auto  w-1/2 mx-auto mt-6 relative'>
      <div id='main' className='flex mb-6'>
        <Avatar sx={{ width: '12rem', height: '12rem' }}/>
        <div id='main-details' className='ml-6 text-left h-fit'> {/* would be profile spec data */}
          <h1 className='text-xl'>&#123;Username&#125;</h1>
          <h1 className='text-xl'>Joined: &#123;date&#125;</h1>
          <h1 className='text-xl'>Books Read: &#123;#&#125;</h1>
          <p className='text-xl overflow-auto max-h-40'>Bio: &#123;lorem epsum etc&#125;</p>
        </div>
      </div> 
      <div id='display-shelves' className='flex flex-col text-left'>
        { // this would ref the state object that <BookShelves /> is getting but NOT as <Shelf />s 
            // but for now just an array of titles (in local state)
          // what if bookshelf is empty? do i still want to show it?
            // I think thats a 'solve once I do backend' problem, cause the object just doesnt exist rn
          shelves.map((e, i) => {
            return (
              <DisplayShelf title={e.title} books={e.books} />
            )
          })
        }
      </div>
      <div id='social' className='flex flex-col absolute w-1/3 top-0 right-[-35%] justify-start text-start'>
        <h1 className=' text-xl'>Following</h1>
        <div id='following' className='flex flex-row gap-1 mb-4'> {/* this would be backend mumbo jumbo */}
          <Avatar className=''>U</Avatar>
        </div>
        <h1 className=' text-xl'>Followers</h1>
        <div id='followers' className='flex flex-row gap-1'> {/* this would be backend mumbo jumbo */}
          <Avatar className=''>U</Avatar>
          <Avatar className=''>U</Avatar>
        </div>
      </div>
    </div>
  )
}


const DisplayShelf = ( {title, books} ) => {


  return (
    <div id='displayShelf' className='flex flex-col gap-y-4 mb-6'>
      <h1 className='text-xl border-b'>{title}</h1>
      <div id='books' className='flex gap-6'>
        {       
          books.map((book) => {
            return(
              <div id='displayCover' className='h-24 w-16 border border-red'>
                {book.title}
              </div>
            )
          })
        }                  
      </div>
    </div>
  )
}
