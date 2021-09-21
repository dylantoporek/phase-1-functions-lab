// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue > 42)
    return (someValue - 42);
    
    else if (someValue < 42);
    return (42 - someValue);
    }

        
function distanceFromHqInFeet(someValue){
    if (someValue > 42)
    return ((someValue-42)*264);
    if (someValue < 42)
    return ((42 - someValue)*264);
}

function distanceTravelledInFeet(start, destination){
    if (start > destination)
    return ((start - destination) * 264);
    
    else if (start < destination)
    return ((destination - start) * 264);
}

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination);
    
    if (distanceTravelledInFeet(start, destination) < 400)
    return (0);
    
    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000)
    return ((distanceTravelledInFeet(start, destination) - 400) * .02);
    
    if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500)
    return (25);
    
    if (distanceTravelledInFeet(start, destination) > 2500)
    return ('cannot travel that far');
    }
    