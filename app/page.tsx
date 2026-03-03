"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import { SiDocker, SiKubernetes, SiTerraform, SiGithubactions, SiJenkins } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiGithub, FiExternalLink, FiMail, FiDownload } from "react-icons/fi";

const projects = [
  {
    name: "Cloud-native Microservices Platform",
    description:
      "Designed and deployed a microservices architecture on AWS using EKS, ALB, and managed RDS with GitOps-driven deployments.",
    tech: ["AWS", "Kubernetes", "Docker", "ArgoCD", "RDS"],
    github: "https://github.com/your-username/cloud-microservices",
    link: "#"
  },
  {
    name: "Terraform Landing Zone",
    description:
      "Implemented an opinionated AWS landing zone with reusable Terraform modules, networking, IAM, and guardrails.",
    tech: ["Terraform", "AWS", "IAM", "VPC"],
    github: "https://github.com/your-username/aws-landing-zone",
    link: "#"
  },
  {
    name: "End-to-end CI/CD Pipeline",
    description:
      "Built a cloud-native CI/CD pipeline for containerized workloads with automated tests, security scans, and blue/green deployments.",
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Helm"],
    github: "https://github.com/your-username/cloud-cicd-pipeline",
    link: "#"
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2024"
  },
  {
    name: "CKA – Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    year: "2023"
  }
];

const experience = [
  {
    role: "Cloud Engineer",
    company: "Example Cloud Consultancy",
    period: "2023 – Present",
    summary:
      "Designing, implementing, and operating secure, scalable cloud platforms with a strong focus on automation, observability, and reliability."
  },
  {
    role: "DevOps Engineer",
    company: "Example SaaS Company",
    period: "2020 – 2023",
    summary:
      "Built and maintained CI/CD pipelines, container platforms, and infrastructure-as-code for high-traffic production workloads."
  }
];

export default function HomePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("reveal-in-view");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_60%)]" />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="section-padding">
          <div
            className="section-container grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
            data-reveal
          >
            <div>
              <p className="hero-badge-orbit mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-300/80 shadow-[0_0_25px_rgba(8,47,73,0.75)]">
                Cloud Engineer · DevOps
              </p>
              <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Emmanuel Nzovu
                <span className="block bg-gradient-to-r from-primary-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  Building reliable cloud platforms.
                </span>
              </h1>
              <p className="mb-6 max-w-xl text-sm text-slate-300 sm:text-base">
                I design, automate, and operate cloud-native infrastructure on
                AWS with a focus on Kubernetes, containers, CI/CD, and
                infrastructure as code.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="underline-sweep inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-primary-400"
                >
                  View projects
                  <FiExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  className="underline-sweep inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-primary-400/80 hover:text-primary-200"
                >
                  <FiDownload className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </div>

            <div className="hero-floating-card relative mx-auto w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur md:mx-0 md:max-w-none">
              <div className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-200 shadow-[0_6px_10px_rgba(15,23,42,0.8)] ring-2 ring-slate-500/80" />
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Cloud focus
              </p>
              <div className="space-y-4 text-xs text-slate-300">
                <p>
                  AWS-first architectures with production experience in
                  container platforms, multi-account landing zones, and
                  security-first design.
                </p>
                <p>
                  I enjoy building paved roads: opinionated, automated
                  platforms that make it easy for teams to ship safely and
                  quickly.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-[11px] text-slate-200">
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/40 px-3 py-3">
                    <FaAws className="h-6 w-6 text-[#FF9900]" />
                    <span>AWS</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/40 px-3 py-3">
                    <SiKubernetes className="h-6 w-6 text-[#326CE5]" />
                    <span>Kubernetes</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/40 px-3 py-3">
                    <SiTerraform className="h-6 w-6 text-[#844FBA]" />
                    <span>Terraform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-padding border-t border-slate-900/80">
          <div
            className="section-container grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            data-reveal
          >
            <div className="text-center md:text-left">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300/80">
                About
              </h2>
              <p className="text-lg font-medium tracking-tight text-slate-50">
                Cloud engineer focused on reliable, observable, and secure
                platforms.
              </p>
            </div>
            <div className="space-y-4 text-center text-sm text-slate-300 sm:text-[0.95rem] md:text-left">
              <p>
                I specialise in building and operating cloud infrastructure on
                AWS, with a strong emphasis on containers, Kubernetes, and
                infrastructure-as-code. I enjoy working at the intersection of
                development and operations, enabling teams to ship quickly while
                maintaining reliability.
              </p>
              <p>
                My experience spans greenfield cloud-native platforms and
                modernising legacy systems into scalable, observable, and
                secure architectures. I care about good defaults, clear
                documentation, and automating the boring — and brittle —
                parts of platform engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="section-padding border-t border-slate-900/80"
        >
          <div className="section-container" data-reveal>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300/80">
                  Skills
                </h2>
                <p className="text-lg font-medium tracking-tight text-slate-50">
                  Modern cloud & DevOps stack.
                </p>
              </div>
              <p className="max-w-xl text-xs text-slate-400">
                Focused on AWS, containers, infrastructure as code, and
                production-grade CI/CD pipelines.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="min-w-0 space-y-3 rounded-2xl border border-slate-900 bg-slate-950/40 p-5">
                <h3 className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Core Cloud
                </h3>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="chip-animated inline-flex w-full items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    <FaAws className="h-4 w-4 text-[#FF9900]" />
                    AWS (EC2, ECS/EKS, S3, RDS, Lambda)
                  </span>
                  <span className="chip-animated inline-flex w-full items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    <SiKubernetes className="h-4 w-4 text-[#326CE5]" />
                    Kubernetes
                  </span>
                  <span className="chip-animated inline-flex w-full items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    <SiDocker className="h-4 w-4 text-[#2496ED]" />
                    Docker & containerisation
                  </span>
                </div>
              </div>

              <div className="min-w-0 space-y-3 rounded-2xl border border-slate-900 bg-slate-950/40 p-5">
                <h3 className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Delivery & IaC
                </h3>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="chip-animated inline-flex w-full items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    <SiTerraform className="h-4 w-4 text-[#844FBA]" />
                    Terraform
                  </span>
                  <span className="chip-animated inline-flex w-full items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    <SiGithubactions className="h-4 w-4 text-[#2088FF]" />
                    GitHub Actions
                  </span>
                  <span className="chip-animated inline-flex w-full items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    <SiJenkins className="h-4 w-4 text-[#D24939]" />
                    Jenkins
                  </span>
                  <span className="chip-animated inline-flex w-full items-center rounded-full bg-slate-900/80 px-3 py-1 text-slate-100 sm:w-auto">
                    Helm · ArgoCD · Observability (CloudWatch, Prometheus,
                    Grafana)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="section-padding border-t border-slate-900/80"
        >
          <div className="section-container" data-reveal>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300/80">
                  Projects
                </h2>
                <p className="text-lg font-medium tracking-tight text-slate-50">
                  Selected cloud & platform work.
                </p>
              </div>
              <p className="max-w-xl text-xs text-slate-400">
                Representative dummy projects that highlight AWS, Kubernetes,
                Terraform, and CI/CD experience.
              </p>
            </div>

            <CoverflowCarousel
              items={projects.map((project, index) => ({
                id: index,
                title: project.name,
                subtitle: project.tech.join(" · "),
                description: project.description
              }))}
            />
          </div>
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          className="section-padding border-t border-slate-900/80"
        >
          <div className="section-container" data-reveal>
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300/80">
                  Certifications
                </h2>
                <p className="text-lg font-medium tracking-tight text-slate-50">
                  Demonstrated cloud expertise.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="cert-card-animated rounded-2xl border border-slate-900 bg-slate-950/40 p-4"
                >
                  <p className="mb-1 text-xs font-semibold text-slate-100">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-slate-300">{cert.issuer}</p>
                  <p className="mt-3 text-[11px] text-slate-400">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="section-padding border-t border-slate-900/80"
        >
          <div className="section-container" data-reveal>
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300/80">
                  Experience
                </h2>
                <p className="text-lg font-medium tracking-tight text-slate-50">
                  Recent cloud & DevOps roles.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {experience.map((item) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className="experience-card-animated rounded-2xl border border-slate-900 bg-slate-950/40 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <p className="font-semibold text-slate-100">
                        {item.role}
                      </p>
                      <p className="text-slate-300">{item.company}</p>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.period}</p>
                  </div>
                  <p className="mt-3 text-xs text-slate-300">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="section-padding border-t border-slate-900/80"
        >
          <div
            className="section-container grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start"
            data-reveal
          >
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300/80">
                Contact
              </h2>
              <p className="mb-4 text-lg font-medium tracking-tight text-slate-50">
                Ready to discuss cloud platforms, migrations, or DevOps
                enablement.
              </p>
              <p className="mb-4 text-xs text-slate-300">
                This is a dummy contact form. Wire it up to your preferred
                email provider, API route, or third-party service.
              </p>
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center gap-2 text-xs text-primary-300 transition hover:text-primary-200"
              >
                <FiMail className="h-4 w-4" />
                you@example.com
              </a>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/80 py-6 text-[11px] text-slate-500">
        <div className="section-container flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Dummy Name. Cloud Engineer.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 transition hover:text-primary-300"
            >
              <FiGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

