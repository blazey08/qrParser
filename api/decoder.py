import cv2, os, json

filepath = os.path.join(os.path.abspath('.'), 'qr', 'nancy.png')

# Function to process QR code into JSON data
def processQR(filename):
    try:
        image = cv2.imread(filename)
        detector = cv2.QRCodeDetector()
        data, vertices_array, b = detector.detectAndDecode(image)

        if vertices_array is not None:
            nData = data.replace("'",'"')
            # print(type(json.loads(nData)))
            return json.loads(nData)
        else:
            print("Error decoding QR code")   

    except Exception as e:
        print(e)

