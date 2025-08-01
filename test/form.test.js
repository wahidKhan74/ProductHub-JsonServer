import { createLoginForm } from '../js/form';
import { getByPlaceholderText, fireEvent , getByText} from '@testing-library/dom';

// create test suite
describe('Login form', ()=> {

    // setup 
    beforeEach(()=>{
        document.body.innerHTML = ''; // Clear before each test
    });

    test('renders input and button', () => {
        // create form
        createLoginForm();
        // input exist
        const foundInput = getByPlaceholderText(document.body, 'Enter username');
        expect(foundInput).not.toBeNull(); // input exist

        // button exist
        const foundButton = getByText(document.body, 'Login');
        expect(foundButton).not.toBeNull(); // button exist
    });

    test('allows user input', () => {
        // create login form and get input
        const { input } = createLoginForm();
        // enter input text
        fireEvent.input(input, { target : { value :'Admin'}});
        // validate entered text matched.
        expect(input.value).toBe('Admin');
    });
});