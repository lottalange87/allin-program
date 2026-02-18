"use client";

import { useState } from "react";
import {
  Brain,
  Blocks,
  Plug,
  Handshake,
  Building2,
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Area {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  items: string[];
  itemIcons?: React.ReactNode[];
}

const areas: Area[] = [
  {
    id: "sap-build",
    title: "SAP Build",
    icon: <Blocks className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
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
    icon: <Plug className="w-8 h-8" />,
    color: "from-teal-500 to-teal-600",
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
    icon: <Handshake className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
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
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    items: [],
  },
];

function AreaCard({ area, index }: { area: Area; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-2xl overflow-hidden transition-all duration-500 ease-out",
        "border border-gray-200 shadow-lg hover:shadow-2xl",
        "bg-white cursor-pointer",
        "transform hover:-translate-y-1",
        isHovered && "ring-2 ring-offset-2 ring-sap-blue"
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
        <div className="flex items-center gap-4 text-white">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            {area.icon}
          </div>
          <h2 className="text-2xl font-bold">{area.title}</h2>
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
                <div className="text-gray-500 group-hover/item:text-sap-blue transition-colors">
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
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-10 h-10" />
                <span className="text-lg font-medium opacity-90">SAP</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ALL IN Program</h1>
              <p className="text-xl opacity-80 max-w-2xl">
                Transform your business with AI, Integration, and sustainable Partnerships
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-white" />
                  <div className="text-white">
                    <p className="text-xs opacity-70 uppercase tracking-wider">Managed by</p>
                    <p className="font-semibold">Project Management Office</p>
                  </div>
                </div>
              </div>
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
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">
            Select an area to learn more
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <AreaCard key={area.id} area={area} index={index} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-sap-blue/10 rounded-xl">
                <Sparkles className="w-8 h-8 text-sap-blue" />
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
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Build</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
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
