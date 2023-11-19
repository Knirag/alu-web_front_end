// Embrace lexical scoping and extend a warm welcome
function personalizeGreeting(first, last) {
    // Define a function to showcase the full name
    function revealFullIdentity() {
        const completeName = `${first} ${last}`;
        alert(`Greetings, dear ${completeName}!`);
    }

    // Trigger the display of the full name
    alert(revealFullIdentity());
}

