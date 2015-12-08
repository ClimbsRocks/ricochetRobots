var ricochetRobots = function(board) {
  
}



var Board = function(n) {
  var board = [];
  var goalPlaced = false;
  for( var i = 0; i < n; i++ ) {
    var row = [];
    for( var j = 0; j < n; j++ ) {
      // for now, we will assume the entire square has to be a wall or not
      // in the future, we will want to allow only certain boundaries of a square to be a wall or not (top and left, for example, but not bottom or right)
      var squareObj = {
        wall: false,
        goal: false
      };

      // we will have walls on 10% of our squares
      if( Math.random() < .1) {
        squareObj.wall = true;
      }

      // with this math, we will have the goal placed somewhere near the middle of the board.
      // or, if we haven't placed a goal by the last piece, place the goal there
      if( (Math.random() < 2/(n*n) || (i + 1 === n && j + 1 === n) ) && goalPlaced === false ) {
        squareObj.goal = true;
        goalPlaced = true;
      }
      row.push(squareObj);
    }
    board.push(row);

  } 
  return board;
}

var board1 = Board(8);

console.log(board1);
