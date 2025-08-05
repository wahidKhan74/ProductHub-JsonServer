export  function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.id ="submit-btn";
    document.body.appendChild(button);
    return button;
}

// create a button with an event (call logic button when button is clicked)
export function createButtonWithEvent(callback) {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.addEventListener('click', callback);
  document.body.appendChild(button);
  return button;
}


// createButton();