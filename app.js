document.addEventListener('DOMContentLoaded', () => {
    // Create main container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Initial state container
    const initialState = document.createElement('div');
    initialState.id = 'initial-state';
    container.appendChild(initialState);

    // Add crying Chiikawa GIF
    const gift = document.createElement('img');
    gift.src = 'https://media.tenor.com/9NtNRJfEhSQAAAAi/chiikawa-cry.gif';
    gift.alt = 'Chiikawa';
    gift.className = 'gift';
    initialState.appendChild(gift);

    // Add message
    const message = document.createElement('h1');
    message.className = 'message';
    message.textContent = 'Will you be my Valentine?';
    initialState.appendChild(message);

    // Add button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    initialState.appendChild(buttonContainer);

    // Add Yes button
    const yesButton = document.createElement('button');
    yesButton.className = 'button yes-button';
    yesButton.textContent = 'Yes';
    yesButton.onclick = handleYes;
    buttonContainer.appendChild(yesButton);

    // Add No button
    const noButton = document.createElement('button');
    noButton.className = 'button no-button';
    noButton.textContent = 'No';
    noButton.onclick = moveButton;
    buttonContainer.appendChild(noButton);

    // Create success state (hidden initially)
    const successState = document.createElement('div');
    successState.id = 'success-state';
    successState.style.display = 'none';
    container.appendChild(successState);

    // Add happy bear GIF
    const successGift = document.createElement('img');
    successGift.src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif';
    successGift.alt = 'Happy Bear';
    successGift.className = 'gift';
    successState.appendChild(successGift);

    // Add success message
    const successMessage = document.createElement('h1');
    successMessage.className = 'message';
    successMessage.textContent = 'You are stuck with me! Happy Valentine\'s Day! ❤️';
    successState.appendChild(successMessage);
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
