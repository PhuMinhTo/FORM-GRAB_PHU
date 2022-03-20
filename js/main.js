//GrabX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

//GrabSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

//GrabBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;


var tienKm = 0;
var tienCho = 0;
var tongTien = 0;


function layLoaiXe() {
    //Đầu vào
    var grabX = document.getElementById("grabX");
    var grabSUV = document.getElementById("grabSUV");
    var grabBlack = document.getElementById("grabBlack");
    var loaiXe = "";
    //Xử lý
    if(grabX.checked) {
        loaiXe = "grabX";
    } else if(grabSUV.checked) {
        loaiXe = "grabSUV";
    } else if(grabBlack.checked) {
        loaiXe = "grabBlack";
    }
    return loaiXe;
}

function tinhTienCho(tgCho, grabWait) {
    var kq = 0;
    if(tgCho >= 3) {
        kq = Math.floor(tgCho/3) * grabWait;
    }
    return kq;
}

function tinhTienGrab(soKm, giaKm1, giaKm2, giaKm3) {
    var tienKm1 = tienKm_1(1, giaKm1);
    var tienKm2 = tienKm_2(soKm, giaKm2);
    var tienKm3 = tienKm_3(soKm, giaKm3);
    var kq = 0;
    if(soKm >= 0 && soKm <= 1) {
        kq = tienKm1;
    } else if(soKm > 1 && soKm <= 19) {
        kq = tienKm2 + tienKm1;
    } else if(soKm > 19) {
        tienKm2 = tienKm_2(19, giaKm2);
        kq = tienKm3 + tienKm2 + tienKm1;
    }
    return kq;
}

var tienKm_1 = function(soKm, giaKm1) {
    var kq = soKm * giaKm1;
    return kq;
}

var tienKm_2 = function(soKm, giaKm2) {
    var kq = (soKm - 1) * giaKm2;
    return kq;
}

var tienKm_3 = function(soKm, giaKm3) {
    var kq = (soKm - 19) * giaKm3;
    return kq;
}

var chiaTungchan = function(soKm) {
    var changKm = 0;
    if(soKm >= 0 && soKm <= 1) {
        changKm = soKm;
    } else if(soKm > 1 && soKm <= 19) {
        changKm = soKm - 1;
    } else if(soKm > 19) {
        changKm = soKm - 19;
    }
    return changKm;
}

function inHoaDon(soKm, tgCho, changKm, dongiacho, tienCho, tienKm_1, tienKm_2, tienKm_3) {
    var currentFormat = new Intl.NumberFormat("vn-VN");
    content = "";
    if(0 <= soKm && soKm <= 1){
        content += "<tr>";
        content +=      "<td>Km dau tien</td>";
        content +=      "<td>" + changKm + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_1) + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_1) + "</td>";
        content += "</tr>";
    
        content += "<tr>";
        content +=      "<td>Thoi gian cho</td>";
        content +=      "<td>" + tgCho + "</td>";
        content +=      "<td>" + currentFormat.format(dongiacho) + "</td>";
        content +=      "<td>" + currentFormat.format(tienCho) + "</td>";
        content += "</tr>";
    
        content += "<tr>";
        content +=      "<td>Tong tien</td>";
        content +=      "<td>" + currentFormat.format(tongTien) + "</td>";
        content += "</tr>";
    }  else if(soKm > 1 && soKm <= 19) {
        content += "<tr>";
        content +=      "<td>Km dau tien</td>";
        content +=      "<td>1</td>";
        content +=      "<td>" + currentFormat.format(tienKm_1) + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_1) + "</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Từ 1 đến 19</td>";
        content +=      "<td>" + changKm + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_2) + "</td>";
        content +=      "<td>" + currentFormat.format(changKm*tienKm_2) + "</td>";
        content += "</tr>";
    
        content += "<tr>";
        content +=      "<td>Thoi gian cho</td>";
        content +=      "<td>" + tgCho + "</td>";
        content +=      "<td>" + currentFormat.format(dongiacho) + "</td>";
        content +=      "<td>" + currentFormat.format(tienCho) + "</td>";
        content += "</tr>";
    
        content += "<tr>";
        content +=      "<td>Tong tien</td>";
        content +=      "<td>" + currentFormat.format(tongTien) + "</td>";
        content += "</tr>";
    } else if(soKm > 19) {
        content += "<tr>";
        content +=      "<td>Km dau tien</td>";
        content +=      "<td>1</td>";
        content +=      "<td>" + currentFormat.format(tienKm_1) + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_1) + "</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Từ 1 đến 19</td>";
        content +=      "<td>18</td>";
        content +=      "<td>" + currentFormat.format(tienKm_2) + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_2 * 18) + "</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Từ 19 trở lên</td>";
        content +=      "<td>" + changKm + "</td>";
        content +=      "<td>" + currentFormat.format(tienKm_3) + "</td>";
        content +=      "<td>" + currentFormat.format(changKm * tienKm_3) + "</td>";
        content += "</tr>";
    
        content += "<tr>";
        content +=      "<td>Thoi gian cho</td>";
        content +=      "<td>" + tgCho + "</td>";
        content +=      "<td>" + currentFormat.format(dongiacho) + "</td>";
        content +=      "<td>" + currentFormat.format(tienCho) + "</td>";
        content += "</tr>";
    
        content += "<tr>";
        content +=      "<td>Tong tien</td>";
        content +=      "<td>" + currentFormat.format(tongTien) + "</td>";
        content += "</tr>";
    }
    return content;
}



document.getElementById("btnTinhTien").onclick = function() {
    var soKm = document.getElementById("soKm").value;
    var tgCho = document.getElementById("tgCho").value;
    var loaiXe = layLoaiXe();
    
    switch (loaiXe) {
        case "grabX":
            //Tính tiền grabX
            tienKm = tinhTienGrab(soKm, GRABX_1, GRABX_2, GRABX_3);
            tienCho = tinhTienCho(tgCho, GRABX_WAIT);
            tongTien = tienKm + tienCho;
            break;
        case "grabSUV":
            //Tính tiền grabSUV
            tienKm = tinhTienGrab(soKm, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3);
            tienCho = tinhTienCho(tgCho, GRAB_SUV_WAIT);
            tongTien = tienKm + tienCho;
            break;
        case "grabBlack":
            //Tính tiền grabBlack
            tienKm = tinhTienGrab(soKm, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3);
            tienCho = tinhTienCho(tgCho, GRAB_BLACK_WAIT);
            tongTien = tienKm + tienCho;
            break;
        default:
            alert("Vui lòng chọn loại xe!");
            break;
    }
    //Mở nút in hóa đơn
    document.getElementById("btnHoaDon").disabled = false;
    //format vnd
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienVnd = currentFormat.format(tongTien);

    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tienVnd;
};


//Khóa nút in hóa đơn
document.getElementById("btnHoaDon").disabled = true;
document.getElementById("btnHoaDon").onclick = function() {
    var soKm = document.getElementById("soKm").value;
    var chiaChang = chiaTungchan(soKm);
    var tgCho = document.getElementById("tgCho").value;
    var loaiXe = layLoaiXe(soKm, tgCho, chiaTungchan,);
    var content = "";
    switch (loaiXe) {
        case "grabX":
            //Tính tiền grabX
            
            tienCho = tinhTienCho(tgCho, GRABX_WAIT);
            content = inHoaDon(soKm, tgCho, chiaChang, GRABX_WAIT,tienCho, GRABX_1, GRABX_2, GRABX_3)
            break;
        case "grabSUV":
            //Tính tiền grabSUV
            tienCho = tinhTienCho(tgCho, GRAB_SUV_WAIT);
            content = inHoaDon(soKm, tgCho, chiaChang, GRAB_SUV_WAIT, tienCho, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3)
            break;
        case "grabBlack":
            //Tính tiền grabBlack
            tienCho = tinhTienCho(tgCho, GRAB_BLACK_WAIT);
            content = inHoaDon(soKm, tgCho, chiaChang, GRAB_BLACK_WAIT, tienCho, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3)
            break;
        default:
            break;
    }
    
    document.getElementById("tbody").innerHTML = content;
}