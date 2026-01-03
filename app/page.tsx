const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "Omnisciento IT Consultancy Pvt. Ltd.",
    duration: "June 2025 – August 2025",
    points: [
      "Developed a law-firm ERP system using the MERN stack.",
      "Built REST APIs for clients, cases, and user roles.",
      "Implemented authentication, CRUD operations, and backend validation.",
      "Collaborated with senior developers to fix production-like issues.",
      "Used Git and GitHub for version control and team collaboration.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Law Firm ERP System",
    description:
      "A full-stack ERP system designed to manage clients, cases, and internal workflows for a law firm.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    
  },
  {
    title: "Smart Task App",
    description:
      "A Kanban-style task management application with authentication and collaboration features.",
    tech: ["React", "Node.js", "MongoDB"],
    
  },
  {
    title: "Face Recognition System",
    description:
      "A real-time face recognition system built using Python and OpenCV.",
    tech: ["Python", "OpenCV"],
    
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-gray-900">
            Hello,
            <br />I am Shivani
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-700">
            I build modern web applications with clean UI, scalable backend,
            and real-world problem solving in mind.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                         text-white font-medium shadow-lg hover:scale-[1.03] transition"
            >
              View Work →
            </a>

            <a
              href="#about"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                         text-white font-medium shadow-lg hover:scale-[1.03] transition"
            >
              About →
            </a>

            <a
              href="/resume.pdf"
              className="px-8 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>

            <p className="mt-6 text-lg text-gray-700">
              I am Shivani, currently pursuing my Master’s in Computer
              Applications. I enjoy building real-world, scalable web
              applications.During my internship, I worked on a law-firm ERP system handling
              frontend, backend, REST APIs, authentication, and bug fixing.
              I focus on writing clean code and continuously improving my skills.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <ul className="space-y-4 text-gray-700">
              <li><strong>MCA</strong> – BIT Mesra</li>
              <li><strong>Internship</strong> – MERN Stack Developer</li>
              <li><strong>Tech</strong> – React, Node.js, MongoDB, HTML, CSS,</li>
              <li><strong>Languages</strong> – C, Java, JavaScript, Python,Sql</li>
              <li><strong>Interest</strong> – Real-world problem solving</li>
              <li><strong>Goal</strong> – Build impactful products</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Experience</h2>

          <div className="mt-10 space-y-8">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.role}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Projects</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-700">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Contact Me</h2>

          <p className="mt-4 text-gray-300">
            I am open to internships, full-time roles, and exciting projects.
          </p>

          <div className="mt-8 space-y-3">
            <p>
              📧{" "}
              <a
                href="mailto:connect.shivanikumari@gmail.com"
                className="text-indigo-400 hover:underline"
              >
                connect.shivanikumari@gmail.com
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:6201564749"
                className="text-indigo-400 hover:underline"
              >
                6201564749
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
