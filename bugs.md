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
Fix: Added event delegation through the .default-settings container to handle clicks on the cool and warm buttons.


Bug 4:
Location: Line 145-151
Type of bug: Warm and Cool colors mismatch
Identification method:Visual inspection of the code
Fix: Swapped warm color  with cool color

Bug 5:
location:
Type of bug: Wrong decreement and increement button adjustment
Identification method: Visual inspection
fix:Added parenthesis to the function name.

Bug 6: Preset Temperature Buttons Not Working
Location: Missing event handling for cool and warm buttons
Type of Bug: Functional Error
Identification Method: Code inspection - found preset buttons without event handlers
Fix: Added event delegation through the .default-settings container to handle clicks on the cool and warm buttons

Bug 7
Location:
Type of bug:The room status message displayed incorrect text that didn't match the expected temperature control behavior
Identification method:Code inspection and analysis of application behavior and temperature control logic
Fix:Change the comparison operator from > to < to correctly display status messages that match the temperature control logic and also swapped the cooling room and warming room

Bug 8
