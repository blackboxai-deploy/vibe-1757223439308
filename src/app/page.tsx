"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If user is logged in, redirect to dashboard
  if (isLoggedIn) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Navigation */}
        <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-emerald-400">InvestPro</div>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                  <Link href="/trades" className="text-slate-300 hover:text-white transition-colors">
                    Trading
                  </Link>
                  <Link href="/analytics" className="text-slate-300 hover:text-white transition-colors">
                    Analytics
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Profile
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Preview */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-emerald-400">Portfolio Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">$234,567.89</div>
                <div className="text-emerald-400">+$12,456.78 (+5.6%)</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Today's P&L</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">+$3,247.12</div>
                <div className="text-blue-400">+1.4% today</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-purple-400">Active Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">23</div>
                <div className="text-purple-400">across 8 sectors</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Go to Full Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Landing page for non-authenticated users
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-2xl font-bold text-emerald-400">InvestPro</div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="text-emerald-400 block">Investment Platform</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Advanced portfolio management, real-time trading, and comprehensive analytics 
            to maximize your investment returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-lg"
              onClick={() => setIsLoggedIn(true)}
            >
              Start Trading Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Invest Smart
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive tools and insights to help you make informed investment decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">📊</div>
              </div>
              <CardTitle className="text-white">Real-Time Analytics</CardTitle>
              <CardDescription className="text-slate-400">
                Advanced charts and metrics to track your portfolio performance in real-time
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <CardTitle className="text-white">Lightning Fast Trades</CardTitle>
              <CardDescription className="text-slate-400">
                Execute trades instantly with our optimized trading engine and real-time market data
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <CardTitle className="text-white">Smart Insights</CardTitle>
              <CardDescription className="text-slate-400">
                AI-powered investment recommendations and risk assessment tools
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <CardTitle className="text-white">Secure & Compliant</CardTitle>
              <CardDescription className="text-slate-400">
                Bank-level security with full regulatory compliance and insurance protection
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">📱</div>
              </div>
              <CardTitle className="text-white">Mobile First</CardTitle>
              <CardDescription className="text-slate-400">
                Trade and monitor your investments anywhere with our responsive web platform
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <CardTitle className="text-white">Low Fees</CardTitle>
              <CardDescription className="text-slate-400">
                Competitive pricing with transparent fee structure and no hidden costs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-slate-800/30 rounded-2xl p-12 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">$2.4B+</div>
              <div className="text-slate-300">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">150K+</div>
              <div className="text-slate-300">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-slate-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-slate-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of successful investors who trust InvestPro for their financial future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-lg"
              onClick={() => setIsLoggedIn(true)}
            >
              Get Started Free
            </Button>
            <div className="flex items-center gap-2 text-slate-400">
              <Badge variant="outline" className="border-emerald-600 text-emerald-400">
                No fees for 30 days
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-4">InvestPro</div>
              <p className="text-slate-400">
                Professional investment platform for modern investors
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <div className="space-y-2 text-slate-400">
                <div>Trading</div>
                <div>Analytics</div>
                <div>Portfolio</div>
                <div>Mobile App</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <div className="space-y-2 text-slate-400">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Compliance</div>
                <div>Security</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 InvestPro. All rights reserved. Investment involves risk.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}