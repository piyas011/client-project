export interface UserInfo {
  id: string;

  name: {
    first: string;
    last: string;
    full: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
  };

  address: {
    country: string;
    division: string;
    district: string;
    city: string;
    postalCode: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };

  company: {
    name: string;
    department: string;
    position: string;
    experienceYears: number;
    skills: string[];
  };

  socialMedia: {
    facebook: string;
    github: string;
    linkedin: string;
  };

  orders: {
    orderId: string;
    product: string;
    quantity: number;
    price: number;
    status: string;
  }[];

  account: {
    role: string;
    isVerified: boolean;
    isActive: boolean;
    createdAt: string;
    lastLogin: string;

    preferences: {
      language: string;
      theme: string;

      notifications: {
        email: boolean;
        sms: boolean;
        push: boolean;
      };
    };
  };

  stats: {
    totalOrders: number;
    totalSpent: number;
    loyaltyPoints: number;
  };
}
