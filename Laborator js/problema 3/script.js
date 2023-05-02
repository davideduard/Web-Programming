const rows = 4;
const columns = 4;
let array = [];

first_card = null;
second_card = null;

initArr();
makeBoard();

canPlay = true;
waitTime = 1000;
console.log(array)

function initArr() {
    const helper = [];
    const count = rows * columns / 2;
    for (let i=1; i<=count; i++){
        helper.push(i);
        helper.push(i);
    }

    shuffle(helper);

    for (let i=0;i<rows;i++) {
        array.push([]);
        for (let j=0; j<columns;j++) {
            array[i].push(helper.pop())
        }
    }
}

let back = document.createElement('div')
            back.classList.add('back');
            back.innerHTML = '?'
            card.appendChild(back)

            item.addEventListener('click', cardClick)

function makeBoard() {
    const container = document.querySelector('.container');
    container.innerHTML = null;

    for (let i=0;i<rows;i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);

        for (let j=0;j<columns;j++) {
            let item = document.createElement('div');
            item.classList.add('item');
            item.setAttribute('value', array[i][j]);
            item.setAttribute('solved', false);
            row.appendChild(item);

            let card = document.createElement('card');
            card.classList.add('card');
            item.appendChild(card);

            let front = document.createElement('div')
            front.classList.add('front');
            front.innerHTML = array[i][j];
            card.appendChild(front)

            let back = document.createElement('div')
            back.classList.add('back');
            back.innerHTML = '😵‍💫';
            card.appendChild(back)

            item.addEventListener('click', cardClick)
        }
    }
}

function cardClick() {
    //'this' is item
    if (!canPlay || this.getAttribute('solved') == 'true' || this == first_card) {
        console.log('not this one / not right now')
        return;
    }

    if (first_card == null && second_card == null) {
        first_card = this;
        first_card.classList.add('revealed')

    }
    else if (first_card != null && second_card == null) {
        canPlay = false
        second_card = this
        second_card.classList.add('revealed')

        const value_1 = first_card.getAttribute('value')
        const value_2 = second_card.getAttribute('value')
        if (value_1 === value_2) {
            first_card.setAttribute('solved', true)
            second_card.setAttribute('solved', true)

            setTimeout(() => {
                first_card = null
                second_card = null
                canPlay = true
            }, waitTime);
        }
        else {
            setTimeout(() => {
                first_card.classList.remove('revealed')
                first_card = null
                second_card.classList.remove('revealed')
                second_card = null
                canPlay = true
            }, waitTime);
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}