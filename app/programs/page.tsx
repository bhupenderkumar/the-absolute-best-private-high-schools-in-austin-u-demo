export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function ProgramsPage() {
  return (
    <>
      <Head>
        <title>The Absolute Best Private High Schools in Austin | Programs</title>
        <meta name="description" content="Explore the best private high school programs in Austin, TX." />
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/programs">
                <a>Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/admissions">
                <a>Admissions</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="programs-hero">
          <h1>Private High School Programs in Austin</h1>
          <p>Discover the best private high school programs in Austin, TX, tailored to help your child thrive academically, personally, and socially.</p>
          <Link href="/contact">
            <a className="btn">Get in Touch</a>
          </Link>
        </section>

        <section className="programs-grid">
          <h2>Our Programs</h2>
          <ul>
            <li>
              <h3>Academic Programs</h3>
              <p>Our rigorous academic programs are designed to challenge and engage students, with a focus on critical thinking, creativity, and problem-solving.</p>
            </li>
            <li>
              <h3>Arts and Music Programs</h3>
              <p>Our arts and music programs offer students the opportunity to explore their creativity and express themselves through various mediums.</p>
            </li>
            <li>
              <h3>Athletic Programs</h3>
              <p>Our athletic programs foster teamwork, discipline, and sportsmanship, with a focus on developing well-rounded student-athletes.</p>
            </li>
            <li>
              <h3>Counseling and Support Programs</h3>
              <p>Our counseling and support programs provide students with a safe and supportive environment to address academic, emotional, and social challenges.</p>
            </li>
          </ul>
        </section>

        <section className="testimonials">
          <h2>What Our Parents Say</h2>
          <ul>
            <li>
              <p>"The Absolute Best Private High Schools in Austin has provided my child with an exceptional education and a supportive community."</p>
              <p>- Parent, Class of 2025</p>
            </li>
            <li>
              <p>"The school's commitment to academic excellence, character development, and community service has made a significant impact on my child's life."</p>
              <p>- Parent, Class of 2024</p>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 The Absolute Best Private High Schools in Austin. All rights reserved.</p>
        <p>Email: <a href="mailto:email protected">email protected</a></p>
      </footer>
    </>
  );
}

export default ProgramsPage;
```

This JSX code represents a Next.js page component for the Programs page of The Absolute Best Private High Schools in Austin. It includes a navigation menu, a hero section, a grid section showcasing the school's programs, a testimonials section, and a footer with contact information.
    </section>
  );
}
