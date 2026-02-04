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
    if (data.success) {
      document.getElementById("result").innerText =
        "ยินดีต้อนรับ " + data.fullname;

      // ตัวอย่างเก็บสถานะ login
      localStorage.setItem("user", data.fullname);
    } else {
      document.getElementById("result").innerText =
        data.message;
    }
  });
}
