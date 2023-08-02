function splitAmount(){
    let amount = parseInt(document.getElementById("amount").value);
    let people = parseInt(document.getElementById("people").value);
    let message1 = document.getElementById("message1");
    let message2 = document.getElementById("message2");
    //Check the given amount is valid
    if (isNaN(amount)||amount<=0) {
        message1.textContent="Please provide valid amount";
        return;
    } 
    //Check the number of people 
    if (isNaN(people)||people<2) {
        message2.textContent = "Value should be greater than 1";
        return;
    } 
    //Split the Amount
    let splitAmount = amount/people;
    document.getElementById("result").value = `${splitAmount.toFixed(2)}`;
}


