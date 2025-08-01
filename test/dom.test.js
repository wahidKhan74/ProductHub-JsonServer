import { createButton , createButtonWithEvent } from "../js/dom";
import { getByText } from "@testing-library/dom";

// Test Suite
describe("DOM Testing with Jest", ()=> {

    // setup 
    beforeEach(()=>{
        document.body.innerHTML = ''; // Clear before each test
    });

    test('renders a button with correct text', ()=>{
        const button = createButton();
        expect(button).toBeInTheDocument(); // custom jest-dom matcher
        expect(button.textContent).toBe('Submit');
    });

    test('button should exist in the DOM', ()=>{
        createButton();  // create a button
        const foundButton = getByText(document.body, 'Submit');
        expect(foundButton).not.toBeNull(); // button exist
    });

    test('calls function on button click', ()=>{
        const mockFun = jest.fn(); // mocking function
        const button = createButtonWithEvent(mockFun);
        // simulate click
        button.click();
        expect(mockFun).toHaveBeenCalledTimes(1);
    })
})
