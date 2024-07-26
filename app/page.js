import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container">
      <img src="/images/profile.jpg" alt="Profile Photo" />
      <h1>Hello, I'm Sukhman Kaur</h1>
      <p>Welcome to my resume website.</p>
      <p>I am a Receptionist and Cashier.</p>
      <div className="links-box">
        <Link href="/resume">
          <button>Resume</button>
        </Link>
        <Link href="/contact">
          <button>Contact</button>
        </Link>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sukhman-kaur-b3594b287/">LinkedIn</a>
          <a href="https://github.com/sukhman-12">GitHub</a>
        </div>
      </div>
    </div>
  );
}
