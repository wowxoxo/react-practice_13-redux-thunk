import React from 'react'
import Navbar from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export function Nav({ activeKey, items }) {
  return (
    <Navbar className="bg-light mb-4"  activeKey={activeKey}>
      <div className="container d-flex">
        {items.map((item) => (
          <Navbar.Item key={item.href}>
            <Navbar.Link as={Link} to={item.href}>
              {item.title}
            </Navbar.Link>
          </Navbar.Item>
        ))}
      </div>
    </Navbar>
  )
}
