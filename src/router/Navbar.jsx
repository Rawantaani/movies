import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar  bg-dark ">


            <div  >
                <Link className='text-white text-decoration-none me-3 ms-2' to='/'>MovieDb App</Link>
                <Link className='text-white text-decoration-none ' to='trending'>Trending</Link>
            </div>



            <form className="d-flex" >
                <input className="form-control me-2" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary me-2" type="submit">Search</button>
            </form>



        </nav>
    )
}

export default Navbar