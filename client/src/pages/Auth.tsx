import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Swal from "sweetalert2";
import "../styles/login.css";

type UserRole = "admin" | "user";

type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  dob: string; // dd/mm/yyyy
  phone: string;
  role: UserRole;
};

const ADMIN_USER: User = {
  id: 0,
  email: "admin@gmail.com",
  username: "admin",
  password: "admin",
  dob: "2000-01-01",
  phone: "0123456789",
  role: "admin",
};

function getUsers(): User[] {
  const raw = localStorage.getItem("accountList");
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as User[];
    if (Array.isArray(parsed)) {
      return parsed.map((u, index) => ({
        id: typeof u.id === "number" ? u.id : index + 1,
        username: u.username ?? "",
        password: u.password ?? "",
        email: u.email ?? "",
        dob: u.dob ?? "",
        phone: u.phone ?? "",
        role: (u.role as UserRole) ?? "user",
      }));
    }
    return [];
  } catch {
    return [];
  }
}

function saveUsers(users: User[]): void {
  localStorage.setItem("accountList", JSON.stringify(users));
}

function ensureAdminUser(): void {
  const users = getUsers();
  const hasAdmin = users.some((u) => u.username === ADMIN_USER.username);
  if (!hasAdmin) {
    saveUsers([...users, ADMIN_USER]);
  }
}

function Auth() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  // state đăng nhập
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // state đăng ký
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
  });

  useEffect(() => {
    ensureAdminUser();
  }, []);

  function showError(message: string) {
    Swal.fire({
      icon: "error",
      title: "Thông báo",
      text: message,
      confirmButtonText: "OK",
    });
  }

  function showSuccess(message: string) {
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: message,
      confirmButtonText: "OK",
    });
  }

  function handleRegisterChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleRegisterSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const username = registerData.username.trim();
    const email = registerData.email.trim();
    const password = registerData.password.trim();
    const dob = registerData.dob.trim();
    const phone = registerData.phone.trim();

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!username || !password || !email || !dob || !phone) {
      showError("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (!dobRegex.test(dob)) {
      showError("Ngày sinh không hợp lệ (dd/mm/yyyy).");
      return;
    }

    const [day, month, year] = dob.split("/");
    const dobDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    if (dobDate > today) {
      showError("Ngày sinh không được lớn hơn ngày hiện tại.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      showError("Số điện thoại không hợp lệ (10 chữ số).");
      return;
    }

    if (!emailRegex.test(email)) {
      showError("Email không hợp lệ.");
      return;
    }

    const users = getUsers();

    if (users.some((user) => user.phone === phone)) {
      showError("Số điện thoại đã được sử dụng!");
      return;
    }

    if (users.some((user) => user.username === username)) {
      showError("Tên đăng nhập đã tồn tại!");
      return;
    }

    let newId = 1;
    if (users.length > 0) {
      newId = Math.max(...users.map((user) => user.id)) + 1;
    }

    const newUser: User = {
      id: newId,
      username,
      password,
      email,
      dob,
      phone,
      role: "user",
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    showSuccess("Đăng ký thành công!");
    setRegisterData({
      username: "",
      email: "",
      password: "",
      dob: "",
      phone: "",
    });
  }

  function handleLoginSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const username = loginUsername.trim();
    const password = loginPassword.trim();

    if (!username || !password) {
      showError("Tên đăng nhập hoặc mật khẩu không được để trống!");
      return;
    }

    const users = getUsers();

    // Check admin
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      showSuccess("Đăng nhập admin thành công!");
      setLoginUsername("");
      setLoginPassword("");

      setTimeout(() => {
        window.location.href = "/admin"; // chỉnh route admin cho đúng dự án nếu cần
      }, 800);

      return;
    }

    const user = users.find((u) => u.username === username);

    if (!user) {
      showError("Tài khoản chưa được đăng ký!");
      return;
    }

    if (user.password !== password) {
      showError("Mật khẩu không đúng!");
      return;
    }

    showSuccess("Đăng nhập thành công!");
    setLoginUsername("");
    setLoginPassword("");

    // Lưu user hiện tại
    localStorage.setItem("currentUser", JSON.stringify(user));

    setTimeout(() => {
      window.location.href = "/"; // chỉnh route sau login nếu cần
    }, 800);
  }

  const containerClassName = `container${isRegisterMode ? " active" : ""}`;

  return (
    <div className="auth-page">
      <div className={containerClassName}>
        {/* FORM LOGIN */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <i className="fa-solid fa-user" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock" />
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-google" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </form>
        </div>

        {/* FORM REGISTER */}
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                name="username"
                type="text"
                placeholder="Username"
                value={registerData.username}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-user" />
            </div>
            <div className="input-box">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="input-box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-lock" />
            </div>
            <div className="input-box">
              <input
                name="dob"
                type="text"
                placeholder="Date of Birth (DD/MM/YYYY)"
                value={registerData.dob}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-cake-candles" />
            </div>
            <div className="input-box">
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                value={registerData.phone}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-phone" />
            </div>
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>

        {/* TOGGLE BOX */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button
              type="button"
              className="btn register-btn"
              onClick={() => {
                setIsRegisterMode(true);
              }}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              type="button"
              className="btn login-btn"
              onClick={() => {
                setIsRegisterMode(false);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
