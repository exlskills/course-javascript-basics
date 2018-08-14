var day = 3;
switch (day) { 
    // without the "break;", all the cases after the selected case are executed
    // that's why using the "break;" statement is extremely important
    case 1: console.log('Monday');
    case 2: console.log('Tuesday');
    case 3: console.log('Wednesday');
    case 4: console.log('Thursday');
    case 5: console.log('Friday');
    case 6: console.log('Saturday');
    case 7: console.log('Sunday');
    default: console.log('The number has to be between 1 and 7');
}