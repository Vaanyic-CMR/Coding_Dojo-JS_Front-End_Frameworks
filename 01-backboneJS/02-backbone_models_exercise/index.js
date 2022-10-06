const StackModel = Backbone.Model.extend({
    defaults: {
        title: null,
        instructor: "Michael Choi",
        language: null
    },
    initialize: () => {
        console.log("Stack Model Created.");
    }
});

let rubyStack = new StackModel();
rubyStack.set("title", "Ruby on Rails");
rubyStack.set("language", "Ruby");

let meanStack = new StackModel();
meanStack.set("title", "MEAN");
meanStack.set("language", "Javascript");

console.log(rubyStack);
console.log(meanStack);