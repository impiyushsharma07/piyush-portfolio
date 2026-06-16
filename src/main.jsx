import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Menu,
  PieChart,
  Phone,
  Send,
  Sparkles,
  Target,
  X
} from "lucide-react";
import "./styles.css";

const navItems = ["Home", "Resume", "Education", "Skills", "Projects", "Contact"];

const profile = {
  name: "Piyush",
  role: "Data Analyst",
  tagline: "I turn raw data into clear dashboards, practical insights, and smarter business decisions.",
  summary:
    "Detail-focused data analyst skilled in cleaning data, building dashboards, tracking KPIs, and translating patterns into business-ready recommendations.",
  location: "India",
  email: "piyushkr993434@gmail.com",
  phone: "9572052028"
};

const stats = [
  ["20+", "Reports Built"],
  ["8+", "Dashboards"],
  ["92", "Insight Score"],
  ["100%", "Data Focus"]
];

const heroHighlights = ["Business dashboards", "SQL analysis", "KPI reporting"];

const resume = [
  {
    title: "Data Analyst",
    meta: "Excel, SQL, Python, Power BI, Tableau",
    text: "Transforms messy datasets into clean reports, interactive dashboards, and insight summaries that support faster decisions."
  },
  {
    title: "Business Intelligence Reporting",
    meta: "KPI tracking, visualization, dashboard design",
    text: "Designs KPI views for sales, marketing, finance, and operations with simple visuals that make trends easy to understand."
  },
  {
    title: "Data Cleaning & Analysis",
    meta: "Data validation, exploratory analysis, storytelling",
    text: "Prepares reliable datasets, identifies patterns, explains risks, and presents recommendations in clear non-technical language."
  }
];

const education = [
  {
    degree: "Bachelor / Diploma / Course Name",
    school: "Your College or Institute",
    year: "2022 - 2026",
    note: "Add your real stream, percentage, CGPA, or specialization here."
  },
  {
    degree: "Higher Secondary Education",
    school: "Your School Name",
    year: "2020 - 2022",
    note: "Science, commerce, arts, or relevant technical subjects."
  }
];

const skills = [
  ["Microsoft Excel", 94],
  ["SQL Queries", 88],
  ["Power BI", 90],
  ["Tableau", 82],
  ["Python / Pandas", 78],
  ["Data Cleaning", 92],
  ["Statistics", 80],
  ["Business Storytelling", 86]
];

const projects = [
  {
    name: "Sales Performance Dashboard",
    type: "Power BI + Excel",
    text: "Tracks revenue, targets, region-wise performance, monthly trends, and top products for management review."
  },
  {
    name: "Customer Churn Analysis",
    type: "SQL + Python",
    text: "Segments customers, finds churn drivers, and highlights retention opportunities using clean exploratory analysis."
  },
  {
    name: "Marketing Campaign Report",
    type: "Tableau Dashboard",
    text: "Compares channel performance, conversion cost, lead quality, and campaign ROI through interactive visuals."
  }
];

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState("");

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Message failed");
      }

      setFormStatus("Thanks. Your message has been submitted successfully.");
      form.reset();
    } catch {
      setFormStatus("Thanks. Your message is ready, but the local server could not save it right now.");
    }
  };

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <span className="float-icon code">SQL</span>
        <span className="float-icon bolt">KPI</span>
        <span className="float-icon node">BI</span>
        <span className="float-icon react">CSV</span>
        <span className="float-dot dot-one" />
        <span className="float-dot dot-two" />
        <span className="float-dot dot-three" />
      </div>

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>P</span>
          Piyush
        </a>
        <nav id="primary-navigation" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
        <a
          className="print-button"
          href="https://drive.google.com/file/d/1ZmuR5UlwJnopPJXPK_7o7kkDUkohag5p/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <BookOpen size={18} />
          My Resume
        </a>
        <button
          className="icon-button"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <Target size={16} />
              Data analyst for smarter decisions
            </p>
            <h1>
              Hi, I am <span>{profile.name}</span>. I turn data into decisions.
            </h1>
            <p className="lead">
              A {profile.role} who builds clean reports, powerful dashboards, and practical insights from messy
              business data.
            </p>
            <div className="hero-highlights" aria-label="Analytics strengths">
              {heroHighlights.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-action" href="#contact">
                <Mail size={18} />
                Start a Project
              </a>
              <a className="secondary-action" href="#projects">
                <BarChart3 size={18} />
                See My Work
              </a>
            </div>
            <div className="stats-grid">
              {stats.map(([value, label]) => (
                <div className="stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="portrait-wrap" aria-label="Profile image">
            <div className="portrait-frame">
              <img src={assetPath("profile-image.png")} alt="Piyush profile portrait" />
            </div>
            <div className="orbit-card top">
              <PieChart size={20} />
              KPI Insights
            </div>
            <div className="orbit-card bottom">
              <LineChart size={20} />
              Clear Trends
            </div>
          </div>
        </section>

        <section id="resume" className="section-shell resume-section">
          <SectionHeading icon={<BriefcaseBusiness />} label="Resume" title="Professional Profile" />
          <div className="resume-layout">
            <article className="profile-panel">
              <h3>{profile.role}</h3>
              <p>{profile.summary}</p>
              <div className="quick-info">
                <span>
                  <MapPin size={17} />
                  {profile.location}
                </span>
                <span>
                  <Mail size={17} />
                  {profile.email}
                </span>
                <span>
                  <Phone size={17} />
                  {profile.phone}
                </span>
              </div>
            </article>
            <div className="resume-timeline">
              {resume.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span className="timeline-marker" />
                  <h3>{item.title}</h3>
                  <p className="meta">{item.meta}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-shell">
          <SectionHeading icon={<GraduationCap />} label="Education" title="Learning Path" />
          <div className="education-grid">
            {education.map((item) => (
              <article className="edu-card" key={item.degree}>
                <BookOpen size={24} />
                <p className="year">{item.year}</p>
                <h3>{item.degree}</h3>
                <strong>{item.school}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell skills-section">
          <SectionHeading icon={<Database />} label="Skills" title="Analytics Strength" />
          <div className="skills-grid">
            {skills.map(([skill, value]) => (
              <div className="skill-row" key={skill}>
                <div className="skill-top">
                  <span>{skill}</span>
                  <strong>{value}/100</strong>
                </div>
                <div className="progress-track" aria-label={`${skill} skill level ${value} out of 100`}>
                  <span style={{ "--level": `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading icon={<Sparkles />} label="Projects" title="Selected Work" />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className={`project-art chart-${index + 1}`}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <span>{project.text}</span>
                <a href="#contact">
                  Discuss Similar Work <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div className="contact-copy">
            <p className="eyebrow">
              <Mail size={16} />
              Contact
            </p>
            <h2>Need clear answers from your data?</h2>
            <p>Send a message for dashboards, reporting, data cleaning, Excel automation, or business analysis work.</p>
            <div className="contact-actions">
              <a className="secondary-action" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Email Me
              </a>
              <a className="secondary-action" href={`tel:${profile.phone.replaceAll(" ", "")}`}>
                <Phone size={18} />
                Call
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Project Type
              <select name="projectType" defaultValue="dashboard">
                <option value="dashboard">Dashboard / BI Report</option>
                <option value="cleaning">Data Cleaning</option>
                <option value="analysis">Business Analysis</option>
                <option value="excel">Excel Automation</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me what data problem you want to solve" required />
            </label>
            <button className="primary-action form-button" type="submit">
              <Send size={18} />
              Send Message
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </section>
      </main>
      <PrintableResume />
    </>
  );
}

function SectionHeading({ icon, label, title }) {
  return (
    <div className="section-heading">
      <p>
        {React.cloneElement(icon, { size: 17 })}
        {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function PrintableResume() {
  return (
    <section className="print-resume" aria-label="ATS friendly printable resume">
      <h1>{profile.name}</h1>
      <table>
        <tbody>
          <tr>
            <th>Target Role</th>
            <td>{profile.role}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{profile.location}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{profile.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{profile.phone}</td>
          </tr>
        </tbody>
      </table>

      <h2>Professional Summary</h2>
      <p>{profile.summary}</p>

      <h2>Core Skills</h2>
      <table>
        <tbody>
          {skills.map(([skill, value]) => (
            <tr key={skill}>
              <th>{skill}</th>
              <td>{value}/100</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Tools / Focus</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {resume.map((item) => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.meta}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institute</th>
            <th>Year</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item) => (
            <tr key={item.degree}>
              <td>{item.degree}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
              <td>{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Tools</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.name}>
              <td>{project.name}</td>
              <td>{project.type}</td>
              <td>{project.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
