"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { useState } from "react"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Full-width header */}
      <Header onMenuToggle={toggleSidebar} userName="Test User" isSidebarOpen={isSidebarOpen} />
      
      {/* Main content area with sidebar and content */}
      <div className="flex flex-1 min-h-0">
        {isSidebarOpen && <Sidebar />}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">
                  Welcome back! Here's what's happening with your projects today.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Total Revenue</h3>
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-sm font-medium">$</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">$45,231.89</p>
                  <p className="text-sm text-green-600 mt-1">+20.1% from last month</p>
                </div>
                
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Subscriptions</h3>
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-medium">👥</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">+2350</p>
                  <p className="text-sm text-green-600 mt-1">+180.1% from last month</p>
                </div>
                
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Sales</h3>
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-sm font-medium">📈</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">+12,234</p>
                  <p className="text-sm text-green-600 mt-1">+19% from last month</p>
                </div>
                
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Active Now</h3>
                    <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 text-sm font-medium">⚡</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">+573</p>
                  <p className="text-sm text-green-600 mt-1">+201 since last hour</p>
                </div>
                
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Pending Orders</h3>
                    <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-yellow-600 text-sm font-medium">⏳</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">+89</p>
                  <p className="text-sm text-yellow-600 mt-1">+12 since last hour</p>
                </div>
                
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Support Tickets</h3>
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 text-sm font-medium">🎫</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">+23</p>
                  <p className="text-sm text-red-600 mt-1">+5 since last hour</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
