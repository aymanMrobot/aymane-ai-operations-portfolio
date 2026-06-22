import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  BookOpen,
  Bot,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Github,
  Globe2,
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
  Send,
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
  { value: "11", label: "Delivered systems" },
  { value: "GBP 3.0m", label: "Qualified pipeline influenced" },
  { value: "+143%", label: "MQL performance vs target" },
  { value: "50+", label: "Operational users enabled" },
];

const skillClusters = [
  {
    title: "AI systems",
    items: ["Claude, GPT, Gemini", "RAG agents", "Copilot Studio", "Local LLM workflows"],
  },
  {
    title: "Automation",
    items: ["n8n", "Power Automate", "HubSpot", "Salesforce"],
  },
  {
    title: "Data and delivery",
    items: ["Power BI", "Report One", "SQL", "GA4", "Vercel", "Netlify"],
  },
  {
    title: "Operator edge",
    items: ["Performance marketing", "SEO and GEO", "Security research", "Training and adoption"],
  },
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
    proof: ["30-agent support workflow", "420 tickets per week", "RAG over support knowledge", "Measured against CSAT and escalation quality"],
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
    proof: ["Brand voice guardrails", "Prompt templates", "Marketing and sales adoption", "Quality review workflow"],
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
    proof: ["Conversational Q&A", "Battle-card retrieval", "Sales prep workflow", "Live recruiter-safe demo"],
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
    proof: ["14 persona models", "Pitch generation", "New-hire enablement", "Live recruiter-safe demo"],
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
    proof: ["Sensitive dashboard withheld", "Automated data refresh", "Manual export reduction", "Leadership reporting layer"],
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
    proof: ["n8n orchestration", "Salesforce handoff", "Capacity-aware logic", "Routing QA loop"],
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
    proof: ["Form trigger", "Rep lookup", "Calendar handoff", "Booking confirmation workflow"],
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
    proof: ["SharePoint RAG", "Asset retrieval", "Process Q&A", "Team adoption training"],
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
    proof: ["Wedding journey route", "Retreat journey route", "Inquiry CTAs", "Public Vercel deployment"],
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
    proof: ["Customer management", "Invoice editor", "PDF invoice generation", "Irish VAT workflow", "n8n email automation"],
    stack: ["React 19", "Express", "tRPC", "Drizzle", "PDFKit", "n8n"],
    githubUrl: "https://github.com/aymanMrobot/dada-invoice-system",
  },
];

const deliveryPrinciples = [
  {
    title: "Start with the workflow",
    text: "Audit how the business really works before picking tools, then remove bottlenecks where the time and margin loss are visible.",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Ship the smallest useful system",
    text: "Move quickly from prototype to adopted workflow, with training and documentation built into the delivery.",
    icon: <Send className="h-4 w-4" />,
  },
  {
    title: "Measure actual adoption",
    text: "Track usage, response time, routing accuracy, deflection, content quality, and pipeline movement instead of vague AI activity.",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Protect sensitive data",
    text: "Public demos stay recruiter-safe. Internal dashboards and company-specific data remain summarized, not exposed.",
    icon: <LockKeyhole className="h-4 w-4" />,
  },
];

const publicProjects = projects.filter((project) => project.liveUrl || project.githubUrl);

function visibilityClass(visibility: ProjectVisibility) {
  if (visibility === "Public demo") return "border-emerald-500/25 text-emerald-300 bg-emerald-500/10";
  if (visibility === "Public repo") return "border-sky-500/25 text-sky-300 bg-sky-500/10";
  if (visibility === "Sanitized case study") return "border-amber-500/25 text-amber-300 bg-amber-500/10";
  return "border-zinc-500/25 text-zinc-300 bg-zinc-500/10";
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-border/60 bg-card/85 transition-colors hover:border-primary/35">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 rounded-md bg-primary/10 p-2 text-primary">{project.icon}</div>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <CardTitle className="text-base leading-snug">{project.name}</CardTitle>
                <Badge variant="outline" className="border-emerald-500/25 bg-emerald-500/10 text-[10px] text-emerald-300">
                  Delivered
                </Badge>
              </div>
              <CardDescription className="text-xs">{project.category}</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className={`shrink-0 text-[10px] ${visibilityClass(project.visibility)}`}>
            {project.visibility}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="rounded-md border border-primary/10 bg-primary/5 p-4">
          <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Delivered Outcome
          </div>
          <p className="text-sm leading-relaxed text-foreground">{project.outcome}</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {project.proof.map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary" className="text-[10px] font-normal">
              {item}
            </Badge>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl || project.sensitive) && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.liveUrl && (
              <Button asChild size="sm" className="h-8">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Show Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="h-8">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            )}
            {project.sensitive && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <LockKeyhole className="h-3.5 w-3.5 text-amber-300" />
                Sensitive data and private dashboards withheld
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const deliveredCount = projects.length;
  const liveCount = projects.filter((project) => project.liveUrl).length;
  const publicRepoCount = projects.filter((project) => project.githubUrl).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                AEM
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">{profile.name}</div>
                <div className="text-xs text-muted-foreground">AI Operations Portfolio</div>
              </div>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              <Button asChild variant="ghost" size="sm">
                <a href="#proof">Proof</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="#projects">Projects</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="#contact">Contact</a>
              </Button>
            </nav>
            <Button asChild size="sm" className="h-8">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-border/50">
          <div className="container py-12 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div className="max-w-4xl">
                <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-xs text-primary">
                  Open to London or Manchester hybrid roles
                </Badge>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                  AI operations builder who turns messy workflows into measurable margin.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  I audit how a business actually works, then build the automation, agents, dashboards, and adoption loops that make work faster. My bias is shipped systems over theory: HubSpot, n8n, Claude, GPT, Gemini, RAG, Salesforce, Power BI, and the documentation teams need to actually use the tools.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="#projects">
                      <Zap className="h-4 w-4" />
                      See Delivered Projects
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-md border border-border/60 bg-card">
                  <div className="relative aspect-square border-b border-border/60 bg-secondary/30">
                    <img
                      src={profile.photo}
                      alt="Aymane El Magri"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 border-t border-border/60 p-5">
                    <div>
                      <p className="text-sm font-semibold">{profile.role}</p>
                      <p className="text-xs text-muted-foreground">AI growth, automation, RevOps, support ops, and secure agent delivery</p>
                    </div>
                    <div className="grid gap-2 text-xs text-muted-foreground">
                      <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-foreground">
                        <Mail className="h-3.5 w-3.5 text-primary" />
                        {profile.email}
                      </a>
                      <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-foreground">
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        {profile.phone}
                      </a>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {profile.location}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-border/60 pt-4">
                      {[
                        ["Audit", <Search className="h-3.5 w-3.5" />],
                        ["Agent", <Bot className="h-3.5 w-3.5" />],
                        ["Automate", <Zap className="h-3.5 w-3.5" />],
                        ["Measure", <Target className="h-3.5 w-3.5" />],
                      ].map(([title, icon]) => (
                        <div key={title as string} className="flex items-center gap-2 rounded-md border border-border/60 bg-background/50 px-3 py-2 text-xs font-medium">
                          <span className="text-primary">{icon}</span>
                          {title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {headlineStats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-border/60 bg-card/80 p-4">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="border-b border-border/50 py-10">
          <div className="container">
            <Tabs defaultValue="proof" className="space-y-8">
              <TabsList className="border border-border/60 bg-card/80 p-1">
                <TabsTrigger value="proof" className="text-xs">Recruiter Proof</TabsTrigger>
                <TabsTrigger value="projects" className="text-xs">Projects</TabsTrigger>
                <TabsTrigger value="public" className="text-xs">Public Links</TabsTrigger>
                <TabsTrigger value="method" className="text-xs">Method</TabsTrigger>
              </TabsList>

              <TabsContent value="proof" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <Card className="border-border/60 bg-card/85">
                    <CardHeader>
                      <CardTitle className="text-lg">What recruiters should notice</CardTitle>
                      <CardDescription>
                        Operator language, shipped systems, measurable outcomes, and adoption.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        ["Built and shipped", `${deliveredCount} delivered systems across AI agents, automation, dashboards, and public builds.`],
                        ["Measured impact", "Deflection, first response, routing accuracy, content throughput, pipeline, and adoption are tied to each build."],
                        ["Knows GTM", "Performance-marketing roots and revenue accountability: GBP 3.0m qualified pipeline in 9 months."],
                        ["Security-aware", "Bug bounty background brings a practical safety lens to agents, RAG, access, and workflow automation."],
                      ].map(([title, text]) => (
                        <div key={title} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div>
                            <div className="text-sm font-medium">{title}</div>
                            <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {skillClusters.map((cluster) => (
                      <Card key={cluster.title} className="border-border/60 bg-card/85">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm">{cluster.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {cluster.items.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {item}
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent id="projects" value="projects" className="space-y-6">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">Delivered portfolio</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight">Public-safe project evidence</h2>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="border-emerald-500/25 text-emerald-300">{deliveredCount} delivered</Badge>
                    <Badge variant="outline" className="border-sky-500/25 text-sky-300">{liveCount} live demos</Badge>
                    <Badge variant="outline" className="border-zinc-500/25 text-zinc-300">{publicRepoCount} public repos</Badge>
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="public" className="space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">Recruiter-safe links</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">Live demos and public repos</h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    The KPI dashboard and internal company systems are intentionally not linked. Personas and battle cards stay live, and the Daba/Dada public builds link to GitHub where available.
                  </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  {publicProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="method" className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {deliveryPrinciples.map((principle) => (
                    <Card key={principle.title} className="border-border/60 bg-card/85">
                      <CardHeader>
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                          {principle.icon}
                        </div>
                        <CardTitle className="text-base">{principle.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{principle.text}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
                <Card className="border-border/60 bg-card/85">
                  <CardHeader>
                    <CardTitle className="text-base">Delivery cadence</CardTitle>
                    <CardDescription>
                      Discovery, prototype, pilot, measure, document, train, and scale.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {["Discovery", "Prototype", "Pilot", "Measurement", "Training", "Scale"].map((step, index) => (
                      <div key={step}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="font-medium">{step}</span>
                          <span className="text-muted-foreground">Delivered</span>
                        </div>
                        <Progress value={(index + 1) * 16.67} className="h-1.5" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="container">
            <div className="grid gap-6 rounded-md border border-border/60 bg-card/85 p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">Next role</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">AI operations, automation, RevOps, or agent delivery.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  UK-based, comfortable with founder-led and fast-paced teams, and ready to work directly with leadership and department owners.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-4 w-4" />
                    Email Aymane
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    <Globe2 className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-6">
        <div className="container flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>{profile.name} - AI Operations Portfolio</span>
          <span>All public links are recruiter-safe. Sensitive company dashboards are summarized only.</span>
        </div>
      </footer>
    </div>
  );
}
