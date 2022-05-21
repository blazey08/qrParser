import qrcode

data = {
    "username": "Nancy",
    "age": 10,
    "occupation": "Student",
    "phoneNumber": 87225555
}


QRCodefile = "nancy.png"
qrcode.make(data).save(QRCodefile)