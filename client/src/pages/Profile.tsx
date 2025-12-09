import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/profile.css";

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

function Profile() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [infoForm, setInfoForm] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const raw = localStorage.getItem("currentUser");
    if (!raw) {
      Swal.fire({
        icon: "warning",
        title: "Chưa đăng nhập",
        text: "Vui lòng đăng nhập trước khi xem hồ sơ.",
        confirmButtonText: "Đi tới trang đăng nhập",
      }).then(() => {
        window.location.href = "/login";
      });
      return;
    }

    try {
      const user = JSON.parse(raw) as User;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentUser(user);
      setInfoForm({
        username: user.username,
        email: user.email,
        dob: user.dob,
        phone: user.phone,
      });
    } catch {
      localStorage.removeItem("currentUser");
      Swal.fire({
        icon: "error",
        title: "Lỗi dữ liệu",
        text: "Không đọc được thông tin người dùng. Vui lòng đăng nhập lại.",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  }, []);

  function handleInfoChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInfoForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleInfoSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currentUser) return;

    const username = infoForm.username.trim();
    const email = infoForm.email.trim();
    const dob = infoForm.dob.trim();
    const phone = infoForm.phone.trim();

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!username || !email || !dob || !phone) {
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

    // không cho trùng username / phone với user khác
    if (users.some((u) => u.id !== currentUser.id && u.username === username)) {
      showError("Tên đăng nhập đã tồn tại!");
      return;
    }

    if (users.some((u) => u.id !== currentUser.id && u.phone === phone)) {
      showError("Số điện thoại đã được sử dụng!");
      return;
    }

    const updatedUser: User = {
      ...currentUser,
      username,
      email,
      dob,
      phone,
    };

    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    saveUsers(updatedUsers);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);

    showSuccess("Cập nhật thông tin thành công!");
  }

  function handlePasswordSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currentUser) return;

    const oldPassword = passwordForm.oldPassword.trim();
    const newPassword = passwordForm.newPassword.trim();
    const confirmPassword = passwordForm.confirmPassword.trim();

    if (!oldPassword || !newPassword || !confirmPassword) {
      showError("Vui lòng nhập đầy đủ thông tin mật khẩu!");
      return;
    }

    if (oldPassword !== currentUser.password) {
      showError("Mật khẩu hiện tại không đúng!");
      return;
    }

    if (newPassword.length < 4) {
      showError("Mật khẩu mới phải có ít nhất 4 ký tự!");
      return;
    }

    if (newPassword !== confirmPassword) {
      showError("Xác nhận mật khẩu không khớp!");
      return;
    }

    if (newPassword === oldPassword) {
      showError("Mật khẩu mới không được trùng mật khẩu cũ!");
      return;
    }

    const users = getUsers();
    const updatedUser: User = {
      ...currentUser,
      password: newPassword,
    };

    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );

    saveUsers(updatedUsers);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
    setPasswordForm({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    showSuccess("Đổi mật khẩu thành công!");
  }

  if (!currentUser) {
    // Đang chờ load / đã redirect
    return null;
  }

  return (
    <div className="profile-page-wrapper">
      <Header />
      <main className="profile-page">
        <div className="profile-card">
          {/* CẬP NHẬT THÔNG TIN */}
          <section>
            <h2 className="profile-header">Hồ sơ cá nhân</h2>
            <p className="profile-subtitle">
              Cập nhật thông tin tài khoản của bạn.
            </p>
            <form onSubmit={handleInfoSubmit}>
              <div className="profile-form-group">
                <label className="profile-label" htmlFor="username">
                  Tên đăng nhập
                </label>
                <input
                  id="username"
                  name="username"
                  className="profile-input"
                  type="text"
                  value={infoForm.username}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="profile-form-group">
                <label className="profile-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="profile-input"
                  type="email"
                  value={infoForm.email}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="profile-form-group">
                <label className="profile-label" htmlFor="dob">
                  Ngày sinh (DD/MM/YYYY)
                </label>
                <input
                  id="dob"
                  name="dob"
                  className="profile-input"
                  type="text"
                  value={infoForm.dob}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="profile-form-group">
                <label className="profile-label" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="profile-input"
                  type="text"
                  value={infoForm.phone}
                  onChange={handleInfoChange}
                />
              </div>

              <button type="submit" className="profile-button-primary">
                Lưu thay đổi
              </button>
            </form>
          </section>

          {/* ĐỔI MẬT KHẨU */}
          <section>
            <h3 className="profile-section-title">Đổi mật khẩu</h3>
            <p className="profile-subtitle">
              Đảm bảo mật khẩu đủ mạnh để bảo vệ tài khoản của bạn.
            </p>
            <form onSubmit={handlePasswordSubmit}>
              <div className="profile-form-group">
                <label className="profile-label" htmlFor="oldPassword">
                  Mật khẩu hiện tại
                </label>
                <input
                  id="oldPassword"
                  name="oldPassword"
                  className="profile-input"
                  type="password"
                  value={passwordForm.oldPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="profile-form-group">
                <label className="profile-label" htmlFor="newPassword">
                  Mật khẩu mới
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  className="profile-input"
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="profile-form-group">
                <label className="profile-label" htmlFor="confirmPassword">
                  Xác nhận mật khẩu mới
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="profile-input"
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <button type="submit" className="profile-button-secondary">
                Đổi mật khẩu
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
