Smart Thermostat - Bug Documentation

Bug 1: Room Selection Error
Location: Line 207
Type: Logic error
Observed behaviour: Unable to correctly select rooms from dropdown. Application can't find the selected room.
Debugging Method: Console logging the selected value showed it contained an object reference instead of a string.

Bug 2:Duplication of overlay
Location:Line 154-156
Type of bug: Duplication of the overlay
Observed behaviour: overlay was repeated twice which does not make your code clean
debugging method: removed the initial overlay 




Bug 3: Preset Temperature Buttons Not Working
Location: Missing event handling for cool and warm buttons
Type of Bug: Functional Error
Identification Method: Code inspection - found preset buttons without event handlers
Fix: Added event delegation through the .default-settings container to handle clicks on the cool and warm buttons