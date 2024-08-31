import './App.scss';
import $, { event } from 'jquery';
import { useState, useEffect } from 'react';
import { Avatar, Box, LinearProgress } from '@mui/material';
/*Dashboard

*/
export const Dashboard = () => {
    return(
      <div id='dashboard' className='flex flex-auto justify-center align-center'>
        <div id='misc' className=' w-[20rem] flex-1 ml-auto h-1/2 justify-right border-400 border-r'>
          <div id='current' className='w-[20rem] mr-4 ml-auto pb-6 border-slate-300 border-b'>
            <h1 className='font-display text-2xl text-left'>Currently Reading</h1>
            <div className='flex'>
              <div id='cover' className='h-36 w-28 mt-4 border-red-300 border rounded'></div>
              <div id='details' className='flex flex-col mt-4 h-full pl-4 text-start'>
                <h1 id='title'>&#123;Title&#125;</h1>
                <h1 id='author'>&#123;Author&#125;</h1>
                <h1 id='start-date'>Since: &#123;Date&#125;</h1>
              </div>
            </div>
          </div>
          <div id='challenge' className='w-[20rem] mr-4 ml-auto py-6 border-slate-300 border-b text-left'>
            <h1 className='font-display text-2xl '>&#123;Year&#125; Reading Challenge</h1>
            <h1 className='mt-1'>&#123;# Read&#125; / &#123;Goal&#125;</h1>
            <Box sx={{ width: '100%' }} thickness={5} className='my-2'>
              <LinearProgress variant="determinate" value={10} />       {/* value will be replaced w/ func(#read / goal) */}
            </Box>
          </div>
          <BookShelves />
        </div>
        <div id='feed' className='flex flex-col h-fit w-[50rem] gap-6 {mb-[5rem]}'> {/* filled w/ just examples of different feed posts, will replace with func interacting w/ backend */}
          <Post 
            user={{
              name: 'Ben',
              avatar: 'Be'  // replace with svg or something for icon
            }}
            type='current'
            book={{   // replace with book object with api or whatever
              title: '1984',
              author: 'George Orwell',
              cover: null
            }} 
            review='Lorem ipsum dolor sit amet, conseasdasdasdasdasdasdasdasdasdasdasdasd sdasdasdasdasdasdasdasd asdasdasdasd asdasdasdsdasdasda asdasda sdasdasdasd asdasdasdasdas asdasdasdasd asdasdasdsdasdasda asdasda sdasdasdasd asdasdasdasdasd asdasdasda asdasdasdasdasdactetur adipiscing elit. Donec convallis ex eu turpis ullamcorper pretium. Ut elementum velit ut ligula iaculis molestie ut in nunc. Morbi non varius purus, nec consectetur lacus. Praesent accumsan lacus ullamcorper dui imperdiet, ac porta nisl mattis. Vivamus sit amet sem vitae nulla mattis viverra commodo sed est.'
          />{/* limit review to like 500 characters or something*/}
          <Post 
            user={{
              name: 'Baniel',
              avatar: 'Ba'
            }}
            type='started'
            book={{   // replace with book object with api or whatever
              title: 'How to Baniel',
              author: 'Baniel Banthews',
              cover: null
            }}
            review=''
          />
          <Post 
            user={{
              name: 'Andrew',
              avatar: 'A'
            }}
            type='finished'
            book={{   // replace with book object with api or whatever
              title: 'IT',
              author: 'Stephen King',
              cover: null
            }}
            review=''
          />
          <Post 
            user={{
              name: 'Andrew',
              avatar: 'A'
            }}
            type='finished'
            book={{   // replace with book object with api or whatever
              title: 'IT',
              author: 'Stephen King',
              cover: null
            }}
            review=''
          />
        </div>
        <div id='user' className='flex-1 w-[20rem] ml-auto h-1/2 border-400 border-l text-xl text-left'>
          <Avatar sx={{ width: '12rem', height: '12rem' }} className='m-4'/>
          <h1 className='ml-4 mt-2 '>&#123;Username&#125;</h1>
          <h1 className='ml-4 mt-2 '>Since &#123;Date joined&#125;</h1>
          <h1 className='ml-4 mt-2 '>&#123;#&#125; Books Read</h1>
          <h1 className='ml-4 mt-2 '>&#123;#&#125; Followers</h1>
          <h1 className='ml-4 mt-2 '>&#123;#&#125; Following</h1>
        </div>
      </div>
    )
  }
  /*Post 
   Posts used in Dashboard
   */
  const Post = ({user, type, date, book, review}) => {
    const getType = (t) => {
      switch(t) {
        case 'current':   
          return 'is currently reading'
        case 'started':
          return 'has started reading'
        case 'finished':
          return 'has finished reading'
        default:
          return ''
      }
    }
  
    return(
    <div id='book-update-example' className='flex flex-col h-auto min-h-32 max-h-96 h-fit w-[90%] border-slate-400 border rounded mx-auto'> 
        <div id='headline' className='flex h-fit w-full'>
          <Avatar className='m-4'>{user.avatar}</Avatar>
          <h1 className='flex items-center max-w-[60%] text-left font-display text-xl'> 
            <a href={{/* link to account */}} className='hover:underline'>{user.name}</a>&nbsp;
            {getType(type)}:&nbsp;
            {book.name}
          </h1>
          <h1 className='flex items-center ml-auto mr-4'>&#123;date&#125;</h1>
        </div>
        <div id='book' className='flex flex-auto pl-4 mb-4'>
          <div id='cover' className='h-32 w-24 border-red-300 border rounded'>
            <img src={{/* book cover link */}} alt={book.title}/>
          </div>
          <div id='details' className='text-left mx-4 w-fit'>
            <h1 id='title' className='text-lg font-bold'>{book.title}</h1>
            <h1 id='Author'>{book.author}</h1>
            <h1 id='my-rating'>8/10</h1>
            <h1 id='review' className='overflow-y-auto'>{review}</h1>      
          </div>
        </div>
      </div>
    )
  }
  const Shelf = ({input, key, array}) => {
    const [name, setName] = useState(input ? input : '');
  
    useEffect(() => {
      if(!name){
        $('#shelf-input').focus(); // focus on input
      }
    }, [name]);
  
    return(
      name ? (
        <li className='flex'>
          <h1 className='overflow-hidden'>{name}</h1>
          <h1 className='ml-auto opacity-50'>#</h1>
        </li>
      ) : (
        <li className='flex'>
          <input id='shelf-input' type='text' className='' onKeyDown={(event) => { if(event.key === 'Enter') {
            setName(event.target.value)
            $('#BookShelves > #addShelf').toggle('disabled');   // enable button
            // make sure to push array to backend aka finalizing creation
          }}}/>
          <button className='ml-auto opacity-50 hover:underline' onClick={() => {
            // remove this shelf from backend 
          }}>X</button>  {/* this button is supposed to remove itself from the array */}
        </li>
      )
    )
  }
  const tempShelves = [<Shelf input='Read'/>, <Shelf input='Currently Reading'/>, <Shelf input='Want to Read'/>, <Shelf input='Favourites'/>]; // replace this with proped data from user object
  const BookShelves = () => {
    const [shelves, setShelves] = useState([...tempShelves]);
  
    const addShelf = () => {
      $('#BookShelves > #addShelf').toggle('disabled');                  // disable button
      setShelves([...shelves, <Shelf input='' array={shelves}/>]);       // add to state array
    }
  
    return(
      <div id='BookShelves' className='flex flex-col w-[20rem] mr-4 ml-auto py-6 text-left'> {/* will map through users bookshelf array */}
        <div id='header' className='flex'>
          <h1 className='font-display text-2xl '>Bookshelves</h1>
          <a href='#' className='ml-auto opacity-50 hover:underline'>View</a>     {/* link to profile page with bookshelves */}   
        </div>
        <ol id='list'>
          {
            shelves.map((e, i) => {
              return e;
            })
          }
        </ol>
        <button id='addShelf' className='mx-auto hover:underline' onClick={() => addShelf()}>Create Shelf</button>
      </div>
    )
  }