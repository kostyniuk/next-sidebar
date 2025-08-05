"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ChevronDown, Menu, ChevronRight } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  className?: string
  onMenuToggle?: () => void
  userName?: string
  isSidebarOpen?: boolean
}

export function Header({ className, onMenuToggle, userName = "Test User", isSidebarOpen = true }: HeaderProps) {
  const [selectedOption, setSelectedOption] = useState("Customers")

  // Extract initials from user name
  const getInitials = (name: string) => {
    const names = name.split(' ')
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const initials = getInitials(userName)

  return (
    <header className={cn(
      "flex items-center justify-between px-6 py-4 bg-gray-900 text-white border-b border-gray-800",
      className
    )}>
      {/* Left side - Logo, AMFG section, and Menu */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="flex flex-col">
            <div className="text-blue-400 font-bold text-xl">AMFG</div>
            <div className="text-gray-300 text-sm hidden sm:block">Autonomous Manufacturing</div>
          </div>
        </div>
        
        {/* AMFG section with chevron */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="text-gray-300 hover:text-white hover:bg-gray-800"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Right side - Select and User */}
      <div className="flex items-center space-x-4">
        {/* Select Dropdown */}
        <div className="relative">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="appearance-none bg-gray-800 border border-gray-700 rounded-md px-3 py-2 pr-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All</option>
            <option value="Production">Production</option>
            <option value="Inventory">Inventory</option>
            <option value="Customers">Customers</option>
            <option value="Settings">Settings</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>

        {/* User Button */}
        <Button
          variant="ghost"
          className="bg-gray-800 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          {initials}
        </Button>
      </div>
    </header>
  )
} 