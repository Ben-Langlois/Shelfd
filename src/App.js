import './App.scss';
import $, { event } from 'jquery';
import {useState, useEfffect} from 'react';
import Header from './header.js';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField, FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton } from '@mui/material';

const toggleForm = (form) => {
  $('#login').toggleClass('hidden');
  $('#signup').toggleClass('hidden');
}

/* Currently
  - adding book covers to display in infinite scroll
  - having text inputs get error prop instead of changing border color to red, which cuts through label
  - email validation
  - strong password 
  - clearForm()
  - fix flex row mishap for infinite scroll when window is resized
*/

const Landing = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const bookStyle = 'outline outline-red-400 rounded w-1/6 h-1/5';

  const formSubmit = (form) => {
    // e.preventDefault();
    let valid = true;
    let email = $(`#${form} input#email`);
    let password = $(`#${form} input#password`);

    // email field validation
    if(!email.val()){
      email.addClass('outline outline-red-400 rounded');
      valid = false;
    } else {
      email.removeClass('outline outline-red-400 rounded'); 
    }

    // pass word field validation
    if(!password.val()){
      password.addClass('outline outline-red-400 rounded');
      valid = false;
    } else {
      password.removeClass('outline outline-red-400 rounded');
    }
    // backend validation
    if(valid){
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
          <TextField id='email' className='!font-sans' required label="Email" variant="outlined" />
          {/* <TextField id='password' required label="Password" variant="outlined" /> */}
          <FormControl  variant="outlined" required >
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
            <Button className='h-1/4' variant="text" onClick={() => toggleForm()}>Dont have an account?</Button>            
          </div>
        </form>
        <form id='signup' className='hidden flex flex-col flex-wrap gap-6'> {/* signup form to display */}
          <TextField id='firstName' label="First Name" variant="outlined" />
          <TextField id='email' required label="Email" variant="outlined" />
          <FormControl  variant="outlined" required >
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