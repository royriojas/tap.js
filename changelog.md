
# xtap-event - Changelog
## v1.0.1
- **Features**
  - Normalize the tap event - [733de90]( https://github.com/alexgibson/tap.js/commit/733de90 ), [royriojas](https://github.com/royriojas), 04/09/2015 16:25:12

    - Do not fire tap if the end target is not the same as the starting target
    - Do not fire tap if there is a move between the starting event and the end event greater than 10px
    - Do not fire tap if there is more than 500ms between the start event and the end event
    
- **Bug Fixes**
  - make tap to work on ie11 - [e25dcfe]( https://github.com/alexgibson/tap.js/commit/e25dcfe ), [royriojas](https://github.com/royriojas), 03/09/2015 13:10:35

    
- **Other changes**
  - Bump v2.1.1 - [ac10de8]( https://github.com/alexgibson/tap.js/commit/ac10de8 ), [Alex Gibson](https://github.com/Alex Gibson), 26/04/2015 01:58:50

    
  - Update README.md - [3695303]( https://github.com/alexgibson/tap.js/commit/3695303 ), [Alex Gibson](https://github.com/Alex Gibson), 26/04/2015 01:53:00

    
  - add package.json - [0e42329]( https://github.com/alexgibson/tap.js/commit/0e42329 ), [benpptung](https://github.com/benpptung), 19/04/2015 00:54:01

    
  - Added UMD support - [67da85f]( https://github.com/alexgibson/tap.js/commit/67da85f ), [Thiago Lagden](https://github.com/Thiago Lagden), 20/03/2015 07:04:17

    
  - Fixes for changes in iOS8 touch behavior - [185bedc]( https://github.com/alexgibson/tap.js/commit/185bedc ), [Alex Gibson](https://github.com/Alex Gibson), 19/09/2014 05:55:15

    
  - Fix typo - [385b6f3]( https://github.com/alexgibson/tap.js/commit/385b6f3 ), [Alex Gibson](https://github.com/Alex Gibson), 10/09/2014 11:54:14

    
  - Call stopPropagation() on touchend (closes [#19](https://github.com/alexgibson/tap.js/issues/19)) - [d0fb18d]( https://github.com/alexgibson/tap.js/commit/d0fb18d ), [Alex Gibson](https://github.com/Alex Gibson), 10/09/2014 11:53:05

    
  - Preventing clicks from firing - [8e426fc]( https://github.com/alexgibson/tap.js/commit/8e426fc ), [Sorin Iclanzan](https://github.com/Sorin Iclanzan), 22/06/2014 13:40:11

    Made use of `event.preventDefault()` to keep `click` events from firing.
  - Fixed CustomEvent - [6e466fd]( https://github.com/alexgibson/tap.js/commit/6e466fd ), [Sorin Iclanzan](https://github.com/Sorin Iclanzan), 20/06/2014 11:08:33

    The `CustomEvent` constructor lives on `window` and not on `document`.
  - Added back accidentally removed brace. - [6454602]( https://github.com/alexgibson/tap.js/commit/6454602 ), [Sorin Iclanzan](https://github.com/Sorin Iclanzan), 19/06/2014 20:39:47

    
  - Allow for event delegation to happen. - [65928cc]( https://github.com/alexgibson/tap.js/commit/65928cc ), [Sorin Iclanzan](https://github.com/Sorin Iclanzan), 19/06/2014 20:38:07

    By returning `false` from the `setup` and `teardown` hooks we allow jQuery to automatically attach native event handlers on the element thus allowing for event delegation to work.
  - Update README.md - [32a4184]( https://github.com/alexgibson/tap.js/commit/32a4184 ), [Alex Gibson](https://github.com/Alex Gibson), 14/12/2013 11:43:18

    
  - Update README.md - [e6fe185]( https://github.com/alexgibson/tap.js/commit/e6fe185 ), [Alex Gibson](https://github.com/Alex Gibson), 14/12/2013 11:37:16

    
  - Fix indent in jQuery file - [f91cd5f]( https://github.com/alexgibson/tap.js/commit/f91cd5f ), [Dan Rogers](https://github.com/Dan Rogers), 13/12/2013 14:23:07

    
  - jQuery 'tap' event, minification tweaks - [a8071c8]( https://github.com/alexgibson/tap.js/commit/a8071c8 ), [Dan Rogers](https://github.com/Dan Rogers), 13/12/2013 14:17:29

    
  - Update README.md - [57db643]( https://github.com/alexgibson/tap.js/commit/57db643 ), [Alex Gibson](https://github.com/Alex Gibson), 13/12/2013 13:32:51

    
  - Remove mousemove case in event handler method - [0c0778f]( https://github.com/alexgibson/tap.js/commit/0c0778f ), [Alex Gibson](https://github.com/Alex Gibson), 13/12/2013 13:05:47

    
  - Remove redundant mousemove handler - [c3c8e36]( https://github.com/alexgibson/tap.js/commit/c3c8e36 ), [Alex Gibson](https://github.com/Alex Gibson), 13/12/2013 13:04:40

    
  - Add missing semi-colon - [59edda9]( https://github.com/alexgibson/tap.js/commit/59edda9 ), [Alex Gibson](https://github.com/Alex Gibson), 13/12/2013 12:43:54

    
  - Add destroy method - [c93abc8]( https://github.com/alexgibson/tap.js/commit/c93abc8 ), [Alex Gibson](https://github.com/Alex Gibson), 13/12/2013 12:42:55

    
  - Update README.md - [526cc1e]( https://github.com/alexgibson/tap.js/commit/526cc1e ), [Alex Gibson](https://github.com/Alex Gibson), 08/10/2013 04:00:17

    
  - Fix CustomEvent detection - [44cead7]( https://github.com/alexgibson/tap.js/commit/44cead7 ), [Alex Gibson](https://github.com/Alex Gibson), 15/09/2013 13:22:15

    
## v2.0.0
- **Revert**
  - Revert "Merge pull request [#7](https://github.com/alexgibson/tap.js/issues/7) from x3ro/tap-instance-caching" - [52c96e9]( https://github.com/alexgibson/tap.js/commit/52c96e9 ), [Alex Gibson](https://github.com/Alex Gibson), 01/08/2013 01:20:10

    This reverts commit 26c23a2a03fe6daee06b55aecf53b45eb516d7b1, reversing
    changes made to 36bc083bfb480ac957c975fb2b8e24a354196382.
    
- **Other changes**
  - Cache Tap.js instance creation to prevent duplicates - [8beec25]( https://github.com/alexgibson/tap.js/commit/8beec25 ), [Lucas Jenss](https://github.com/Lucas Jenss), 26/07/2013 06:07:17

    Previously it was easily possible to create multiple Tap instances
    on the same element. This caused all event handlers to be registered
    for both instances, and thus also dispatching events twice. In order
    to avoid this behavior, I added a cache object that keeps track of
    the created instances.
    
    The public API is now no longer the Tap constructor, but kind of a
    factory method to create instances. This has the additional advantage
    that we can return the element for which the instance was created,
    allowing for code like this:
    
        Tap(element).addEventListener( ... )
    
    Because `window.Tap` is still a function, the `new Tap(element)` style
    will also continue to work.
    
  - Check if CustomEvent is defined rather than a function - [d57e2ee]( https://github.com/alexgibson/tap.js/commit/d57e2ee ), [Lucas Jenss](https://github.com/Lucas Jenss), 26/07/2013 01:14:58

    Safari for Mac (6.0.5) and Safari for iOS (6.1) both return
    "object" for "typeof CustomEvent". As such, Tap.js previously
    defaulted to the deprecated document.createEvent mechanism
    event though Safari supports the new API.
    
  - Remove some trailing whitespaces - [c9a5500]( https://github.com/alexgibson/tap.js/commit/c9a5500 ), [Lucas Jenss](https://github.com/Lucas Jenss), 26/07/2013 01:14:37

    
  - Rename component.json to bower.json - [d06e22d]( https://github.com/alexgibson/tap.js/commit/d06e22d ), [Lane Goldberg](https://github.com/Lane Goldberg), 04/06/2013 18:02:26

    
  - Use CustomEvent if supported and initEvent as fallback - [7d3c9b5]( https://github.com/alexgibson/tap.js/commit/7d3c9b5 ), [Alex Gibson](https://github.com/Alex Gibson), 17/05/2013 15:19:15

    
  - Add installation instructions to README.md - [5e32391]( https://github.com/alexgibson/tap.js/commit/5e32391 ), [Alex Gibson](https://github.com/Alex Gibson), 15/02/2013 02:35:49

    
  - Add component.json for bower package management - [6c1b68a]( https://github.com/alexgibson/tap.js/commit/6c1b68a ), [Alex Gibson](https://github.com/Alex Gibson), 15/02/2013 02:32:12

    
  - Update README.md - [6de48b0]( https://github.com/alexgibson/tap.js/commit/6de48b0 ), [Alex Gibson](https://github.com/Alex Gibson), 13/02/2013 07:54:06

    
  - Add support for dual input devices that support use both touch and mouse - [3b0353b]( https://github.com/alexgibson/tap.js/commit/3b0353b ), [Alex Gibson](https://github.com/Alex Gibson), 13/02/2013 06:37:20

    e.g. touch screen laptops
    
  - Fix smooth scrolling on Asus Transformer Pad (fixes [#3](https://github.com/alexgibson/tap.js/issues/3)) - [c0e169d]( https://github.com/alexgibson/tap.js/commit/c0e169d ), [Alex Gibson](https://github.com/Alex Gibson), 15/01/2013 12:52:04

    
  - Update site URL is comments - [39387e5]( https://github.com/alexgibson/tap.js/commit/39387e5 ), [Alex Gibson](https://github.com/Alex Gibson), 22/08/2012 12:25:03

    
  - Update site URL - [9b78231]( https://github.com/alexgibson/tap.js/commit/9b78231 ), [Alex Gibson](https://github.com/Alex Gibson), 23/07/2012 12:36:43

    
  - update readme - [b94195b]( https://github.com/alexgibson/tap.js/commit/b94195b ), [Alex Gibson](https://github.com/Alex Gibson), 18/03/2012 13:07:38

    
  - Set hasTouch to prototype, and fixed cancell typo. - [73712b7]( https://github.com/alexgibson/tap.js/commit/73712b7 ), [psayre23](https://github.com/psayre23), 12/03/2012 22:15:59

    
  - Only call preventDefault(); on targets if not form inputs - [8173109]( https://github.com/alexgibson/tap.js/commit/8173109 ), [Alex Gibson](https://github.com/Alex Gibson), 14/02/2012 05:31:57

    
  - Initialise using object or id. Uprate browser support info - [2ccb237]( https://github.com/alexgibson/tap.js/commit/2ccb237 ), [Alex Gibson](https://github.com/Alex Gibson), 10/02/2012 02:51:45

    
  - tidy white space - [05d3527]( https://github.com/alexgibson/tap.js/commit/05d3527 ), [Alex Gibson](https://github.com/Alex Gibson), 31/01/2012 06:38:46

    
  - Add Opera Mobile 11.50 as a tested browser - [8fc63ee]( https://github.com/alexgibson/tap.js/commit/8fc63ee ), [Alex Gibson](https://github.com/Alex Gibson), 30/01/2012 01:19:38

    
  - minor amend - [f4cd978]( https://github.com/alexgibson/tap.js/commit/f4cd978 ), [Alex Gibson](https://github.com/Alex Gibson), 27/01/2012 08:48:20

    
  - initial commit - [aca763e]( https://github.com/alexgibson/tap.js/commit/aca763e ), [Alex Gibson](https://github.com/Alex Gibson), 27/01/2012 08:46:51

    
