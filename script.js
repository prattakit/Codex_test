
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const url =
    "https://script.google.com/macros/s/AKfycbyItoPAZxwMnqasn0o7Sh3oim1ZUlDpyVTOfQGIGtnP4m_UyUwA0fXrtsUXbs4A0C9x/exec"
    + "?username=" + encodeURIComponent(username)
    + "&password=" + encodeURIComponent(password);

  fetch(url)
    .then(res => {
      // กันกรณี server ส่ง HTML กลับมา
      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);

      if (data.success) {
        alert("ยินดีต้อนรับ " + data.fullname);
        // localStorage.setItem("fullname", data.fullname);
        // navigate("/home");
       window.location.href = "page/home.html";
      } else {
        alert(data.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    })
    .catch(err => {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    });
}
