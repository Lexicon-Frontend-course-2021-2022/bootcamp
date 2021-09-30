const anObject = {

    // Just some dummy properties
    anUnusedString: "Nobody wants this property! *sob*",
    anUnusedBoolean: true,
    anUnusedArray: ["Nothing", "to", "see", "here", "folks", "!"],

    // As defined in HHGttG
    lifeTheUniverseAndEverything: 42,
    theUltimateAnswer: function () {
        if (this.LifeTheUniverseAndEverything !== 42) {
            console.log("Somebody changed the ultimate answer. Naughy, naughty! Will reset to the correct value!")
            this.lifeTheUniverseAndEverything = 42;
        }
        return "The answer to Life, the Universe and Everything is " + this.lifeTheUniverseAndEverything;
    },

    // Just a wrapper for typeof. *EXTREMELY* useless :D
    whatTypeOfDataIsThis: function (data) {
        return `The data type you are looking for is '${typeof data}'`;
    },

    // Stupid recurse. Does nothing useful :)
    recursiveMethod: function (times) {
        console.log(times);
        return times ? this.recursiveMethod(--times) : times;
    },

    // ============================================================================================
    //
    // Wild West: Just testing stuff..
    //
    // ============================================================================================

    // Returning 'this' will let me string methods => anObject.self().self().theUltimateAnswer();
    // Very cool! Very useful! (Not this particular method, but still...) :)
    self: function () {
        return this;
    },

    // Mutate object and return 'this' for more useful methods! => anObject.up().up().down().down() etc..

    counter: 0,     // mutate this property in up() / down()

    up: function () {
        console.log(`Counter increment: ${this.counter} => ${++this.counter}`);
        return this;
    },

    down: function () {
        console.log(`Counter decrement: ${this.counter} => ${--this.counter}`);
        return this;
    }
};
