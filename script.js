function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("กรุณากรอก Username และ Password");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbwQW9Kx3jbFbRl2CaieKMB-9bQev4V1OE4kZAzIru_VqmzONkSO1kwzcsOBagITt4KC/exec", {

    
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById("result").innerText =
        "ยินดีต้อนรับ " + data.fullname;

      localStorage.setItem("user", data.fullname);

      // ตัวอย่างเปลี่ยนหน้า
      // window.location.href = "booking.html";
    } else {
      document.getElementById("result").innerText = data.message;
    }
  })
  .catch(() => {
    document.getElementById("result").innerText =
      "เกิดข้อผิดพลาดในการเชื่อมต่อ";
  });
}