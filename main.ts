controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        turtle.rt(90)
        turtle.forward(50)
    }
})
