const app = document.getElementById("app");

function navigate(hash) {
  location.hash = hash;
}

function router() {
  const hash = location.hash || "#/login";

  if (hash === "#/home") {
    loadPage("page/home.html", true);
  } else {
    loadPage("page/login.html");
  }
}

function loadPage(page, auth = false) {
  if (auth && !localStorage.getItem("fullname")) {
    navigate("#/login");
    return;
  }

  fetch(page)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;

      if (page.includes("home.html")) {
        document.getElementById("fullname").innerText =
          localStorage.getItem("fullname");
      }
    });
}

window.addEventListener("hashchange", router);
router();
