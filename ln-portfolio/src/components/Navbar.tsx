export default function Navbar() {
  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Project", id: "project" },
    { name: "Workflow", id: "workflow" },
    { name: "Videos", id: "videos" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-center gap-6 py-4">

        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-slate-300 hover:text-blue-400 transition"
          >
            {link.name}
          </button>
        ))}

      </div>
    </nav>
  );
}