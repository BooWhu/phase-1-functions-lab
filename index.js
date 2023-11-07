function distanceFromHqInBlocks(pickupBlock) {
    const headquartersBlock = 42; // Scuber's headquarters is on block 42
    return Math.abs(pickupBlock - headquartersBlock); // Use Math.abs() to handle both uptown and downtown distances
  }
  function distanceFromHqInFeet(pickupBlock) {
    const blocks = distanceFromHqInBlocks(pickupBlock);
    return blocks * 264; // Each block is 264 feet long
  }
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTraveled = Math.abs(startBlock - destinationBlock);
    return blocksTraveled * 264; // Each block is 264 feet long
  }
  
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distanceInFeet <= 400) {
      return 0; // The first 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot beyond 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
  