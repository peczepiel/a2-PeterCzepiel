Assignment 2 - Click Speed Challenge - Peter Czepiel
---

Peter Czepiel Deployed Site: https://a2-peterczepiel.onrender.com

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


User 1: Tested with my roommate Timothy Hutzley to see if the website was desirable to other people.

Task: Start a game, play for 10 seconds, then delete a score. (this was done a few times)

Problems: Initially the design was very bright colored and Timothy claimed it was too distracting. He also did not like the colors I had chose initially and wanted them to be changed.

Comments: One comment from Timothy that surprised me was he really liked the initial idea and thought it was fun to test his speed against mine.

Changes made: I had to change the entire color scheme


User 2: Tested with my classmate Shawn Patel to see if the website was working correctly.

Task: Start a game, play for 10 seconds, then delete a score. (also try to beat previous scores)

Problems: Shawn did not like how initially there was no way to track your score until the game was over.

Comments: Shawn really enjoyed the new color scheme and like the challenge of trying to beat mine and Timothy's scores.

Changes made: I added a live counter that shows your current score while the game is still going.
