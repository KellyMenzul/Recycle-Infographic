function BodyTextUI(display = "flex", justify = "center", size = "43px", color = "#203748"){
    return `
    <p
    style="
    display: ${display};
    justify-content: ${justify};
    font-family: 'Montserrat', sans-serif;
    font-size: ${size};
    color: ${color};
    font-weight:100;
    "
    >body text here<p>
    `
}

export const textbody = BodyTextUI();