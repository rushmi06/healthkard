export default function greets() {
    const hours = new Date().getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning!";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return greeting;
}
