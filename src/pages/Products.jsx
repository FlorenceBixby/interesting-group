import React, { useState } from "react";

const categories = [
  {
    title: "Technology Portfolio",
    items: [
      "SD-WAN",
      "Contact Center & CX",
      "Cybersecurity and SECaaS"
    ]
  },
  {
    title: "SD-WAN Features",
    items: [
      "Automatic Failover",
      "Link Aggregation",
      "TCP/IP Optimization",
      "Application Acceleration",
      "Active-Active Failover",
      "Proactive Monitoring & Ticketing",
      "Cloud Based Routing",
      "Premise Based Routing",
      "Virtual IP",
      "Network Aggregation",
      "SASE",
      "Analytics & Reporting",
      "Custom Dashboards"
    ]
  },
  {
    title: "Contact Center & CX",
    items: [
      "CRM Integration",
      "Omni-channel",
      "IVR",
      "Call Recording",
      "Live Chat, Chat Bot",
      "Call Routing",
      "Outbound Dialer",
      "WFO/WFM/WEM",
      "Performance Management",
      "Supervisor Alerts",
      "Transcription Services"
    ]
  },
  {
    title: "Network & Voice",
    items: [
      "Internet Access",
      "Point 2 Points",
      "VPLS",
      "International Data",
      "ISP Aggregation",
      "MPLS, VPN"
    ]
  },
  {
    title: "Voice",
    items: [
      "POTS",
      "SIP Trunking",
      "PRI"
    ]
  },
  {
    title: "Access Types",
    items: [
      "Fiber",
      "Fixed Wireless",
      "Coax",
      "DSL",
      "T1",
      "3g/4g/5g"
    ]
  },
  {
    title: "Infrastructure",
    items: [
      "Colocation",
      "Virtual Data Centers",
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Managed Cloud (Azure, AWS, IBM, etc.)",
      "Direct Connect",
      "Cloud Security",
      "Storage Encryption"
    ]
  },
  {
    title: "Continuity",
    items: [
      "Cloud Backup",
      "Cloud Storage",
      "Disaster Recovery",
      "Virtual Desktop, DaaS",
      "Content Delivery Network (CDN)"
    ]
  },
  {
    title: "Identify",
    items: [
      "Virtual CISO",
      "Cyber Consulting",
      "Vulnerability Assess.",
      "Penetration Testing",
      "Compliance",
      "Phishing Simulation",
      "Awareness Training"
    ]
  },
  {
    title: "Protect",
    items: [
      "Managed Firewall",
      "Web Security",
      "Email Security",
      "Endpoint Protection",
      "Managed Cloud FW",
      "Data Protection",
      "Zero-Trust Framework",
      "Remote User VPN",
      "Patch Management",
      "Circuit Monitoring",
      "SIEM",
      "SASE",
      "VPN",
      "DDoS Mitigation"
    ]
  },
  {
    title: "Detect",
    items: [
      "Log Mgmt (SEIM)",
      "AI Machine Learning",
      "Intrusion Detection",
      "Intrusion Prevention",
      "SOC as a Service"
    ]
  },
  {
    title: "Respond",
    items: [
      "Incident Response",
      "Containment / Eradication / Restore",
      "MDR"
    ]
  },
  {
    title: "UC & Collaboration",
    items: [
      "Hosted Voice",
      "Video Conferencing (Zoom, etc.)",
      "Meeting Services",
      "Instant Messaging",
      "File Share",
      "SMS, MMS",
      "Fax-to-Email",
      "eFax",
      "Standalone Applications",
      "Application Integration",
      "Chat",
      "Hosted Email"
    ]
  },
  {
    title: "Managed Services",
    items: [
      "Managed Wi-Fi",
      "Office 365 Licenses",
      "Security Chain of Custody",
      "Information Lifecycle Management",
      "Cloud Migration",
      "Office 365 Management",
      "Expense Management",
      "Helpdesk, IT Support",
      "Accounts Receivable Management",
      "Network Monitoring",
      "Trouble Ticketing",
      "Cloud Readiness Assessments",
      "Project Management",
      "Network Operations Center (NOC)"
    ]
  },
  {
    title: "Mobility & IoT",
    items: [
      "Wireless Voice",
      "3G, 4G, 5G",
      "Handsets, Devices",
      "SIM Cards",
      "Wireless Backup and Failover",
      "Mobile Device Management"
    ]
  },
  {
    title: "Analytics",
    items: [
      "Machine Learning, AI",
      "Thermal Imaging",
      "PPE & Occupancy Detection",
      "Environmental Monitoring",
      "Wireless TEM"
    ]
  },
  {
    title: "Internet of Things (IOT)",
    items: [
      "Dashboards",
      "Sensors",
      "App integration"
    ]
  }
];

export default function Products() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container">
      <h2>Products & Services</h2>
      {categories.map((cat, idx) => (
        <div className="product-category" key={cat.title}>
          <h3
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              color: openIndex === idx ? "#22223b" : "#663399",
              fontWeight: openIndex === idx ? 900 : 700,
              background: openIndex === idx ? "#f3e8ff" : "none",
              borderRadius: "6px",
              padding: "0.2em 0.5em",
              transition: "all 0.2s"
            }}
          >
            {cat.title}
          </h3>
          {openIndex === idx && (
            <ul className="product-list">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
