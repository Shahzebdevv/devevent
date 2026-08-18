export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "IntelliJ IDEA Conf 2026",
    image: "/images/event1.png",
    slug: "intellij-idea-conf-2026",
    location: "Online",
    date: "September 8–9, 2026",
    time: "10:00 AM",
  },
  {
    title: "SAP Hackathon: Business Meets AI",
    image: "/images/event2.png",
    slug: "sap-hackathon-business-meets-ai-2026",
    location: "Zürich, Switzerland",
    date: "September 14–18, 2026",
    time: "All day",
  },
  {
    title: "dotJS 2026",
    image: "/images/event3.png",
    slug: "dotjs-2026",
    location: "Folies Bergère, Paris, France",
    date: "September 18, 2026",
    time: "All day",
  },
  {
    title: "DevConf.US 2026",
    image: "/images/event4.png",
    slug: "devconf-us-2026",
    location: "Boston University, Boston, MA",
    date: "September 24–25, 2026",
    time: "All day",
  },
  {
    title: "OpenAI DevDay 2026",
    image: "/images/event5.png",
    slug: "openai-devday-2026",
    location: "Fort Mason, San Francisco, CA",
    date: "September 29, 2026",
    time: "All day",
  },
  {
    title: "next.app devcon 2026",
    image: "/images/event6.png",
    slug: "next-app-devcon-2026",
    location: "CityCube Berlin, Germany",
    date: "October 7–9, 2026",
    time: "9:00 AM–6:00 PM",
  },
  {
    title: "KubeCon + CloudNativeCon North America 2026",
    image: "/images/event-full.png",
    slug: "kubecon-cloudnativecon-north-america-2026",
    location: "Salt Palace Convention Center, Salt Lake City, UT",
    date: "November 9–12, 2026",
    time: "8:00 AM–6:00 PM",
  },
];
