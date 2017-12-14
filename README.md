Animate.less
============

*CSS animation pack for Less compilers.*

Originally created by [Dan Eden](https://github.com/daneden/animate.css), `animate.less` is a collection of cross-browser CSS animations that you can plug right into your Less pre-processor for use in your projects. Thanks to the power of [Less](http://lesscss.org/), you can now create seriously complex animations, even without using any JavaScript or jQuery magic. More on this later.

## What is Less?
Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.

Less runs inside Node, in the browser and inside Rhino. There are also many [3rd party tools](http://lesscss.org/usage/index.html#guis-for-less) available that allow you to compile your files and watch for changes. The latter is the way to go if you want to get up and running quickly.

## Usage
To use animate.less in your website, simply drop this single file into your Less pre-processor and press `compile`. The pre-processor will generate an `animate.css` stylesheet. Just drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the included animation names. That's it! You now have an CSS animated element.

```html
<head>
  <link rel="stylesheet" href="animate.css">
</head>
```

You can do a whole bunch of other stuff with animate.css when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```javascript
$('#yourElement').addClass('animated bounceOutLeft');
```

You can also detect when an animation ends:

```javascript
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
```

**Note:** `jQuery.one()` is used when you want to execute the event handler at most *once*. More information [here](http://api.jquery.com/one/).

You can change the duration of your animations, add a delay or change the number of times that it plays:

```css
#yourElement {
  -vendor-animation-duration: 3s;
  -vendor-animation-delay: 2s;
  -vendor-animation-iteration-count: infinite;
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, etc)*

## Script-less Animations
One of the advantages of using Less is that you can create functions, which are basically [Mixins](http://lesscss.org/features/#features-overview-feature-mixins) containing nested rules and other function calls. Animate.less contains a set of mixins that make manipulating your animations easier. For example, the above jQuery example can be written as:

```less
#yourElement {
  #a.animated;           // initialize animation
  #a.iterate(infinite);  // repeat the animation forever
  #a.delay(a,2s);        // delay everything for 2 seconds
  #a.duration(a,3s);     // each iteration will play for 3 seconds
    .bounceOutLeft;      // initialize the animation effect (notice the lack of #a prefix)
}
```

Which will output:

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
  -webkit-animation-name: bounceOutLeft;
     -moz-animation-name: bounceOutLeft;
      -ms-animation-name: bounceOutLeft;
       -o-animation-name: bounceOutLeft;
          animation-name: bounceOutLeft;
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

And there you have it! Phew! What a ride. The animation has been achieved without using any jQuery. Of course, this is only a tiny fraction of what can be achieved with Animate.less. Please head on over to [AnimateForLess.com](http://animateforless.com) for a full demo and to join the duscussion.

## Live Demo
View the animation library in action over at http://animateforless.com/. You can find Dan Eden's original demo at http://daneden.me/animate/.

## License
Animate.less is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Documentation
Coming soon. I promise! Below is a cheat sheet to keep you busy.

## Cheat Sheet

#### Attention Seekers
- flash
- bounce
- shake
- tada
- swing
- wobble
- wiggle
- pulse
- rotate
- rotateCC

#### Flippers
- flip
- flipInX
- flipOutX
- flipInY
- flipOutY

#### Fading Entrances
- fadeIn
- fadeInUp
- fadeInDown
- fadeInLeft
- fadeInRight
- fadeInUpBig
- fadeInDownBig
- fadeInLeftBig
- fadeInRightBig

#### Fading Exits
- fadeOut
- fadeOutUp
- fadeOutDown
- fadeOutLeft
- fadeOutRight
- fadeOutUpBig
- fadeOutDownBig
- fadeOutLeftBig
- fadeOutRightBig

#### Bouncing Entrances
- bounceIn
- bounceInDown
- bounceInUp
- bounceInLeft
- bounceInRight

#### Bouncing Exits
- bounceOut
- bounceOutDown
- bounceOutUp
- bounceOutLeft
- bounceOutRight

#### Rotating Entrances
- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight

#### Rotating Exits
- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight

#### Lightspeed
- lightSpeedIn
- lightSpeedOut

#### Specials
- hinge
- rollIn
- rollOut

### Sliding Entrances
- slideInDown
- slideInLeft
- slideInRight
- slideInUp

### Sliding Exits
- slideOutDown
- slideOutLeft
- slideOutRight
- slideOutUp
