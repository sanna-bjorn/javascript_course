Begin your app by creating the Ship factory function.
Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

Ships should have a hit() function that increases the number of ‘hits’ in your ship.

isSunk() should be a function that calculates it based on their length and the number of ‘hits’.

Player

-needs coordinates to attack
-random coordinates x
-needs to know where there's already been an attack
-store attack coordinates x
-when generating new coordinates, check against the stored ones x
-needs to know the size of the board
-check the size of the board x
