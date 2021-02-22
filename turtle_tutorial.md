# Turtle Tutorial

## Step 1
``` blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    for (let index = 0; index < 4; index++) {
        turtle.rt(90)
        turtle.forward(50)
    }
})

```
