let package="standard";
switch(package){
    case 'standard':
    console.log("standard might take 3-5days");
    break;
    case 'express':
        console.log("express might take 1-2days");
        break;
        
    case 'overnight':
        console.log("would be delivered the next day");
        break;
   default:
         console.log("Invalid package");
}