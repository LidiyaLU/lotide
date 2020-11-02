const assertEqual = require('../assertEqual');
const tail = require('../tail');

actual_arr = [2, 4, 18, 9];
tailed_arr = tail(actual_arr);
expected_arr = [4, 18, 9];

for (let i = 0; i < expected_arr.length; i++) { 
    
    assertEqual(actual_arr[i],tailed_arr[i]);
};