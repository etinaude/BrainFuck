# Brainfuck
This is some code written in [brainfuck](https://en.wikipedia.org/wiki/Brainfuck), a simplistic, esoteric programming language, with only 8 instructions, it is turning complete.

brain fuck consists of 8 characters.<br>
  \>   move the data pointer right<br>
  \<   move the data pointer left<br>
  \+   increment the current cell<br>
  \-   decrement the current cell<br>
  \,   get 1 byte of user input<br>
  \.   output the current cell value in character form<br>
  \[   if the current cell is 0 jump forwards to the instruction after the next ]<br>
  ]   if the current cell is non-0 jump backwards to the instrucytion after the previous \[<br>

I have also made a brainfuck interpreter in [google sheets](http://bit.ly/2X1q8h6), I made this to be a learning tool, it executes the code slowly so the user is able to see what happens as the programme steps through the code.

![interpreter picture](https://github.com/etinaude/BrainFuck/blob/master/pictures/demo.png)

## Computer

I am Currently developing a computer PCB to run on bf code, I will upload the schematics once I have made more progress.
