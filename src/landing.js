import './App.scss';
import $, { event } from 'jquery';
import { useState, useEffect } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { TextField, FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Button } from '@mui/material';
/*Landing
   
*/
export const Landing = () => {
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