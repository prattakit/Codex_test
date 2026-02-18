function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // const url =
  // "https://script.googleusercontent.com/macros/echo?user_content_key=AKfycbxs2Tq8icOCHJRI8Som_YBR_sLw0c_BAE7Ah0d6I5f2NSpB5Jblg9-mSfwswJtc5ffp"
  // + "&username=" + encodeURIComponent(username)
  // + "&password=" + encodeURIComponent(password);
    

    const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AKfycbyItoPAZxwMnqasn0o7Sh3oim1ZUlDpyVTOfQGIGtnP4m_UyUwA0fXrtsUXbs4A0C9x"
  + "&username=" + encodeURIComponent(username)
  + "&password=" + encodeURIComponent(password);



  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        alert("ยินดีต้อนรับ บบบบ " + data.fullname);
         if (data.success) {
            // localStorage.setItem("fullname", data.fullname);
            navigate("/home");
          }
      } else {
        alert(data.message);
      }
    })
    .catch(err => {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    });
}


function logout() {
  localStorage.clear();
  navigate("/login");
}

