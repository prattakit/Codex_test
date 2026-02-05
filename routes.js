const app = document.getElementById("app");

function router() {
  const hash = location.hash || "#/login";  // ถ้าไม่มี hash ก็ให้ใช้ #/login

  if (hash === "#/home") {
    loadPage("page/home.html");
  } else {
    loadPage("page/login.html");
  }
}




function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;

if (page === "page/home.html") {
  const fullname = localStorage.getItem("fullname");  // อ่านค่าจาก localStorage
  if (!fullname) {  // ถ้าไม่มี fullname ให้ redirect ไปที่ login
    navigate("/login");
    return;
  }
  document.getElementById("fullname").innerText = fullname;  // แสดง fullname
}
    });
}

window.addEventListener("hashchange", router);
router();
