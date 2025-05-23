class PaymentError extends Error {
    constructor(code, message) {
        super(message);
        this.name = "PaymentError"
        this.code = code;
        const codeMessageMap = {
            'insufficient_funds': 'You do not have enough funds to complete this payment',
            'invalid_carrd': 'The card number you entered is invalid',
        }
        this.userMessage = codeMessageMap[code] || "An error ocurred with your payment";
    }
}

async function makePayment() {
    const availableFunds = 50;
    const payment = 60;

    if (payment > availableFunds) {
        throw new PaymentError('insufficient_funds', `User tried to ${payment} with available funds ${availableFunds}`);
    }

    return 'payment successful';
}

try {
   await makePayment(); // for aync function becuse without won't catch errors
} catch(err) {
    if (err instanceof PaymentError) {
        if (err.code === 'insufficient_funds') {
            alert(err.userMessage);
            console.log(err.message);
        }
    
        if (err.code === 'invalid_card') {
    
        }
    }
}

// with the same case and use async makePayment, we won't have any error like alert
// in console log will be Uncaught(in promise) ReferenceError: transaction is not defined as makePayment
// await should be added like resolve()