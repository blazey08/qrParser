# QR Parser

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
cd database
python dbSetup.py
```

After this, ensure that a ```database.db``` file appears in the ```api``` folder

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


