function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhSVUJyfBxkg8UiXow7sAPHDeFUx-ryyfextWs59RyUlbqPsT_snpVMnvizBwPZdIugPDX3Ua-dN5y5CRA5UCbMIgqZh9PIHTcA-N-OEVZ3ZvN4mtbEfKETvSB_sfV7WTCfx153EqYULrKhOZ-ooh_cSVjIlRE8Or4eRpvHAHdCBWrZpr2hTxZJXyDBk84ozBloCpssddPzIHchZY9S-Kh5p2uUtejzD0flhkujN-rIk1trjgOymdTdLpmFLTsXy7Rkk73aYqSQGT7_AqtzhfbJcDl9LQ"
  + "&username=" + encodeURIComponent(username)
  + "&password=" + encodeURIComponent(password);
    
    //   const url = "https://script.google.com/macros/s/AKfycbxs2Tq8icOCHJRI8Som_YBR_sLw0c_BAE7Ah0d6I5f2NSpB5Jblg9-mSfwswJtc5ffp/exec?"
    // + "&username=" + encodeURIComponent(username)
    // + "&password=" + encodeURIComponent(password);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        alert("ยินดีต้อนรับ บบบบ " + data.fullname);
         if (data.success) {
            localStorage.setItem("fullname", data.fullname);
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

