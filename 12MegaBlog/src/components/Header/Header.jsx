import React from 'react'
import { Container, Logo, LogoutBtn} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn';

const Header = () => {
  const authStatus = useSelector((state) => {
    state.auth.status
  })

  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-post',
      active: !authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-post',
      active: !authStatus
    },
  ]
  return (
    <div>
      <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px'></Logo>
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item)=>{
                return item.active ? 
                <li key={item.name}> 
                  <button onClick={() => navigate(item.slug)} 
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li> : null;
              })}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header