const facts = require("../facts")

class Controllers{

    test(request, response){
        response.json({"success": true})
    }

    randomFact(request, response){
        var index = Math.floor(Math.random() * facts.length)
        response.json(facts[index])
    }

    getFactByID(request, response){
        const id = request.params.id - 1
        if(id > facts.length || id < 0)
            response.json({"success": false, "reason": "Not a valid ID."})
        response.json(facts[id])
    }

    getFactFromAbout(request, response){
        var filtered = facts.filter( ({category}) => category === "about" )
        console.log(filtered)
        var index = Math.floor(Math.random() * filtered.length)
        response.json(filtered[index])
    }
    
    getFactFromGameplay(request, response){
        var filtered = facts.filter( ({category}) => category === "gameplay" )
        console.log(filtered)
        var index = Math.floor(Math.random() * filtered.length)
        response.json(filtered[index])
    }

}

module.exports = new Controllers()