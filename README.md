# Animate.less
_CSS animations framework for Less.js CSS compilers._

> [**v2.0**](https://github.com/codeworksdev/animate.less/releases/latest)

Originally sourced from the insanely cool [Animate.css](https://github.com/daneden/animate.css) project, Animate.less takes constructing CSS animations a step further by tapping into the power of the popular [Less.js CSS preprocessor](http://lesscss.org/) to create seriously complex animations. You don't even have to use any JavaScript or jQuery magic to get the job done. It's CSS, with just a little more.

## What is Less.js?
[Less.js](http://lesscss.org/) is a CSS preprocessor that extends the CSS language, adding features that introduce variables, mixins, functions, and many other techniques commonly found in popular scripting languages. This allows you to make CSS that is more maintainable, themable and extendable.

Less.js runs inside [Node](https://nodejs.org/), in the browser and inside [Rhino](https://mozilla.github.io/rhino/). There are also many  [3rd-party tools](http://lesscss.org/usage/index.html#guis-for-less)  available that allow you to compile your files and watch for changes. The latter is the way to go if you want to get up and running quickly.

## Usage
To use Animate.less in your website, simply drop a single folder (`dist/less`) into your Less.js preprocessor, and `compile` the `animate.less` file inside that folder. The preprocessor will generate an `animate.css` stylesheet (minified CSS, if the option is available in your compiler). Once created, drop the single stylesheet into your HTML document's `<head>` tag, and add the class `animated` to every element you'd like to animate, along with any of the included [animation names](#cheat-sheet). That's it! You now have CSS animated elements.

**HTML EXAMPLE**
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Animate.less</title>
        <link href="[path_to_extracted_folder]/dist/css/animate.css" rel="stylesheet">
    </head>
    ...
```
You can do a whole bunch of other stuff with the compiled `animate.css` file when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:
```js
$('#yourElement').addClass('animated flash');
```
You can also detect when an animation ends:
```js
$('#yourElement').one('animationend', doSomething);
```
_**Note:**  `jQuery.one()` is used when you want to execute the event handler at most once. More information [here](http://api.jquery.com/one/)._

___
# Script-less Animations

One of the major advantages of using a Less.js preprocessor is that you can create [mixins](http://lesscss.org/features/#features-overview-feature-mixins) to do most of the heavy lifting for you. Their structure is similar to *functions* in popular scripting languages, minus the scripting engine. Mixins contain nested rules and other function calls, allowing complex CSS to be created with ease. With that said, Animate.less provides a set of pre-baked mixins that we think will make the process of constructing cross-browser CSS animations much easier.

For example, the jQuery example above can be written as a script-less CSS block:

```less
#yourElement {
    #a.animated();         // apply default animation properties
    #a.iterate(infinite);  // repeat all animations forever
    #a.delay(a, 2s);       // delay all animations for exacty 2 seconds
    #a.duration(a, 3s);    // each iteration will play for 3 seconds
    #a.flash();            // apply a single animation
    }
```
or with the shorthand variant:
```less
#yourElement {
    #a.animated(flash, 3s, 2s, infinite);
    }
```
which will output:
```css
#yourElement {
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
      -ms-animation-duration: 3s;
       -o-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-fill-mode: both;
     -moz-animation-fill-mode: both;
      -ms-animation-fill-mode: both;
       -o-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: flash;
     -moz-animation-name: flash;
      -ms-animation-name: flash;
       -o-animation-name: flash;
          animation-name: flash;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-delay: 2s;
     -moz-animation-delay: 2s;
      -ms-animation-delay: 2s;
       -o-animation-delay: 2s;
          animation-delay: 2s;
    }
```

And there you have it! The entire animation has been achieved without using any jQuery. Of course, this is only a tiny fraction of what can be achieved with Animate.less. **Please head on over to [AnimateForLess.com](http://animateforless.com/) for a live demo of this framework in action, or grab some popcorn and continue reading below to see what else is under the hood.**

___
# API

## Shorthand Mixins
Animate.less contains a set of useful mixins that make the process of constructing animations much easier. Scroll down below to learn more about each mixin included with the standard distribution package.

_**Note:** The [cheat sheet](#cheat-sheet) at the bottom of this page contains a list of pre-baked animations available for use right out of the box._

> ## #a.animated
>
> **#a.animated(** [_property_ **animation_name**][, _time_ **duration**][, _time_ **delay**][, _number|infinite_ **iterations**] **)**
>
> Defines the [`animation`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) CSS property for an element, while automatically setting [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) according to the [`@o_animateless_fill`](#global-variables) variable.

> ## #a.animations
>
> **#a.animations(** _list_ **animations;** **)**
>
> Specifies one or more animations that should be applied to an element. Uses the [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) CSS property, which is a shorthand property for the various animation properties: _animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state_.
>
> _**Note:**  Always remember to terminate your comma-separated CSS list with a semicolon to tell the compiler a list is being passed as a single argument ([reference](http://lesscss.org/features/#mixins-feature-mixins-with-multiple-parameters))._

> ## #a.backface-visibility
>
> **#a.backface-visibility(** _mixed_ **value** **)**
>
> Defines the [`backface-visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)  CSS property, which determines whether the back face of an element is visible when turned towards the user.

> ## #a.delay
>
> **#a.delay(** _a|t_ **type**, _time_ **unit** **)**
>
> Specifies either the [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) or [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) CSS property for an element, depending on the `type` given. If `type` is `a`, assumes `animation-delay`. If `type` is `t`, assumes `transition-delay`.

> ## #a.direction
>
> **#a.direction(** _mixed_ **value** **)**
>
> Defines the [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)  CSS property, which specifies whether an animation should play forwards, backwards, or alternating back and forth. If passing a CSS list, remember to end it with a semicolon to tell the compiler a list is being passed as a single argument ([reference](http://lesscss.org/features/#mixins-feature-mixins-with-multiple-parameters)).

> ## #a.duration
>
> **#a.duration(** _a|t_ **type**, _time_ **unit** **)**
>
> Specifies either the [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) or [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) CSS property for an element, depending on the `type` given. If `type` is `a`, assumes `animation-duration`. If `type` is `t`, assumes `transition-duration`.

> ## #a.fill
>
> **#a.fill(** _mixed_ **mode** **)**
>
> Defines the [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)  CSS property, which specifies how a CSS animation should apply styles to its target before and after its execution.

> ## #a.iterate
>
> **#a.iterate(** _number|infinite_ **iterations** **)**
>
> Defines the [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) CSS property specifies the number of times an animation cycle should be played before stopping. If multiple values are specified (i.e., comma-separated list), each time the animation is played the next value in the list is used, cycling back to the first value after the last one is used.

> ## #a.keyframes
>
> **#a.keyframes(** _property_ **animation_name**, _block_ **frames** **)**
>
> Generates a new **`@keyframes`**  CSS  [at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule), which controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions). If [`@o_animateless_prefixed`](#global-variables) is `true`, generates vendor-prefixed keyframes for maximum cross-browser compatibility.
>
> **EXAMPLE**
> ```less
>#a.keyframes(
>    fadeIn; {
>        from { opacity: 0; }
>        to   { opacity: 1; }
>        }
>    );
> ```

> ## #a.timing
>
> **#a.timing(** _a|t_ **type**, _string|function_ **timing_function** **)**
>
> Specifies either the [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) or [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) CSS property for an element, depending on the `type` given. If `type` is `a`, assumes `animation-timing-function`. If `type` is `t`, assumes `transition-timing-function`.

> ## #a.transform
>
> **#a.transform(** _mixed_ **values** **)**
>
> Defines the [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) CSS property, which lets you rotate, scale, skew, or translate a given element. This is achieved by modifying the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).

> ## #a.transform-origin
>
> **#a.transform-origin(** _mixed_ **values** **)**
>
> Defines the [`transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) CSS property, which sets the origin for an element's transformations.

> ## #a.transition
>
> **#a.transition(** [_property_ **name**][, _unit_ **duration**][, _unit_ **delay**][, _string|function_ **timing_function**] **)**
>
> Defines a single [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) CSS property, which is a shorthand property for the variable transition properties: _transition-property, transition-duration, transition-timing-function, transition-delay_.

> ## #a.transitions
>
> **#a.transitions(** _list_ **transitions;** **)**
>
> Defines one or more [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) CSS properties for an element. This is especially useful when you need to chain multiple transitions together in a sequence. Check out some examples [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Examples).
>
> _**Note:**  Always remember to terminate your comma-separated CSS list with a semicolon to tell the compiler a list is being passed as a single argument ([reference](http://lesscss.org/features/#mixins-feature-mixins-with-multiple-parameters))._

> ## #a.vendor
>
> **#a.vendor(** _property_ **name**, _mixed_ **value** **)**
>
> Generates cross-browser CSS properties according to the [current configuration](#global-variables).

> ## #a.animation
>
> **#a.animation(** _property_ **animation_name** **)**
>
> Specifies one or more animations names that should be applied to an element. Each name indicates an [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) at-rule that defines the property values for the animation sequence.

## Underscored Shorthand Mixins
Alternatively, you can use the "underscored" variants of the shorthand mixins listed above if you need to generate CSS properties for a specific vendor prefix only (defined by the `@vendor` variable). More information [here](https://github.com/codeworksdev/animate.less/issues/46#underscored-shorthand-mixins).

## Global Variables
You can easily alter the contents of compiled `animate.css` CSS file by configuring special global variables defined inside the `dist/less/_options.less` import file. All supported variables are listed below.
```
TYPE      | VARIABLE NAME            | DEFAULT | DESCRIPTION
---------------------------------------------------------------------------------------------------
boolean   | @o_animateless_classless | false   | Generate CSS classes?
time_unit | @o_animateless_duration  | 1s      | Default duration for all animations
css_value | @o_animateless_fill      | both    | Default CSS animation fill mode for all animations
boolean   | @o_animateless_prefixed  | false   | Generate vendor prefixes?
```
**DOCS FOR NERDS**

 - [@o_animateless_classless](https://github.com/codeworksdev/animate.less/issues/43)
 - [@o_animateless_duration](https://github.com/codeworksdev/animate.less/issues/35)
 - [@o_animateless_fill](https://github.com/codeworksdev/animate.less/issues/34)
 - [@o_animateless_prefixed](https://github.com/codeworksdev/animate.less/issues/33)

<a id="cheat-sheet"></a>
## Cheat Sheet
Below is a complete list of pre-baked animations available for use in the standard distribution package (84 total, as of this writing). Also, don't forget to head on over to [AnimateForLess.com](http://animateforless.com/) to see every animation in action!

| Attention Seekers | Bouncing Entrances | Bouncing Exits | Fading Entrances | Fading Exits
|--|--|--|--|--|
| bounce | bounceIn | bounceOut | fadeIn | fadeOut
| flash | bounceInDown | bounceOutDown | fadeInDown | fadeOutDown
| flashmin | bounceInLeft | bounceOutLeft | fadeInDownBig | fadeOutDownBig
| headShake | bounceInRight | bounceOutRight | fadeInLeft | fadeOutLeft
| jello | bounceInUp | bounceOutUp | fadeInLeftBig | fadeOutLeftBig
| pulse |  |  | fadeInRight | fadeOutRight
| rotate |  |  | fadeInRightBig | fadeOutRightBig
| rotateCC |   |  | fadeInUp | fadeOutUp
| rubberBand |  |  | fadeInUpBig | fadeOutUpBig
| shake |  |  |  |
| swing |  |  |  |
| tada |  |  |  |
| wobble |  |  |  |
| &nbsp; | | | |
| **Flippers** | **Lightspeed** | **Rotating Entrances** | **Rotating Exits** | **Sliding Entrances**
| flip | lightSpeedIn | rotateIn | rotateOut | slideInDown
| flipInX | lightSpeedOut | rotateInDownLeft | rotateOutDownLeft | slideInLeft
| flipInY |  | rotateInDownRight | rotateOutDownRight | slideInRight
| flipOutX |  | rotateInUpLeft | rotateOutUpLeft | slideInUp
| flipOutY |  | rotateInUpRight | rotateOutUpRight |
|  |  | rotateZoomIn | rotateZoomOut |
|  |  | rotateZoomInCC | rotateZoomOutCC |
| &nbsp; | | | |
| **Sliding Exits** | **Specials** | **Zoom Entrances** | **Zoom Exits** |
| slideOutDown | hinge | zoomIn | zoomOut |
| slideOutLeft | jackInTheBox | zoomInDown | zoomOutDown |
| slideOutRight | rollIn | zoomInLeft | zoomOutLeft |
| slideOutUp | rollOut | zoomInRight | zoomOutRight |
|  |  | zoomInUp | zoomOutUp |

___
# Further Reading
Because Less CSS looks just like regular CSS, learning it is a breeze. Less.js only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly. We encourage you to head on over to the [official Less.js documentation](http://lesscss.org/features/) to learn like a pro and take advantage of everything the CSS preprocessor has to offer. Happy coding!

___
# License
Animate.less is licensed under the MIT license. (http://opensource.org/licenses/MIT)
