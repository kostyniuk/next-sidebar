"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  LayoutDashboard,
  ShoppingCart,
  Target,
  Users,
  Settings,
  Bot,
  Package,
  Mail,
  FileText,
  DollarSign,
  BarChart3,
  Filter,
  Quote,
  Cloud,
  Download,
  Globe,
  Tag,
  Truck,
  Zap,
  Shield,
  CreditCard,
  FileEdit,
  MessageSquare,
  Languages,
  Building,
  ChevronRight,
  LogOut,
  ClipboardList,
  Cog,
  Handshake,
  Database,
  UserCheck,
  Workflow,
  MapPin,
  FileCheck,
  FolderOpen,
  Activity,
  Layers,
  Cpu,
  Factory,
  Wrench,
  TrendingUp,
  PackageCheck,
  FileType,
  FileCode,
  MailCheck,
  Newspaper,
  Network,
  UserPlus,
  PieChart,
  Map,
  Route,
  ShoppingBag,
} from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")
  const [expandedSections, setExpandedSections] = useState({
    requests: false,
    projects: false,
    production: false,
    inventoryManagement: false,
    autonomous: false,
    settings: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  const navigationItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { id: "catalogue", icon: ShoppingCart, label: "Catalogue", href: "/catalogue-overview" },
    { 
      id: "requests", 
      icon: Target, 
      label: "Requests", 
      href: "/requests",
      subItems: [
        { id: "emails", icon: Mail, label: "Emails", href: "/email-list" },
        { id: "tickets-overview", icon: ClipboardList, label: "Tickets Overview", href: "/ticket-overview" },
        { id: "quotes-list", icon: Quote, label: "Quotes List", href: "/quote-list" },
      ]
    },
    { 
      id: "projects", 
      icon: FolderOpen, 
      label: "Projects", 
      href: "/projects",
      subItems: [
        { id: "projects-overview", icon: BarChart3, label: "Projects Overview", href: "/project-overview" },
        { id: "application-activity", icon: Activity, label: "Application Activity", href: "/application-activity" },
        { id: "finance", icon: DollarSign, label: "Finance", href: "/finance" },
      ]
    },
    { 
      id: "production", 
      icon: Factory, 
      label: "Production", 
      href: "/production",
      subItems: [
        { id: "production-overview-legacy", icon: ClipboardList, label: "Production Overview (Legacy)", href: "/production-overview-legacy" },
        { id: "new-production-overview", icon: BarChart3, label: "Production Overview", href: "/new-production-overview" },
        { id: "machine-configuration", icon: Cog, label: "Machine Configuration", href: "/machine-configuration" },
        { id: "create-a-build", icon: Wrench, label: "Create A Build", href: "/create-a-build" },
        { id: "machine-analytics", icon: TrendingUp, label: "Machine Analytics", href: "/machine-analytics" },
        { id: "post-production", icon: PackageCheck, label: "Post Production", href: "/post-production" },
        { id: "services", icon: Handshake, label: "Services", href: "/services" },
      ]
    },
    { 
      id: "inventory-management", 
      icon: Package, 
      label: "Inventory Management", 
      href: "/inventory-management",
      subItems: [
        { id: "inventory", icon: Database, label: "Inventory", href: "/inventory-management/inventory" },
        { id: "suppliers", icon: UserCheck, label: "Suppliers", href: "/inventory-management/suppliers" },
      ]
    },
    { id: "customers", icon: Users, label: "Customers", href: "/customer-list" },
    { 
      id: "autonomous", 
      icon: Bot, 
      label: "Autonomous", 
      href: "/autonomous",
      subItems: [
        { id: "workers-dashboard", icon: LayoutDashboard, label: "Worker Dashboard", href: "/autonomous/workers-dashboard" },
        { id: "workflow-automation", icon: Workflow, label: "Workflow Automation", href: "/autonomous/workflow-automation" },
      ]
    },
    { 
      id: "settings", 
      icon: Settings, 
      label: "Settings", 
      href: "/settings",
      subItems: [
        { id: "localisation", icon: Globe, label: "Localisation", href: "/localisation-old" },
        { id: "applications", icon: Layers, label: "Applications", href: "/applications" },
        { id: "profit-center-configuration", icon: DollarSign, label: "Profit Center Configuration", href: "/profit-center-configuration" },
        { id: "attributes", icon: Tag, label: "Attributes", href: "/attributes" },
        { id: "production-parameters", icon: Cpu, label: "Production Parameters", href: "/production-parameters-settings" },
        { id: "import-export", icon: Download, label: "Data Export & Import", href: "/import-export" },
        { id: "countries-delivery", icon: Map, label: "Countries & Delivery Methods", href: "/countries-and-delivery-methods" },
        { id: "delivery", icon: Route, label: "Delivery", href: "/delivery/methods" },
        { id: "checkout-delivery", icon: ShoppingBag, label: "Checkout & Delivery", href: "/checkout-and-delivery" },
        { id: "workflow", icon: Zap, label: "Workflow", href: "/workflow" },
        { id: "security", icon: Shield, label: "Security", href: "/security" },
        { id: "cloud-nester", icon: Cloud, label: "Cloud Nester", href: "/cloud-nesting-integration" },
        { id: "payment", icon: CreditCard, label: "Payment Options", href: "/payment" },
        { id: "name-templating", icon: FileType, label: "Name Templating", href: "/name-templating" },
        { id: "quotation-forms", icon: FileCheck, label: "Quotation Forms", href: "/quotation-forms" },
        { id: "email-pdf-templates", icon: FileCode, label: "Email & PDF Templates", href: "/new-templates" },
        { id: "email-pdf-templates-legacy", icon: FileText, label: "Email & PDF Templates (Legacy)", href: "/email-pdf-templates" },
        { id: "email-settings", icon: MailCheck, label: "Email Settings", href: "/email-settings" },
        { id: "translations", icon: Languages, label: "Application Translations", href: "/application-translations" },
        { id: "news-info", icon: Newspaper, label: "News & Information", href: "/news-info" },
        { id: "supplier-integration", icon: Network, label: "Client Integration", href: "/supplier-integration" },
        { id: "users", icon: UserPlus, label: "Users", href: "/customer-list" },
      ]
    },
    { id: "login", icon: LogOut, label: "Login", href: "/login" },
  ]

  return (
    <div
      className={cn(
        "flex flex-col bg-gray-900 text-white transition-all duration-300",
        isCollapsed ? "w-20" : "w-80",
        className
      )}
    >
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto space-y-1 p-4 pt-6">
        {navigationItems.map((item) => (
          <div key={item.id}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start h-10",
                isCollapsed ? "px-2" : "px-3",
                activeItem === item.id && "bg-blue-500 text-white",
                !isCollapsed && item.subItems && "flex items-center justify-between"
              )}
              onClick={() => {
                setActiveItem(item.id)
                if (item.subItems) {
                  toggleSection(item.id)
                }
              }}
            >
              <div className="flex items-center">
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </div>
              {!isCollapsed && item.subItems && (
                <ChevronRight 
                  className={cn(
                    "h-4 w-4 transition-transform", 
                    expandedSections[item.id as keyof typeof expandedSections] && "rotate-90"
                  )} 
                />
              )}
            </Button>
            
            {/* Sub-items */}
            {!isCollapsed && item.subItems && expandedSections[item.id as keyof typeof expandedSections] && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <Button
                    key={subItem.id}
                    variant="ghost"
                    className="w-full justify-start h-8 px-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                    onClick={() => setActiveItem(subItem.id)}
                  >
                    {subItem.icon && <subItem.icon className="h-3 w-3 mr-2" />}
                    {subItem.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
} 