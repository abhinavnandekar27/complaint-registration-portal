# Complaint Registration Portal

## Overview
The Complaint Registration Portal is an Angular-based web application that allows users to register complaints and enables an admin to manage and resolve these complaints. The application supports user authentication, complaint registration, and admin management functionalities.

## Features
- **User Authentication**: Users can register, log in, and log out.
- **Complaint Registration**: Users can register complaints, which include a title and description.
- **Admin Dashboard**: Admin can view, update the status of, and delete complaints.
- **Local Storage**: Data persistence using local storage to maintain user sessions and complaint data.

## Technologies Used
- Angular
- TypeScript
- HTML
- CSS
- Local Storage (to store complaints)

### Login User
1. Log in as an normal user (default user credentials: username `user`, password `user`).

### Submitting a Complaint
1. After logging in, navigate to the dashboard.
2. Fill in the complaint title and description.
3. Click on the `Submit Complaint` button.
4. View submitted complaints in the table.

### Admin Management
1. Log in as an admin (default admin credentials: username `admin`, password `admin`).
2. Navigate to the admin dashboard.
3. View all complaints in a table format.
4. Update the status of complaints or delete complaints as needed.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abhinavnandekar27/complaint-registration-portal.git
    cd complaint-registration-portal
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    ng serve --open
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Output

![Screenshot (33)](https://github.com/abhinavnandekar27/complaint-registration-portal/assets/167284154/6b4e63a2-d36a-4ce3-b52e-38f870191a69)
![Screenshot (35)](https://github.com/abhinavnandekar27/complaint-registration-portal/assets/167284154/c8370d07-081f-4db6-876e-d15bbd1d1951)
![Screenshot (36)](https://github.com/abhinavnandekar27/complaint-registration-portal/assets/167284154/03046c50-aedd-4ed7-802c-adb0238a2d9b)
![Screenshot (37)](https://github.com/abhinavnandekar27/complaint-registration-portal/assets/167284154/2c128de7-26fe-4820-9055-8872a800ff97)
