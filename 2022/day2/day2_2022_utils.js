const part1 = (data) => {
    var data = data.map(x => {return gameResultPart1(x[0], x[2])}).reduce((prev,curr) => prev + curr, 0);
    return data;
}

function gameResultPart1(elfChoice, myChoice){
    /**
     * A - Rock
     * B - Paper
     * C - Scissors
     * 
     * X - Rock
     * Y - Paper
     * Z - Scissors
     * 
     * Rock - 1
     * Paper - 2
     * Scissors - 3
     */
    
    let gameMap = {
        'A':{
            'X': 4, //1 + 3
            'Y': 8, //2 + 6
            'Z': 3 //3 + 0
        },
        'B': {
            'X': 1, //1 + 0
            'Y': 5, //2 + 3
            'Z': 9 //3 + 6
        },
        'C':{
            'X': 7, //1 + 6
            'Y': 2, //2 + 0
            'Z': 6 //3 + 3
        }
    };


    return gameMap[elfChoice][myChoice];
    
}

const part2 = (data) => {

    var data = data.map(x => {return gameResultPart2(x[0], x[2])}).reduce((prev,curr) => prev + curr, 0);

console.log('data :', data);

}

    function gameResultPart2(elfChoice, myChoice){

        let gameMap = {
            'A':{
                'X': 3,//3 + 0
                'Y': 4,//1 + 3
                'Z': 8 //2 + 6
            },
            'B': {
                'X': 1, //1 + 0
                'Y': 5, //2 + 3
                'Z': 9 //3 + 6
            },
            'C':{
                'X': 2, //2 + 0
                'Y': 6, //3 + 3
                'Z': 7 //1 + 6
            }
        };
    
    
        return gameMap[elfChoice][myChoice];
        
    }

module.exports = { part1, part2 }