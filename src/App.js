import './App.scss';
import $, { event } from 'jquery';
import {useState, useEffect} from 'react';
import { Header, Footer} from './limbs.js';
// import Button from '@mui/material/Button';
import { Book, Visibility, VisibilityOff } from '@mui/icons-material/';
import { TextField, FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Avatar, Box, LinearProgress, Button } from '@mui/material';

/* Currently
  - Landing
    - adding book covers to display in infinite scroll
    - email validation
    - strong password 
    - fix flex row mishap for infinite scroll when window is resized
  - Feed/Dashboard
    - 
*/

/*Landing
   
*/
const Landing = () => {
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);

  // misc code for MUI show password field   
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const bookStyle = 'outline outline-red-400 rounded w-1/6 h-1/5';

  /* toggleForm(form)
     form: the name/id of current form

     handles switching of forms; clears inputs, error flags, hides/displays form
     - eventually I should change form to whatever event.target prop that represents css id
  */
  const toggleForm = (form) => {
    $('#login').toggleClass('hidden');            // toggling display for each fomr
    $('#signup').toggleClass('hidden');

    // clearing the form inputs and error status
    $(`#${form} input#email`).val('');
    $(`#${form} input#password`).val('');
    $(`#${form} input#firstName`).val('');
    setEmailError(false);
    setPassError(false);
    setNameError(false);
  }

  /* formSubmit(form)
     form: the name/id of current form

     this handles the input validation and backend link to verify login/sign up 
     - eventually I should change form to whatever event.target prop that represents css id
   */
  const formSubmit = (form) => {
    // e.preventDefault();
    let valid = true;
    let email = $(`#${form} input#email`);
    let password = $(`#${form} input#password`);
    let firstName = $(`#${form} input#firstName`);

    // email field validation
    if(!email.val()){
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    // pass word field validation
    if(!password.val()){
      setPassError(true);
      valid = false;
    } else {
      setPassError(false);
    }
    // pass word field validation
    if(!firstName.val()){
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    // backend validation 
    if(valid){
      // this is where the backend will interact w front
    }
  }

  return(
    <div id='landing' className='flex flex-auto p-6'>
      <div id='scroll-container' className='flex flex-col relative h-full w-2/4 pt-1 overflow-hidden justify-center content-center'>
        <div id='primary' className='flex flex-wrap absolute top-0 right-0 h-full justify-around gap-6 pt-3'> {/* grid of books, maybe 'featured' books? */}
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
        </div>
        <div id='secondary' className='flex flex-wrap absolute top-full right-0 h-full justify-around gap-6'> {/* grid of books, maybe 'featured' books? */}
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
          <div className={bookStyle} >&nbsp;</div>  
        </div>
      </div>
      <div id='action-container' className='w-2/4 content-center text-left p-6 m-6 border-400 border-l transition-opacity duration-1000'> {/* login/register buttons (that lead to form) */}
        <div id='calltoaction' className='opacity-100 mb-6'>
          <h1 className='text-5xl font-semibold font-display w-[40rem]'>Discover, Discuss, and Track your next reads along tens of other users</h1>
        </div>
        <form id='login' className='flex flex-col flex-wrap gap-6'> {/* login form to display */}
          <TextField id='email' className='w-[32rem]' error={emailError} required label="Email" variant="outlined" />
          {/* <TextField id='password' required label="Password" variant="outlined" /> */}
          <FormControl  variant="outlined" className='w-[32rem]' error={passError} required >
            <InputLabel htmlFor="password-label">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div id='buttons' className='flex gap-6 items-center'>
            <Button size='large' className='h-1/4 w-1/4' variant="outlined" onClick={() => formSubmit('login')}>Login</Button> 
            <Button className='h-1/4' variant="text" onClick={() => toggleForm('login')}>Dont have an account?</Button>            
          </div>
        </form>
        <form id='signup' className='hidden flex flex-col flex-wrap gap-6'> {/* signup form to display */}
          <TextField id='firstName' error={nameError} required label="First Name" className='w-[32rem]' variant="outlined" />
          <TextField id='email' error={emailError} required label="Email" className='w-[32rem]' variant="outlined" />
          <FormControl  variant="outlined" className='w-[32rem]' error={passError} required >
            <InputLabel htmlFor="password-label">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div id='buttons' className='flex gap-6 items-center'>
            <Button size='large' className='h-1/4 w-1/4' variant="outlined" onClick={() => formSubmit('signup')}>Sign Up</Button> 
            <Button className='h-1/4' variant="text" onClick={() => toggleForm('signup')}>Back</Button>            
          </div>
          <a className='font-display text-left hover:underline cursor-pointer'>Just want to look around? That's cool too</a>
        </form>      
      </div>
    </div>
  )
} 

/*Dashboard

*/
const Dashboard = () => {
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

/*Profile

*/
const Profile = () => {
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
              <div id='displayShelf'>
                <h1 className='text-xl border-b mb-6'>{e.title}</h1>
                {       
                foreach(book in e.books){

                }           
                  // e.books.map((book) => {
                  //   <div id='displayCover' className='h-16 w-8 border border-red'>
                  //     {book.title}
                  //   </div>
                  // })
                }
              </div>
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

function App() {
  return (
    <div className="App font-sans h-screen flex flex-col">
      <Header />
      {/* <Landing /> */}
      {/* <Dashboard /> */}
      <Profile />
      <Footer />
    </div>
  );
}

export default App;