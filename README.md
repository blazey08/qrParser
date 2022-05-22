# Simple QR Parser
## Initial Setup
### Backend 
#### Setup virtual env 
```
cd api
python3 venv venv
```
To activate
```
# Mac
source venv\bin\activate

# Windows
.\env\Scripts\activate
```

#### Install the requirements
```
pip3 -r requirements.txt
```

### Setup & Populate database
```
python dbSetup.py
```

After this, ensure that a ```database.db``` file appears in the ```api``` folder

Upon initialisation, two tables are created - profiles & credentials.

**profiles** - Contains the user data of 3 individuals: *Jake, Selena & Leo* (Which you can use to test the search function)  
**credentials** - Contains mock user accounts for logging in

### Run
Ensure that your backend works by running this command in the ```api``` folder
```
flask run
```

### UI

### Install node modules
```
yarn install
```

### Run
This should start up the react application
```
yarn start
```
---
## Web Application 
After running yarn start, you would be brought to localhost:3000. 

### Search (Index Page)
Anyone can run a search so you can test it out by keying in *Jake* as an example. Invalid inputs cause an alert to pop up.

### Login
Certain features like ```Upload & Delete``` are only available for users who have logged in. If you were to access those pages before doing so, you would be brought to the login page.  
  
As a test, try logging in with: 
```
username: admin
password: admin
```  

You should now have access to  ```Upload & Delete``` (*The indicator for whether you're logged in is slightly iffy and would only update if you refresh the page oops*)

### Upload
Page for you to upload user data via QR codes

### Delete
Page that would allow you to delete a desired user 

*Unfortunately, for now, deletion of nonexistent users does not raise any errors*

### Log Out
The log out button exists on the top right hand corner of the navbar and would redirect you to the Search page upon clicking.

---

## Additional Features
### Generate QR codes
In order to carry out simple testing, a simple code is included in the ```generateQRs``` folder. You could use that to generate your own user data QR codes, following the example data in there. Three example QRs have also been included for your perusal.

### Backend Testing
Initially for testing the flask routes, I created multiple .http files which can be found in the ```tests``` folder


