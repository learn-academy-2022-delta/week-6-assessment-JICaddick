# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix the oversight above you'd have to create a foreign key using Rails genererate and then run a migration so it moves over to the rails app. Since the cohort has many students the foreign key would be on the Student model.

Researched answer: The foreign key always goes on the belongs_to side. Naming convention dictates that we should always name them modelname_id and that we use an integer as our data type. If we forgot our foreign key we could use a migration to update our database.

2. Which RESTful routes must always be passed params? Why?

Your answer: The restful routes which will always be passed params are index, new, show, and edit. When using index we're asking to be shown something so we have to say what we want to see; we could use * for example and see everything. When creating a new entry we'll need params to identify the fields we want to include on our form. Show needs params because, again, we need to say what it is we want to see and finally edit requires params to know which information we're updating- id etc. 

Researched answer: Params are needed when describing a specific path and are marked with a :. The method we generate will then return the params when it acts. We can acess the value of our parameters because they have a method generated. Path parameters can be optional or requisite. We could give our users a form to fill our asking for the day and month of their birth- the year could be optional.. Granted the only use I can think of for such information would be some kind of horoscopy app but I think I've made my point. 

3. Name three rails generator commands. What is created by each?

Your answer: We can use rails generate model to create a model for our app- the model acts as a go-between from the controller to the database via active record. We can use rails generate controller to create a controller for our App- the controller takes information back from the model and passes it to the view via routes. And finally, we can use rails generate migration to, for example, update the name of a column in our db. 

Researched answer: Generators are code blocks which generate code. By writing rails generate model NAME column_name:column_type we 'automagically' generate an ActiveRecord and create the db migrations needed for it. rails g scaffold is another generate command but should be used with caution and only on very conventional CRUD apps/ testing. 


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The controller method here is the index and it would show us all students. 
action: "POST" location: /students
The controller method here is create and it would add a new record to our db.
action: "GET" location: /students/new
The controller method here is new and it would show us a new form. 
action: "GET" location: /students/2
The controller method here is show and it would show us the item with an id of 2
action: "GET" location: /students/2/edit
The controller method here is edit and it would show us the edit form for the corresponding id (2).
action: "PATCH" location: /students/2
The controller method here is update and it would allow us to edit the item with :id.
action: "DELETE" location: /students/2
The controller method here is destroy and it allows us to delete items with particular ids.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


1. As a user, I can download the app and see an aesthetically pleasing landing page.
2. As a user, I can create an account.
3. As a user, I can create a new to-do list and give it a name. 
4. As a user, I can add items to my to-do list.
5. As a user, I can mark items on my to-do list as pending or done. 
6. As a user, I can mark different items on my to-do list with a high or low priority.
7. As a user, I can delete items from my to-do list. 
8. As a user, I can share my to-do list with others using a link.
9. As a user, thosecd week   who I've shared my list with can also edit the list. 
10. As a user, I can delete my account along with all its data. 
