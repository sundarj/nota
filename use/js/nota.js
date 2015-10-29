/* global localforage */
/* global Ractive */

localforage.config({
    name: 'jsu',
    storeName: 'notae'
});

var ID = function (start) {
    var i = start || 0;
    return function() {
        return i++;
    }
};

localforage.length().then(function(length) {
    ID = ID(length);
});

var Tome = {
    notae: []
};

localforage.iterate(function(data, key) {
    data = JSON.parse(data);
    Tome.notae.push({
        id: key,
        title: data.title,
        contents: data.contents
    });
});


var nota = new Ractive({
    el: 'main',
    template: '#init',
    
    data: Tome,
    
    open: function(event) {
        this.set('active', event.context);
    },
    
    edit: function(event) {
        var keypath = 'notae.' + event.context.id;
        this.set(keypath, event.context);
        this.save();
    },
    
    create: function(event) {
        var next = {
           id: ID(),
           title: '',
           contents: ''
        };
        
        this.push('notae', next);
        this.set('active', next);
    },
    
    save: function() {
        this.get('notae').forEach(function(nota) {
           localforage.setItem(nota.id+'', JSON.stringify(nota)); 
        });
    }
});