
function openMenu(){
    const menuOn = document.querySelector('.menu-toggle');
    menuOn.style.display = 'none';
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'flex';
}
function closeMenu(){
    const menuOn = document.querySelector('.menu-toggle');
    menuOn.style.display = 'flex';
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
}


function search_list() {
    let input = document.getElementById('searchInput').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('keresheto-termek');
    let y = document.getElementsByClassName('keresheto-termek-value');

    for (i = 0; i < x.length; i++) {
        if (!y[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";

        }
    }
}

