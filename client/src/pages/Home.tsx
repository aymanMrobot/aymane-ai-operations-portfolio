import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Github,
  HeadphonesIcon,
  Hotel,
  LayoutDashboard,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Receipt,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

type ProjectVisibility = "Public demo" | "Public repo" | "Sanitized case study" | "Private internal build";

interface Project {
  id: string;
  name: string;
  icon: ReactNode;
  category: string;
  visibility: ProjectVisibility;
  summary: string;
  outcome: string;
  proof: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  sensitive?: boolean;
}

const profile = {
  name: "Aymane El Magri",
  role: "AI Operations Manager",
  location: "West Midlands, United Kingdom",
  phone: "07508875950",
  email: "Aymaneelmagriuk@gmail.com",
  linkedin: "https://www.linkedin.com/in/aymane-el-magri-855b32168/",
  github: "https://github.com/aymanMrobot",
  photo: "/aymane-el-magri-headshot.jpeg",
};

const headlineStats = [
  { value: "11", label: "Delivered systems", tone: "text-emerald-700" },
  { value: "GBP 3.0m", label: "Qualified pipeline influenced", tone: "text-blue-700" },
  { value: "+143%", label: "MQL performance vs target", tone: "text-amber-700" },
  { value: "50+", label: "Operational users enabled", tone: "text-rose-700" },
];

const proofPoints = [
  ["Built and shipped", "Delivered AI agents, automations, dashboards, and public web products instead of slideware."],
  ["Measured impact", "Tied each build to response time, routing quality, deflection, adoption, pipeline, or time saved."],
  ["Knows GTM", "Performance-marketing roots with revenue accountability and operator-level workflow judgement."],
  ["Security-aware", "Bug bounty background informs safer decisions around agents, RAG, access, and company data."],
];

const skillClusters = [
  {
    title: "AI systems",
    items: ["Claude", "GPT", "Gemini", "RAG agents", "Copilot Studio"],
  },
  {
    title: "Automation",
    items: ["n8n", "Power Automate", "HubSpot", "Salesforce", "Webhooks"],
  },
  {
    title: "Data delivery",
    items: ["Power BI", "Report One", "SQL", "GA4", "KPI design"],
  },
  {
    title: "Operator edge",
    items: ["Performance marketing", "SEO and GEO", "Security research", "Team training"],
  },
];

const processSteps = [
  { label: "Audit", text: "Map the real workflow and the bottleneck.", icon: <Search className="h-4 w-4" /> },
  { label: "Build", text: "Prototype the smallest useful system.", icon: <Bot className="h-4 w-4" /> },
  { label: "Automate", text: "Connect CRM, docs, data, and handoffs.", icon: <Zap className="h-4 w-4" /> },
  { label: "Measure", text: "Track adoption and operational lift.", icon: <Target className="h-4 w-4" /> },
];

const projects: Project[] = [
  {
    id: "support-agent",
    name: "AI Support Agent",
    icon: <HeadphonesIcon className="h-5 w-5" />,
    category: "AI Agent",
    visibility: "Sanitized case study",
    summary:
      "A knowledge-base agent for frontline support that handles routine L1 queries, routes edge cases, and protects senior support capacity.",
    outcome:
      "Delivered a working pilot with 22% L1 deflection, 12-second AI first response, CSAT movement from 7.1 to 7.8, and 94% escalation accuracy.",
    proof: ["30-agent support workflow", "420 tickets per week", "RAG over support knowledge", "CSAT and escalation QA"],
    stack: ["Copilot Studio", "RAG", "Knowledge base", "Analytics"],
    sensitive: true,
  },
  {
    id: "eden-content",
    name: "Eden AI Content Generator",
    icon: <Sparkles className="h-5 w-5" />,
    category: "Content Ops",
    visibility: "Private internal build",
    summary:
      "A multi-model content engine with brand-tone guardrails for campaign drafts, sales messaging, and repeatable marketing workflows.",
    outcome:
      "Delivered and adopted by 13 of 17 marketing and sales users in month one, targeting a 50% reduction in first-draft time and stronger brand compliance.",
    proof: ["Brand voice guardrails", "Prompt templates", "Sales adoption", "Quality review workflow"],
    stack: ["Claude", "GPT", "Gemini", "Prompt systems"],
    sensitive: true,
  },
  {
    id: "battle-cards",
    name: "Competitor Battle Cards + AI Chatbot",
    icon: <Shield className="h-5 w-5" />,
    category: "Sales Enablement",
    visibility: "Public demo",
    summary:
      "A conversational battle-card tool that gives sales reps fast, structured competitor positioning before calls.",
    outcome:
      "Delivered a live tool that compresses competitive preparation from roughly 25 minutes to under 5 minutes per call.",
    proof: ["Conversational Q&A", "Battle-card retrieval", "Sales prep workflow", "Recruiter-safe demo"],
    stack: ["React", "LLM retrieval", "Vercel", "Sales workflows"],
    liveUrl: "https://ventured-battle-cards.vercel.app",
  },
  {
    id: "personas-pitch",
    name: "AI Customer Personas & Pitch Generator",
    icon: <Users className="h-5 w-5" />,
    category: "Sales Training",
    visibility: "Public demo",
    summary:
      "A persona simulator and pitch generator that helps reps practise buyer-specific conversations and tailor outreach.",
    outcome:
      "Delivered 14 dynamic personas with tailored pitch generation for onboarding, call prep, and message testing.",
    proof: ["14 persona models", "Pitch generation", "New-hire enablement", "Recruiter-safe demo"],
    stack: ["React", "LLM prompting", "Persona design", "Vercel"],
    liveUrl: "https://personas-ai-website-master.vercel.app/",
  },
  {
    id: "kpi-dashboard",
    name: "Multi-Department KPI Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    category: "BI Automation",
    visibility: "Sanitized case study",
    summary:
      "A cross-functional KPI dashboard that replaces manual exports with automated refreshes and leadership-ready reporting.",
    outcome:
      "Delivered n8n and Salesforce-powered reporting with data freshness moving from 5-7 days to roughly 30 minutes.",
    proof: ["Sensitive dashboard withheld", "Automated refresh", "Manual export reduction", "Leadership reporting"],
    stack: ["n8n", "Salesforce", "Power BI", "SQL"],
    sensitive: true,
  },
  {
    id: "lead-allocation",
    name: "Lead Allocation Automation",
    icon: <GitBranch className="h-5 w-5" />,
    category: "Revenue Ops",
    visibility: "Private internal build",
    summary:
      "An n8n routing workflow that assigns inbound leads using territory, capacity, and workflow rules instead of manual queue checks.",
    outcome:
      "Delivered sandbox performance of 47-second average assignment, 0.8% misrouting, and zero manual routing effort in the tested workflow.",
    proof: ["n8n orchestration", "Salesforce handoff", "Capacity-aware logic", "Routing QA"],
    stack: ["n8n", "Salesforce", "HubSpot", "Webhooks"],
    sensitive: true,
  },
  {
    id: "demo-booking",
    name: "Demo Booking Automation",
    icon: <Calendar className="h-5 w-5" />,
    category: "Lifecycle Automation",
    visibility: "Private internal build",
    summary:
      "A post-form automation that shortens the gap between demo intent and booked meeting with dynamic routing and calendar handoff.",
    outcome:
      "Delivered a booking workflow that removes manual follow-up delay and supports immediate next-step conversion after form submission.",
    proof: ["Form trigger", "Rep lookup", "Calendar handoff", "Booking confirmation"],
    stack: ["n8n", "HubSpot", "Salesforce", "Calendar APIs"],
    sensitive: true,
  },
  {
    id: "marketing-hub",
    name: "Marketing Hub Copilot",
    icon: <BookOpen className="h-5 w-5" />,
    category: "Knowledge Ops",
    visibility: "Private internal build",
    summary:
      "A SharePoint-connected assistant that retrieves campaign assets, brand guidance, templates, and internal process answers.",
    outcome:
      "Delivered daily adoption by the full marketing team, cutting asset retrieval from 15-20 minutes per day to under 2 minutes.",
    proof: ["SharePoint RAG", "Asset retrieval", "Process Q&A", "Team training"],
    stack: ["Copilot Studio", "SharePoint", "RAG", "Microsoft 365"],
    sensitive: true,
  },
  {
    id: "customer-behaviour",
    name: "Customer Behaviour KPI Dashboard",
    icon: <BarChart3 className="h-5 w-5" />,
    category: "Retention Analytics",
    visibility: "Sanitized case study",
    summary:
      "A retention-facing dashboard concept that turns customer behaviour data into operational KPIs and next-best-action signals.",
    outcome:
      "Delivered a sanitized KPI model and dashboard structure for behaviour analysis without exposing source data or live dashboards.",
    proof: ["Sensitive data excluded", "Behaviour KPI mapping", "Retention workflow", "Dashboard architecture"],
    stack: ["Power BI", "SQL", "AI analysis", "Dashboard UX"],
    sensitive: true,
  },
  {
    id: "daba-guest-orders",
    name: "Daba Guest Orders & Hotel Journey",
    icon: <Hotel className="h-5 w-5" />,
    category: "Hospitality Build",
    visibility: "Public repo",
    summary:
      "A public hospitality experience build for Daba Village, covering wedding and retreat journeys, inquiry flows, and guest-facing presentation.",
    outcome:
      "Delivered a live hotel and event journey site that turns hospitality packages into a guided, high-conversion web experience.",
    proof: ["Wedding journey route", "Retreat journey route", "Inquiry CTAs", "Public deployment"],
    stack: ["TypeScript", "React", "Vite", "Vercel"],
    liveUrl: "https://daba-wedding-journey.vercel.app",
    githubUrl: "https://github.com/aymanMrobot/daba-wedding-journey",
  },
  {
    id: "dada-invoices",
    name: "Dada Restaurant Automated Invoices",
    icon: <Receipt className="h-5 w-5" />,
    category: "Restaurant Ops",
    visibility: "Public repo",
    summary:
      "A restaurant B2B invoice system with customer records, line items, PDF generation, VAT handling, and email-ready automation paths.",
    outcome:
      "Delivered the operating system for invoice creation, PDF export, customer management, and n8n-powered invoice email workflows.",
    proof: ["Customer management", "Invoice editor", "PDF generation", "n8n email automation"],
    stack: ["React 19", "Express", "tRPC", "Drizzle", "PDFKit", "n8n"],
    githubUrl: "https://github.com/aymanMrobot/dada-invoice-system",
  },
];

const featuredProjects = projects.filter((project) => project.liveUrl || project.githubUrl);

function visibilityClass(visibility: ProjectVisibility) {
  if (visibility === "Public demo") return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (visibility === "Public repo") return "border-blue-200 bg-blue-50 text-blue-800";
  if (visibility === "Sanitized case study") return "border-amber-200 bg-amber-50 text-amber-800";
  return "border-zinc-200 bg-zinc-100 text-zinc-700";
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Card className={`group overflow-hidden border-border/80 bg-card shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-md ${featured ? "md:col-span-1" : ""}`}>
      <CardContent className="flex h-full flex-col gap-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary">
              {project.icon}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold leading-snug text-foreground">{project.name}</h3>
                <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-[10px] font-semibold text-emerald-800">
                  Delivered
                </Badge>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{project.category}</p>
            </div>
          </div>
          <Badge variant="outline" className={`shrink-0 whitespace-nowrap text-[10px] font-medium ${visibilityClass(project.visibility)}`}>
            {project.visibility}
          </Badge>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="rounded-lg border border-border bg-secondary/55 p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Outcome
          </div>
          <p className="text-sm leading-relaxed text-foreground">{project.outcome}</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {project.proof.map((item) => (
            <div key={item} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary" className="rounded-md border border-border/70 bg-background text-[10px] font-medium text-muted-foreground">
              {item}
            </Badge>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl || project.sensitive) && (
          <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
            {project.liveUrl && (
              <Button asChild size="sm" className="h-9">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo for ${project.name}`}>
                  <ExternalLink className="h-3.5 w-3.5" />
                  Show Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="h-9">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub repository for ${project.name}`}>
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            )}
            {project.sensitive && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-xs text-amber-900">
                <LockKeyhole className="h-3.5 w-3.5" />
                Sensitive data withheld
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{text}</p>}
    </div>
  );
}

export default function Home() {
  const deliveredCount = projects.length;
  const liveCount = projects.filter((project) => project.liveUrl).length;
  const publicRepoCount = projects.filter((project) => project.githubUrl).length;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/92 backdrop-blur-md">
        <div className="container py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-sm font-bold text-primary transition-transform duration-150 ease-out group-active:scale-95">
                AEM
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">{profile.name}</div>
                <div className="text-xs text-muted-foreground">AI Operations Portfolio</div>
              </div>
            </a>
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
              {[
                ["Proof", "#proof"],
                ["Projects", "#projects"],
                ["Method", "#method"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Button key={href} asChild variant="ghost" size="sm" className="h-9">
                  <a href={href}>{label}</a>
                </Button>
              ))}
            </nav>
            <Button asChild size="sm" className="h-9">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />
          <div className="container relative grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.72fr)] lg:items-center lg:py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                11 delivered systems across AI, automation, RevOps, and data
              </div>
              <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.03] tracking-tight text-foreground md:text-6xl">
                AI operations builder for teams that need shipped systems, not AI theatre.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                I audit how work actually moves, then build the agents, n8n automations, dashboards, CRM handoffs, and adoption loops that turn messy operations into measurable throughput.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#projects">
                    <Zap className="h-4 w-4" />
                    See Delivered Work
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-3 shadow-lg shadow-zinc-200/70">
              <div className="overflow-hidden rounded-xl border border-border bg-secondary">
                <img
                  src={profile.photo}
                  alt="Aymane El Magri"
                  width="1254"
                  height="1254"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="space-y-5 p-4">
                <div>
                  <p className="text-base font-semibold">{profile.role}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">AI growth, automation, RevOps, support ops, and secure agent delivery.</p>
                </div>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <a href={`mailto:${profile.email}`} className="flex min-h-11 items-center gap-2 rounded-lg px-2 transition-colors duration-150 ease-out hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Mail className="h-4 w-4 text-primary" />
                    {profile.email}
                  </a>
                  <a href={`tel:${profile.phone}`} className="flex min-h-11 items-center gap-2 rounded-lg px-2 transition-colors duration-150 ease-out hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Phone className="h-4 w-4 text-primary" />
                    {profile.phone}
                  </a>
                  <span className="flex min-h-11 items-center gap-2 rounded-lg px-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {profile.location}
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <div className="container relative pb-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {headlineStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className={`text-3xl font-semibold tracking-tight ${stat.tone}`}>{stat.value}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="border-b border-border py-14 md:py-18">
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Recruiter proof"
              title="The signal is delivery: workflows moved, systems adopted, outcomes measured."
              text="The portfolio is intentionally public-safe. Internal systems are described through architecture and outcomes; sensitive dashboards and company data are not exposed."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {proofPoints.map(([title, text]) => (
                <Card key={title} className="border-border bg-card shadow-sm">
                  <CardContent className="p-5">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h3 className="mt-4 text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-border py-14 md:py-18">
          <div className="container space-y-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Delivered portfolio"
                title="Project evidence, arranged for fast recruiter scanning."
                text="Public demos remain live for personas and battle cards. The KPI dashboard and internal company systems stay summarized only."
              />
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-800">{deliveredCount} delivered</Badge>
                <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-800">{liveCount} live demos</Badge>
                <Badge variant="outline" className="border-zinc-200 bg-zinc-100 text-zinc-700">{publicRepoCount} public repos</Badge>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/45 py-14 md:py-18">
          <div className="container space-y-8">
            <SectionHeading
              eyebrow="Public links"
              title="Recruiter-safe demos and repos."
              text="These links can be opened without exposing private company data."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="border-b border-border py-14 md:py-18">
          <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Operating method"
              title="A practical delivery loop for AI systems people actually use."
              text="The work starts with process reality and ends with adoption, measurement, training, and cleaner handoffs."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{step.icon}</div>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-14 md:py-18">
          <div className="container">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <SectionHeading
                  eyebrow="Tool fluency"
                  title="Hands-on across AI, automation, CRM, and data."
                  text="The stack changes by workflow, but the delivery principle stays the same: choose the simplest system that can be trusted, adopted, and measured."
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {skillClusters.map((cluster) => (
                    <div key={cluster.title} className="rounded-xl border border-border bg-secondary/60 p-4">
                      <h3 className="text-sm font-semibold">{cluster.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {cluster.items.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-md border border-border bg-background text-xs font-medium text-muted-foreground">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-14 md:py-18">
          <div className="container">
            <div className="grid gap-6 rounded-2xl border border-border bg-foreground p-6 text-background shadow-lg md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Next role</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">AI operations, automation, RevOps, or agent delivery.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/72 md:text-base">
                  UK-based, comfortable with founder-led and fast-paced teams, and ready to work directly with leadership and department owners.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="secondary">
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-4 w-4" />
                    Email Aymane
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-background/25 bg-transparent text-background hover:bg-background hover:text-foreground">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>{profile.name} - AI Operations Portfolio</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            GitHub portfolio source <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
