import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

describe('Product Management Logic', ()=> {
    let script;

    // setup 
    beforeEach(()=>{
        // Load HTML
        document.documentElement.innerHTML = html.toString();

        // Load and excute script.js
        script = require('../src/script.js');
    });

    // clean up
    afterEach(()=>{
        jest.resetModules(); // clear require cache
        // Reset fetch mock before each test
        global.fetch = jest.fn();
    });


    test('show toast message', ()=>{
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');

        script.showToast('Hello Jest Test.');
        expect(toastMessage.textContent).toBe('Hello Jest Test.');
        expect(toast.className).toContain('bg-green-500');
        expect(toast.style.transform).toBe('translateX(0)');
    });

    test('resets form correctly', () => { 
        const nameField = document.getElementById('name');
        const priceField = document.getElementById('price');
        const descriptionField = document.getElementById('description');
        const formTitle = document.getElementById('formTitle');
        const submitButtonText = document.getElementById('submitButtonText');
        const cancelEditButton = document.getElementById('cancelEdit');
        const productId = document.getElementById('productId');

        // add sample test values
        nameField.value = 'Test';
        priceField.value = '100';
        descriptionField.value = 'Test Description';
        productId.value = 'PID202';
        cancelEditButton.classList.remove('hidden');

        //reset form
        script.resetToAddMode();

        // expected result after clearing form
        expect(productId.value).toBe('');
        expect(nameField.value).toBe('');
        expect(priceField.value).toBe('');
        expect(descriptionField.value).toBe('');
    
        expect(formTitle.textContent).toBe('Add New Product');
        expect(submitButtonText.textContent).toBe('Save Product');
        expect(cancelEditButton.classList.contains('hidden')).toBe(true);
    });

    test('fetchProducts displays product items', async () => { 
        const mockProducts = [
            { id: 1, name: 'Laptop', price: 999 },
            { id: 2, name: 'Phone', price: 499 }
        ];

        // Mock global.fetch manually
        global.fetch?.mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockProducts)
        })

        await script.fetchProducts();

        const productList = document.getElementById('productList');
        
        expect(productList.children.length).toBe(2);
        expect(productList.textContent).toContain('Laptop');
        expect(productList.textContent).toContain('Phone');

    });

});