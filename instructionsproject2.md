# **Feature Request Proposal**: 
## ***Multiple Tasks for any To-Do List***

&nbsp;
&nbsp;

### **User Story**:
1. As a user, I should be able to have multiple tasks for any list I create.  
1. As a user, I should be able to mark a task as complete.
1. As a user, I should be able to see what tasks I have completed and have yet to do.
1. As a user, I should be able to see at a glance which To-Do lists are complete.

Example: If a want to get groceries, I would like to be able to create a list of items I need and mark them off my list.

&nbsp;

> &emsp; Acceptance Criteria

&emsp; &emsp; In order to complete Project 2, we need to implement this feature into your existing Project:

* Currently the project only allows one task per To-DO list.

* Your job is to update your project to allow multiple task items per To-Do list instead.
* In order to accomplish this you will have to update the data model to the app.  Each To-Do Item/Task(whichever you want to call it) should have a one to many relationship(A To-Do List can have many tasks).
* These tasks/items should have a status telling us if it is completed, incomplete, and in-progress.
* If all tasks/items are completed, the status of the To-Do list should completed, otherwise the list should be incomplete or in-progress depending on tasks.
* You will have to change existing logic when getting data from the backend when READING(GET Routes) and CREATING(POST routes) lists themselves, or adding tasks/items to a list.
* You will have to update both the Express App Controller and Route logic accordingly to support this behavior
* You will have to update the Front-End(which uses handlebars) to support the this new enhancement(because the current screen is just a text block)

&nbsp;

> &emsp; &emsp; Bonus: 
* Allow users to Update(UPDATE routes) Tasks/Items and Name of the To-Do List 
* Allow users to Delete(DELETE routes) Tasks/Items and Name of the To-Do List itself.  Deleting the To-Do list itself should delete all tasks/items associated.  Might want to look into CASCADING DELETES.

&nbsp;

**This assignment is due by 11:59PM CST, 7/10/2021**