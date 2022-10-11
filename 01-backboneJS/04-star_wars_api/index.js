var StarWarsShipModel = Backbone.Model.extend({
    defaults: {
        name: null,
        manufacturer: null,
        crew: null,
        cost_in_credits: null
    }
});
var StarWarsShipsCollection = Backbone.Collection.extend({
    model: StarWarsShipModel,
    url: "http://swapi.dev/api/starships",
    parse: (starship) => { return starship.results },
    falconChecker: (collection) => {
        _.each(
            collection.models,
            (starship) => {
                if (starship.get("name") == "Millennium Falcon") {
                    starship.set({cost_in_credits: "priceless"})
                }
            }
        )
    }
})
var starships = new StarWarsShipsCollection();

starships.fetch()
    .then(
        () => {
            // Problem 1 ------------
            starships.falconChecker(starships)
            console.log(starships)
            // Problem 2 ------------
            console.log( starships.findWhere({name: "Millennium Falcon"}).changed )
        }
    );
