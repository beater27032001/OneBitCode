function sendSpaceship(spacheship: {pilot: string, copilot?: string}){
    //...
}

sendSpaceship({pilot: 'Hna Solo', copilot: 'Test'})
sendSpaceship({pilot: 'José'})
// ------------------------------------------------------

let input: unknown

input = 'Test'
input = '20'
input = []
//-----------------------------------
let input2: any

input2 = 'Test'
input2 = '20'
input2 = []

let text: string

text = input2
//--------------------------------------

// function verification(test) {
//     if (test) {
        
//     } else {
//         let _check: never

//         let text = _check

//         text = ''
        
//         return _check
//     }
    
// }