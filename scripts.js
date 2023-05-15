document.querySelector('.chatbot-launcher').addEventListener('click', function () {
    const chatbotContainer = document.querySelector('.chatbot-container');
    chatbotContainer.style.display = 'flex';
    chatbotContainer.classList.add('visible');
    this.style.display = 'none';
});

document.querySelector('.close-button').addEventListener('click', function () {
    const chatbotContainer = document.querySelector('.chatbot-container');
    chatbotContainer.style.display = 'none';
    chatbotContainer.classList.remove('visible');
    document.querySelector('.chatbot-launcher').style.display = 'inline-block';
});


function scrollToBottom(el) {
    setTimeout(function () {
        el.scrollTop = el.scrollHeight;
    }, 100); // add a 100ms delay
}

const userInput = document.querySelector('.user-input');
const sendButton = document.querySelector('.send-button');
const chat = document.querySelector('.chat');
const chatWindow = document.querySelector('.chat-window');

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.classList.add('msg', 'user-message');
        chat.appendChild(userMessage);

        const userMessageTimestamp = document.createElement('div');
        userMessageTimestamp.textContent = new Date().toLocaleTimeString().substring(0, 5);
        userMessageTimestamp.classList.add('message-timestamp');
        userMessage.appendChild(userMessageTimestamp);

        // Scroll to bottom
        scrollToBottom(chatWindow);

        // Clear input field
        userInput.value = '';

        setTimeout(function () {
            // Show the typing indicator
            const typingIndicator = document.querySelector('.typing-indicator');
            typingIndicator.style.display = 'inline-block';

            // Add a delay before the bot responds
            setTimeout(function () {

                // Hide the typing indicator
                typingIndicator.style.display = 'none';

                // This is where you'll add the code to send the user's message to the ChatGPT API and get the response
                // For now, let's just display a predefined message
                const botMessage = document.createElement('div');
                botMessage.textContent = "I'm sorry, I didn't quite get that. Could you please rephrase your question?";
                botMessage.classList.add('msg', 'bot-message');
                chat.appendChild(botMessage);

                const botMessageTimestamp = document.createElement('div');
                botMessageTimestamp.textContent = 'Boti ' + new Date().toLocaleTimeString().substring(0, 5);
                botMessageTimestamp.classList.add('message-timestamp');
                botMessage.appendChild(botMessageTimestamp);

                // Scroll to bottom
                scrollToBottom(chatWindow);
            }, 2000); // The delay is 1 second (1000 milliseconds)
        }, 1000);
    }
}


sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // to prevent form submission on pressing Enter
        sendMessage();
    }
});

// Add event listeners for the new elements
document.querySelector('.home-icon').addEventListener('click', function () {
    // Add your code to handle the "Home" icon click event
});

document.querySelector('.return-to-assistant').addEventListener('click', function () {
    // Add your code to handle the "Return to assistant" button click event
});

document.querySelector('.altx-info').addEventListener('click', function () {
    // Add your code to handle the "What is Altx Africa" link click event
});

document.querySelector('.contact-team').addEventListener('click', function () {
    // Add your code to handle the "Contact our team" link click event
});
