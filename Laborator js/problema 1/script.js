function change(option) {
    const list1 = document.querySelector('#list1');
    const list2 = document.querySelector('#list2');
    const parent = option.parentElement

    if (parent.id === 'list1') {
        list2.append(option);
    }
    if (parent.id === 'list2') {
        list1.append(option);
    }

    list1.size = list1.childElementCount;
    list2.size = list2.childElementCount;
}