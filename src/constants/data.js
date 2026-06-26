export const HERO_SLIDES = [
  {
    id: 1,
    type: "image",
    image: "https://picsum.photos/seed/dgps-hero1/1920/1080",
    tag: "Admissions Open 2026",
    title: "Building\nTomorrow's Leaders Today",
    description: "Quality primary education since 1965. We nurture young minds with care, knowledge, and values for a brighter future.",
    primaryBtn: { label: "Apply for Admission", path: "/admission" },
    secondaryBtn: { label: "Learn About Us", path: "/about" },
  },
  {
    id: 2,
    type: "video",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: "https://picsum.photos/seed/dgps-hero2/1920/1080",
    tag: "Campus Life",
    title: "Experience Our\nVibrant Campus",
    description: "Take a virtual tour of our school campus with modern facilities, green playgrounds, and smart classrooms.",
    primaryBtn: { label: "View Gallery", path: "/gallery" },
    secondaryBtn: { label: "Our Facilities", path: "/facilities" },
  },
  {
    id: 3,
    type: "image",
    image: "https://picsum.photos/seed/dgps-hero3/1920/1080",
    tag: "Excellence in Education",
    title: "100% Pass Rate\nin PEC Examination",
    description: "Our students consistently achieve outstanding results. Join the school that puts your child's future first.",
    primaryBtn: { label: "Our Results", path: "/achievements" },
    secondaryBtn: { label: "Meet Our Teachers", path: "/teachers" },
  },
  {
    id: 4,
    type: "video",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://picsum.photos/seed/dgps-hero4/1920/1080",
    tag: "Sports & Activities",
    title: "Nurturing Talent\nBeyond the Classroom",
    description: "Sports, cultural programs, science fairs — your child discovers their passion here.",
    primaryBtn: { label: "Events & Activities", path: "/events" },
    secondaryBtn: { label: "Contact Us", path: "/contact" },
  },
];

export const SCHOOL_INFO = {
  name: "Dhuapalong Govt. Primary School",
  shortName: "DGPS",
  tagline: "Building Tomorrow's Leaders Today",
  established: "1965",
  motto: "Education for All",
  address: {
    line1: "Dhuapalong, Khuniapalong",
    area: "Rabeta",
    upazila: "Ramu",
    district: "Cox's Bazar",
    division: "Chattogram",
    country: "Bangladesh",
    postal: "4300",
  },
  contact: {
    phone: "+880-1700-000000",
    email: "info@dhps.edu.bd",
    emergency: "+880-1700-111111",
  },
  officeHours: {
    weekdays: "8:00 AM - 4:00 PM",
    friday: "9:00 AM - 12:00 PM",
    closed: "Government Holidays",
  },
  social: {
    facebook: "#",
    youtube: "#",
  },
};

export const PRINCIPAL_INFO = {
  name: "Mr. Abdul Karim",
  designation: "Headmaster",
  qualification: "M.Ed, B.Ed",
  message: `It gives me immense pleasure to welcome you to Dhuapalong Government Primary School. Since our establishment in 1965, we have been committed to providing quality education to the children of our community.

Our school is dedicated to nurturing young minds through a balanced approach that combines academic excellence with character development. We believe every child has the potential to succeed, and our experienced team of educators works tirelessly to create an environment where students can thrive.

We focus not only on academic achievements but also on moral values, physical development, and creative thinking. Our goal is to prepare students to become responsible citizens who will contribute positively to society.

I invite you to join our school family and be a part of our journey toward educational excellence.`,
};

export const STATS = [
  { label: "Years of Excellence", value: 60, suffix: "+" },
  { label: "Students Enrolled", value: 450, suffix: "+" },
  { label: "Qualified Teachers", value: 18, suffix: "" },
  { label: "Pass Rate", value: 98, suffix: "%" },
];

export const FACILITIES = [
  {
    id: 1,
    title: "Library",
    description: "A well-stocked library with thousands of books, magazines, and digital resources to encourage reading habits among students.",
    icon: "BookOpen",
  },
  {
    id: 2,
    title: "Playground",
    description: "Spacious playground with equipment for cricket, football, basketball, and other outdoor activities.",
    icon: "Trees",
  },
  {
    id: 3,
    title: "Computer Corner",
    description: "Modern computer lab with internet access to introduce students to digital literacy from an early age.",
    icon: "Monitor",
  },
  {
    id: 4,
    title: "Digital Classroom",
    description: "Smart classrooms equipped with projectors and digital learning tools for interactive education.",
    icon: "Presentation",
  },
  {
    id: 5,
    title: "Safe Water",
    description: "Pure drinking water facilities ensuring the health and safety of every student.",
    icon: "Droplets",
  },
  {
    id: 6,
    title: "Medical Corner",
    description: "First-aid facilities and regular health check-ups for student welfare.",
    icon: "Heart",
  },
];

export const TEACHERS = [
  {
    id: 1,
    name: "Abdul Karim",
    designation: "Headmaster",
    qualification: "M.Ed, B.Ed",
    experience: "25 years",
    subjects: ["Bangla", "English"],
    phone: "+880-1700-000001",
  },
  {
    id: 2,
    name: "Fatema Begum",
    designation: "Assistant Teacher",
    qualification: "M.A (Bangla), B.Ed",
    experience: "18 years",
    subjects: ["Bangla", "Mathematics"],
    phone: "+880-1700-000002",
  },
  {
    id: 3,
    name: "Mohammad Rahman",
    designation: "Assistant Teacher",
    qualification: "B.Sc, B.Ed",
    experience: "15 years",
    subjects: ["Mathematics", "Science"],
    phone: "+880-1700-000003",
  },
  {
    id: 4,
    name: "Shahana Akter",
    designation: "Assistant Teacher",
    qualification: "M.A (English), B.Ed",
    experience: "12 years",
    subjects: ["English", "Social Science"],
    phone: "+880-1700-000004",
  },
  {
    id: 5,
    name: "Rafiqul Islam",
    designation: "Assistant Teacher",
    qualification: "M.Sc, B.Ed",
    experience: "10 years",
    subjects: ["Science", "Mathematics"],
    phone: "+880-1700-000005",
  },
  {
    id: 6,
    name: "Nasima Khatun",
    designation: "Assistant Teacher",
    qualification: "M.A (Social Science), B.Ed",
    experience: "8 years",
    subjects: ["Social Science", "Bangla"],
    phone: "+880-1700-000006",
  },
  {
    id: 7,
    name: "Kamal Hossain",
    designation: "Physical Instructor",
    qualification: "B.P.Ed",
    experience: "7 years",
    subjects: ["Physical Education"],
    phone: "+880-1700-000007",
  },
  {
    id: 8,
    name: "Ruma Begum",
    designation: "Assistant Teacher",
    qualification: "M.A (Religious Studies)",
    experience: "6 years",
    subjects: ["Religious Studies"],
    phone: "+880-1700-000008",
  },
];

export const NOTICES = [
  {
    id: 1,
    title: "Annual Examination Schedule 2026",
    category: "Examination",
    date: "2026-01-15",
    description: "The annual examination for classes I to V will commence from February 15, 2026. Students are advised to prepare accordingly. The detailed schedule is attached below.",
    hasPDF: true,
    isImportant: true,
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/exam-schedule/800/600", name: "Exam Schedule Poster" },
      { type: "pdf", url: "#", name: "Annual_Exam_2026.pdf" },
    ],
  },
  {
    id: 2,
    title: "School Holiday Notice - February",
    category: "Holiday",
    date: "2026-01-20",
    description: "School will remain closed from February 21 to February 28 on account of Language Martyrs' Day and International Mother Language Day.",
    hasPDF: false,
    isImportant: false,
    attachments: [],
  },
  {
    id: 3,
    title: "Admission Open for Session 2026",
    category: "Admission",
    date: "2026-01-05",
    description: "Admission for Play, Nursery, and Class One is now open for the academic session 2026. Please visit the school office with required documents.",
    hasPDF: true,
    isImportant: true,
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/admission2026/800/600", name: "Admission Circular" },
      { type: "image", url: "https://picsum.photos/seed/admission-docs/800/600", name: "Required Documents List" },
      { type: "pdf", url: "#", name: "Admission_Form_2026.pdf" },
    ],
  },
  {
    id: 4,
    title: "Science Fair 2026",
    category: "Event",
    date: "2026-02-10",
    description: "Annual science fair will be held on March 10, 2026. Students from Class III to V can participate.",
    hasPDF: false,
    isImportant: false,
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/science-fair/800/600", name: "Science Fair Poster" },
    ],
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting",
    category: "Meeting",
    date: "2026-02-05",
    description: "Parent-Teacher meeting is scheduled for February 15, 2026. Parents are requested to attend between 10:00 AM and 2:00 PM.",
    hasPDF: false,
    isImportant: true,
    attachments: [],
  },
  {
    id: 6,
    title: "Republic Day Celebration",
    category: "Event",
    date: "2026-03-01",
    description: "The school will celebrate Republic Day on March 26, 2026 with cultural programs and a special assembly.",
    hasPDF: false,
    isImportant: false,
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/republic-day/800/600", name: "Republic Day Program" },
    ],
  },
];

export const NEWS = [
  {
    id: 1,
    title: "Dhuapalong Primary School Achieves 100% Pass Rate",
    date: "2025-12-20",
    excerpt: "Students of Dhuapalong Government Primary School have achieved a remarkable 100% pass rate in the Primary Education Completion Examination this year.",
    body: "We are proud to announce that all students of Dhuapalong Government Primary School have successfully passed the Primary Education Completion Examination (PEC) 2025 with flying colors.\n\nThis remarkable achievement is the result of dedicated teaching, consistent student effort, and strong support from parents and the community. The school has maintained a 100% pass rate for the third consecutive year.\n\nThe Headmaster praised the teachers and students for their hard work, stating that this success reflects the school's commitment to quality education. Several students achieved GPA 5.0, placing them among the top performers in the district.\n\nThe school management committee has announced a special celebration program to honor the successful students and their teachers.",
    category: "Achievement",
    image: "https://picsum.photos/seed/news-pec/800/400",
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/pec-result/800/600", name: "Result Celebration Photo" },
      { type: "image", url: "https://picsum.photos/seed/pec-students/800/600", name: "Top Scorers with Headmaster" },
    ],
  },
  {
    id: 2,
    title: "New Digital Classroom Inaugurated",
    date: "2025-11-15",
    excerpt: "A new digital classroom has been inaugurated at our school with modern projectors and interactive learning tools to enhance the quality of education.",
    body: "A state-of-the-art digital classroom was inaugurated at Dhuapalong Government Primary School on November 15, 2025. The classroom is equipped with a 75-inch interactive display, high-speed internet connectivity, and modern audio-visual equipment.\n\nThe inauguration ceremony was attended by the Upazila Education Officer, school management committee members, teachers, and students. The new digital classroom will benefit over 200 students across all classes.\n\nThis initiative is part of the government's Digital Bangladesh vision to modernize education in public schools. Students will now have access to multimedia content, online educational resources, and interactive learning materials.",
    category: "Infrastructure",
    image: "https://picsum.photos/seed/news-digital/800/400",
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/digital-classroom/800/600", name: "Digital Classroom Interior" },
      { type: "pdf", url: "#", name: "Digital_Classroom_Brochure.pdf" },
    ],
  },
  {
    id: 3,
    title: "Annual Sports Day Celebration",
    date: "2025-10-28",
    excerpt: "The annual sports day was celebrated with great enthusiasm. Students participated in various athletic events including sprint, relay, and long jump.",
    body: "The annual sports day of Dhuapalong Government Primary School was celebrated on October 28, 2025 with great enthusiasm and energy. The event was inaugurated by the Upazila Nirbahi Officer (UNO).\n\nStudents from all classes participated in various athletic events including 100m sprint, 200m race, relay race, long jump, high jump, shot put, and sack race. The events were organized in different categories for boys and girls.\n\nThe closing ceremony featured prize distribution to winners and a special cultural performance by students. The school premises were decorated with colorful banners and flags for the occasion.",
    category: "Event",
    image: "https://picsum.photos/seed/news-sports/800/400",
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/sports-day/800/600", name: "Sports Day Opening Ceremony" },
      { type: "image", url: "https://picsum.photos/seed/sports-race/800/600", name: "Sprint Race in Progress" },
      { type: "image", url: "https://picsum.photos/seed/sports-prize/800/600", name: "Prize Distribution" },
    ],
  },
  {
    id: 4,
    title: "Science Fair Winners at District Level",
    date: "2025-09-12",
    excerpt: "Three students from our school secured top positions in the district-level science fair with innovative projects on renewable energy and water purification.",
    body: "Three brilliant students from Dhuapalong Government Primary School secured top positions in the district-level science fair held on September 12, 2025.\n\nRahima Akter (Class V) won 1st prize for her project on solar-powered water purification system. Md. Rahat Hossain (Class IV) secured 2nd position for his wind energy model, and Fatema Begum (Class III) received a special mention for her organic fertilizer project.\n\nThe science fair was organized by the District Education Office and featured over 200 projects from 50 schools across the district. Our school's success highlights the importance we place on scientific thinking and practical learning.",
    category: "Achievement",
    image: "https://picsum.photos/seed/news-science/800/400",
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/science-fair-winners/800/600", name: "Winners with Their Projects" },
      { type: "image", url: "https://picsum.photos/seed/science-fair-event/800/600", name: "Science Fair Event" },
    ],
  },
  {
    id: 5,
    title: "Tree Plantation Drive",
    date: "2025-08-15",
    excerpt: "Students and teachers participated in a tree plantation drive as part of the national Green Bangladesh initiative, planting over 100 saplings on campus.",
    body: "In observance of the national Green Bangladesh initiative, students and teachers of Dhuapalong Government Primary School organized a massive tree plantation drive on August 15, 2025.\n\nOver 100 saplings of various species including mango, guava, coconut, and neem were planted across the school campus. The event was inaugurated by the Headmaster and supervised by the science teachers.\n\nEach class was assigned a specific area to plant and maintain their saplings. The school has also initiated a 'Green Guardian' program where students will monitor and care for the planted trees throughout the year.",
    category: "Social",
    image: "https://picsum.photos/seed/news-tree/800/400",
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/tree-plantation/800/600", name: "Students Planting Trees" },
    ],
  },
  {
    id: 6,
    title: "New Computer Lab Setup",
    date: "2025-07-20",
    excerpt: "A state-of-the-art computer lab with 15 modern computers and internet connectivity has been set up to promote digital literacy among students.",
    body: "Dhuapalong Government Primary School has inaugurated a new computer lab equipped with 15 modern desktop computers, high-speed internet connectivity, and educational software.\n\nThe computer lab was set up under the government's ICT in Education initiative. Students from Class III to V will receive regular computer literacy classes as part of their curriculum.\n\nThe lab features child-friendly workstations, interactive learning software, and educational games designed to make computer learning engaging and fun for young students. A dedicated computer teacher has been appointed to guide students.",
    category: "Infrastructure",
    image: "https://picsum.photos/seed/news-computer/800/400",
    attachments: [
      { type: "image", url: "https://picsum.photos/seed/computer-lab/800/600", name: "New Computer Lab" },
      { type: "pdf", url: "#", name: "Computer_Lab_Guidelines.pdf" },
    ],
  },
];

export const EVENTS = [
  {
    id: 1,
    title: "Annual Examination",
    date: "2026-02-15",
    endDate: "2026-02-28",
    description: "Annual examination for classes I to V.",
    type: "upcoming",
  },
  {
    id: 2,
    title: "Science Fair",
    date: "2026-03-10",
    description: "Annual science fair for students of classes III to V.",
    type: "upcoming",
  },
  {
    id: 3,
    title: "Republic Day Celebration",
    date: "2026-03-26",
    description: "Celebration of Bangladesh Independence Day with cultural programs.",
    type: "upcoming",
  },
  {
    id: 4,
    title: "Sports Day",
    date: "2026-04-15",
    description: "Annual sports day featuring various athletic competitions.",
    type: "upcoming",
  },
  {
    id: 5,
    title: "Annual Cultural Program",
    date: "2025-12-16",
    description: "Annual cultural program featuring performances by students.",
    type: "past",
  },
  {
    id: 6,
    title: "Parent-Teacher Meeting",
    date: "2025-11-20",
    description: "Quarterly parent-teacher meeting to discuss student progress.",
    type: "past",
  },
  {
    id: 7,
    title: "Children's Day Celebration",
    date: "2025-09-17",
    description: "Celebration of National Children's Day with special programs.",
    type: "past",
  },
];

export const GALLERY_ALBUMS = [
  { id: 1, title: "Campus Life", count: 24 },
  { id: 2, title: "Sports Day 2025", count: 18 },
  { id: 3, title: "Cultural Program", count: 15 },
  { id: 4, title: "Science Fair", count: 12 },
  { id: 5, title: "Classroom Activities", count: 20 },
  { id: 6, title: "Annual Function", count: 30 },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "District Science Fair - 1st Prize",
    year: "2025",
    category: "students",
    description: "Students won first prize at the district science fair for their innovative water purification project.",
  },
  {
    id: 2,
    title: "100% Pass Rate in PEC",
    year: "2025",
    category: "school",
    description: "Achieved 100% pass rate in the Primary Education Completion Examination.",
  },
  {
    id: 3,
    title: "Best School Award - Cox's Bazar",
    year: "2024",
    category: "school",
    description: "Received the Best Government Primary School award from the District Education Office.",
  },
  {
    id: 4,
    title: "National Math Olympiad - District Round",
    year: "2025",
    category: "students",
    description: "Two students qualified for the national round of the Mathematics Olympiad.",
  },
  {
    id: 5,
    title: "Teacher Excellence Award",
    year: "2024",
    category: "teachers",
    description: "Headmaster Abdul Karim received the Teacher Excellence Award for outstanding contribution to primary education.",
  },
  {
    id: 6,
    title: "Sports Championship - Upazila Level",
    year: "2025",
    category: "students",
    description: "Won the overall championship at the upazila-level primary school sports competition.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Parent",
    text: "My children have been studying at Dhuapalong Primary for 3 years. The teachers are very caring and the quality of education is excellent. I am very satisfied with the school.",
  },
  {
    id: 2,
    name: "Sabina Akter",
    role: "Parent",
    text: "This school has transformed my daughter's life. She has become more confident and performs well in her studies. The school environment is safe and nurturing.",
  },
  {
    id: 3,
    name: "Kamal Ahmed",
    role: "Former Student",
    text: "I studied at this school from Class I to V. The foundation I received here helped me excel in my higher education. I am grateful to my teachers.",
  },
];

export const FAQS = [
  {
    id: 1,
    question: "What are the school hours?",
    answer: "School operates from 8:00 AM to 4:00 PM, Sunday through Thursday. On Friday, it is from 9:00 AM to 12:00 PM.",
  },
  {
    id: 2,
    question: "What is the admission process?",
    answer: "Visit the school office with the student, birth certificate, and parents' national ID card. Fill out the admission form and complete the registration process.",
  },
  {
    id: 3,
    question: "What classes does the school offer?",
    answer: "The school offers education from Play level through Class Five, covering the complete primary education cycle as per the national curriculum.",
  },
  {
    id: 4,
    question: "Is the school co-educational?",
    answer: "Yes, Dhuapalong Government Primary School is co-educational and welcomes both boys and girls.",
  },
  {
    id: 5,
    question: "What is the medium of instruction?",
    answer: "The medium of instruction is Bangla, following the national curriculum set by the National Curriculum and Textbook Board (NCTB).",
  },
  {
    id: 6,
    question: "Does the school provide textbooks?",
    answer: "Yes, all textbooks are provided free of cost to students as per the government's free textbook distribution program.",
  },
  {
    id: 7,
    question: "Is there a school uniform?",
    answer: "Yes, students are required to wear the prescribed school uniform. Details can be obtained from the school office.",
  },
  {
    id: 8,
    question: "How can I contact the school?",
    answer: "You can reach us by phone at +880-1700-000000, email at info@dhps.edu.bd, or visit our office during working hours.",
  },
];

export const DOWNLOADS = [
  { id: 1, title: "Class Routine 2026", category: "Routine", format: "PDF", size: "245 KB" },
  { id: 2, title: "Admission Form", category: "Admission", format: "PDF", size: "180 KB" },
  { id: 3, title: "Holiday List 2026", category: "Holiday", format: "PDF", size: "120 KB" },
  { id: 4, title: "Book List - Class I", category: "Books", format: "PDF", size: "95 KB" },
  { id: 5, title: "Book List - Class II", category: "Books", format: "PDF", size: "95 KB" },
  { id: 6, title: "Book List - Class III", category: "Books", format: "PDF", size: "110 KB" },
  { id: 7, title: "Book List - Class IV", category: "Books", format: "PDF", size: "110 KB" },
  { id: 8, title: "Book List - Class V", category: "Books", format: "PDF", size: "125 KB" },
  { id: 9, title: "Annual Exam Notice", category: "Notice", format: "PDF", size: "150 KB" },
  { id: 10, title: "School Circular - January 2026", category: "Circular", format: "PDF", size: "200 KB" },
];

export const CLASS_SCHEDULE = [
  { period: "1st Period", time: "8:00 - 8:40 AM" },
  { period: "2nd Period", time: "8:40 - 9:20 AM" },
  { period: "3rd Period", time: "9:20 - 10:00 AM" },
  { period: "Break", time: "10:00 - 10:15 AM" },
  { period: "4th Period", time: "10:15 - 10:55 AM" },
  { period: "5th Period", time: "10:55 - 11:35 AM" },
  { period: "6th Period", time: "11:35 AM - 12:15 PM" },
  { period: "Break", time: "12:15 - 12:45 PM" },
  { period: "7th Period", time: "12:45 - 1:25 PM" },
  { period: "8th Period", time: "1:25 - 2:00 PM" },
];

export const SUBJECTS_BY_CLASS = {
  play: ["Bangla", "English", "Mathematics", "General Knowledge", "Drawing", "Physical Education"],
  nursery: ["Bangla", "English", "Mathematics", "General Knowledge", "Drawing", "Physical Education"],
  "class-one": ["Bangla", "English", "Mathematics", "General Knowledge", "Islamic Studies", "Physical Education"],
  "class-two": ["Bangla", "English", "Mathematics", "General Knowledge", "Islamic Studies", "Physical Education"],
  "class-three": ["Bangla", "English", "Mathematics", "Science", "Social Science", "Islamic Studies", "Physical Education"],
  "class-four": ["Bangla", "English", "Mathematics", "Science", "Social Science", "Islamic Studies", "Physical Education"],
  "class-five": ["Bangla", "English", "Mathematics", "Science", "Social Science", "Islamic Studies", "Physical Education", "Information Technology"],
};
