function search(){
    let input = document.getElementById("searchbar");
    input = input.toLowerCase();
    let x = document.getElementsByClassName('opt');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}
