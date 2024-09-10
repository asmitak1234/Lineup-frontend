<!-- Made by- Asmita Kumari -->

# LineUp-Frontend
<!-- explaining setup,functionalities, and deployment steps. -->



## Description

Hello Everyone, I am ASMITA KUMARI , a young learner and i am here with frontend part of my project called "LineUp" .It is a Task Manager or To-Do List App that helps everyone to manage their daily life tasks with proper details like Title,Description,Created on,Completed or not.This is a simple ,secure and efficient tool to store and order tasks according to their completion status. I am making this project with the intension of helping everyone to not forget the more important tasks they have to do in a day. This project is a React based App with Backend managed with Django (Rest Framework) with MySQL as a Database with proper CRUD(Create,Read,Uodate and Delete) Operations.

This project is a React-based full-stack CRUD(Create, Read, Update, Delete) Web Application that interfaces with a Django backend and uses a MySQL Database for persistent data storage with. The frontend communicates with the backend via RESTful APIs. This README outlines how to set up the project, its main functionalities, and steps for deployment of frontend of this project.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Connection](#connection)
- [Functionalities](#functionalities)
- [Deployment](#deployment)

## Requirements

- Node.js 14 or higher
- npm (or yarn) for managing JavaScript packages
- Python 3.8 or higher for the Django backend
- MySQL server for the database

## Setup

### Backend Setup

Before setting up the React frontend, ensure the Django backend is properly configured. This project assumes you have an existing Django backend with a MySQL database.

1. *Clone the Backend Repository*

   Clone the Django project repository if you haven’t already:

   git clone https://github.com/asmitak1234/LineUp-backend.git
   cd lineupbackend
   

2. *Create and Activate a Virtual Environment*

   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   

3. *Install Backend Dependencies*

   pip install -r requirements.txt
   

4. *Configure MySQL Database*

   - Ensure MySQL is running.
   - Update the settings.py in the Django project to connect to your MySQL database.

5. *Apply Migrations and Run the Server*

   python manage.py migrate
   python manage.py runserver
   

   The Django backend should be running on http://localhost:8000.

### Frontend Setup

1. *Clone the Frontend Repository*

   git clone https://github.com/asmitak1234/Lineup-frontend.git
   cd lineupfrontend
   

2. *Install Frontend Dependencies*

   npm install  # or yarn install
   

3. *Environment Variables*

   Create a .env file in the root of your project to configure environment variables.
   Include this file in the .gitignore file.


4. *Start the Development Server*

   npm start  # or yarn start
   

   The React app should be running on http://localhost:3000 and will communicate with the Django backend.

## Connection 

- *Frontend-Backend*: Frontend and Backend is connected by Axios library.

## Functionalities

- *User Interface*: A responsive and dynamic user interface built with React.
- *API Integration*: Fetches and posts data to/from the Django backend using RESTful API endpoints.
- *Form Handling*: User input and form submissions are handled with proper validation mechanisms.
- *User Authentication*: Handles user authentication (login, register) through API calls to the Django backend and gives alert to user.
- *Navigation*: Users can navigate to different web pages(Tasks,Login,Logout,Register) through the Buttons on Navigation Bar.
- *CRUD Operations*: Perform create, read, update, and delete operations on the main resources.
- *Details of Tasks*: Details of tasks like Title,Description,Created on,Completion Status is available.
- *Ordering*: Tasks are automatically ordered according to the Completion status.

## Deployment

### Frontend Deployment
This React frontend project is deployed on Vercel. Follow the steps below to deploy your frontend application:

#### Prerequisites
   - Make sure you have a Vercel account. You can sign up at Vercel.
   - Ensure your frontend code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

#### Steps to Deploy

   1. *Connect Your Repository*:

      - Log in to your Vercel dashboard.
      - Click on the "New Project" button.
      - Choose the Git provider where your frontend repository is hosted.
      - Authorize Vercel to access your repository.
      - Select the repository for your frontend project.

   2. *Configure Build Settings*:

      - Vercel will automatically detect the framework and settings for React. If not, you can manually specify the build settings.
      - For React, the default build command is npm run build or yarn build.
      - The output directory is typically build for React projects.

   3. *Environment Variables*:

      - Add any necessary environment variables by navigating to the "Environment Variables" section in the Vercel project settings.
      - Ensure you add variables like CORS_ALLOWED_ORIGINS to point to your Django backend API.

   4. *Deploy Your Project*:

      - Click on the "Deploy" button.
      -  Vercel will build and deploy your project. You can monitor the deployment progress on the Vercel dashboard.
      - Once the deployment is complete, you will receive a live URL where your frontend application is accessible.

   5. *Continuous Deployment*:

      - Whenever you push changes to the connected repository, Vercel will automatically rebuild and redeploy your frontend application.
      - Ensure your branch is set up correctly to trigger deployments as needed.


