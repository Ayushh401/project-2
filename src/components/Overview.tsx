import React from 'react';
import { MessageCircle, TrendingUp, Users, ShoppingCart, Calendar, DollarSign, ArrowRight, Activity } from 'lucide-react';

interface OverviewProps {
  onNavigate: (view: 'support' | 'dashboard') => void;
}

export function Overview({ onNavigate }: OverviewProps) {
  const stats = [
    { label: 'Active Clients', value: '1,247', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { label: 'Monthly Revenue', value: '$24,680', icon: DollarSign, color: 'bg-green-500', change: '+8.2%' },
    { label: 'Total Orders', value: '892', icon: ShoppingCart, color: 'bg-purple-500', change: '+15%' },
    { label: 'Classes Today', value: '8', icon: Calendar, color: 'bg-orange-500', change: '+2' },
  ];

  const agentCards = [
    {
      id: 'support',
      title: 'Support Agent',
      description: 'Handle client queries, manage orders, and discover services with intelligent natural language processing.',
      icon: MessageCircle,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Client Management', 'Order Processing', 'Service Discovery', 'API Integration'],
      action: 'Start Support Chat'
    },
    {
      id: 'dashboard',
      title: 'Dashboard Agent',
      description: 'Generate insights, analytics, and business metrics with advanced data processing capabilities.',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Revenue Analytics', 'Client Insights', 'Attendance Reports', 'Trend Analysis'],
      action: 'View Analytics'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
          Multi-Agent Dashboard
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Intelligent agents powered by CrewAI to handle support queries and provide business analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Agent Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {agentCards.map((agent) => {
          const Icon = agent.icon;
          return (
            <div key={agent.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${agent.gradient} rounded-2xl flex items-center justify-center mr-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{agent.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Activity className="w-4 h-4 mr-1" />
                    <span>Active</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{agent.description}</p>

              <div className="space-y-3 mb-8">
                {agent.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate(agent.id as 'support' | 'dashboard')}
                className={`w-full bg-gradient-to-r ${agent.gradient} text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:transform group-hover:scale-105`}
              >
                <span>{agent.action}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>

      {/* System Status */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">MongoDB</span>
            </div>
            <span className="text-xs text-green-600 font-medium">Connected</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">External APIs</span>
            </div>
            <span className="text-xs text-green-600 font-medium">Online</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">Agents</span>
            </div>
            <span className="text-xs text-green-600 font-medium">2 Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}