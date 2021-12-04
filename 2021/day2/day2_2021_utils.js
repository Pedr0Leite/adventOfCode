const part1 = (data) => {
let position = {horizontal:0, depth:0};
data.forEach(value =>{
    value.split(' ')[0] == 'forward' ? position.horizontal += Number(value.split(' ')[1]) : value.split(' ')[0] == 'up' ? position.depth += Number(value.split(' ')[1]) : position.depth -= Number(value.split(' ')[1]);
})

return Math.abs(position.depth * position.horizontal);

}

const part2 = (data) =>{
    let position = {horizontal:0, depth:0, aim:0};
    data.forEach(value =>{
        value.split(' ')[0] == 'forward' ? forwardOperation(value.split(' ')[1]) : value.split(' ')[0] == 'up' ? position.aim -= Number(value.split(' ')[1]) : position.aim += Number(value.split(' ')[1]);
    })

    function forwardOperation(numb){
        position.horizontal += Number(numb);
        position.depth += Number(numb) * position.aim;
    }
    
    return Math.abs(position.depth * position.horizontal);
}

module.exports = { part1, part2 }