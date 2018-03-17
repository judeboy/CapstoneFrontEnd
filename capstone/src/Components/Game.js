let cardPosition = 'one';
let observer = null;

export function observe(o){
    observer = o;
    observer(cardPosition)
}

export function moveCard(number){
    console.log(number)
    cardPosition = number;
    observer(cardPosition)
}
