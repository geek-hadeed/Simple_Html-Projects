document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const quoteBox = document.getElementById('quote-box');

    // Array of quotes
    const quotes = [
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
        { text: "So many books, so little time.", author: "Frank Zappa" },
        { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
        { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
        { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
        { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
        { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
        { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" }
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function displayQuote() {
        quoteBox.classList.add('fade');
        
        setTimeout(() => {
            const { text, author } = getRandomQuote();
            quoteText.textContent = `"${text}"`;
            quoteAuthor.textContent = `- ${author}`;
            
            quoteBox.classList.remove('fade');
        }, 300);
    }

    // Display initial quote
    displayQuote();

    // Event listener for new quote button
    newQuoteBtn.addEventListener('click', displayQuote);
});