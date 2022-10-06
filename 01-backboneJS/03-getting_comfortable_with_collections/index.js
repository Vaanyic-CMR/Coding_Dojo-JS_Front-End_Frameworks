var TravelTimeModel = Backbone.Model.extend({
    defaults: {}
});
var TravelTimeCollection = Backbone.Collection.extend({
    model: TravelTimeModel,
    url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
})
var travelTimes = new TravelTimeCollection();

travelTimes.fetch()
    .then(
        () => {
            console.log(travelTimes)
            // Problem 1 ------------
            console.log("1. Collections:", travelTimes.models)
            // Problem 2 ------------
            console.log("2. Length:", travelTimes.length)
            // Problem 3 ------------
            console.log("3. 30th Model:", travelTimes.at(30))
            // Problem 4 ------------
            console.log("4. 1st Model no at():", _.first(travelTimes.models).attributes.CurrentTime)
            // Problem 5 ------------
            console.log("5. CurrTime=10:", _.filter(travelTimes.models, (model)=>model.attributes.CurrentTime == 10) )
            // Problem 6 ------------
            console.log("6. 1st Name=='{value}':", _.find(travelTimes.models, (model)=>model.attributes.Name == "Bellevue-Seattle via 520 (WB PM)") )
        }
    );
