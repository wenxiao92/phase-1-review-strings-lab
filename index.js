// Write your code in this file!
const currentUser = 'Grace Hopper';

// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; //code is more efficient than the above
//uses backtick to interpret the expression within the as interpolate variable rather than an actual string (when using quotes)

const excitedWelcomeMessage = welcomeMessage.toUpperCase();


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

