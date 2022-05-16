function isSolved(board) {
    // TODO: Check if the board is solved!
    if(Number(board[0][0])===Number(board[0][1]) && Number(board[0][0])===Number(board[0][2]) && board[0][0]!=0) {
        console.log('here1')
        return board[0][0]}
    else if (Number(board[1][0])===Number(board[1][1]) && Number(board[1][0])===Number(board[1][2]) && board[1][0]!=0) {
        console.log('here2')
        return board[1][0]}
    else if (Number(board[2][0])==Number(board[2][1]) && Number(board[2][0])==Number(board[2][2]) && board[2][0]!=0) {
        console.log('here3')
        return board[2][0]}
    else if (Number(board[0][0])===Number(board[1][0]) && Number(board[0][0])===Number(board[2][0]) && board[0][0]!=0) {
        console.log('here4')
        return board[0][0]}
    else if (Number(board[0][1])===Number(board[1][1]) && Number(board[0][1])===Number(board[2][1]) && board[0][1]!=0) {
        console.log('here5')
        return board[0][1]}
    else if (Number(board[0][2])===Number(board[1][2]) && Number(board[0][2])===Number(board[2][2]) && board[0][2]!=0) {
        console.log('here6')
        return board[0][2]}
    else if (Number(board[0][0])===Number(board[1][1]) && Number(board[0][0])===Number(board[2][2]) && board[0][0]!=0) {
        console.log('here7')
        return board[0][0]}
     
    else if (Number(board[2][0])===Number(board[1][1]) && Number(board[2][0])===Number(board[0][2]) && board[2][0]!=0) {
        console.log('here9')
        return board[2][0]}
    else if(board[0][0]===0 ||
        board[0][1]===0 ||
        board[0][2]===0 ||
        board[1][0]===0 ||
        board[1][1]===0 ||
        board[1][2]===0 ||
        board[2][0]===0 ||
        board[2][1]===0 ||
        board[2][2]===0) {
            console.log('here10')
            return -1}
    else {
        console.log('here11')
        return 0}
   
    // switch(board){
    //     case (Number(board[0][0])==Number(board[0][1])==Number(board[0][1])):
    //         return Number(board[0][0]);
    //         break;
    //     case (Number(board[1][0])==Number(board[1][1])==Number(board[1][1])):
    //         return board[1][0];
    //         break;
    //     case (Number(board[2][0])==Number(board[2][1])==Number(board[2][1])):
    //         return board[2][0];
    //         break;
    //     case (Number(board[0][0])==Number(board[1][0])==Number(board[2][0])):
    //         return board[0][0];
    //         break;
    //     case (Number(board[0][1])==Number(board[1][1])==Number(board[2][1])):
    //         return board[0][1];
    //         break;
    //     case (Number(board[0][2])==Number(board[1][2])==Number(board[2][2])):
    //         return board[0][2];
    //         break;
    //     case (Number(board[0][0])==Number(board[1][1])==Number(board[2][2])):
    //         return board[0][0];
    //         break;
    //     case (Number(board[2][0])==Number(board[1][1])==Number(board[0][2])):
    //         return board[2][0];
    //         break;
    //     case (board[0][0]==0 ||
    //           board[0][1]==0 ||
    //           board[0][2]==0 ||
    //           board[1][0]==0 ||
    //           board[1][1]==0 ||
    //           board[1][2]==0 ||
    //           board[2][0]==0 ||
    //           board[2][1]==0 ||
    //           board[2][2]==0):
    //           return -1;
    //           break;
    //     case (board==[]):
    //         return "working";
    //         break;
    //     default:
    //         return 0;

    // }
  }
