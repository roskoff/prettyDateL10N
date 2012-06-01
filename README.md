# PrettyDateL10N

This script is a localized version of [PrettyDate](http://ejohn.org/blog/javascript-pretty-date/) by [John Resig](http://ejohn.org/about/)

# Usage of JavaScript Pretty Date

The method just print a date in a "pretty" format given the brower locale settings. Here's some more examples for 'en-US' locale (english):

``` javascript
    prettyDate("2008-01-28T20:24:17Z") // => "2 hours ago"
    prettyDate("2008-01-27T22:24:17Z") // => "Yesterday"
    prettyDate("2008-01-26T22:24:17Z") // => "2 days ago"
    prettyDate("2008-01-14T22:24:17Z") // => "2 weeks ago"
    prettyDate("2007-12-15T22:24:17Z") // => undefined 
```

If your locale were 'es-ES', you should see:

``` javascript
    prettyDate("2008-01-28T20:24:17Z") // => "hace 2 horas"
    prettyDate("2008-01-27T22:24:17Z") // => "Ayer"
    prettyDate("2008-01-26T22:24:17Z") // => "hace 2 dias"
    prettyDate("2008-01-14T22:24:17Z") // => "hace 2 semanas"
    prettyDate("2007-12-15T22:24:17Z") // => undefined 
```
 
Note that prettyDate only cares about dates in the past (by far the most common use case) and only dates within the past month (anything beyond a month becomes fuzzy and impractical).

## The source files

* **pretty.js** (Also include a .prettyDate() jQuery plugin, for convenience.)

* **demo.html** (Some examples of date conversion using basic DOM manipulation.)

## Supported languages

* en-US: English
* es-ES: Spanish
* fr-FR: French
* it-IT: Italian

Fork me and make a pull request with your preferred language!

## Example Usage

In the following examples I make all the anchors on the site, that have a title with a date in it, have a pretty date as their inner text. Additionally, I continue to update the links every 5 seconds after the page has loaded. Remember that the locale language will be selected based on your browser locale settings.

With plain DOM:

``` javascript
    function prettyLinks(){
      var links = document.getElementsByTagName("a");  
      for ( var i = 0; i < links.length; i++ )
        if ( links[i].title ) {
          var date = prettyDate(links[i].title);
          if ( date )
            links[i].innerHTML = date;
        }
    }
    prettyLinks();
    setInterval(prettyLinks, 5000);
```

With jQuery:

``` javascript
    $("a").prettyDate();
    setInterval(function(){ $("a").prettyDate(); }, 5000);
```

# LICENSE
##JavaScript Pretty Date
    Copyright (c) 2011 John Resig (ejohn.org)
    Licensed under the MIT and GPL licenses.
    
    Added localization features by Eliseo Ocampos

