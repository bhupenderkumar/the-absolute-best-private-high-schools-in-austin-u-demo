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
        <title>The Absolute Best Private High Schools in Austin - Programs</title>
        <meta name="description" content="Explore the best private high schools in Austin, TX" />
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
              <Link href="/programs">
                <a>Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/admissions">
                <a>Admissions</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Discover the Best Private High School Programs in Austin</h1>
          <p>At The Absolute Best Private High Schools in Austin, we offer a range of programs to help our students succeed.</p>
        </section>

        <section className="programs">
          <h2>Academic Programs</h2>
          <ul>
            <li>
              <h3>Advanced Placement (AP) Courses</h3>
              <p>Our AP courses are designed to challenge our students and prepare them for college-level coursework.</p>
            </li>
            <li>
              <h3>Dual Enrollment Programs</h3>
              <p>Our dual enrollment programs allow students to earn college credit while still in high school.</p>
            </li>
            <li>
              <h3>Special Education Programs</h3>
              <p>Our special education programs are designed to meet the unique needs of our students with special needs.</p>
            </li>
          </ul>
        </section>

        <section className="extracurriculars">
          <h2>Extracurricular Programs</h2>
          <ul>
            <li>
              <h3>Sports Teams</h3>
              <p>Our sports teams compete at the state and national levels, and our students develop important skills like teamwork and discipline.</p>
            </li>
            <li>
              <h3>Clubs and Organizations</h3>
              <p>Our clubs and organizations offer students the opportunity to explore their interests and develop new skills.</p>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 The Absolute Best Private High Schools in Austin. All rights reserved.</p>
        <p>Email: <a href="mailto:email@protected">email@protected</a></p>
      </footer>
    </>
  );
}

export default ProgramsPage;
```

This JSX code represents the programs page for The Absolute Best Private High Schools in Austin. It includes a navigation menu, a hero section, sections for academic and extracurricular programs, and a footer with contact information. 

This code uses Next.js components, such as `Head` for setting the page title and meta tags, `Link` for client-side routing, and `main` for structuring the page content. The CSS classes used in the code are for styling purposes and can be customized as needed. 

This code assumes that the Next.js project is set up with a proper `pages` directory structure and that the necessary dependencies are installed.
    </section>
  );
}
