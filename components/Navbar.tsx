import Link from "next/link";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-3">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-tight text-slate-50"
        >
          cloud<span className="text-primary-400">.port</span>
        </Link>
        <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="transition-colors hover:text-primary-300"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

