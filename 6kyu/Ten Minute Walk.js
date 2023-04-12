function isValidWalk(walk) {
    // Check that the walk array contains exactly 10 directions
    if (walk.length !== 10) {
      return false;
    }
    
    // Initialize the x and y coordinates to (0, 0)
    var x = 0;
    var y = 0;
    
    // Iterate over each direction in the walk array and update the coordinates
    for (var i = 0; i < walk.length; i++) {
      var direction = walk[i];
      switch (direction) {
        case 'n':
          y++;
          break;
        case 's':
          y--;
          break;
        case 'e':
          x++;
          break;
        case 'w':
          x--;
          break;
      }
    }
    
    // The walk is valid if and only if the final coordinates are (0, 0)
    return x === 0 && y === 0;
  }
  