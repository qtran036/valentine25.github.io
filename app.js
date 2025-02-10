document.addEventListener('DOMContentLoaded', () => {
    // Create main container
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    // Initial state container
    const initialState = document.createElement('div');
    initialState.id = 'initial-state';
    container.appendChild(initialState);

    // Add Bubu Dudu GIF from local repository
    const gift = document.createElement('img');
    gift.src = './bubu-dudu.gif';  // Local path to the GIF
    gift.alt = 'Bubu Dudu with Hearts';
    gift.className = 'gift';
    initialState.appendChild(gift);

    // Rest of your code remains the same...
