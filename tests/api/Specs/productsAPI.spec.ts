import { test, expect, request } from '@playwright/test';
import productRequest from '../Endpoints/productsEndpoints'


//*********Tests */


test.describe('products API test', () =>{
    test.beforeEach('befor each test', async({ page }) => {
            await page.route('**/*google*/**', async route => {
            await route.abort();
        });

        await page.route('**/*analytics*/**', async route => {
            await route.abort();
        });
    })

    test('Check products get success response', async({request}) => {
        const response = await productRequest.getAllProducts(request);
        const JsonResponse = await response.json();
        console.log(JsonResponse);
        await expect(response.status()).toBe(200);
    })

    test('Check products search success response', async({request}) => {
        const response = await productRequest.searchForProducts(request);
        const JsonResponse = await response.json();
        console.log(JsonResponse);
        await expect(JsonResponse.responseCode).toBe(200);
    })

    test('Test Mock Response', async ({ page }) => {
        await page.route('https://automationexercise.com/products',  async route => {
            await route.fulfill({
                status: 400,
                body: 'Not Found!'
            })
        });
        await page.goto('https://automationexercise.com');
        await page.getByRole('link', { name: ' Products' }).click();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    })

    test('Test Mock Response: Abort images', async ({ page }) => {
        await page.route('**/*.{png,jpg,jpeg}', async route => {
            await route.abort();
        });
        await page.goto('https://automationexercise.com');
        await page.getByRole('link', { name: ' Products' }).click();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    });
})