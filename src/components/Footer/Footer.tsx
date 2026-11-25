import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p>
        © {new Date().getFullYear()} Saradhi Muneendra Gundabattina.
        All rights reserved.
      </p>

      <a href="#home" aria-label="Back to top of page">
        Back to Top ↑
      </a>
    </footer>
  )
}

export default Footer