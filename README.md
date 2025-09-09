Click Speed Challenge
---

A simple clicker game web app where users can test how many times they can click within 10 seconds.
The game tracks scores, displays a live click counter, and maintains a scoreboard.
Players can add, view, and delete scores in real time.
The layout uses CSS Flexbox for responsive design.

Instructions
---

Enter your name and click "Start Game".

Click the button as fast as you can for 10 seconds.

At the end of the round, your score and clicks per second (CPS) will be saved and displayed in the scoreboard.

You can delete individual scores by clicking the Delete button next to each entry.

Technical Achievements
---

Single Page App:
The app dynamically updates without refreshing the page. Submitting a score automatically updates the scoreboard using server responses.

Delete Functionality:
Added a DELETE endpoint to remove specific scores, this updates the table on the client side in real time.

Derived Field Calculation:
The server calculates clicks per second (score / 10) before sending data back to the client.

Design / UX Achievements
---

User Testing:
Tested with my roommates and myself using the think-aloud protocol.

Task: Start a game, play for 10 seconds, then delete a score.

Overall Feedback: Everything worked well, didn't like the initial color scheme because it was too bright.

Problem: My roommate didn’t realize they had to click “Start Game” before clicking the main button.

Change Suggested: Change to darker colors and change the color of the click button to something other than red.
