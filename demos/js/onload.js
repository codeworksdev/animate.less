$(document).ready(
    function()
    {
        var lead     = $('body .invisible.lead'),
            animated = $('body .animated'),
            form     = $('body form'),
            menu     = form.find('#inlineFormMenu'),
            looper   = form.find('#inlineFormOptionLoop'),
            submit   = form.find('[type="submit"]'),
            data     = {
                animated : animated,
                form     : form,
                menu     : menu,
                looper   : looper,
                submit   : submit,
                };

        lead
          .html(lead.html().replace(/NNN/, menu.find('option').length))
          .removeClass('invisible');

        animated.on(
            'animationend',
            data,
            function()
            {
                var a = $(this),
                    d = 'data-before',
                    b = a.attr(d);

                a.removeClass(b).removeAttr(d)
            }
            );

        menu.on(
            'change',
            data,
            function(event)
            {
                var m = $(this),
                    v = m.val(),
                    a = event.data.animated,
                    l = a.attr('data-before');

                if (l) a.removeClass(l);
                a.addClass(v);
                a.attr('data-before', v)
            }
            );

        looper.on(
            'change',
            data,
            function(event)
            {
                var o = $(this),
                    a = event.data.animated,
                    i = o.is(':checked'),
                    f = i ? 'addClass' : 'removeClass',
                    c = 'infinite';

                if (!a.attr('data-before')) event.data.menu.trigger('change');
                event.data.submit.prop('disabled', i);
                a[f](c)
            }
            );

        submit.on(
            'click',
            data,
            function(event) {
                event.data.menu.trigger('change')
                }
            );
    }
    );
