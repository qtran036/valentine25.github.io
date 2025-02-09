document.addEventListener('DOMContentLoaded', () => {
    // Create main container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Add gift image
    const gift = document.createElement('img');
    gift.src =  'https://tenor.com/bZQ5S.gif;'// Gift box icon
    gift.className = 'gift';
    container.appendChild(gift);

    // Add message
    const message = document.createElement('h1');
    message.textContent = 'Will you be my Valentine?';
    message.className = 'message';
    container.appendChild(message);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    container.appendChild(buttonContainer);

    // Add Yes button
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.className = 'button yes-button';
    buttonContainer.appendChild(yesButton);

    // Add No button
    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.className = 'button no-button';
    buttonContainer.appendChild(noButton);

    // Add event listeners
    yesButton.addEventListener('click', () => {
        message.textContent = 'You are stuck with me! Happy Valentine\'s Day! ❤️';
        buttonContainer.style.display = 'none';
        gift.classList.add('https://tenor.com/v6mdDAbN7Ob.gif');
    });

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});

function moveButton() {
    const button = document.querySelector('.no-button');
    button.style.position = 'absolute';
    button.style.left = `${Math.random() * 80}%`;
    button.style.top = `${Math.random() * 80}%`;
}

function handleYes() {
    document.getElementById('initial-state').style.display = 'none';
    document.getElementById('success-state').style.display = 'block';
} 
