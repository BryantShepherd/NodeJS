function printableMessage() {
    var message = 'hello';
    function setMessage(newMessage){
        if (!newMessage) throw new Error('cannot set empty message');
        message = newMessage
    }
    function getMessage() {
        return message;
    }
    function printMessage(){
        console.log(message);
    }
    return {
        setMessage: setMessage,
        getMessage: getMessage,
        printMessage: printMessage
    };
}

var aweesome1 = printableMessage();
aweesome1.printMessage();

var aweesome2 = printableMessage();
aweesome2.setMessage("hiiii");

aweesome1.printMessage();