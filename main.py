def on_a_pressed():
    for index in range(4):
        turtle.rt(90)
        turtle.forward(50)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)
