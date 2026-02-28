export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Contact Me
        </h2>

        <p className="text-slate-300 mb-8 text-lg">
          Let’s build scalable cloud systems together 🚀
        </p>

        <div className="space-y-3 text-slate-300">
          <p>📧 lakshminarashimha228@gmail.com</p>
          <p>📍 Bangalore, India</p>
          <div className="space-x-4">
  <a
    href="https://github.com/YOUR_GITHUB_USERNAME"
    target="_blank"
    rel="noreferrer"
    className="text-blue-400 hover:text-blue-300 transition"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
    target="_blank"
    rel="noreferrer"
    className="text-blue-400 hover:text-blue-300 transition"
  >
    LinkedIn
  </a>
</div>
        </div>

        <div className="mt-10">
          <a
  href="/resume.pdf"
  download
  className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 text-white transition inline-block"
>
  Download Resume
</a>
        </div>

      </div>
    </section>
  );
}