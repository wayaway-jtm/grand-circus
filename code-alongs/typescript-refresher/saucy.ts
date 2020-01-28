// Declaring an interface
interface ISauce {
    // define a property type
    name : string;
    spiceLevel? : number;
    awesome : boolean;
    meltYourEyes(name: string) : boolean; // definiting a function type 
}

// creating a class that implements an interface
class Sauce implements ISauce {
                // automatically assigning arguments passed in to constructor as properties
    constructor(public name: string, public spiceLevel : number, public awesome: boolean) {
        
    } 

    // NOTE: All things defined in interface must be implemented in its class
    meltYourEyes(name: string) : boolean {
        console.log(name);

        return this.spiceLevel > 5;
    }
}

// Specifying types for:
// variables
const sauces : ISauce[] = [
    new Sauce('Siracha',  4, true), 
    new Sauce('Carolina Reaper Sauce', 8, true),
    new Sauce('Tabasco', 2,  false),
    new Sauce('Ketchup',  -2, true)
];

                        // parameters in function       // return type
function getSauceByName(s : ISauce[], name : string) : ISauce|undefined {
    // do my stuff
    return s[0];
}