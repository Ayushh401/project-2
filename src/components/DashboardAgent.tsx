import React, { useState } from 'react';
import { TrendingUp, Bot, BarChart3, PieChart, Calendar, DollarSign, Users, Activity, ArrowUp, ArrowDown } from 'lucide-react';
import { mockOrders, mockClients, mockCourses } from '../data/mockData';

export function DashboardAgent() {
  const [activeMetric, setActiveMetric] = useState<string>('revenue');
  const [timeframe, setTimeframe] = useState<string>('month');

  // Calculate metrics
  const totalRevenue = mockOrders.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0);
  const pendingRevenue = mockOrders.filter(o => o.status === 'pending').reduce((sum, o) => sum + o.amount, 0);
  const activeClients = mockClients.filter(c => c.status === 'active').length;
  const inactiveClients = mockClients.filter(c => c.status === 'inactive').length;
  const totalClients = mockClients.length;
  
  const metrics = [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'green',
      description: 'Revenue from paid orders'
    },
    {
      id: 'pending',
      title: 'Outstanding Payments',
      value: `$${pendingRevenue.toLocaleString()}`,
      change: '-3.2%',
      trend: 'down',
      icon: Activity,
      color: 'orange',
      description: 'Pending payment collection'
    },
    {
      id: 'clients',
      title: 'Active Clients',
      value: activeClients.toString(),
      change: '+8.7%',
      trend: 'up',
      icon: Users,
      color: 'blue',
      description: 'Currently enrolled clients'
    },
    {
      id: 'courses',
      title: 'Course Completion',
      value: '87%',
      change: '+5.1%',
      trend: 'up',
      icon: BarChart3,
      color: 'purple',
      description: 'Average completion rate'
    }
  ];

  const courseAnalytics = mockCourses.map(course => ({
    name: course.title,
    enrollment: Math.floor(Math.random() * 50) + 10,
    completion: Math.floor(Math.random() * 30) + 70,
    revenue: course.price * (Math.floor(Math.random() * 20) + 5),
  }));

  const generateInsight = () => {
    const insights = [
      `📈 Revenue has increased by 12.5% this month, with Yoga classes showing the highest growth.`,
      `👥 ${activeClients} active clients represent an 8.7% increase from last month.`,
      `💰 You have $${pendingRevenue} in outstanding payments that could be collected.`,
      `🎯 Pilates has the highest completion rate at 94%, consider promoting similar intensive courses.`,
      `📅 Weekend classes show 23% higher attendance than weekday sessions.`,
      `🔄 Client retention rate is at 89%, which is excellent for the fitness industry.`,
    ];
    
    return insights[Math.floor(Math.random() * insights.length)];
  };

  const [currentInsight, setCurrentInsight] = useState(generateInsight());

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard Agent</h2>
            <p className="text-gray-600">Business analytics and insights</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
          <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-xl">
            <Activity className="w-4 h-4" />
            <span>Real-time Analytics</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const isActive = activeMetric === metric.id;
          return (
            <div
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'border-purple-300 shadow-xl shadow-purple-500/10' 
                  : 'border-gray-200/50 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  metric.color === 'green' ? 'bg-green-500' :
                  metric.color === 'orange' ? 'bg-orange-500' :
                  metric.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                  {metric.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-sm text-gray-600 mb-2">{metric.title}</p>
                <p className="text-xs text-gray-500">{metric.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insight */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Insight</h3>
            <p className="text-gray-700 mb-4">{currentInsight}</p>
            <button
              onClick={() => setCurrentInsight(generateInsight())}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Generate New Insight →
            </button>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Course Analytics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Course Performance</h3>
          <div className="space-y-4">
            {courseAnalytics.slice(0, 5).map((course, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{course.name}</span>
                    <span className="text-sm text-gray-600">{course.enrollment} enrolled</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{course.completion}% completion</span>
                    <span>${course.revenue} revenue</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Distribution */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Client Distribution</h3>
          <div className="space-y-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{totalClients}</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Active Clients</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{activeClients} ({Math.round(activeClients/totalClients*100)}%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Inactive Clients</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{inactiveClients} ({Math.round(inactiveClients/totalClients*100)}%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">New This Month</span>
                </div>
                <span className="text-sm font-medium text-gray-900">23</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance & Revenue Trends */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h4 className="font-semibold text-gray-900 mb-4">Attendance Rate</h4>
          <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
          <p className="text-sm text-gray-600">+5% from last month</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h4 className="font-semibold text-gray-900 mb-4">Average Class Size</h4>
          <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
          <p className="text-sm text-gray-600">Optimal capacity</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <h4 className="font-semibold text-gray-900 mb-4">Client Retention</h4>
          <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
          <p className="text-sm text-gray-600">Industry leading</p>
        </div>
      </div>
    </div>
  );
}