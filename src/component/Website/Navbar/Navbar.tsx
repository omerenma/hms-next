import React from 'react'
import {links} from '../Link'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      {
        links.map(link => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
        ))
      }
    </div>
  )
}

export default Navbar
