import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 150+ unique automation tasks
const automationTasks = [
  // Row 1 - Business & Sales
  "Lead Qualification", "CRM Sync", "Email Campaigns", "Invoice Generation", "Contract Management",
  "Sales Forecasting", "Pipeline Optimization", "Quote Generation", "Customer Onboarding", "Churn Prediction",
  "Revenue Analytics", "Deal Scoring", "Territory Mapping", "Commission Calculation", "Proposal Creation",
  "Meeting Scheduling", "Follow-up Automation", "Lead Scoring", "Account Management", "Sales Reporting",
  "Opportunity Tracking", "Price Optimization", "Discount Approval", "Order Processing", "Customer Segmentation",

  // Row 2 - Marketing & Content
  "Social Media Posting", "Content Generation", "SEO Optimization", "Ad Campaign Management", "A/B Testing",
  "Email Personalization", "Landing Page Creation", "Brand Monitoring", "Influencer Outreach", "Newsletter Automation",
  "Marketing Attribution", "Audience Analysis", "Campaign Analytics", "Content Scheduling", "Hashtag Research",
  "Competitor Analysis", "Trend Detection", "Viral Content Prediction", "Engagement Tracking", "ROI Calculation",
  "Media Buying", "Creative Generation", "Copy Writing", "Video Editing", "Image Optimization",

  // Row 3 - Operations & Logistics
  "Inventory Management", "Supply Chain Optimization", "Warehouse Automation", "Shipping Coordination", "Route Planning",
  "Demand Forecasting", "Stock Replenishment", "Vendor Management", "Quality Control", "Asset Tracking",
  "Fleet Management", "Delivery Scheduling", "Returns Processing", "Customs Documentation", "Freight Optimization",
  "Capacity Planning", "Production Scheduling", "Equipment Maintenance", "Safety Compliance", "Environmental Monitoring",
  "Resource Allocation", "Workforce Planning", "Shift Scheduling", "Time Tracking", "Expense Management",

  // Row 4 - Finance & Accounting
  "Invoice Processing", "Expense Reporting", "Budget Forecasting", "Tax Calculation", "Audit Preparation",
  "Financial Reconciliation", "Cash Flow Analysis", "Payment Processing", "Credit Assessment", "Fraud Detection",
  "Risk Assessment", "Compliance Monitoring", "Financial Reporting", "Currency Conversion", "Investment Analysis",
  "Portfolio Management", "Loan Processing", "Insurance Claims", "Payroll Automation", "Benefits Administration",
  "Accounts Payable", "Accounts Receivable", "General Ledger", "Cost Allocation", "Variance Analysis",

  // Row 5 - IT & Development
  "Code Review", "Bug Detection", "Security Scanning", "Performance Monitoring", "Log Analysis",
  "Deployment Automation", "Infrastructure Scaling", "Database Optimization", "API Integration", "Testing Automation",
  "Documentation Generation", "Version Control", "Incident Response", "Backup Management", "Disaster Recovery",
  "Network Monitoring", "Cloud Cost Optimization", "Container Orchestration", "CI/CD Pipeline", "Code Generation",
  "Architecture Analysis", "Dependency Updates", "License Compliance", "Access Management", "Secret Rotation",

  // Row 6 - HR & Recruitment
  "Resume Screening", "Interview Scheduling", "Candidate Sourcing", "Offer Letter Generation", "Background Checks",
  "Employee Onboarding", "Training Assignment", "Performance Reviews", "Goal Tracking", "Feedback Collection",
  "Leave Management", "Attendance Tracking", "Succession Planning", "Skill Assessment", "Career Pathing",
  "Engagement Surveys", "Exit Interviews", "Alumni Network", "Referral Programs", "Diversity Analytics",
  "Compensation Analysis", "Benefits Enrollment", "Policy Updates", "Compliance Training", "Team Building",
];

// Split into 3 groups for 3 rows
const row1Tasks = automationTasks.slice(0, 50);
const row2Tasks = automationTasks.slice(50, 100);
const row3Tasks = automationTasks.slice(100, 150);

interface TickerRowProps {
  tasks: string[];
  direction: "left" | "right";
  speed: number;
  colorClass: string;
}

function TickerRow({ tasks, direction, speed, colorClass }: TickerRowProps) {
  const duplicatedTasks = [...tasks, ...tasks, ...tasks]; // Triple for seamless loop

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedTasks.map((task, index) => (
          <span
            key={`${task}-${index}`}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:scale-105 hover:shadow-md cursor-default ${colorClass}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
            {task}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function AutomationTicker() {
  return (
    <section className="py-12 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            500+ Automated Tasks
          </h2>
          <p className="text-muted-foreground">
            Powering enterprise automation across every department
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Fast, Left direction, Primary color */}
        <TickerRow
          tasks={row1Tasks}
          direction="left"
          speed={45}
          colorClass="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
        />

        {/* Row 2 - Medium, Right direction, Secondary color */}
        <TickerRow
          tasks={row2Tasks}
          direction="right"
          speed={60}
          colorClass="bg-secondary/10 text-secondary-foreground border-secondary/30 hover:bg-secondary/20"
        />

        {/* Row 3 - Slow, Left direction, Accent color */}
        <TickerRow
          tasks={row3Tasks}
          direction="left"
          speed={75}
          colorClass="bg-accent text-accent-foreground border-border hover:bg-accent/80"
        />
      </div>

      {/* Stats below */}
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Unique Tasks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
