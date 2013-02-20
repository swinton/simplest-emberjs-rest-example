var App = Ember.Application.create();

App.Router.map(function() {
  this.resource("messages");
  this.resource("users");
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo("users");
    }
});

App.MessagesRoute = Ember.Route.extend({
    model: function(args) {
        // debugger;
        return App.Message.find();
    }
});

App.UsersRoute = Ember.Route.extend({
    model: function() {
        return App.User.find();
    }
});

// AUTO-GENERATED
// App.MessagesController = Ember.ArrayController.extend({});

App.Store = DS.Store.extend({
    revision: 11,
    adapter: DS.RESTAdapter.create({
        namespace: "simplest-emberjs-rest-example"
    })
});
// App.Store = DS.Store.extend({
//     revision: 11,
//     adapter: 'DS.FixtureAdapter'
// });

App.Message = DS.Model.extend({
    user: DS.belongsTo("App.User"),
    text: DS.attr('string')
});

App.User = DS.Model.extend({
    messages: DS.hasMany("App.Message"),
    screen_name: DS.attr("string")
});


// Fixtures
App.Message.FIXTURES = [{
    id: 1,
    text: "Hello lovely world",
    user: 1
}, {
    id: 2,
    text: "Hello again",
    user: 1
}, {
    id: 3,
    text: "Goodbye, cruel world :(",
    user: 1
}];

App.User.FIXTURES = [{
    id: 1,
    screen_name: "steveWINton"
}];