document.addEventListener('DOMContentLoaded', () => {
    // Create main container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Initial state container
    const initialState = document.createElement('div');
    initialState.id = 'initial-state';
    container.appendChild(initialState);

    // Add Bubu Dudu heart GIF
    const gift = document.createElement('img');
    gift.src = 'https://media.tenor.com/b0CqcAAAAACi/bubu-dudu.gif';  // New Bubu Dudu GIF
    gift.alt = 'Bubu Dudu with Hearts';
    gift.className = 'gift';
    initialState.appendChild(gift);

    // Rest of your code remains the same
    const message = document.createElement('h1');
    message.className = 'message';
    message.textContent = 'Will you be my Valentine?';
    initialState.appendChild(message);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    initialState.appendChild(buttonContainer);

    const yesButton = document.createElement('button');
    yesButton.className = 'button yes-button';
    yesButton.textContent = 'Yes';
    yesButton.onclick = handleYes;
    buttonContainer.appendChild(yesButton);

    const noButton = document.createElement('button');
    noButton.className = 'button no-button';
    noButton.textContent = 'No';
    noButton.onmouseover = moveButton;
    buttonContainer.appendChild(noButton);

    const successState = document.createElement('div');
    successState.id = 'success-state';
    successState.style.display = 'none';
    container.appendChild(successState);

    const successGift = document.createElement('img');
    successGift.src = 'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif';
    successGift.alt = 'Happy Bear';
    successGift.className = 'gift';
    successState.appendChild(successGift);

    const successMessage = document.createElement('h1');
    successMessage.className = 'message';
    successMessage.textContent = 'You are stuck with me! Happy Valentine\'s Day! ❤️';
    successState.appendChild(successMessage);
});

function moveButton() {
    const button = document.querySelector('.no-button');
    const container = document.querySelector('.container');
    
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function handleYes() {
    document.getElementById('initial-state').style.display = 'none';
    document.getElementById('success-state').style.display = 'block';
}
