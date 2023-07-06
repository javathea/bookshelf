function createBook() {
    const bookInput = document.getElementById("bookInput")
    const book = {title: bookInput.value}


    fetch ('add/index.html', {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
            })           
            .then((response) => response.json())
            .then((data) => {
                console.log("yey!", data);
            })
    }

document.addEventListener("submit", (event) => {
    event.preventDefault();
    createBook();
})

function createCell(text) {
    const cell = document.createElement("td");
    cell.innerText = text;
    return cell;
}
