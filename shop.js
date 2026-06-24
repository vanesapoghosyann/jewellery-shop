function toggleFilter(arrow) {
    const options = arrow.parentElement.nextElementSibling
    const vec = arrow
    console.log(options);
    console.log(vec);
    if (options.style.display === "block") {
        vec.style.transform = "rotate(0deg)"
        options.style.display = "none"
    }
    else {
        options.style.display = "block"
        vec.style.transform = "rotate(180deg)"

    }

}