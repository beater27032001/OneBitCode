// let literal: "Hello, World"
// let pi: 3.14159

// let option: "Yes" | "No" | "Maybe"

// let option: number | boolean

// option = true
// option = 1290

// let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno"

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno"

let planet: Planet

let homePlanet: Planet

function checkPLanet(planet: Planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra")
    }
}

type GreetingCallback = (name: String) => void

function greet(callbackfn: GreetingCallback){
    let name: "José"
    callbackfn(name)
}