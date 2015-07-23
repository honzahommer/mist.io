define('app/views/page', ['app/views/templated'],
    //
    //  Page View
    //
    //  @returns Class
    //
    function (TemplatedView) {

        'use strict';

        return Ember.View.extend({


            //
            //
            //  Initialization
            //
            //


            didInsertElement: function () {
                this._super();
                $('.ui-page-active').parent().trigger('create');
                Ember.run.next(function(){
                    $("[data-role='collapsible']").collapsible({
                        collapse: function( event ) {
                            $(this).children().next().slideUp(250);
                            var overlay=$('#' + $(this).attr('id')+'-overlay');
                            if (overlay)
                                overlay.removeClass('in').addClass('ui-screen-hidden');
                        },
                        expand: function( event, ui ) {
                            var overlay=$('#' + $(this).attr('id')+'-overlay');
                            if (overlay)
                                overlay.removeClass('ui-screen-hidden').addClass('in');
                            $(this).children().next().hide();
                            $(this).children().next().slideDown(250);
                        }
                    });
                });
            }
        });
    }
);
