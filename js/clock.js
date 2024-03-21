let days = document.querySelector("#day")
let hrs = document.querySelector("#hour")
let mins = document.querySelector("#minute")
let sec = document.querySelector("#second")
function demNguoc() {
  // Lấy ngày hiện tại
  var ngayHienTai = new Date();

  // Tính toán thời gian kết thúc sau 4 ngày
  var ngayKetThuc = new Date(ngayHienTai);
  ngayKetThuc.setDate(ngayKetThuc.getDate() + 4);

  // Hàm cập nhật thời gian và hiển thị
  function capNhatThoiGian() {
    var hienTai = new Date();
    var khoangCach = ngayKetThuc - hienTai;

    var ngay = Math.floor(khoangCach / (1000 * 60 * 60 * 24));
    var gio = Math.floor((khoangCach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var phut = Math.floor((khoangCach % (1000 * 60 * 60)) / (1000 * 60));
    var giay = Math.floor((khoangCach % (1000 * 60)) / 1000);

    days.textContent = ngay;
    hrs.textContent = gio;
    mins.textContent = phut;
    sec.textContent = giay;

    // Kiểm tra nếu đã hết thời gian
    if (khoangCach < 0) {
      clearInterval(demNguocInterval);
      console.log("Đếm ngược đã kết thúc!");
    }
  }

  // Gọi hàm cập nhật thời gian mỗi giây
  var demNguocInterval = setInterval(capNhatThoiGian, 1000);
}

// Gọi hàm để bắt đầu đếm ngược
demNguoc();
