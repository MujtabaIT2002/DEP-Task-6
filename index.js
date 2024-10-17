const quotes = [
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "An unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "Winning isn’t everything, but wanting to win is.",
        author: "Vince Lombardi"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
        author: "Pablo Picasso"
    },
    {
        quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus"
    },
    {
        quote: "Either you run the day, or the day runs you.",
        author: "Jim Rohn"
    }
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', displayQuote);
