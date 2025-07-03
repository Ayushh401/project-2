import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Clock, CheckCircle, AlertCircle, Search, Plus, Phone, Mail } from 'lucide-react';
import { mockClients, mockOrders, mockCourses } from '../data/mockData';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  metadata?: any;
}

export function SupportAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'agent',
      content: "Hello! I'm your Support Agent. I can help you with client queries, order management, course information, and more. Try asking me something like 'What classes are available this week?' or 'Has order #12345 been paid?'",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAgentResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Class/Course queries
    if (message.includes('class') || message.includes('course') || message.includes('available')) {
      const availableClasses = mockCourses.filter(course => course.status === 'active');
      return `Here are the available classes this week:\n\n${availableClasses.map(course => 
        `📚 **${course.title}**\n   Instructor: ${course.instructor}\n   Schedule: ${course.schedule}\n   Price: $${course.price}`
      ).join('\n\n')}`;
    }
    
    // Order queries
    if (message.includes('order') && (message.includes('#') || message.includes('paid') || message.includes('status'))) {
      const orderMatch = message.match(/#(\d+)/);
      if (orderMatch) {
        const orderId = orderMatch[1];
        const order = mockOrders.find(o => o.id === orderId);
        if (order) {
          return `📋 **Order #${order.id}**\n\nClient: ${order.clientName}\nService: ${order.serviceName}\nAmount: $${order.amount}\nStatus: ${order.status === 'paid' ? '✅ Paid' : '⏳ Pending'}\nDate: ${order.date}`;
        }
      }
      
      const paidOrders = mockOrders.filter(o => o.status === 'paid').length;
      const pendingOrders = mockOrders.filter(o => o.status === 'pending').length;
      return `📊 **Order Summary**\n\n✅ Paid Orders: ${paidOrders}\n⏳ Pending Orders: ${pendingOrders}\n💰 Total Revenue: $${mockOrders.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0)}`;
    }
    
    // Client queries
    if (message.includes('client') || message.includes('customer')) {
      const activeClients = mockClients.filter(c => c.status === 'active').length;
      const inactiveClients = mockClients.filter(c => c.status === 'inactive').length;
      return `👥 **Client Overview**\n\n✅ Active Clients: ${activeClients}\n❌ Inactive Clients: ${inactiveClients}\n📈 New This Month: 23\n🎂 Birthdays This Week: 5`;
    }
    
    // Create order
    if (message.includes('create order') || message.includes('new order')) {
      return `🛒 **Creating New Order**\n\nI'll help you create a new order. Please provide:\n\n1. Client name or email\n2. Service/Course name\n3. Any special requirements\n\nExample: "Create order for Yoga Beginner for client Priya Sharma"`;
    }
    
    // Payment queries
    if (message.includes('payment') || message.includes('due')) {
      const totalDue = mockOrders.filter(o => o.status === 'pending').reduce((sum, o) => sum + o.amount, 0);
      return `💳 **Payment Summary**\n\n💰 Total Outstanding: $${totalDue}\n📅 Overdue Payments: 3\n🔄 Recent Payments: 12\n📊 Payment Success Rate: 94%`;
    }
    
    // Default response
    return `I understand you're asking about "${userMessage}". I can help you with:\n\n🔍 **Client Management** - Search clients, view enrollment status\n📋 **Order Processing** - Check order status, create new orders\n💳 **Payment Information** - View payment details, calculate dues\n📚 **Course Discovery** - List available classes, instructor information\n🔗 **API Integration** - Create client enquiries, process orders\n\nTry asking something more specific!`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate processing delay
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: simulateAgentResponse(inputValue),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, agentResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    { label: 'Available Classes', query: 'What classes are available this week?' },
    { label: 'Order Status', query: 'Show me order status summary' },
    { label: 'Client Overview', query: 'Show me client overview' },
    { label: 'Payment Summary', query: 'Show payment summary' },
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Support Agent</h2>
            <div className="flex items-center text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Online - Ready to help
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Response time: ~2s</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-gray-200/50 bg-gray-50/50">
        <p className="text-sm text-gray-600 mb-3">Quick Actions:</p>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInputValue(action.query)}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-gray-600 to-gray-800' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`px-4 py-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}>
                <div className="whitespace-pre-line">{message.content}</div>
                <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-gray-300' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="px-4 py-3 bg-white border border-gray-200 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-gray-200/50 bg-white/50">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about clients, orders, courses, or anything else..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              disabled={isTyping}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}