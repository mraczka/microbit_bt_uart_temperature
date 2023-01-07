bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteValue("temp", input.temperature())
    basic.pause(500)
})
