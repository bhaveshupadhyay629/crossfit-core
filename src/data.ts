export interface ClassItem {
  id: string;
  time: string;
  title: string;
  coach: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
}

export interface DaySchedule {
  day: string;
  classes: ClassItem[];
}

export const scheduleData: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      { id: 'm1', time: '06:00 AM', title: 'Core Foundations (Beginner)', coach: 'Marcus Vance', intensity: 'Beginner', spotsLeft: 4 },
      { id: 'm2', time: '08:00 AM', title: 'MetCon Conditioning', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 2 },
      { id: 'm3', time: '05:30 PM', title: 'Barbell Club', coach: 'Jaxson Reed', intensity: 'Advanced', spotsLeft: 1 },
      { id: 'm4', time: '07:00 PM', title: 'WOD (Workout of the Day)', coach: 'Marcus Vance', intensity: 'Intermediate', spotsLeft: 5 }
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { id: 't1', time: '06:00 AM', title: 'Engine & Endurance', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 3 },
      { id: 't2', time: '12:15 PM', title: 'Express Core 45', coach: 'Jaxson Reed', intensity: 'Beginner', spotsLeft: 6 },
      { id: 't3', time: '05:30 PM', title: 'Gymnastics & Handstands', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 2 },
      { id: 't4', time: '06:45 PM', title: 'WOD (Workout of the Day)', coach: 'Marcus Vance', intensity: 'Intermediate', spotsLeft: 4 }
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { id: 'w1', time: '06:00 AM', title: 'Core Foundations (Beginner)', coach: 'Marcus Vance', intensity: 'Beginner', spotsLeft: 5 },
      { id: 'w2', time: '09:00 AM', title: 'Strength & Power', coach: 'Jaxson Reed', intensity: 'Advanced', spotsLeft: 2 },
      { id: 'w3', time: '05:30 PM', title: 'MetCon Conditioning', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 3 },
      { id: 'w4', time: '07:00 PM', title: 'Team WOD', coach: 'Marcus Vance', intensity: 'Intermediate', spotsLeft: 8 }
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { id: 'th1', time: '06:00 AM', title: 'Row & Ski Erg Engine', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 4 },
      { id: 'th2', time: '12:15 PM', title: 'Express Core 45', coach: 'Jaxson Reed', intensity: 'Beginner', spotsLeft: 5 },
      { id: 'th3', time: '05:30 PM', title: 'Olympic Weightlifting', coach: 'Jaxson Reed', intensity: 'Advanced', spotsLeft: 1 },
      { id: 'th4', time: '06:45 PM', title: 'WOD (Workout of the Day)', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 3 }
    ]
  },
  {
    day: 'Friday',
    classes: [
      { id: 'f1', time: '06:00 AM', title: 'Core Foundations (Beginner)', coach: 'Marcus Vance', intensity: 'Beginner', spotsLeft: 6 },
      { id: 'f2', time: '08:00 AM', title: 'Friday Night Fight WOD', coach: 'Marcus Vance', intensity: 'Advanced', spotsLeft: 2 },
      { id: 'f3', time: '04:30 PM', title: 'Endurance & Stamina', coach: 'Elena Rostova', intensity: 'Intermediate', spotsLeft: 4 },
      { id: 'f4', time: '06:00 PM', title: 'Flexibility & Mobility', coach: 'Elena Rostova', intensity: 'Beginner', spotsLeft: 7 }
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { id: 's1', time: '08:30 AM', title: 'Partner WOD (All Levels)', coach: 'Marcus Vance & Elena', intensity: 'Intermediate', spotsLeft: 10 },
      { id: 's2', time: '10:00 AM', title: 'Intro to CrossFit Workshop', coach: 'Jaxson Reed', intensity: 'Beginner', spotsLeft: 4 }
    ]
  },
  {
    day: 'Sunday',
    classes: [
      { id: 'su1', time: '09:00 AM', title: 'Open Gym / Make-up WOD', coach: 'Staff', intensity: 'Intermediate', spotsLeft: 12 },
      { id: 'su2', time: '10:30 AM', title: 'Mobility & Recovery Flow', coach: 'Elena Rostova', intensity: 'Beginner', spotsLeft: 8 }
    ]
  }
];

export const trainers = [
  {
    name: 'Marcus Vance',
    role: 'Head Coach & Founder',
    bio: 'CF-L3 Trainer with 10+ years experience coaching everyday athletes and competitive regionals competitors.',
    specialty: 'Foundations & Olympic Lifting',
    experience: '11 Years Coaching'
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Coach & Endurance Lead',
    bio: 'Former collegiate gymnast turned CrossFit fanatic. Elena specializes in bodyweight mastery, pacing, and injury prevention.',
    specialty: 'Gymnastics & MetCon',
    experience: '7 Years Coaching'
  },
  {
    name: 'Jaxson Reed',
    role: 'Strength & Conditioning Coach',
    bio: 'Passionate about demystifying barbells for absolute beginners. Jaxson ensures every workout is scalable and safe.',
    specialty: 'Barbell Mechanics & Scaling',
    experience: '6 Years Coaching'
  }
];

export const pricingPlans = [
  {
    name: 'Jumpstart Beginner',
    price: '$99',
    period: 'for first month',
    description: 'Perfect for those completely new to functional fitness. Includes 3 foundations 1-on-1 sessions + unlimited beginner classes.',
    features: [
      '3 Private Foundations Sessions',
      'Unlimited Beginner WOD access',
      'Free mobility assessment',
      'Access to nutrition guide'
    ],
    popular: false,
    badge: 'Best for Beginners'
  },
  {
    name: 'Unlimited Core',
    price: '$175',
    period: 'per month',
    description: 'Our most popular membership for everyday fitness enthusiasts looking for consistency and community.',
    features: [
      'Unlimited access to all daily WODs',
      'Advanced Barbell & Gymnastics clinics',
      'Open Gym access during all hours',
      'CrossFit Core tracking app login',
      'Monthly body composition scan'
    ],
    popular: true,
    badge: 'Most Popular'
  },
  {
    name: '10-Class Punch Pass',
    price: '$180',
    period: 'no expiration',
    description: 'Ideal for shift workers or frequent travelers who need ultimate flexibility.',
    features: [
      'Valid for any regular WOD class',
      'No expiration date',
      'Easy app booking',
      'Locker room & shower access'
    ],
    popular: false,
    badge: 'Flexible'
  }
];

export const faqs = [
  {
    question: 'I am completely out of shape and have never worked out. Can I join CrossFit Core?',
    answer: '100% yes! Every single workout at CrossFit Core is infinitely scalable. If you cannot do a pull-up or lift a heavy barbell today, our coaches will give you an exact modification that matches your current ability.'
  },
  {
    question: 'What happens during my first class?',
    answer: 'Your first step is our Free Intro or booking a Core Foundations class. We will introduce you to your coach, tour the facility, walk through basic movements at a relaxed pace, and ease you into a short, fun group workout.'
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No long-term lock-in required for our standard monthly memberships. We believe you should stay because you love the community and results, not because a piece of paper forces you to.'
  },
  {
    question: 'What should I wear and bring?',
    answer: 'Wear comfortable workout clothes (t-shirt, shorts or leggings) and supportive athletic shoes. Bring a water bottle and a sweat towel—we provide all the barbells, kettlebells, and high fives.'
  }
];
