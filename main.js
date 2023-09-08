document.addEventListener("click", handleClick);

function handleClick(e) {
    //console.log("click!", e.target)
    const clickedElement = e.target;
    if (clickedElement.classList.contains("delete-btn")) {
        console.log("delete button clicked");
        clickedElement.parentElement.remove();
    }
    else if (clickedElement.classList.contains("grid-item")) {
        console.log("grid item clicked");
        const children = clickedElement.children;
        //children[1].style = "color: blue"; //Om vi vet index!

        const childrenArray = Array.from(children);

        childrenArray.forEach((c) => { //Om vi inte vet index!
            if (c.classList.contains("title-text")) {
                c.style = "color: blue";
            }
        });
    }
}

