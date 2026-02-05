function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://script.google.com/macros/s/1jjS6SuXKc-F6AtUROX822QjGIBbKrb1oc0mOZzFR_B7kW1nyUD4jflDZ/exec", {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);  // แสดงผลลัพธ์ใน Console
    if (data.success) {
      alert("ยินดีต้อนรับ " + data.fullname);
    } else {
      alert(data.message); // แจ้งข้อผิดพลาด
    }
  })
  .catch(err => {
    alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
  });
}

