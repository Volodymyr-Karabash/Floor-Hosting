import React from 'react'

const Footer = () => {
  return (
    <footer className="text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Floor Hosting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer