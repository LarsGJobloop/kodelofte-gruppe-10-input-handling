function validateAlias(alias) {
    let aliasIsValid = alias.length > 0
    
    if (!aliasIsValid) {
        console.log("The alias must contain atleast 1 character")
        // Avbryte sekvensen
        return false
    }

    return true
}

function handleComment() {
    // Kroppene til funksjone
    // Det sette med steg du ønsker skal kjøre
    console.log("Comment button clicked")

    // Les av verdien i Alias feltet
    let aliasField = document.getElementById("alias-field")
    let aliasValue = aliasField.value

    // Valider verdien
    if (!validateAlias(aliasValue)) {
        return
    }

    // Les av verdien i Kommentar feltet
    let commentField = document.getElementById("comment-field")
    let commentValue = commentField.value

    // Valider verdien

    
    // Lage det nye HTML Kommtar Elementet
    // Lage alle elementene
    let wrapper = document.createElement("li")
    let authorElement = document.createElement("p")
    let commentElement = document.createElement("p")

    // Konfigurer elementet
    authorElement.textContent = aliasValue
    commentElement.textContent = commentValue

    // Kombinere disse elementene
    wrapper.append(authorElement)
    wrapper.append(commentElement)

    // Legg det til i Dokumentet
    let commentList = document.getElementById("comment-list")
    commentList.append(wrapper)
}

// Finne knappen som skal trigge funksjon vår
let commentButton = document.getElementById("add-comment")
// Legg til funksjonene som skal kjøre når knappen trykkes på
commentButton.addEventListener("click", handleComment)
