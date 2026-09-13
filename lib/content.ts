const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const project = {
  name: "AgentShield",
  status: "Planning / Foundation",
  course: "Software Engineering",
  courseCode: "UCS503",
  instructor: "Dr. Sukhpal Singh",
  instructorEmail: "ssingh1_phd23@thapar.edu",
  repo: "https://github.com/AvnishR4j/WEBSITE-Software-Eng-Project-Agent-Shield",
  publishingGuide: "https://github.com/AvnishR4j/WEBSITE-Software-Eng-Project-Agent-Shield/blob/main/PUBLISHING.md",
};

export const members = [
  {
    name: "Avnish Raj",
    initials: "AR",
    roll: "1024170125",
    email: "araj3_be24@thapar.edu",
    github: "https://github.com/AvnishR4j",
    linkedin: "https://www.linkedin.com/in/avnish-raj/",
  },
  {
    name: "Laishram Amarjit",
    initials: "LA",
    roll: "1024170129",
    email: "lamarjit_be24@thapar.edu",
    github: "https://github.com/amarjit81",
    linkedin: "https://www.linkedin.com/in/laishram-amarjit-a115b436b/",
  },
  {
    name: "Deepanjan Baral",
    initials: "DB",
    roll: "1024170053",
    email: "dbaral_be24@thapar.edu",
    github: "https://github.com/deepanjanbaral03",
    linkedin: "https://www.linkedin.com/in/deepanjan-baral-b53540428",
  },
  {
    name: "Sameer Mathur",
    initials: "SM",
    roll: "1024170132",
    email: "smathur_be24@thapar.edu",
    github: "https://github.com/sameer200621-bit",
    linkedin: "https://www.linkedin.com/in/sameer-mathur-844b99373/",
  },
];

export const allowedPublishers = [
  ...members.map((member) => member.email),
  project.instructorEmail,
];

export const initialDeliverable = {
  id: "planning-v1",
  slug: "planning",
  title: "Project Proposal, Architecture and Feasibility Report",
  type: "Planning",
  version: "v1",
  publishedDate: "2026-08-10",
  publishedAt: "2026-08-10T15:36:36+05:30",
  authors: members.map((member) => member.name),
  changeSummary: "Established the problem, governance workflow, MVP boundaries, architecture, validation criteria and twelve-week delivery plan.",
  publisherEmail: members[0].email,
  commitUrl: null,
  deploymentUrl: null,
  changes: [{ kind: "Added", path: "AgentShield_Formal_Project_Report.pdf" }],
  assets: [
    {
      id: "planning-v1-report",
      relativePath: "AgentShield_Formal_Project_Report.pdf",
      fileName: "AgentShield_Formal_Project_Report.pdf",
      mimeType: "application/pdf",
      size: 0,
      sha256: "Initial academic deliverable",
      downloadUrl: `${siteBasePath}/deliverables/AgentShield_Planning_v1.pdf`,
    },
  ],
};

// GitHub Pages is static: this repository is the publication record.
// Add new deliverables here, commit the accompanying file under public/deliverables,
// and GitHub Actions will publish the updated archive automatically.
export const publishedDeliverables = [
  {
    id: "project-proposal-architecture-and-feasibility-report-v1",
    slug: "project-proposal-architecture-and-feasibility-report",
    title: "Project Proposal, Architecture and Feasibility Report",
    type: "Presentation",
    version: "v1",
    publishedDate: "2026-09-10",
    publishedAt: "2026-09-13T05:41:15.563903+00:00",
    authors: members.map((member) => member.name),
    changeSummary: "Established the problem, governance workflow, MVP boundaries, architecture, validation criteria and twelve-week delivery plan.",
    publisherEmail: members[0].email,
    commitUrl: null,
    deploymentUrl: null,
    changes: [],
    assets: [],
  },
  {
    id: "agentshield-use-case-diagram-v1",
    slug: "agentshield-use-case-diagram",
    title: "AgentShield – Use Case Diagram",
    type: "Planning",
    version: "v1",
    publishedDate: "2026-09-06",
    publishedAt: "2026-09-06T18:50:03.282418+00:00",
    authors: members.map((member) => member.name),
    changeSummary: "Initial AgentShield use case diagram showing the interaction between the AI Agent, Human Approver, Admin, and External Tool, including authorization checks, approval/rejection, verification, action execution/blocking, and audit logging.",
    publisherEmail: members[0].email,
    commitUrl: null,
    deploymentUrl: null,
    changes: [],
    assets: [],
  },
  {
    id: "agentshield-planning-presentation-v1",
    slug: "agentshield-planning-presentation",
    title: "AgentShield Planning Presentation Lab-3",
    type: "Presentation",
    version: "v1",
    publishedDate: "2026-08-16",
    publishedAt: "2026-08-16T19:33:34.469816+00:00",
    authors: members.map((member) => member.name),
    changeSummary: "PPT for AgentShield planning presentation. Includes project overview, threat model, architecture, workflow, team roles, and implementation plan.",
    publisherEmail: members[0].email,
    commitUrl: null,
    deploymentUrl: null,
    changes: [],
    assets: [],
  },
  initialDeliverable,
] as const;

export const deliverableTypes = ["Planning", "Presentation", "Report", "Demo", "Other"];
