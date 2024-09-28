import { getChildren } from "./database.js"

const children = getChildren()


document.addEventListener ( "click", (clickEvent) => {
    const clickTarget = clickEvent.target
    const childName = clickTarget.dataset.name
    const childWish = clickTarget.dataset.wish
     if (clickTarget.dataset.type === "child") {
        window.alert(`${childName}s wish is to ${childWish}`)
    } 
})

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-name="${child.name}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

