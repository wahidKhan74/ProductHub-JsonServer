// create a form with a input and and a submit button
export function createLoginForm() {
  const form = document.createElement('form');

  // create input
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter username';
  input.id = 'username';

  // create submit button
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Login';

  // append input
  form.appendChild(input);
  // append button
  form.appendChild(button);

  // append form to document body
  document.body.appendChild(form);

  return { form, input, button };
}

// createLoginForm();
