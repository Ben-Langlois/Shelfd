import './App.scss';
import $, { event } from 'jquery';
import Header from './header.js';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const toggleForm = (form) => {
  $('#login').toggleClass('hidden');
  $('#signup').toggleClass('hidden');
}

/* Currently
- making array of book divs w/ bookStyle as classes, so there arent a bajillion ind divs in primary and secondary
*/

const Landing = () => {

  const bookStyle = 'outline outline-red-400 rounded w-1/6 h-1/5';

  const loginSubmit = (e) => {
    // e.preventDefault();
    let valid = true;
    let email = $('#login input#email');
    let password = $('#login input#password');

    // email field validation
    if(!email.val()){
      email.addClass('outline outline-red-400 rounded');
      valid = false;
    }

    // pass word field validation
    if(!password.val()){
      password.addClass('outline outline-red-400 rounded');
      valid = false;
    }
    // backend validation
    if(valid){
      // reset input styles
      // this is where the backend will interact w front
    }
  }

  const signupSubmit = (e) => {
    // e.preventDefault();
    let valid = true;
    let email = $('#signup input#email');
    let password = $('#signup input#password');

    // email field validation
    if(!email.val()){
      email.addClass('outline outline-red-400 rounded');
      valid = false;
    }

    // pass word field validation
    if(!password.val()){
      password.addClass('outline outline-red-400 rounded');
      valid = false;
    }

    // backend validation
    if(valid){
      // reset input styles

      // this is where the backend will interact w front
    }
  }

  const clearForm = () => {

  }

  return(
    <div id='landing' className='flex flex-auto p-6'>
      <div id='scroll-container' className='flex flex-col relative h-full w-2/4 pt-1 overflow-hidden justify-center content-center'>
        <div id='primary' className='flex flex-wrap absolute top-0 right-0 h-full justify-around gap-6 mt-3'> {/* grid of books, maybe 'featured' books? */}
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
        <div id='secondary' className='flex flex-wrap absolute top-full right-0 h-full justify-around gap-6 mt-3'> {/* grid of books, maybe 'featured' books? */}
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
          <h1 className='text-5xl font-semibold font-display'>Discover, Discuss, and Track your next reads along tens of other users</h1>
        </div>
        <form id='login' className='flex flex-col flex-wrap gap-6'> {/* login form to display */}
          <TextField id='email' required label="Email" variant="outlined" />
          <TextField id='password' required label="Password" variant="outlined" />
          {/* need show password option*/}
          <div id='buttons' className='flex gap-6 items-center'>
            <Button size='large' className='h-1/4 w-1/4' variant="outlined" onClick={() => loginSubmit()}>Login</Button> 
            <Button className='h-1/4' variant="text" onClick={() => toggleForm()}>Dont have an account?</Button>            
          </div>
        </form>
        <form id='signup' className='hidden flex flex-col flex-wrap gap-6'> {/* signup form to display */}
          <TextField id='firstName' label="First Name" variant="outlined" />
          <TextField id='email' required label="Email" variant="outlined" />
          <TextField id='password' required label="Password" variant="outlined" />
          {/* need show password option*/}
          <div id='buttons' className='flex gap-6 items-center'>
            <Button size='large' className='h-1/4 w-1/4' variant="outlined" onClick={() => signupSubmit()}>Sign Up</Button> 
            <Button className='h-1/4' variant="text" onClick={() => toggleForm()}>Back</Button>            
          </div>
        </form>      
      </div>
    </div>
  )
} 


function App() {
  return (
    <div className="App font-sans flex flex-col h-screen">
      <Header />
      <Landing />
    </div>
  );
}

export default App;