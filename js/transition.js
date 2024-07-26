/**
 * @module       jQuery page transition
 * @author       Roman Kravchuk (JeremyLuis)
 * @license      MIT
 * @version      1.1.3
 * @description  Smooth transition between pages
 */
function pageTransition(options) {
    options = options || {};
    options.target = options.target || null;
    options.delay = options.delay || 500;
    options.duration = options.duration || 1000;
    options.classIn = options.classIn || null;
    options.classOut = options.classOut || null;
    options.classActive = options.classActive || null;
    options.onReady = options.onReady || null;
    options.onTransitionStart = options.onTransitionStart || null;
    options.onTransitionEnd = options.onTransitionEnd || null;
    options.conditions = options.conditions || function(event, href) {
        return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(href);
    };

    if (options.target) {
        setTimeout(function() {
            if (options.onReady) options.onReady(options);
            if (options.classIn) options.target.classList.add(options.classIn);
            if (options.classActive) options.target.classList.add(options.classActive);
            if (options.duration) options.target.style.animationDuration = options.duration + "ms";

            options.target.addEventListener("animationstart", function() {
                setTimeout(function() {
                    if (options.classIn) options.target.classList.remove(options.classIn);
                    if (options.onTransitionEnd) options.onTransitionEnd(options);
                }, options.duration);
            });
        }, options.delay);

        $("a").click(function(event) {
            var href = event.currentTarget.getAttribute("href");
            if (options.conditions(event, href)) {
                var url = this.href;
                event.preventDefault();
                if (options.onTransitionStart) options.onTransitionStart(options);
                if (options.classIn) options.target.classList.remove(options.classIn);
                if (options.classOut) options.target.classList.add(options.classOut);

                setTimeout(function() {
                    window.location = url;
                    
                    // Specific handling for Firefox
                    if (/firefox/i.test(navigator.userAgent)) {
                        setTimeout(function() {
                            if (options.onReady) options.onReady(options);
                            if (options.classOut) options.target.classList.remove(options.classOut);
                        }, 1000);
                    }

                    // Specific handling for Safari
                    if (/safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent)) {
                        if (options.onReady) options.onReady(options);
                        if (options.classOut) options.target.classList.remove(options.classOut);
                    }
                }, options.duration);
            }
        });
    }
}
