/* http://localhost:8081/api/nhacungcap */

/* http://localhost:8080/api/xemdonhang */

/* var {nanoid} = require('nanoid'); */

/*  import {nanoid} from '{nanoid}'; */

/* const {nanoid} = require('nanoid'); */



/* import {nanoid} from 'nanoid' */



function get_allService(callback) {
  var array = [];
  GET('http://localhost:8081/api/sanpham').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}

function view_cartof_customer(id_cus, callback) {
  var array = [];
  GET('http://localhost:8080/api/xemgiohang/' + id_cus).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(array);
      return callback(array);
    })
  );
}



function Register_account_Customer(name, username, pass, phone, email, address, area) {
  POST('http://localhost:8081/api/khachhang', {
    "Hoten": name,
    "Tendangnhap": username,
    "Matkhau": pass,
    "Sdt": phone,
    "Email": email,
    "Diachi": address,
    "Mavung": area
  }).then(res =>
    res.json().then(data => {
      if (data != "") {
        alert("Đăng ký tài khoản thành công");
        window.location = "http://localhost:8888/login";
        console.log(data.lenght);

      }
      else {
        alert("Đăng ký tài khoản thất bại");
      }
    })
  );
}

function Register_account_Shipper(name, username, pass, phone, email, address, somuitiem) {
  POST('http://localhost:8080/api/themshipper', {
    "hoten": name,
    "tendangnhap": username,
    "matkhau": pass,
    "sdt": phone,
    "email": email,
    "diachi": address,
    "soMuiTiem": somuitiem
  }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Đăng ký tài khoản thành công");
        window.location.assign("http://localhost:8888/login_shipper");
        console.log(data.lenght);

      }
      else {
        alert("Đăng ký tài khoản thất bại");
      }

    })
  );
}

function Register_account_supplier(name, username, pass, phone, email, address, somuitiem) {
  POST('http://localhost:8081/api/nhacungcap', {
    "hoten": name,
    "tendangnhap": username,
    "matkhau": pass,
    "sdt": phone,
    "email": email,
    "diachi": address,
    "soMuiTiem": somuitiem
  }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Đăng ký tài khoản thành công");
        window.location.assign("http://localhost:8888/login_ncc");
        console.log(data.lenght);

      }
      else {
        alert("Đăng ký tài khoản thất bại");
      }

    })
  );
}



function delete_service_ofcart(idchitiet) {
  DELETE('http://localhost:8080/api/deletegiohang/' + idchitiet).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Xoá sản phẩm thành công");
      }
      else {
        alert("Xóa thất bại");
      }
    })
  );
}






function getlistservice_byidcategory(id, callback) {
  var array = [];
  GET('http://localhost:8888/vacxin/get_goivacxin_phanloai/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}





function list_all_service(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_goivacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}






function list_all_service_by_id(id, callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_goivacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

function get_allcity(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_tinhthanh').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allcity1(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_tinhthanh').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function ham_timtengoivacxintheoid(callback) {
  var array = [];

  GET('http://localhost:8888/vacxin/get_all_goivacxin').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function ham_timtenkhachhangtheoid(id, callback) {
  var array = [];

  GET('http://localhost:8888/customer/get_customer/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function ham_getdetailbooking_duatren_madonhang(id, callback) {
  var array = [];

  GET('http://localhost:8888/booking/get_detail_booking/' + id).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}








function get_allhometown(id_city, callback) {
  var array = [];

  GET('http://localhost:8888/location/get_quanhuyen_tinhthanh/' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allwards(id_district, callback) {
  var array = [];

  GET('http://localhost:8888/location/get_phuongxa_quanhuyen/' + id_district).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allcity_tiem(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_tinhthanh').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allhub(id_city, callback) {
  var array = [];

  GET('http://localhost:8888/location/get_trungtam_tinhthanh/' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}

function get_allhub1(callback) {
  var array = [];

  GET('http://localhost:8888/location/get_all_trungtam').then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;

      return callback(array);
    })
  );
}



function list_view_cus(id_city, callback) {
  console.log(id_city);
  var array = [];
  GET('http://localhost:8888/cart/get?cookie_id=' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
}

/* function list_view_cus1(id_city, callback) {
  console.log(id_city);
  var array = [];
  GET('http://localhost:8888/booking/get_detail_booking/' + id_city).then(res =>
    res.json().then(data => {

      var template = $('#service-table').html();
      var compiled = Handlebars.compile(template);

      var contextualHtml = compiled({ allservices: data });
      $('#allservices').html(contextualHtml);
      array = data;
      console.log(data);
      return callback(array);
    })
  );
} */





function add_product_into_cart(coookie_id, hoten, gioitinh, sdt, email, diachi, ngaysinh, moiquanhe, dsmua, phanloaids, tinhthanh, quanhuyen, phuongxa, trungtam, ngaytiem) {
  POST('http://localhost:8888/cart/add', {
    "cookie_id": coookie_id,
    "NguoiDky": {
      "HoTen": hoten,
      "GioiTinh": gioitinh,
      "SDT": sdt,
      "Email": email,
      "DiaChi": diachi,
      "NgaySinh": ngaysinh,
      "MoiQH": moiquanhe,
      "DSMua": dsmua,
      "PhanLoaiDS": phanloaids,
      "TinhThanh_ID": tinhthanh,
      "QuanHuyen_ID": quanhuyen,
      "PhuongXa_ID": phuongxa,
      "TrungTam_ID": trungtam,
      "NgayMuonTiem": ngaytiem
    }

  }).then(res =>
    res.json().then(data => {
      console.log(data);
    })
  );
}
         /* add_booking(ptthanhtoan, ttthanhtoan, ngaylapdon, phanloaidh, hoten, email, sdt, cmnd, diachi, tinhthanh, quanhuyen, phuongxa, cookie_id); */
function add_booking(ptthanhtoan, ttthanhtoan, ngaylapdon, phanloaidh, hoten, email, sdt, cmnd, diachi, tinhthanh, quanhuyen, phuongxa, cookie_id) {
  POST('http://localhost:8888/booking/add_booking', {
    "PhuongThuc": ptthanhtoan,
    "TinhTrangThanhToan": ttthanhtoan,
    "NgayLapDon": ngaylapdon,
    "PhanLoaiDH": phanloaidh,
    "NguoiLH": {
      "HoTen": hoten,
      "Email": email,
      "SDT": sdt,
      "CMND": cmnd,
      "DiaChi": diachi,
      "TinhThanh_ID": tinhthanh,
      "QuanHuyen_ID": quanhuyen,
      "PhuongXa_ID": phuongxa
    },
    "CookieID": cookie_id

  }).then(res =>
    res.json().then(data => {
      console.log("add thanh cong");
      console.log(data);
      localStorage.setItem("id_donhang", data.payload.id);
      console.log(data.payload.id);
      list_view_cus2();
    })
  );
}

function update_status_booking(madh, tttt) {
   PUT('http://localhost:8888/booking/update_payment', {
     "MaDH": madh,
     "TinhTrangThanhToan": tttt
   }).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Cập nhật thành công");
        console.log(data.lenght);
      }
      else {
        alert("Cập nhật thất bại");
      }


    })
  );
}









function Receive_order(mashp, madonhang) {
  /*  PUT('http://localhost:8080/api/tiepnhandonhang/', {
     "MaShipper_input": mashp,
     "MaDH_input": madonhang
   }).then(res => */
  PUT('http://localhost:8080/api/tiepnhandonhang?MaShipper_input=' + mashp + '&MaDH_input=' + madonhang).then(res =>
    res.json().then(data => {
      console.log(data);
      if (data != "") {
        alert("Nhận đơn thành công");
        console.log(data.lenght);

      }
      else {
        alert("Không thể nhận đơn hàng này");
      }


    })
  );
}










