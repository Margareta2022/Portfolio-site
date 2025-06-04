import React from "react";

export default function Portfolio() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '1.5rem',
        color: '#fff',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // gradient background
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>Hi, I'm Margareta Baraliuc</h1>
  <p style={{ fontSize: '1.125rem', color: '#e0e0e0' }}>
    Software Engineer with a strong emphasis on product impact| Driven to engineer tools that improve user experience and business outcomes
  </p>
     {/* Skills */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Skills</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.5rem', fontSize: '0.875rem' }}>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js</li>
          <li>Playwright (Test Automation)</li>
          <li>Azure DevOps</li>
          <li>REST APIs</li>
          <li>Git / GitHub/ Gitkraken </li>
          <li>CI/CD</li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Projects</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Web Application - QIO</h3>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
              I’m currently working on the Quality Improvement Organization (QIO) project, where I develop and maintain automated test suites using Playwright with JavaScript and Node.js.
              My role involves integrating these tests into Azure DevOps CI/CD pipelines to ensure smooth and reliable deployments.
              By collaborating closely with cross-functional teams, I help improve product quality and accelerate delivery cycles through effective test automation
            </p>
            <a href="https://github.com/yourusername/project-repo" target="_blank" style={{ color: '#1e40af', fontSize: '0.875rem', display: 'inline-block', marginTop: '0.5rem' }}>View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Résumé</h2>
        <a href="/resume.pdf" target="_blank" style={{ backgroundColor: '#1e40af', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none' }}>
          View My Résumé (PDF)
        </a>
      </section>

      {/* Contact */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Contact</h2>
        <p style={{ marginBottom: '0.25rem' }}>Phone: 415-471-6427</p>
        <p style={{ marginBottom: '0.25rem' }}>Email: <a href="mailto:margareta.baraliuc@gmail.com" style={{ color: '#1e40af' }}>margareta.baraliuc@gmail.com</a></p>
        <p style={{ marginBottom: '0.25rem' }}>GitHub: <a href="https://github.com/Margareta2022" style={{ color: '#1e40af' }}>@Margareta2022</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/margareta-baraliuc/" style={{ color: '#1e40af' }}>linkedin.com/in/margareta-baraliuc</a></p>
      </section>
    </main>
  );
}
