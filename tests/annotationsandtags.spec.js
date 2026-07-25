import {test} from '@playwright/test'


//Annotations
test.skip('Test one', async({page}) => {

})

test('not yet ready', async({page}) => {
    
    test.fail();
});

test.fixme('test to be fixed', async ({page}) => {
    // ...
});

test('slow test', async({page}) => {
    test.slow();
});

//tags
test('Test login page @smoke', async({page}) => {
    // ...
});