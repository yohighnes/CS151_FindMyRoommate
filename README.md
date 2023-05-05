# CS151-FindMyRoommate
## Group 7: Yohannes Habtemariam, Hoang Nguyen, Da Thao Trinh

FindMyRoommate is a website designed to help individuals find compatible roommates for shared living situations. The website allows users to create a profile, search for potential roommates based on various criteria such as location, budget, lifestyle preferences, and interests, and communicate with potential matches.

# Table of Contents
- [Proposal Contributions](#proposal-contributions)
- [Problem](#problem)
- [Previous Works](#previous-works)
- [Intended Usage and Environment](#intended-usage-and-environment)
- [Diagrams](#diagrams)
- [Functionality](#functionality)
- [User Operations](#user-operations)
- [Solutions](#solutions)
- [Steps to run the website](#steps-to-run-the-website)
- [Snapshots](#snapshots)
- [References](#references)



### Proposal Contributions

##### Thao worked on:
    
* Proposal: Problem, Previous Works, Intended Usage and Environment, User Operations, References, Steps to run the website and Snapshots.
    * Code: 
        * Frontend - all.
        * Backend:
             * UserHabit, UserPreference, UserEducation, UserSocialMedia related.
             * Create /addUserProfileInfo and /user endpoints for API call.
         * Fix bugs and errors.
     * Presentation: demo
 
##### Yohannes worked on:
* setting up github repo.
* Code:
    * setting up mysql database server to interact and store data of backend server
    * login function (backend)
    * signup function (backend)
* Presentation: presentation slides

##### Hoang worked on:
* Solutions and Functionality.
* Code: 
    * ContactUs
* Presentation: presentation slides


### Problem

Imagine you get accepted to San Jose State University and you are not a local student. You need to find a place to live so that you can commute easily to school; but you don’t have any friends or relatives in San Jose to ask. The cost of the apartments around school is also expensive too. You want to reduce the cost by looking for some schoolmates who can split the rent with you.

### Previous Works

Nowadays, there are a lot of websites/apps that assist us to look for rooms or roommates such as Cragslist, LiveWith and Roomi...  However, while Cragslist is known for a lot of scams, Roomi asks the users to pay a subscription plan if they want to have access to some exclusive benefits. LiveWith is a free app, but it's only available for Apple users.

### Intended Usage and Environment

FindMyRoommate will be built exclusively for SJSU students to avoid scams. As a requirement, only students with active school emails are able to register and public their profiles. The website also provides full access to all students and is free of charge too.

### Diagrams
| **UML Diagram**| **Description**|
| :------------- | :------------- |
| [**Class Diagram**](https://github.com/yohighnes/CS151_FindMyRoommate/blob/main/diagrams/ClassDiagram.png)  | The Class Diagram depicts the blueprint of FindMyRoommate backend system including the relationships and source code dependencies among classes; as well as the blueprint of each object in the system.  |
| [**State Diagram**](https://github.com/yohighnes/CS151_FindMyRoommate/blob/main/diagrams/StateDiagram.png)  | The State Diagram showed the different states of FindMyRoomate. The first part show how the program run before user service, (start up, shutdown, etc). The second part showed the different states that user will experience when using the web/app (Login, Homepage, User Info, Matching, etc). 
| [**Use Case Diagram**](https://github.com/yohighnes/CS151_FindMyRoommate/blob/main/diagrams/UseCaseDiagram.png)  | These use cases represent the various actions that both users and administrators can perform on the FindMyRoommate website, from logging in to creating feedback and reports, to viewing their history on the platform. The additional use cases for administrators enable them to manage and monitor user activity on the platform.  |
| [**Sequence Diagram**](https://github.com/yohighnes/CS151_FindMyRoommate/blob/main/diagrams/SequenceDiagram.png)  | The Sequence Diagram shows the relationship between object and time dimension. In this diagram, we detail how - and in what order -  operations are carried out.  |


### Functionality
* SJSU student ID, Gmail, and reporting system will be the solution in tackling the scam. From our perspective, there will be people who will take care of the report system and manually track down scams and other suspicious activities.
* Survey questions and rating systems will help SJSU students to find a roommate that matches their personality, schedule, and activities.
* FindMyRoomate will also act similarly to social media. There will be a page for biography where users can introduce themselves to other students.
* The feedback system is important to us. Users provide feedback on how to improve our website/apps. If users want us to add, remove, or improve a feature, they can send us the feedback form.



### User Operations

* The users are all SJSU students who looking for roommates to share a place with. 
* In order to secure the information of the students, it’s required to use the school email to sign up.
* Upon signing up, the users are required to answer some basic information such as first/last name, gender, contact information, short description about themselves, monthly budget, household size, preferred roommate gender, preferred location, living preferences (potato couch/party animal, bedtime, cleanliness…), habits (smoking, vaping, drinking…).
* After signing up, the website will direct the users to the main page, which contains the profile of other people who looking for roommates as well.
* Users can start a chat with their potential roommates through the website.
* If the users already have a place and want to share/sublease their place, they can also post pictures of their place and share some information about the place such as short description, location, amenities, cost...

### Solutions
* The main problem that we will focus on is preventing scams. Because Find Roommate is built exclusively for SJSU students, therefore SJSU student ID and school Gmail will be required to make an account. 
* Another way to tackle this problem is the report system. A reporting system will be used to report any suspicious activities, spams, and scam accounts. Accounts with multiple reports will get punished according to how many times they got reported. (warnings, temporary for a week, and permanent ban).
* Surveys and personal questionnaires are good to help users find the perfect match. These questions are optional and users can fill out as many as they want. These questions could be about hobbies, background, etc.
* The website/app will allow users to upload images, and share their information, and stories about themselves.
* A rating system will be used to rate only user experience. There will be no rating system for roommates to avoid negative feedback and targets. These ratings could be a scale from 1 to 10 on the satisfaction of the users.
* Feedback system: only used to give feedback to the developers on how to improve the website.



### Steps to run the website
1. Since this website uses mySQL for backend database, we first have to run the mySQL server
    * follow this guide if you haven’t had mySQL on your laptop https://flaviocopes.com/mysql-how-to-install/
    * to start mysql server: run mysql.server start
    * to connect to mysql server: run mysql -u root -p
    * to create a database name rootdb: run create database rootdb;
    * to access rootdb database: run use rootdb;
2. Open your IDE (recommend IntelliJ) and run the backend folder (BackendApplication.java file)
3. Open VSC, cd to the frontend folder and run npm start run. Explore the website :) 
4. To stop mySQL server, run mysql.server stop

### Snapshots
<img width="1349" alt="Screen Shot 2023-05-03 at 7 32 18 PM" src="https://user-images.githubusercontent.com/41496282/236098267-2bc57852-f28b-4395-9203-be62c27f59f0.png">
<img width="1385" alt="Screen Shot 2023-05-03 at 7 32 46 PM" src="https://user-images.githubusercontent.com/41496282/236098440-44424763-040f-4364-bac0-df91dedff5ac.png">
<img width="1355" alt="Screen Shot 2023-05-03 at 7 33 04 PM" src="https://user-images.githubusercontent.com/41496282/236098493-50f93075-8f63-44ee-88df-762b53124005.png">
<img width="1380" alt="Screen Shot 2023-05-03 at 7 33 16 PM" src="https://user-images.githubusercontent.com/41496282/236098508-08a72a6f-48b9-4e4e-90ba-77a65b496a2f.png">
<img width="1363" alt="Screen Shot 2023-05-03 at 7 33 43 PM" src="https://user-images.githubusercontent.com/41496282/236098520-ba8a3f5b-bbb8-4cb1-9051-391950f97298.png">
<img width="1353" alt="Screen Shot 2023-05-03 at 7 34 00 PM" src="https://user-images.githubusercontent.com/41496282/236098534-2a522e6b-b516-4e37-b293-23a912224789.png">
<img width="997" alt="Screenshot 2023-04-22 at 6 43 16 PM" src="https://user-images.githubusercontent.com/98793540/236327424-555ce218-0fb5-4a76-b4bc-cde62715f882.png">
<img width="732" alt="Screenshot 2023-04-26 at 7 24 48 PM" src="https://user-images.githubusercontent.com/98793540/236327579-ad73dc40-b396-4766-8097-b9613764bd2a.png">



### References

[1] https://roomiapp.com/

