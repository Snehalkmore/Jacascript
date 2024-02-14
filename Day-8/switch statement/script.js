const day = 'mon';

switch (day) {
    case 'mon':
        console.log('its monday waiting for tuesday !!');
        console.log('sprint planning');
        break;
    case 'tues':
        console.log('its monday waiting for tuesday !!');
        console.log('sprint work');
        break;
    case 'wed':
        console.log('its wednesday waiting for thursday !!');
        console.log('sprint work');
        break;
    case 'thur':
        console.log('its thursday waiting for firday !!');
        console.log('sprint work');
        break;
    case 'fri':
        console.log('its firday waiting for saturday !!');
        console.log('sprint work');
        break;
    case 'sat':
        console.log('its saturday waiting for sunday !!');
        console.log('sprint planning');
        break;
    default:
        console.log('take rest cause its sunday !!');
}