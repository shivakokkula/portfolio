import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="/resume.pdf" download="Shivakumar_Kokkula_Resume.pdf" className={styles.downloadBtn}>
            Download Resume
          </a>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <h1>Shivakumar Kokkula</h1>
        <p>Backend Developer</p>
      </section>

      <section id="about" className={styles.about}>
        <h2 className={styles.sectionHeading}>About Me</h2>
        <p className={styles.sectionText}>
          I am a backend developer with expertise in Java, Python, JavaScript, SQL, and cloud technologies like AWS and Azure.
          Currently working at Tata Consultancy Services.
        </p>
      </section>

      <section id="experience" className={styles.experience}>
        <h2 className={styles.sectionHeading}>Experience</h2>
        <div className={styles.experienceItem}>
          <h3>Tata Consultancy Services (Mar 2022 - Present)</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Received Contextual Master Award for optimizing business processes.</li>
            <li className={styles.listItem}>Developed robust REST APIs and web services for critical apps.</li>
            <li className={styles.listItem}>Engineered a chatbot employing NLP technology, increasing customer satisfaction by 30%.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h3>Varcsoft (Jul 2021 - Feb 2022)</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Built RESTful APIs and improved logging solutions, reducing MTTR by 30%.</li>
            <li className={styles.listItem}>Led a team for agile development, maintaining System/DB architecture.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h3>Shubhchintak Foundation (Apr 2021 - Jun 2021)</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Implemented server-side scripting, boosting operational efficiency by 30%.</li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h3>Sparks Foundation (Apr 2021 - May 2021)</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Developed data models, predictive analytics, and visualizations for sample projects.</li>
          </ul>
        </div>
      </section>

      <section id="education" className={styles.education}>
        <h2 className={styles.sectionHeading}>Education</h2>
        <p className={styles.sectionText}>BE (Computer) - Vidyalankar Institute of Technology (Jul 2018 - Jun 2022), CGPA: 9.5/10</p>
      </section>

      <section id="certifications" className={styles.certifications}>
        <h2 className={styles.sectionHeading}>Certifications</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>AWS Developer Associate - Amazon Web Services (Feb 2023)</li>
          <li className={styles.listItem}>Microsoft Certified: Azure - Microsoft (Mar 2022)</li>
          <li className={styles.listItem}>Data Analysis (Python) - IBM (Mar 2021)</li>
          <li className={styles.listItem}>Python for Data Science - IBM (Mar 2021)</li>
        </ul>
      </section>

      <section id="projects" className={styles.projects}>
        <h2 className={styles.sectionHeading}>Projects</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Agrismart - A cross-platform mobile app for farmers</li>
          <li className={styles.listItem}>EventX - A robust backend system for a digital wallet</li>
          <li className={styles.listItem}>Attendance System - Face detection-based attendance tracking</li>
        </ul>
      </section>

      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionHeading}>Contact</h2>
        <p className={styles.sectionText}>Mobile: 8433667331</p>
        <p className={styles.sectionText}>Email: <a href="mailto:kokkulashivakumar1@gmail.com">kokkulashivakumar1@gmail.com</a></p>
        <p className={styles.sectionText}>LinkedIn: <a href="https://www.linkedin.com/in/shivakokkula01">linkedin.com/in/shivakokkula01</a></p>
        <p className={styles.sectionText}>GitHub: <a href="https://github.com/shivakokkula">github.com/shivakokkula</a></p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Shivakumar Kokkula. All rights reserved.</p>
      </footer>
    </div>
  );
}