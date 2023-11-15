# Social Network API
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  
## Description
This is an API for a social media network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. The API is tested using Insomnia Core.  
Working with this application, I learned how to build an API using Express.js and how to interact with a MongoDB database using Mongoose. The most challenging part of this project was working with the Mongoose ODM. I had to learn how to use the Mongoose methods to create, read, update, and delete data from the database. The Mongoose documentation was a little confusing but with the help of AI and Google I was able to figure out what I wanted to do.  
I really enjoy working with databases and APIs. I am looking forward to learning more about them and how to use them in future projects.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
Make sure Node.js, MongoDB, and Insomnia Core are installed on your computer. Clone the repo to your local machine. Open the repo, and run `npm install` to install the express.js and mongoose.js dependencies. Run `node index` or `npm start` to start the server. Open Insomnia Core and test the routes.

## Usage

Once you have installed the dependencies and started the server, open Insomnia Core and test the routes. You can create, read, update, and delete users, and thoughts. You can also add and remove reactions to thoughts, and add and remove friends from a user's friend list.  

[Watch the walkthrough](https://drive.google.com/file/d/1K_TzEhbU0JBqB_Rvp6QgnTTc04BjSqpM/view)  

Here are some examples of the routes being tested in Insomnia Core:  
Get All Users:  
<img src="./public/images/get_users.png" alt="Get Users route" width="600" />  
  
Get All Thoughts:  
<img src="./public/images/get_thoughts.png" alt="Get Thoughts route" width="600" />

Add Friend:  
<img src="./public/images/add_friend.png" alt="Post Add friend route" width="600" />  

Remove Friend:  
<img src="./public/images/delete_friend.png" alt="Delete Friend route" width="600" />  

Create a Thought:  
<img src="./public/images/create_thought.png" alt="Post Thought route" width="600" />


## Credits
The class examples and activities for module 18 were very helpful in completing this project. Along with the Mongoose documentation, ChatGPT, Stackoverflow, Geeksforgeeks, and Google.
* [Mongoose Documentation](https://mongoosejs.com/docs/api.html)
* https://mongoosejs.com/docs/schematypes.html
* https://mongoosejs.com/docs/api/query.html#Query.prototype.findOneAndUpdate()
* [ChatGPT](https://chat.openai.com/)
* https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
* https://www.geeksforgeeks.org/mongoose-schematypes-getters/

## License
  This project is licensed under the MIT License. 
  https://opensource.org/licenses/MIT

## Contributing
Create an issue in repo: https://github.com/milena-allaway/socialAPI/issues

## Tests
N/A. No tests are included in this app.

## Questions
For any questions or feedback, please contact me via:
- GitHub: [milena-allaway](https://github.com/milena-allaway)
- Email: [milenawheatcroft@gmail.com](mailto:milenawheatcroft@gmail.com)

***

Made with ❤️ by Milena Allaway 2023
