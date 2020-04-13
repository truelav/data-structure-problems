// On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

// The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

// Return the number of pawns the rook can capture in one move.

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let row,col
    for(let i = 0; i < board.length; i ++){
        for(let j = 0; j < board[i].length; j ++){
            if(board[i][j] == 'R'){
                 row = i
                 col = j
                break;
            }
               
        }
    }
    
    let count = 0;
    
    for(let i = row; i >= 0; i -- ){
        if(board[i][col] == 'B')
            break
        if(board[i][col] == 'p'){
            count ++;
            break
        }
            
    }
    
    for(let i = row; i < board.length; i ++){
         if(board[i][col] == 'B')
            break
         if(board[i][col] == 'p')
            {
            count ++;
            break
        }
    }
    
    for(let i = col; i >= 0; i --){
        if(board[row][i] == 'B')
            break
        if(board[row][i] == 'p')
            {
            count ++;
            break
        }
    }
    
    for(let i = col; i < board[0].length; i ++){
        if(board[row][i] == 'B')
            break
        if(board[row][i] == 'p')
            {
            count ++;
            break
        }
    }
    
    return count
};
