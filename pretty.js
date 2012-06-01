/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 *
 * Added localization facilities by Eliseo Ocampos
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
    var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
    diff = (((new Date()).getTime() - date.getTime()) / 1000),
    day_diff = Math.floor(diff / 86400);

    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
        return;

    var language = window.navigator.userLanguage || window.navigator.language;
    return day_diff == 0 && (
               diff < 60 && localizeMessage(messages[language]['just-now']) ||
               diff < 120 && localizeMessage(messages[language]['minute-ago'], 1) ||
               diff < 3600 && localizeMessage(messages[language]['minutes-ago'], Math.floor( diff / 60 )) ||
               diff < 7200 && localizeMessage(messages[language]['hour-ago'], 1) ||
               diff < 86400 && localizeMessage(messages[language]['hours-ago'], Math.floor( diff / 3600 ))) ||
           day_diff == 1 && localizeMessage(messages[language]['yesterday']) ||
           day_diff < 7 && localizeMessage(messages[language]['days-ago'], day_diff) ||
           day_diff < 31 && localizeMessage(messages[language]['weeks-ago'], Math.ceil( day_diff / 7 ));
}

// Replaces a % with units to display
function localizeMessage(templateText, units){
    return templateText.replace("%", units);
}

// Localized text
var messages = {'en-US':{'just-now':"just now",
                     'minute-ago':"% minute ago",
                     'minutes-ago':"% minutes ago",
                     'hour-ago':"% hour ago",
                     'hours-ago':"% hours ago",
                     'yesterday':"Yesterday",
                     'days-ago':"% days ago",
                     'weeks-ago':"% weeks ago"},
                'es-ES':{'just-now':"justo ahora",
                     'minute-ago':"hace % minuto",
                     'minutes-ago':"hace % minutos",
                     'hour-ago':"hace % hora",
                     'hours-ago':"hace % horas",
                     'yesterday':"Ayer",
                     'days-ago':"hace % dias",
                     'weeks-ago':"hace % semanas"},
                'fr-FR':{'just-now':"ce moment",
                     'minute-ago':"il ya % minute",
                     'minutes-ago':"il ya % minutes",
                     'hour-ago':"il ya % heure",
                     'hours-ago':"il ya % heures",
                     'yesterday':"Hier",
                     'days-ago':"il ya % jours",
                     'weeks-ago':"il ya % semaines"},
                'it-IT':{'just-now':"proprio ora",
                     'minute-ago':"% minuto fa",
                     'minutes-ago':"% minuti fa",
                     'hour-ago':"% ora fa",
                     'hours-ago':"% ore fa",
                     'yesterday':"Ieri",
                     'days-ago':"% giorni fa",
                     'weeks-ago':"% settimane fa"}
               }

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
    jQuery.fn.prettyDate = function(){
        return this.each(function(){
            var date = prettyDate(this.title);
            if ( date )
                jQuery(this).text( date );
        });
    };
