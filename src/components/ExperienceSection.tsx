import { motion } from "framer-motion";
import uprightImg from "@/assets/upright-dashboard.jpg";
import uprightWorkflow from "@/assets/upright-workflow.jpg";
import uprightDealership from "@/assets/upright-dealership.jpg";
import uprightService from "@/assets/upright-service.jpg";
import uprightLot from "@/assets/upright-lot.jpg";
import spotheroImg from "@/assets/spothero-app.jpg";
import spotheroParking from "@/assets/spothero-parking.jpg";
import spotheroCity from "@/assets/spothero-city.jpg";
import spotheroGarage from "@/assets/spothero-garage.jpg";
import spotheroAerial from "@/assets/spothero-aerial.jpg";
import pearsuiteImg from "@/assets/pearsuite-dashboard.jpg";
import pearsuiteChw from "@/assets/pearsuite-chw.jpg";
import pearsuiteClinic from "@/assets/pearsuite-clinic.jpg";
import pearsuiteTeam from "@/assets/pearsuite-team.jpg";
import pearsuiteAnalytics from "@/assets/pearsuite-analytics.jpg";
import ArchitectureDiagram, { DiagramNode } from "./ArchitectureDiagram";
import { ExternalLink } from "lucide-react";

const uprightNodes: DiagramNode[] = [
  {
    title: "External Data Sources",
    subtitle: "Public company data, ESG disclosures, financial reports",
  },
  {
    title: "Data Collection & Normalization Pipeline",
    items: ["Collects public company data", "Normalizes inputs for modeling"],
  },
  {
    title: "Structured Data Repository",
    items: ["Company profiles", "Impact metadata"],
  },
  {
    title: "Impact Modeling Engine",
    isHighlighted: true,
    items: [
      "Environmental impact scoring",
      "Social impact evaluation",
      "Financial risk evaluation",
    ],
  },
  {
    title: "Materiality Assessment Engine",
    isHighlighted: true,
    items: [
      "Impact materiality logic",
      "Financial materiality analysis",
      "Automated scoring pipelines",
    ],
  },
  {
    type: "parallel",
    nodes: [
      {
        title: "Async Processing Queue",
        items: ["Job orchestration", "Batch processing"],
      },
      {
        title: "Assessment Data Storage",
        items: ["Audit-ready data", "Structured records"],
      },
    ],
  },
  {
    title: "Reporting Engine",
    isHighlighted: true,
    items: ["CSRD structured reports", "Materiality reports"],
  },
  {
    title: "Interactive Dashboard",
    subtitle: "Impact insights, risk visualization, stakeholder reporting",
  },
];

const pearsuiteNodes: DiagramNode[] = [
  {
    title: "Healthcare Users",
    subtitle: "CHWs, clinicians, doulas, care teams",
  },
  {
    title: "Care Management Web Platform",
    items: ["Screening forms", "Patient profiles"],
  },
  {
    title: "SDOH Screening Engine",
    isHighlighted: true,
    items: [
      "Dynamic assessments",
      "Conditional workflows",
      "Role-based access control",
    ],
  },
  {
    title: "Care Plan Management",
    isHighlighted: true,
    items: ["Service referrals", "Task coordination", "Multi-role access"],
  },
  {
    type: "parallel",
    nodes: [
      {
        title: "Real-Time Sync",
        isHighlighted: true,
        items: ["Team collaboration", "Activity updates"],
      },
      {
        title: "Integration Gateway",
        isHighlighted: true,
        items: ["EMR/EHR systems", "Partner platforms"],
      },
    ],
  },
  {
    type: "parallel",
    nodes: [
      {
        title: "Patient Data Store",
        items: ["Care records", "Screening results"],
      },
      {
        title: "Billing & Claims",
        items: ["Reimbursement flows", "Payment validation"],
      },
    ],
  },
  {
    title: "Reporting & Analytics",
    subtitle: "Care progress tracking, outcome reporting",
  },
];

const spotheroNodes: DiagramNode[] = [
  {
    title: "Parking Operator Systems",
    subtitle: "Inventory feeds, garage hardware",
  },
  {
    title: "Partner Data Intake",
    items: ["Availability updates", "Pricing + capacity", "Hardware signals"],
  },
  {
    title: "Mobile Platform",
    isHighlighted: true,
    items: [
      "Cross-platform mobile app",
      "QR code, NFC, license plate recognition",
      "Android Auto & Apple CarPlay",
      "Offline handling & background sync",
    ],
  },
  {
    title: "Reservation & Availability Pipeline",
    isHighlighted: true,
    items: [
      "Event-driven booking flow",
      "Push notifications & location reminders",
      "Real-time accuracy",
    ],
  },
  {
    title: "Real-Time Availability Engine",
    isHighlighted: true,
    items: [
      "Processes incoming updates",
      "Reconciles partner data",
      "Supports peak-demand traffic",
    ],
  },
  {
    title: "End Users",
    subtitle: "Drivers booking parking via mobile",
  },
];

const ImageCard = ({
  src,
  alt,
  href,
  featured,
  label,
  sublabel,
  delay = 0,
}: {
  src: string;
  alt: string;
  href: string;
  featured?: boolean;
  label?: string;
  sublabel?: string;
  delay?: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`block relative rounded-xl overflow-hidden border border-border group ${
      featured
        ? "shadow-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500"
        : "aspect-square"
    }`}
  >
    <img
      src={src}
      alt={alt}
      className={`${featured ? "w-full h-auto" : "w-full h-full object-cover"} group-hover:scale-[1.03] transition-transform duration-500`}
    />
    {featured && (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <p className="text-sm font-display font-semibold text-white drop-shadow-lg">{label}</p>
          <p className="text-xs text-white/70">{sublabel}</p>
        </div>
      </>
    )}
  </motion.a>
);

const ImagesColumn = ({
  images,
  href,
  label,
  sublabel,
}: {
  images: { src: string; alt: string }[];
  href: string;
  label: string;
  sublabel: string;
}) => (
  <div className="space-y-4">
    <ImageCard src={images[0].src} alt={images[0].alt} href={href} featured label={label} sublabel={sublabel} />
    <div className="grid grid-cols-2 gap-4">
      {images.slice(1, 3).map((img, i) => (
        <ImageCard key={i} src={img.src} alt={img.alt} href={href} delay={(i + 1) * 0.1} />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      {images.slice(3, 5).map((img, i) => (
        <ImageCard key={i} src={img.src} alt={img.alt} href={href} delay={(i + 3) * 0.1} />
      ))}
    </div>
  </div>
);

const DiagramColumn = ({ label, nodes, direction }: { label: string; nodes: DiagramNode[]; direction: "left" | "right" }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "right" ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <p className="text-xs text-primary tracking-widest uppercase mb-6">{label}</p>
    <ArchitectureDiagram nodes={nodes} />
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">Career</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gradient-gold">Experience</span>
          </h2>
        </motion.div>

        {/* The Upright Project — images LEFT, diagram RIGHT */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Jan 2025 – Present</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://www.cognizant.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Cognizant <ExternalLink size={14} />
                  </a>
                  {" "}· Client:{" "}
                  <a
                    href="https://www.uprightproject.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    The Upright Project <ExternalLink size={14} />
                  </a>
                  {" "}· Leading 5 engineers on ESG & CSRD Compliance Platform
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              As Senior Software Engineer at Cognizant, directed a team of five engineers delivering for flagship client The Upright Project. Spearheaded the transformation of scientific impact models into a market-ready CSRD compliance product,
              delivering automated materiality assessments that cut report turnaround time in half. Architected
              cloud-native data pipelines processing thousands of company ESG profiles, enabling enterprise clients
              to meet EU sustainability mandates ahead of regulatory deadlines.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~50%", label: "Faster report turnaround" },
                { metric: "~25%", label: "Fewer post-release issues" },
                { metric: "1000s", label: "Company profiles processed" },
                { metric: "CSRD", label: "EU compliance product shipped" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card/50 p-4 text-center"
                >
                  <p className="text-2xl font-display font-bold text-primary">{stat.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ImagesColumn
              images={[
                { src: uprightImg, alt: "ESG sustainability dashboard" },
                { src: uprightWorkflow, alt: "Sustainable corporate campus" },
                { src: uprightDealership, alt: "ESG materiality boardroom" },
                { src: uprightService, alt: "Impact data pipeline visualization" },
                { src: uprightLot, alt: "Renewable energy landscape" },
              ]}
              href="https://www.cognizant.com"
              label="Cognizant · The Upright Project"
              sublabel="ESG & CSRD Compliance Platform"
            />
            <DiagramColumn label="Platform Architecture" nodes={uprightNodes} direction="right" />
          </div>
        </div>

        {/* PearSuite — diagram LEFT, images RIGHT */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Mar 2023 – Dec 2024</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://app.uniteus.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Unite Us <ExternalLink size={14} />
                  </a>
                  {" "}· Coordinated Care Network Platform
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Revolutionized patient screening workflows by building dynamic SDOH assessment engines with
              conditional logic, slashing form completion time by 25%. Designed and shipped HIPAA-compliant
              care plan modules used by hundreds of community health workers, doulas, and clinicians—directly
              improving health outcomes for underserved populations. Engineered seamless EMR/EHR integrations
              and automated billing pipelines that eliminated 20% of claim errors.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~25%", label: "Faster form completion" },
                { metric: "~20%", label: "Fewer claim errors" },
                { metric: "~30%", label: "Better report performance" },
                { metric: "HIPAA", label: "Compliant architecture" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card/50 p-4 text-center"
                >
                  <p className="text-2xl font-display font-bold text-primary">{stat.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <DiagramColumn label="System Architecture" nodes={pearsuiteNodes} direction="left" />
            <ImagesColumn
              images={[
                { src: pearsuiteImg, alt: "PearSuite care management dashboard" },
                { src: pearsuiteChw, alt: "Community health worker with patient" },
                { src: pearsuiteClinic, alt: "Healthcare clinic" },
                { src: pearsuiteTeam, alt: "Healthcare team collaboration" },
                { src: pearsuiteAnalytics, alt: "Patient analytics dashboard" },
              ]}
              href="https://uniteus.com"
              label="Unite Us"
              sublabel="Coordinated Care Network Platform"
            />
          </div>
        </div>

        {/* SpotHero — images LEFT, diagram RIGHT */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <p className="text-primary text-sm tracking-wider uppercase mb-1">Jun 2020 – Feb 2023</p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Full-Stack Mobile Engineer
                </h3>
                <p className="text-lg text-muted-foreground mt-1">
                  <a
                    href="https://spothero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    SpotHero <ExternalLink size={14} />
                  </a>
                  {" "}· Mobility & Parking Platform
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
              Pioneered touchless parking experiences—QR scanning, NFC entry, and license plate
              recognition—that redefined how millions of drivers interact with urban parking infrastructure.
              Extended the platform to Android Auto and Apple CarPlay, making SpotHero the first parking app
              on in-vehicle dashboards. Engineered offline-first architecture and background sync that cut
              app load times by 30% and reduced missed reservations by 15%.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { metric: "~30%", label: "Faster app load times" },
                { metric: "~15%", label: "Fewer missed reservations" },
                { metric: "Millions", label: "Drivers impacted" },
                { metric: "1st", label: "Parking app on CarPlay" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card/50 p-4 text-center"
                >
                  <p className="text-2xl font-display font-bold text-primary">{stat.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ImagesColumn
              images={[
                { src: spotheroImg, alt: "SpotHero parking platform" },
                { src: spotheroParking, alt: "Smart parking garage" },
                { src: spotheroCity, alt: "Urban parking infrastructure" },
                { src: spotheroGarage, alt: "SpotHero parking garage" },
                { src: spotheroAerial, alt: "Urban traffic aerial view" },
              ]}
              href="https://spothero.com"
              label="SpotHero"
              sublabel="Mobility & Parking Platform"
            />
            <DiagramColumn label="System Architecture" nodes={spotheroNodes} direction="right" />
          </div>
        </div>

        {/* Earlier Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card/30 p-8"
          >
            <p className="text-primary text-sm tracking-wider uppercase mb-1">Nov 2018 – Apr 2020</p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Software Engineer</h3>
            <p className="text-muted-foreground text-sm mb-4">Alert Logic</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Overhauled enterprise security monitoring dashboards, reducing alert processing delays
              by ~20%. Built backend APIs and third-party integrations that strengthened threat detection
              pipelines for enterprise clients across multiple industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card/30 p-8"
          >
            <p className="text-primary text-sm tracking-wider uppercase mb-1">Aug 2016 – Oct 2018</p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Software Engineer</h3>
            <p className="text-muted-foreground text-sm mb-4">Amazon</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineered hyperscale services powering a flagship retail experience for hundreds of
              millions of customers worldwide. Championed elegant, resilient architectures that
              delivered sub-second performance at planetary scale, and elevated engineering
              excellence through rigorous design reviews and operational rituals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
