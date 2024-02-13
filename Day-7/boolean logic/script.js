const hasDriverVision = true;
const hasGoodVision = true;
const hasBadVision = false;

console.log(hasDriverVision && hasGoodVision);//result -> true && true ->true

console.log(hasDriverVision && hasBadVision);//result -> true && false ->false

console.log(hasDriverVision || hasGoodVision);//result -> true || true ->true

console.log(hasDriverVision || hasBadVision);//result -> true || false ->true

console.log(!hasDriverVision);//result -> !(true) -> false


if (hasDriverVision && hasGoodVision) {
    console.log('you can drive!!!!');
} else {
    console.log('sorry you cant drive!');
}

const isTired = false;
if (hasDriverVision || hasGoodVision || isTired) {
    console.log('you can drive!!!!');
} else {
    console.log('sorry you cant drive!');
}


if (hasDriverVision && hasGoodVision && !isTired) {
    console.log('you can drive!!!!');
} else {
    console.log('sorry you cant drive!');
}