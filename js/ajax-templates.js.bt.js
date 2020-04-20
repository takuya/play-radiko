function loadTemplate(templates, callback) {

    var callback = callback;

    var counter = 0;

    for (selector in templates) {

        var selector = selector;

        counter++;

        (function(selector) {

            $.ajax({
                url: templates[selector],
                dataType: 'html',
                cache: false,
                timeout: 20 * 1000,
                success: function(html) {

                    $(selector).html(html);

                    counter--;

                    if (counter == 0) {

                        callback();
                    }
                },
                error: function(e) {

                }
            });

        })(selector);
    }
}