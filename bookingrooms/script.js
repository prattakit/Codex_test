function bookRoom() {
  const name = document.getElementById("name").value;
  const room = document.getElementById("room").value;
  const date = document.getElementById("date").value;

  if (!name || !room || !date) {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  const table = document.getElementById("bookingList");
  const row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = room;
  row.insertCell(2).innerText = date;

  document.getElementById("name").value = "";
  document.getElementById("room").value = "";
  document.getElementById("date").value = "";
}
