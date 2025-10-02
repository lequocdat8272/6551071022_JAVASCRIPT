function tinhDienTichTamGiac(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) 
    return "Không phải tam giác hợp lệ";

    let p = (a + b + c) / 2;
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return S;
}

let a = 5, b = 6, c = 7;
let ketqua = tinhDienTichTamGiac(a, b, c);

document.getElementById("ketqua").innerText = "Diện tích tam giác: " + ketqua;

console.log(tinhDienTichTamGiac(5, 6, 7));

alert("Diện tích tam giác: " + ketqua);
