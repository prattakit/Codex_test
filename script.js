function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const url =
    "https://script.google.com/macros/s/AKfycbxs2Tq8icOCHJRI8Som_YBR_sLw0c_BAE7Ah0d6I5f2NSpB5Jblg9-mSfwswJtc5ffp/exec"
    + "&username=" + encodeURIComponent(username)
    + "&password=" + encodeURIComponent(password);
    
    
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        alert("ยินดีต้อนรับ " + data.fullname);
      } else {
        alert(data.message);
      }
    })
    .catch(err => {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    });
}
