function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // const url =
  //   "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjdGgNLwu99k0NKUj6CLt9TiLATPgDVEqKvPLvhZ_N2R9X_Np4DE7cTgnfMRDSjL-HzU0rqkrqqx0exnrHW9CK_MApvVOX-iF8bC4aUpq38TpZaALljeQSnNw-gh0AekzcXhGlLjOQuT1N1R-JHLaS6Ue-9uybiOKzrKPO4nvALkjiKkbxpsv4bGna0yLMpnyFvjqFHf6Q_tXFXrjYpZrxptIg7TBHlgD1vW5e6grtbCxzRiupQlTnJdGfWn_p0xPYXDagLmVGW1qeolfWnFCP8v61kaA"
  //   + "&username=" + encodeURIComponent(username)
  //   + "&password=" + encodeURIComponent(password);

  const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjNO078b2Sf6sXL4jj3IkYpwB0x121-rVMMv4mqRD5xoc94MC2jAiOy0ennfMR57tlPv70I925A2rqss7G_n58EK24mtgd2cYDkNVt6_2L4uUcz35IDp8LbAOPDv-wkUL6lZ7_3nubVkpzwS7CGOvh9jv-xDeM3cVgzEKb_lRvmS5kNhGZDkV-kKm2xdq44vA_oSfhwSV2MDuIoulk3-72HYN5BItJdj82UqjQMaFXh1zwu2z5yx2Nu_olmj3BL4IqIB7_RA7MygMpmxM0UiXShvTZ4NEKoILMwIk3GyKwaZwh34Wwbkx94hIDvxHbiUnzkOzr8"
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
