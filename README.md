## Multi-Agent Assignment Dashboard System

A production-ready multi-agent system built with React, TypeScript, and Tailwind CSS that demonstrates intelligent business automation using CrewAI-inspired agents for customer support and business analytics.

## 🎯 Overview

This application showcases two specialized AI agents working together to handle business operations:

- **Support Agent**: Handles client queries, order management, and service discovery
- **Dashboard Agent**: Provides business analytics, metrics, and insights

## ✨ Features

### 🤖 Support Agent
- **Client Management**: Search clients by name, email, or phone
- **Order Processing**: Check order status, create new orders, payment tracking
- **Service Discovery**: Browse available classes, instructor information, scheduling
- **Natural Language Processing**: Understands conversational queries
- **Real-time Chat Interface**: Interactive messaging with typing indicators

### 📊 Dashboard Agent
- **Revenue Analytics**: Total revenue, outstanding payments, growth metrics
- **Client Insights**: Active/inactive counts, retention rates, new client tracking
- **Course Performance**: Enrollment trends, completion rates, instructor analytics
- **Business Metrics**: Attendance rates, capacity utilization, trend analysis
- **AI-Powered Insights**: Automated business recommendations and observations

### 🎨 Design Features
- **Modern UI**: Glassmorphism effects with gradient backgrounds
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Micro-interactions**: Smooth animations and hover effects
- **Professional Typography**: Clean, readable font hierarchy
- **Comprehensive Color System**: Consistent branding throughout

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-agent-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Overview.tsx          # Main dashboard overview
│   ├── SupportAgent.tsx      # Support agent chat interface
│   └── DashboardAgent.tsx    # Analytics and metrics dashboard
├── data/
│   └── mockData.ts          # Mock MongoDB collections
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles
```

## 🗄️ Data Schema

### MongoDB Collections (Simulated)

#### Clients Collection
```typescript
interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  joinDate: string;
  services: string[];
}
```

#### Orders Collection
```typescript
interface Order {
  id: string;
  clientName: string;
  serviceName: string;
  amount: number;
  status: 'paid' | 'pending';
  date: string;
}
```

#### Courses Collection
```typescript
interface Course {
  id: string;
  title: string;
  instructor: string;
  schedule: string;
  price: number;
  status: 'active' | 'inactive';
  capacity: number;
  enrolled: number;
}
```

#### Payments Collection
```typescript
interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: 'card' | 'cash' | 'transfer';
  date: string;
  status: 'completed' | 'pending' | 'failed';
}
```

## 🤖 Agent Capabilities

### Support Agent Queries

**Client Management**
```
"Show me client overview"
"Search for client Priya Sharma"
"How many active clients do we have?"
```

**Order Processing**
```
"What's the status of order #12345?"
"Show me all pending orders"
"Create order for Yoga Beginner for client John Doe"
```

**Service Discovery**
```
"What classes are available this week?"
"Show me all yoga classes"
"Who teaches Pilates Advanced?"
```

**Payment Information**
```
"Show payment summary"
"How much money is outstanding?"
"Which payments are overdue?"
```

### Dashboard Agent Analytics

**Revenue Metrics**
```
"How much revenue did we generate this month?"
"What's our total outstanding amount?"
"Show me revenue trends"
```

**Client Analytics**
```
"How many new clients joined this month?"
"What's our client retention rate?"
"Show me client distribution"
```

**Course Performance**
```
"Which course has the highest enrollment?"
"What's the completion rate for Pilates?"
"Show me course analytics"
```

**Business Insights**
```
"Generate business insights"
"What are our top performing services?"
"Show attendance analytics"
```

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Trust, reliability
- **Secondary**: Purple (#8B5CF6) - Innovation, creativity  
- **Accent**: Emerald (#10B981) - Success, growth
- **Warning**: Orange (#F59E0B) - Attention, caution
- **Error**: Red (#EF4444) - Alerts, errors
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold weights (600-800) with tight line spacing
- **Body**: Regular weight (400) with 150% line height
- **UI Elements**: Medium weight (500) for buttons and labels

### Spacing System
- Based on 8px grid system
- Consistent padding and margins throughout
- Responsive breakpoints for mobile, tablet, desktop

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Organization

- **Components**: Modular, reusable React components
- **Data**: Mock data simulating MongoDB collections
- **Types**: TypeScript interfaces for type safety
- **Styles**: Tailwind CSS with custom utilities

## 🚀 Production Deployment

### Build Optimization
```bash
npm run build
```

### Environment Variables
For production deployment, configure:
- MongoDB connection strings
- External API endpoints
- Authentication tokens
- Environment-specific settings

## 🔮 Future Enhancements

### Backend Integration
- **MongoDB**: Real database connection with aggregation pipelines
- **CrewAI**: Actual agent framework implementation
- **FastAPI**: RESTful API endpoints for agent communication
- **Authentication**: User management and role-based access

### Advanced Features
- **Multilingual Support**: International language processing
- **Memory System**: Context retention across conversations
- **RAG Implementation**: Retrieval-augmented generation for smart querying
- **Real-time Updates**: WebSocket connections for live data
- **Advanced Analytics**: Machine learning insights and predictions

### Integrations
- **Payment Gateways**: Stripe, PayPal integration
- **Calendar Systems**: Google Calendar, Outlook sync
- **Communication**: Email, SMS notifications
- **Reporting**: PDF generation, data export

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

