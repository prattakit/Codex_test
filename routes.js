const app = document.getElementById("app");

function router() {
  const hash = location.hash || "#/login";

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
        const fullname = localStorage.getItem("fullname");
        if (!fullname) {
          navigate("/login");
          return;
        }
        document.getElementById("fullname").innerText = fullname;
      }
    });
}

window.addEventListener("hashchange", router);
router();
