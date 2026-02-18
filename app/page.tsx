"use client";

import { useState } from "react";
import {
  Brain,
  Blocks,
  Plug,
  Handshake,
  ChevronRight,
  Sparkles,
  Shield,
  AppWindow,
  Users,
  Network,
  Bot,
  TrendingUp,
  Rocket,
  Target,
  BadgeDollarSign,
  User,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

// SAP Logo Component - Official SVG
function SAPLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 398 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SAP Square Logo */}
      <g>
        {/* Background square */}
        <rect x="0" y="0" width="90" height="90" fill="white"/>
        {/* Inner squares pattern */}
        <rect x="5" y="5" width="35" height="35" fill="currentColor"/>
        <rect x="50" y="5" width="35" height="35" fill="currentColor"/>
        <rect x="5" y="50" width="35" height="35" fill="currentColor"/>
        <rect x="50" y="50" width="35" height="35" fill="currentColor"/>
      </g>
      {/* SAP Text */}
      <text
        x="110"
        y="70"
        fill="currentColor"
        fontSize="80"
        fontWeight="bold"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="2"
      >
        SAP
      </text>
    </svg>
  );
}

interface Workstream {
  id: string;
  title: string;
  lead: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  items: string[];
  itemIcons?: React.ReactNode[];
}

interface ManagementBox {
  id: string;
  title: string;
  lead: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description?: string;
}

const managementBoxes: ManagementBox[] = [
  {
    id: "program-mgmt",
    title: "Program Management",
    lead: "Rolf",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-gray-700 to-gray-800",
    bgColor: "bg-gray-50",
    description: "Overall program coordination and strategy",
  },
  {
    id: "pmo",
    title: "PMO",
    lead: "Team",
    icon: <Users className="w-5 h-5" />,
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-50",
    description: "Project Management Office",
  },
];

const workstreams: Workstream[] = [
  {
    id: "sap-build",
    title: "SAP Build",
    lead: "Tobias",
    icon: <Blocks className="w-8 h-8" />,
    color: "from-[#0070F2] to-[#005BB5]",
    bgColor: "bg-blue-50",
    items: ["New Adoption Topics", "Micro App Hub", "Security", "Rise customer investment program"],
    itemIcons: [
      <Sparkles className="w-4 h-4" />,
      <AppWindow className="w-4 h-4" />,
      <Shield className="w-4 h-4" />,
      <BadgeDollarSign className="w-4 h-4" />,
    ],
  },
  {
    id: "integration",
    title: "Integration",
    lead: "Jörg / Richard",
    icon: <Plug className="w-8 h-8" />,
    color: "from-[#00A8B5] to-[#008A94]",
    bgColor: "bg-teal-50",
    items: ["Integration Moderation", "B2B", "Maya / Agentic AI"],
    itemIcons: [
      <Network className="w-4 h-4" />,
      <Handshake className="w-4 h-4" />,
      <Bot className="w-4 h-4" />,
    ],
  },
  {
    id: "partner",
    title: "Partner",
    lead: "Pavel",
    icon: <Handshake className="w-8 h-8" />,
    color: "from-[#F58C00] to-[#D97A00]",
    bgColor: "bg-orange-50",
    items: ["ISV Replatforming", "Next Level Program"],
    itemIcons: [
      <Rocket className="w-4 h-4" />,
      <TrendingUp className="w-4 h-4" />,
    ],
  },
  {
    id: "ai",
    title: "AI",
    lead: "Marko",
    icon: <Brain className="w-8 h-8" />,
    color: "from-[#A100C2] to-[#7A0094]",
    bgColor: "bg-purple-50",
    items: [],
  },
];

function ManagementCard({ box, isSmall = false }: { box: ManagementBox; isSmall?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-xl overflow-hidden transition-all duration-500 ease-out",
        "border border-gray-200 shadow-md hover:shadow-xl",
        "bg-white cursor-pointer",
        "transform hover:-translate-y-1",
        isHovered && "ring-2 ring-offset-2 ring-gray-400",
        isSmall ? "p-4" : "p-6"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with gradient */}
      <div
        className={cn(
          "relative transition-all duration-500 rounded-lg",
          "bg-gradient-to-br",
          box.color,
          isSmall ? "p-3 mb-3" : "p-4 mb-4"
        )}
      >
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className={cn("bg-white/20 rounded-lg backdrop-blur-sm", isSmall ? "p-2" : "p-2.5")}>
              {box.icon}
            </div>
            <h3 className={cn("font-bold", isSmall ? "text-lg" : "text-xl")}>{box.title}</h3>
          </div>
        </div>
        
        {/* Lead Badge */}
        <div className="mt-2 flex items-center gap-2 text-white/90">
          <User className={cn(isSmall ? "w-3 h-3" : "w-4 h-4")} />
          <span className={cn("font-medium", isSmall ? "text-xs" : "text-sm")}>Lead: {box.lead}</span>
        </div>
      </div>

      {/* Description */}
      {box.description && (
        <p className="text-gray-600 text-sm">{box.description}</p>
      )}

      {/* Hover indicator */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
          box.color,
          "transform origin-left transition-transform duration-500",
          isHovered ? "scale-x-100" : "scale-x-0"
        )}
      />
    </div>
  );
}

function WorkstreamCard({ area, index }: { area: Workstream; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-2xl overflow-hidden transition-all duration-500 ease-out",
        "border border-gray-200 shadow-lg hover:shadow-2xl",
        "bg-white cursor-pointer",
        "transform hover:-translate-y-1",
        isHovered && "ring-2 ring-offset-2 ring-[#0070F2]"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with gradient */}
      <div
        className={cn(
          "relative p-6 transition-all duration-500",
          "bg-gradient-to-br",
          area.color
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              {area.icon}
            </div>
            <h2 className="text-2xl font-bold">{area.title}</h2>
          </div>
        </div>
        
        {/* Lead Badge */}
        <div className="mt-4 flex items-center gap-2 text-white/90">
          <User className="w-4 h-4" />
          <span className="text-sm font-medium">Lead: {area.lead}</span>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className={cn("p-6", area.bgColor)}>
        {area.items.length > 0 ? (
          <ul className="space-y-3">
            {area.items.map((item, idx) => (
              <li
                key={idx}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl",
                  "bg-white/80 backdrop-blur-sm",
                  "transition-all duration-300",
                  "hover:bg-white hover:shadow-md",
                  "group/item"
                )}
              >
                <div className="text-gray-500 group-hover/item:text-[#0070F2] transition-colors">
                  {area.itemIcons?.[idx]}
                </div>
                <span className="text-gray-700 font-medium text-sm">{item}</span>
                <ChevronRight className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-gray-400">
            <Target className="w-12 h-12 mb-3 opacity-30" />
            <p className="text-sm font-medium">Coming Soon</p>
          </div>
        )}
      </div>

      {/* Hover indicator */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
          area.color,
          "transform origin-left transition-transform duration-500",
          isHovered ? "scale-x-100" : "scale-x-0"
        )}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#0070F2] to-[#005BB5]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              {/* SAP Logo */}
              <div className="mb-6">
                <svg
                  viewBox="0 0 398 200"
                  className="h-16 w-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SAP Square Logo */}
                  <g>
                    {/* Background square */}
                    <rect x="0" y="0" width="90" height="90" fill="white"/>
                    {/* Inner squares pattern */}
                    <rect x="5" y="5" width="35" height="35" fill="#0070F2"/>
                    <rect x="50" y="5" width="35" height="35" fill="#0070F2"/>
                    <rect x="5" y="50" width="35" height="35" fill="#0070F2"/>
                    <rect x="50" y="50" width="35" height="35" fill="#0070F2"/>
                  </g>
                  {/* SAP Text */}
                  <text
                    x="110"
                    y="70"
                    fill="white"
                    fontSize="80"
                    fontWeight="bold"
                    fontFamily="Arial, Helvetica, sans-serif"
                    letterSpacing="2"
                  >
                    SAP
                  </text>
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">ALL IN Program</h1>
              <p className="text-lg opacity-90 max-w-3xl leading-relaxed">
                Our mission is to drive adoption and consumption of SAP BTP by creating tangible impact at our customers
              </p>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Management Boxes Row */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Program Management - larger */}
            <div className="md:col-span-2">
              <ManagementCard box={managementBoxes[0]} />
            </div>
            {/* PMO - smaller */}
            <div className="md:col-span-1">
              <ManagementCard box={managementBoxes[1]} isSmall />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-12" />

        {/* Workstreams Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Workstreams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workstreams.map((area, index) => (
              <WorkstreamCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#0070F2]/10 rounded-xl">
                <Sparkles className="w-8 h-8 text-[#0070F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Shape the Future</h3>
                <p className="text-gray-600">
                  Innovative solutions for digital transformation
                </p>
              </div>
            </div>

            <div className="flex gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0070F2]" />
                <span>Build</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A8B5]" />
                <span>Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F58C00]" />
                <span>Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#A100C2]" />
                <span>AI</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SAP SE. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              ALL IN Program
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
