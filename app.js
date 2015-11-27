var publisher = {
    subscribers: ['module1', 'module2', 'module3'],
    modules: {
        module1: {
            receiveData: function(data) {
                $('#subscriber-1').val(data);
            }
        },
        module2: {
            receiveData: function(data) {
                $('#subscriber-2').val(data);
            }
        },
        module3: {
            receiveData: function(data) {
                $('#subscriber-3').val(data);
            }
        }
    },
    initialize: function() {

        this.initListeners();

        console.error('publisher was initialized');
    },
    initListeners: function() {
        var self = this;

        $('#publisher').on('keyup', function() {
            self.publish($(this).val());
        });

        $('#reset').on('click', function() {
            self.publish('');
        });

        $('.js-toggle-subscriber').on('change', function() {
            if ($(this).prop('checked')) {
                self.addSubscriber($(this).prop('name'));
            }
            else {
                self.removeSubscriber($(this).prop('name'));
            }
        });
    },
    publish: function(data) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.modules[this.subscribers[i]].receiveData(data);
        }
    },
    addSubscriber: function(subscriber) {
        this.subscribers.push(subscriber);
    },
    removeSubscriber: function(subscriber) {
        this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    }
};