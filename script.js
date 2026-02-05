function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const url =
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjdGgNLwu99k0NKUj6CLt9TiLATPgDVEqKvPLvhZ_N2R9X_Np4DE7cTgnfMRDSjL-HzU0rqkrqqx0exnrHW9CK_MApvVOX-iF8bC4aUpq38TpZaALljeQSnNw-gh0AekzcXhGlLjOQuT1N1R-JHLaS6Ue-9uybiOKzrKPO4nvALkjiKkbxpsv4bGna0yLMpnyFvjqFHf6Q_tXFXrjYpZrxptIg7TBHlgD1vW5e6grtbCxzRiupQlTnJdGfWn_p0xPYXDagLmVGW1qeolfWnFCP8v61kaA&lib=MqcGTAQ71HOc4wixN6ifat89cFyMI6jSi"
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
