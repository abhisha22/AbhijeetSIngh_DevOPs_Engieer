import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("black");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const message = e.target.message.value;

    if (contact.length !== 10) {
      setStatusColor("red");
      setStatus("❌ Contact number must be exactly 10 digits.");
      return;
    }

    setStatusColor("black");
    setStatus("Sending request...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {name: `${name} | Contact Number: ${contact}`,message: message},
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusColor("green");
        setStatus("✅ Request sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        setStatusColor("red");
        setStatus("❌ Failed to send request. Please try again.");
      });
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <h1>Abhijeet Singh</h1>
        <h2>Cloud / DevOps Engineer</h2>
        <p>
          📧 <a href="mailto:asingh74175@gmail.com">asingh74175@gmail.com</a> | 📞
          +91-6392779856 | 📍 Gurugram, India <br />
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/abhijeet-singh-3506aa201"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </header>

      {/* PROFESSIONAL SUMMARY */}
        <section>
          <h3 className="section-title">Professional Summary</h3>
          <div className="card">
            <p>
              Cloud / DevOps Engineer with 2.8+ years of hands-on experience designing,
              deploying, and managing AWS-based production systems. Strong expertise in
              Docker, ECS, CI/CD automation, cloud security, and cost optimization.
              Proven ability to support scalable applications and improve reliability,
              performance, and cloud cost efficiency.
            </p>
          </div>
        </section>


      {/* TOOLS */}
      <section>
        <h3 className="section-title">Tools & Platforms</h3>
        <div className="card">
          <div className="tools">
            <img src="/aws.jpg" alt="AWS" />
            <img src="/devops.jpg" alt="DevOps" />
            <img src="/docker.jpg" alt="Docker" />
            <img src="/jenkins.jpg" alt="Jenkins" />
            <img src="/linux.jpg" alt="linux" />
            <img src="/git.jpg" alt="Git" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h3 className="section-title">Experience</h3>
        <div className="card">
          <h4>Cloud / DevOps Engineer – Benepik Technology Pvt. Ltd.</h4>
          <p>
            <strong>June 2023 – Present | Gurugram</strong>
          </p>
          <ul>
            <li>Deployed Angular frontend with PHP, Java, and Python backends</li>
            <li>Dockerized applications and deployed on AWS ECS</li>
            <li>Built CI/CD pipelines using Jenkins & GitLab</li>
            <li>
              Managed EC2, RDS, S3, IAM, CloudWatch, WAF, ECS, ECR, ElastiCache
            </li>
            <li>Implemented IAM, KMS, Secrets Manager</li>
            <li>AWS cost optimization & disaster recovery planning</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills">
          <div className="skill-box">AWS EC2, ECS, ECR, RDS, S3</div>
          <div className="skill-box">IAM, ELB, Route53, CloudWatch</div>
          <div className="skill-box">WAF, KMS, Secrets Manager</div>
          <div className="skill-box">Docker, Jenkins, Git, GitLab</div>
          <div className="skill-box">Groovy, Shell, Basic Python</div>
          <div className="skill-box">NGINX, Apache</div>
          <div className="skill-box">Ubuntu, Amazon Linux</div>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h3 className="section-title">Education</h3>
        <div className="card">
          <p>
            <strong>B.Sc. Computer Science</strong> – 2021
          </p>
          <p>
            <strong>Class XII (CBSE)</strong> – 2018
          </p>
          <p>
            <strong>Class X (CBSE)</strong> – 2016
          </p>
        </div>
      </section>

      {/* AWARDS */}
      <section>
        <h3 className="section-title">Awards & Recognition</h3>
        <div className="card">
          <ul>
            <li>Best Debut Award – 2023</li>
            <li>Reliable Award – 2024</li>
            <li>Cost Optimization Recognition – 2024</li>
            <li>Finisher Award – 2025</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h3 className="section-title">Need Help With Cloud or Deployment?</h3>
        <div className="card">
          <form onSubmit={sendEmail}>
            <input name="name" placeholder="Your Name" required />

            <input
              name="contact"
              placeholder="Contact Number"
              maxLength={10}
              required
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <textarea
              name="message"
              placeholder="What help do you need?"
              required
            />

            <button type="submit">Send Request</button>
            <p style={{ color: statusColor }}>{status}</p>
          </form>
        </div>
      </section>

      <footer>© 2026 Abhijeet Singh | Cloud / DevOps Engineer</footer>
    </>
  );
}
