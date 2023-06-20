// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(street-42)
    
}

console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))



function distanceFromHqInFeet(street) {

return Math.abs(street-42)*264
}
function distanceTravelledInFeet(start,destination) {
    

    return Math.abs(destination-start)*264

  }
  function calculatesFarePrice(start, destination){
    let feet=Math.abs(destination-start)*264
    let price;
    if(feet<=400){
        price=0
    }
    else if(feet>400 && feet<=2000){
        price=(feet-400)*0.02
    }
    else if(feet>2000 && feet<=2500){
        price=25
    }
    else if(feet>2500){
        price= 'cannot travel that far'
    }
    return price
  }