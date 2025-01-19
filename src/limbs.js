import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    return(
        <header id='header' className='flex flex-initial mx-auto my-6 justify-center items-center gap-x-6 sm:w-90 sm:mx-none lg:w-1/2 '> {/*border-slate-400 border-b on scroll down */}
            <h1 className='text-3xl flex-1 font-display font-medium ml-auto text-right'>Shelfd</h1>
            <input type="text" name="search" className='w-full rounded outline outline-slate-300 p-1 text-center' placeholder='Search Books, Authors, Genres etc'/>
            <div className='flex flex-1 mr-auto gap-6'>
                <Avatar className='hover:scale-110'>U</Avatar>
                <PersonOutlineIcon className='hover:scale-110 my-auto transform transition duration-50 cursor-pointer'/>
            </div>
        </header>
    )
}

export const Footer = () => {
    return(
        <footer className='flex flex-initial opacity-70 my-6 gap-6 justify-center'>
            <a href='https://github.com/Ben-Langlois/Shelfd'><GitHubIcon className='hover:scale-110' fontSize='small'/></a>
            <h1 className='place-self-center'>Shelfd 2024</h1>
            <a href='https://www.linkedin.com/in/benjaminlanglois/'><LinkedInIcon className='hover:scale-110' fontSize='small'/></a>
        </footer>
    )
}

