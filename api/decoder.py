import cv2, os

filepath = os.path.join(os.path.abspath('.'), 'qr')

# Function to process QR code into JSON data
def processQR(filename):
    try:
        print(filename)
        image = cv2.imread(os.path.join(filepath, filename))
        detector = cv2.QRCodeDetector()

        data, vertices_array, binary_qrcode = detector.detectAndDecode(image)
        # if there is a QR code
        # print the data
        if vertices_array is not None:
            print("QRCode data:")
            print(data)
        else:
            print("There was some error")   

    except Exception as e:
        print(e)
