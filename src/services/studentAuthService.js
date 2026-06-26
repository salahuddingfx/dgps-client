const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_STUDENTS_KEY = "dgps_mock_students";

const getDefaultStudents = () => [
  {
    id: 1,
    studentId: "DGPS-2026-001",
    name: "Rahima Akter",
    class: "Class V",
    section: "A",
    roll: 5,
    fatherName: "Abdul Hamid",
    phone: "01700000001",
    password: "student123",
  },
  {
    id: 2,
    studentId: "DGPS-2026-002",
    name: "Md. Rahat Hossain",
    class: "Class IV",
    section: "B",
    roll: 12,
    fatherName: "Mohammad Rahman",
    phone: "01711111112",
    password: "student123",
  },
  {
    id: 3,
    studentId: "DGPS-2026-003",
    name: "Fatema Begum",
    class: "Class III",
    section: "A",
    roll: 8,
    fatherName: "Kamal Hossain",
    phone: "01722222213",
    password: "student123",
  },
];

const getMockStudents = () => {
  const stored = localStorage.getItem(MOCK_STUDENTS_KEY);
  return stored ? JSON.parse(stored) : getDefaultStudents();
};

export const login = async (credentials) => {
  await delay(800);
  const students = getMockStudents();
  const student = students.find(
    (s) => s.studentId === credentials.studentId
  );

  if (!student) {
    throw new Error("No student found with this Student ID");
  }

  if (credentials.password !== student.password) {
    throw new Error("Invalid password. Try 'student123'.");
  }

  const token = "student_mock_token_" + Date.now();
  const { password: _, ...studentData } = student;
  localStorage.setItem("studentToken", token);
  localStorage.setItem("student", JSON.stringify(studentData));

  return { student: studentData, token };
};

export const logout = () => {
  localStorage.removeItem("studentToken");
  localStorage.removeItem("student");
};

export const getCurrentStudent = async () => {
  await delay(300);
  const student = JSON.parse(localStorage.getItem("student"));
  const token = localStorage.getItem("studentToken");
  if (!student || !token) throw new Error("Not authenticated");
  return { student, token };
};

export const getStudentResults = async () => {
  await delay(600);
  return [
    {
      id: 1,
      term: "1st Term",
      className: "Class III",
      year: "2024",
      subjects: [
        { name: "Bangla", marks: 85, grade: "A+", gpa: 5.0 },
        { name: "English", marks: 78, grade: "A", gpa: 4.5 },
        { name: "Mathematics", marks: 92, grade: "A+", gpa: 5.0 },
        { name: "Science", marks: 88, grade: "A+", gpa: 5.0 },
        { name: "Social Science", marks: 80, grade: "A", gpa: 4.5 },
        { name: "Religious Studies", marks: 90, grade: "A+", gpa: 5.0 },
      ],
      totalMarks: 513,
      gpa: 4.83,
    },
    {
      id: 2,
      term: "2nd Term",
      className: "Class III",
      year: "2024",
      subjects: [
        { name: "Bangla", marks: 88, grade: "A+", gpa: 5.0 },
        { name: "English", marks: 82, grade: "A", gpa: 4.5 },
        { name: "Mathematics", marks: 95, grade: "A+", gpa: 5.0 },
        { name: "Science", marks: 90, grade: "A+", gpa: 5.0 },
        { name: "Social Science", marks: 84, grade: "A", gpa: 4.5 },
        { name: "Religious Studies", marks: 92, grade: "A+", gpa: 5.0 },
      ],
      totalMarks: 531,
      gpa: 4.83,
    },
    {
      id: 3,
      term: "Final",
      className: "Class III",
      year: "2024",
      subjects: [
        { name: "Bangla", marks: 90, grade: "A+", gpa: 5.0 },
        { name: "English", marks: 85, grade: "A+", gpa: 5.0 },
        { name: "Mathematics", marks: 97, grade: "A+", gpa: 5.0 },
        { name: "Science", marks: 92, grade: "A+", gpa: 5.0 },
        { name: "Social Science", marks: 86, grade: "A", gpa: 4.5 },
        { name: "Religious Studies", marks: 94, grade: "A+", gpa: 5.0 },
      ],
      totalMarks: 544,
      gpa: 4.92,
    },
    {
      id: 4,
      term: "1st Term",
      className: "Class IV",
      year: "2025",
      subjects: [
        { name: "Bangla", marks: 87, grade: "A+", gpa: 5.0 },
        { name: "English", marks: 80, grade: "A", gpa: 4.5 },
        { name: "Mathematics", marks: 93, grade: "A+", gpa: 5.0 },
        { name: "Science", marks: 89, grade: "A+", gpa: 5.0 },
        { name: "Social Science", marks: 82, grade: "A", gpa: 4.5 },
        { name: "Religious Studies", marks: 91, grade: "A+", gpa: 5.0 },
      ],
      totalMarks: 522,
      gpa: 4.83,
    },
    {
      id: 5,
      term: "2nd Term",
      className: "Class IV",
      year: "2025",
      subjects: [
        { name: "Bangla", marks: 91, grade: "A+", gpa: 5.0 },
        { name: "English", marks: 84, grade: "A", gpa: 4.5 },
        { name: "Mathematics", marks: 96, grade: "A+", gpa: 5.0 },
        { name: "Science", marks: 93, grade: "A+", gpa: 5.0 },
        { name: "Social Science", marks: 85, grade: "A+", gpa: 5.0 },
        { name: "Religious Studies", marks: 93, grade: "A+", gpa: 5.0 },
      ],
      totalMarks: 542,
      gpa: 4.92,
    },
  ];
};

export const getStudentAttendance = async () => {
  await delay(600);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const attendance = {};

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    if (date > today) break;
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 5) continue;

    const rand = Math.random();
    if (rand < 0.82) {
      attendance[day] = "present";
    } else if (rand < 0.92) {
      attendance[day] = "absent";
    } else {
      attendance[day] = "late";
    }
  }

  return {
    month: today.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    attendance,
    summary: {
      totalPresent: Object.values(attendance).filter((s) => s === "present").length,
      totalAbsent: Object.values(attendance).filter((s) => s === "absent").length,
      totalLate: Object.values(attendance).filter((s) => s === "late").length,
    },
  };
};

export const getStudentRoutine = async () => {
  await delay(500);
  return {
    className: "Class IV",
    section: "A",
    routine: {
      Saturday: [
        { time: "8:00 - 8:40", subject: "Bangla", teacher: "Fatema Begum" },
        { time: "8:40 - 9:20", subject: "English", teacher: "Shahana Akter" },
        { time: "9:20 - 9:40", subject: "Break", teacher: "" },
        { time: "9:40 - 10:20", subject: "Mathematics", teacher: "Mohammad Rahman" },
        { time: "10:20 - 11:00", subject: "Science", teacher: "Rafiqul Islam" },
        { time: "11:00 - 11:40", subject: "Social Science", teacher: "Nasima Khatun" },
        { time: "11:40 - 12:20", subject: "Religious Studies", teacher: "Ruma Begum" },
      ],
      Sunday: [
        { time: "8:00 - 8:40", subject: "English", teacher: "Shahana Akter" },
        { time: "8:40 - 9:20", subject: "Mathematics", teacher: "Mohammad Rahman" },
        { time: "9:20 - 9:40", subject: "Break", teacher: "" },
        { time: "9:40 - 10:20", subject: "Bangla", teacher: "Fatema Begum" },
        { time: "10:20 - 11:00", subject: "Physical Education", teacher: "Kamal Hossain" },
        { time: "11:00 - 11:40", subject: "Science", teacher: "Rafiqul Islam" },
        { time: "11:40 - 12:20", subject: "Computer", teacher: "Shahana Akter" },
      ],
      Monday: [
        { time: "8:00 - 8:40", subject: "Mathematics", teacher: "Mohammad Rahman" },
        { time: "8:40 - 9:20", subject: "Bangla", teacher: "Fatema Begum" },
        { time: "9:20 - 9:40", subject: "Break", teacher: "" },
        { time: "9:40 - 10:20", subject: "English", teacher: "Shahana Akter" },
        { time: "10:20 - 11:00", subject: "Social Science", teacher: "Nasima Khatun" },
        { time: "11:00 - 11:40", subject: "Religious Studies", teacher: "Ruma Begum" },
        { time: "11:40 - 12:20", subject: "Science", teacher: "Rafiqul Islam" },
      ],
      Tuesday: [
        { time: "8:00 - 8:40", subject: "Science", teacher: "Rafiqul Islam" },
        { time: "8:40 - 9:20", subject: "English", teacher: "Shahana Akter" },
        { time: "9:20 - 9:40", subject: "Break", teacher: "" },
        { time: "9:40 - 10:20", subject: "Bangla", teacher: "Fatema Begum" },
        { time: "10:20 - 11:00", subject: "Mathematics", teacher: "Mohammad Rahman" },
        { time: "11:00 - 11:40", subject: "Physical Education", teacher: "Kamal Hossain" },
        { time: "11:40 - 12:20", subject: "Social Science", teacher: "Nasima Khatun" },
      ],
      Wednesday: [
        { time: "8:00 - 8:40", subject: "Bangla", teacher: "Fatema Begum" },
        { time: "8:40 - 9:20", subject: "Science", teacher: "Rafiqul Islam" },
        { time: "9:20 - 9:40", subject: "Break", teacher: "" },
        { time: "9:40 - 10:20", subject: "Mathematics", teacher: "Mohammad Rahman" },
        { time: "10:20 - 11:00", subject: "English", teacher: "Shahana Akter" },
        { time: "11:00 - 11:40", subject: "Religious Studies", teacher: "Ruma Begum" },
        { time: "11:40 - 12:20", subject: "Computer", teacher: "Shahana Akter" },
      ],
    },
  };
};
