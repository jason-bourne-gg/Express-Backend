## Application Setup and Usage Instructions

### 1. Install Node.js

Ensure you have Node.js installed on your system. If not, you can download and install it from the official [Node.js website](https://nodejs.org/).

### 2. Install Dependencies

After Node.js is installed, navigate to your project directory and install the required dependencies using npm:

```bash
npm install express
```

### 3. Run the Application
Start the application by running the following command:

```bash
node app.js
```
This will run the application on port 3000.

### 4. Accessing User Information
Once the application is running, you can access user information by opening your web browser and navigating to the following URL:

```
http://localhost:3000/showUser/3
```
Replace 3 in the URL with the desired user ID to retrieve information about that user.

Example Response
Upon accessing the URL, you will receive a JSON response containing the user information:
```
{
  "id": "3",
  "name": "Michael Johnson",
  "address": "789 Oak St, Chicago",
  "phone": "+1 555-9012",
  "age": 35,
  "dob": "1988-11-05",
  "job": "Data Scientist"
}
```
This response includes details such as the user's name, address, phone number, age, date of birth, and job.



