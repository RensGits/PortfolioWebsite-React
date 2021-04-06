
function Chessboard (){

var boardSize = prompt('Pick a number under 28 for your custom chessboard');
var black = prompt ('Pick a symbol for the black squares');
var white = prompt ('Pick a symbol for the white squares');

let board = '';
let numberRow = '';


// while loop that loops as many times as boardSize is big.

for(let counterVertical = 0, letterIndex = 65 ; counterVertical < boardSize; counterVertical ++, letterIndex += 1){

// creates a line of alternating symbols.
// with a boardsize of > 10 white spaces increase to accomodate for double digit top row numbering.

    for(let counterHorizontal = 0; counterHorizontal <boardSize; counterHorizontal ++){

    if((counterVertical + counterHorizontal) %2 === 0 && boardSize <= 10){
        board += white + ' ';
      }
    else if ((counterVertical + counterHorizontal) %2 !== 0 && boardSize <= 10){ 
        board += black+ ' '; 
     }
    else if ((counterVertical + counterHorizontal) %2 === 0 && boardSize > 10){
        board += white + '   ';
      }
    else if ((counterVertical + counterHorizontal) %2 !== 0 && boardSize > 10){ 
        board += black+ '   '; 

    }
}

// adds white space after each boardsize(n) cycle.
// adds an alphabetically incremented letter after each cycle.

     const letterIncrement = ' ' +String.fromCharCode(letterIndex)
     board = board + letterIncrement 
     board = board + '\n' 
   
  
  } 
  

// top row numbering.
// specifies whitespace boardsize specific length to allign numbers with #/O symbols.

for (let numberRowCount = 1; numberRowCount <= boardSize; numberRowCount ++){
    if(boardSize <= 10){
        numberRow = numberRow + numberRowCount + ' ';}
    
    if(boardSize > 10){
        if(numberRowCount < 10){
        numberRow = numberRow + numberRowCount + '   ';}
        else {
            numberRow = numberRow + numberRowCount + '  ';
        }

    }}



function callBoard (boardSize){
    if(boardSize <= 26){
        return numberRow + board;
        }
    else return 'You ran out of letters! Try a number under 28'}

callBoard(boardSize);








    return(
        <div className = 'chessBoard'>
            <p>test</p>
            <p>
                {{callBoard}}

            </p>
            
        </div>





    )
}

export default Chessboard;

