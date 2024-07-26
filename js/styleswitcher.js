/**	STYLE SWITCHER
*************************************************** **/
jQuery(document).ready(function() {
    "use strict";

    const colors = [
        { class: 'yellow-color', src: 'img/menu/yellow.png' },
        { class: 'blueviolet-color', src: 'img/menu/blueviolet.png' },
        { class: 'green-color', src: 'img/menu/green.png' },
        { class: 'orange-color', src: 'img/menu/orange.png' },
        { class: 'blue-color', src: 'img/menu/blue.png' },
        { class: 'goldenrod-color', src: 'img/menu/goldenrod.png' },
        { class: 'red-color', src: 'img/menu/red.png' },
        { class: 'magenta-color', src: 'img/menu/magenta.png' },
        { class: 'yellowgreen-color', src: 'img/menu/yellowgreen.png' },
        { class: 'purple-color', src: 'img/menu/purple.png' }
    ];

    colors.forEach(color => {
        jQuery(`.${color.class}`).on('click', function() {
            jQuery('.menu-bg').attr('src', color.src);
        });
    });

    jQuery("#hideSwitcher, #showSwitcher").click(function() {
        let _identifier;

        if (jQuery("#showSwitcher").is(":visible")) {
            _identifier = "#showSwitcher";
            jQuery("#switcher").animate({ "margin-left": "0px" }, 500).show();
            createCookie("switcher_visible", 'true', 365);
        } else {
            _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({ "margin-left": "0" }, 500);
            createCookie("switcher_visible", 'false', 365);
        }

        jQuery(_identifier).animate({ "margin-left": "-500px" }, 500, function() {
            jQuery(this).hide();
        });
    });
});

function setActiveStyleSheet(title) {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) {
                a.disabled = false;
            }
        }
    }

    // DARK SKIN
    var color_skin = readCookie('color_skin');
    if (color_skin == 'dark') {
        jQuery("#css_dark_skin").remove();
        jQuery("head").append('<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />');
        jQuery("#is_dark").trigger('click');
        jQuery("a.logo img").attr('src', 'assets/images/logo_dark.png');
    }
}

function getActiveStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) {
            return a.getAttribute("title");
        }
    }
    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) {
            return a.getAttribute("title");
        }
    }
    return null;
}

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
	@ON LOAD
**/
window.onload = function(e) {
    var switcher_visible = readCookie('switcher_visible') || 'false';

    // COLOR SCHEME
    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);

    // SWITCHER OPEN|CLOSED
    if (switcher_visible != 'false') {
        jQuery("#showSwitcher").trigger('click');
    }

    // DARK OR LIGHT
    var is_dark = readCookie('is_dark');
    if (is_dark == 'true') {
        jQuery('body').addClass('dark');
        jQuery("#is_dark").trigger('click');
    }

    // BOXED or WIDE
    var is_boxed = readCookie('is_boxed');
    if (is_boxed == 'true') {
        jQuery('body').addClass('boxed');
        jQuery("#is_boxed").trigger('click');
    }
}

/**
	COLOR SKIN [light|dark]
**/
jQuery("input.dark_switch").bind("click", function() {
    var dark_switch = jQuery(this).val();

    if (dark_switch == 'dark') {
        jQuery("body").removeClass('light').addClass('dark');
        createCookie("is_dark", 'true', 365);
    } else {
        jQuery("body").removeClass('dark').addClass('light');
        createCookie("is_dark", '', -1);
        jQuery('body').removeClass('transparent');
    }
});

/**
	LAYOUT STYLE [wide|boxed]
**/
jQuery("input.boxed_switch").bind("click", function() {
    var boxed_switch = jQuery(this).val();

    if (boxed_switch == 'boxed') {
        jQuery("body").addClass('boxed');
        createCookie("is_boxed", 'true', 365);
    } else {
        jQuery("body").removeClass('boxed');
        createCookie("is_boxed", '', -1);
        jQuery('body').removeClass('transparent');
    }
});

/**
	SEPARATOR STYLE [Normal|Skew|Reversed Skew|Double Diagonal|Big Triangle]
**/
jQuery("input.separator_switch").bind("click", function() {
    var separator_switch = jQuery(this).val();

    var separatorClasses = ['separator-1', 'separator-2', 'separator-3', 'separator-4', 'separator-5', 'separator-6'];
    separatorClasses.forEach(cls => jQuery("body").removeClass(cls));

    jQuery("body").addClass(separator_switch);
    createCookie(separator_switch, 'true', 365);
});
