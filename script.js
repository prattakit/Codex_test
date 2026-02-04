function login() {
  fetch("https://script.google.com/macros/s/AKfycbwQW9Kx3jbFbRl2CaieKMB-9bQev4V1OE4kZAzIru_VqmzONkSO1kwzcsOBagITt4KC/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText =
      data.success ? "ยินดีต้อนรับ " + data.fullname : data.message;
  })
  .catch(err => {
    console.error(err);
    document.getElementById("result").innerText =
      "เชื่อมต่อ API ไม่ได้ (CORS)";
  });
}
