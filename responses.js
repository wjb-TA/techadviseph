function getBotResponse(input) {
    //rock paper scissors
    const keywords = ["hi", "hello"]
    const keywords2 = ["wan","news","weather","cooking","pasta","tech"]
    const keywords3 = ["about"]
    const keywords4 = ["goal", "aim"]
    const keywords5 = ["service", "services"]
    const keywords6 = ["location", "where are you from"]
    const keywords7 = ["contact", "contacts", ]

if( keywords.some(keyword => input.includes(keyword) )) {
    return "Hello there!";
    } else if ( keywords2.some(keyword2 => input.includes(keyword2) )) {
        return "hi";
    } else if ( keywords3.some(keyword3 => input.includes(keyword3) )) {
        return "Tech Advise is all about giving organizations with most reliable and trustworthy solutions and allies.";
    }else if ( keywords4.some(keyword4 => input.includes(keyword4) )) {
        return "The goal is giving organizations with most reliable and trustworthy solutions and allies.";
    }else if ( keywords5.some(keyword5 => input.includes(keyword5) )) {
        return "Our services helps Small and Medium-sized Enterprise with the most trustworthy solutions.";
    }else if ( keywords6.some(keyword6 => input.includes(keyword6) )) {
        return "We are located in Lanang, Pampanga Davao City, Philippines";
    }else if ( keywords7.some(keyword7 => input.includes(keyword7) )) {
        return "You can contact us by email or phone number: ask@techadviseph.com | +63 956 8905641";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";
    } else if (input == "Tell me about your company") {
        return "Tech Advise is all about giving organizations with most reliable and trustworthy solutions and allies. ";
    } 
     else if (input == "Help") {
        return "Here are the available commands: Hello, Rock, Paper, Scissors";
     }
    else {
        return "Try asking something else!";
    }
}
