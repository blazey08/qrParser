import qrcode

nancy = {
    "username": "Nancy",
    "age": 10,
    "occupation": "Student",
    "phoneNumber": 87225555
}

daniel = {
    "username": "Daniel",
    "age": 60,
    "occupation": "Gardener",
    "phoneNumber": 90000000
}

janet = {
    "username": "Janet",
    "age": 35,
    "occupation": "Dancer",
    "phoneNumber": 95584473
}

def create(data, name):
    qrcode.make(data).save(name+".png")


# Test QRs
# create(nancy, "nancy")
create(daniel, "daniel")
create(janet, "janet")