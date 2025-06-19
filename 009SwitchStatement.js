//mon - 7am
//tue - thurs - 4am
//fri - 6am
//sat - sun - 8am

let day = "Holiday"

switch (day) {
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("6am");
    case 'Saturday':
    case 'Sunday':
        console.log("8am");
        break;
    default:
        console.log("7am - WatchVideos");
        

            
                
}