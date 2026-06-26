const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_USERS_KEY = "dgps_mock_users";

const getMockUsers = () => {
  const stored = localStorage.getItem(MOCK_USERS_KEY);
  return stored ? JSON.parse(stored) : [
    { id: 1, name: "Admin User", email: "admin@dhps.edu.bd", phone: "01700000000", role: "admin", verified: true },
    { id: 2, name: "Teacher User", email: "teacher@dhps.edu.bd", phone: "01711111111", role: "teacher", verified: true },
  ];
};

const saveMockUsers = (users) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

export const login = async (credentials) => {
  await delay(800);
  const users = getMockUsers();
  const user = users.find(
    (u) => u.email === credentials.email
  );

  if (!user) {
    throw new Error("No account found with this email address");
  }

  if (credentials.password.length < 4) {
    throw new Error("Invalid password. Try any password with 4+ characters.");
  }

  const token = "mock_token_" + Date.now();
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return { user, token };
};

export const register = async (userData) => {
  await delay(1000);
  const users = getMockUsers();

  if (users.find((u) => u.email === userData.email)) {
    throw new Error("An account with this email already exists");
  }

  const newUser = {
    id: users.length + 1,
    name: userData.name,
    email: userData.email,
    phone: userData.phone || "",
    role: "user",
    verified: false,
  };

  users.push(newUser);
  saveMockUsers(users);

  return { message: "Account created successfully", user: newUser };
};

export const forgotPassword = async (email) => {
  await delay(800);
  const users = getMockUsers();
  if (!users.find((u) => u.email === email)) {
    throw new Error("No account found with this email");
  }
  return { message: "Password reset link sent to your email" };
};

export const resetPassword = async (payload) => {
  await delay(800);
  return { message: "Password reset successful" };
};

export const verifyEmail = async (token) => {
  await delay(800);
  return { message: "Email verified successfully" };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = async () => {
  await delay(300);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  if (!user || !token) throw new Error("Not authenticated");
  return { user, token };
};

export const resendVerification = async (email) => {
  await delay(800);
  return { message: "Verification email resent" };
};
