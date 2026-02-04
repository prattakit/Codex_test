function bookRoom() {
  const name = document.getElementById("name").value;
  const room = document.getElementById("room").value;
  const date = document.getElementById("date").value;
  const table = document.getElementById("bookingList");

  if (!name || !room || !date) {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

    // 🔍 เช็คซ้ำ
  for (let i = 0; i < table.rows.length; i++) {
    const bookedRoom = table.rows[i].cells[1].innerText;
    const bookedDate = table.rows[i].cells[2].innerText;

    if (bookedRoom === room && bookedDate === date) {
      alert("ห้องนี้ถูกจองแล้วในวันที่เลือก");
      return;
    }
  }

  const row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = room;
  row.insertCell(2).innerText = date;

  const deleteCell = row.insertCell(3);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "ลบ";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    row.remove();
  };

  deleteCell.appendChild(deleteBtn);

  document.getElementById("name").value = "";
  document.getElementById("room").value = "";
  document.getElementById("date").value = "";
}
