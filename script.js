function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://script.google.com/macros/s/AKfycbwQW9Kx3jbFbRl2CaieKMB-9bQev4V1OE4kZAzIru_VqmzONkSO1kwzcsOBagITt4KC/exec", {
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

