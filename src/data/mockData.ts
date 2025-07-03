export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  joinDate: string;
  services: string[];
}

export interface Order {
  id: string;
  clientName: string;
  serviceName: string;
  amount: number;
  status: 'paid' | 'pending';
  date: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  schedule: string;
  price: number;
  status: 'active' | 'inactive';
  capacity: number;
  enrolled: number;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: 'card' | 'cash' | 'transfer';
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+1-555-0101',
    status: 'active',
    joinDate: '2024-01-15',
    services: ['Yoga Beginner', 'Meditation']
  },
  {
    id: '2',
    name: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1-555-0102',
    status: 'active',
    joinDate: '2024-02-20',
    services: ['Pilates Advanced', 'Strength Training']
  },
  {
    id: '3',
    name: 'Maria Garcia',
    email: 'maria.garcia@email.com',
    phone: '+1-555-0103',
    status: 'inactive',
    joinDate: '2023-11-10',
    services: ['Dance Fitness']
  },
  {
    id: '4',
    name: 'David Chen',
    email: 'david.chen@email.com',
    phone: '+1-555-0104',
    status: 'active',
    joinDate: '2024-03-05',
    services: ['CrossFit', 'Nutrition Counseling']
  },
  {
    id: '5',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@email.com',
    phone: '+1-555-0105',
    status: 'active',
    joinDate: '2024-01-30',
    services: ['Yoga Intermediate', 'Pilates Beginner']
  },
  {
    id: '6',
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    phone: '+1-555-0106',
    status: 'inactive',
    joinDate: '2023-12-15',
    services: ['Boxing']
  }
];

export const mockOrders: Order[] = [
  {
    id: '12345',
    clientName: 'Priya Sharma',
    serviceName: 'Yoga Beginner - Monthly Package',
    amount: 120,
    status: 'paid',
    date: '2024-12-01'
  },
  {
    id: '12346',
    clientName: 'John Anderson',
    serviceName: 'Pilates Advanced - Weekly Sessions',
    amount: 200,
    status: 'pending',
    date: '2024-12-15'
  },
  {
    id: '12347',
    clientName: 'David Chen',
    serviceName: 'CrossFit - Monthly Membership',
    amount: 150,
    status: 'paid',
    date: '2024-12-10'
  },
  {
    id: '12348',
    clientName: 'Sarah Wilson',
    serviceName: 'Yoga Intermediate - 10 Session Pack',
    amount: 180,
    status: 'paid',
    date: '2024-12-05'
  },
  {
    id: '12349',
    clientName: 'Maria Garcia',
    serviceName: 'Dance Fitness - Trial Class',
    amount: 25,
    status: 'pending',
    date: '2024-12-18'
  },
  {
    id: '12350',
    clientName: 'Michael Brown',
    serviceName: 'Boxing - Single Session',
    amount: 35,
    status: 'pending',
    date: '2024-12-20'
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Yoga Beginner',
    instructor: 'Elena Martinez',
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    price: 120,
    status: 'active',
    capacity: 20,
    enrolled: 15
  },
  {
    id: '2',
    title: 'Pilates Advanced',
    instructor: 'James Wilson',
    schedule: 'Tue, Thu - 6:00 PM',
    price: 200,
    status: 'active',
    capacity: 15,
    enrolled: 12
  },
  {
    id: '3',
    title: 'CrossFit',
    instructor: 'Mike Johnson',
    schedule: 'Daily - 7:00 AM',
    price: 150,
    status: 'active',
    capacity: 25,
    enrolled: 22
  },
  {
    id: '4',
    title: 'Dance Fitness',
    instructor: 'Sofia Rodriguez',
    schedule: 'Sat, Sun - 10:00 AM',
    price: 80,
    status: 'active',
    capacity: 30,
    enrolled: 18
  },
  {
    id: '5',
    title: 'Meditation & Mindfulness',
    instructor: 'Dr. Amanda Lee',
    schedule: 'Wed - 7:00 PM',
    price: 60,
    status: 'active',
    capacity: 12,
    enrolled: 8
  },
  {
    id: '6',
    title: 'Boxing Fundamentals',
    instructor: 'Tony Garcia',
    schedule: 'Mon, Wed - 8:00 PM',
    price: 140,
    status: 'active',
    capacity: 18,
    enrolled: 14
  }
];

export const mockPayments: Payment[] = [
  {
    id: 'pay_001',
    orderId: '12345',
    amount: 120,
    method: 'card',
    date: '2024-12-01',
    status: 'completed'
  },
  {
    id: 'pay_002',
    orderId: '12347',
    amount: 150,
    method: 'transfer',
    date: '2024-12-10',
    status: 'completed'
  },
  {
    id: 'pay_003',
    orderId: '12348',
    amount: 180,
    method: 'card',
    date: '2024-12-05',
    status: 'completed'
  }
];