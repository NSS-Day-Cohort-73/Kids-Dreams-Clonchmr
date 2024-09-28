import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target
    const celebName = clickTarget.dataset.name
    const celebSport = clickTarget.dataset.sport
    if (clickTarget.dataset.type === "celebrity") {
        window.alert(`${celebName} is a ${celebSport} star`)
    }
})

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-name="${star.name}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
