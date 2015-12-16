---
layout: docs
title: Buttons
---

{% comment %} Replaced by kramdown’s table of contents {% endcomment %}
{:toc}

Buttons are used to expose interaction to the user. You can use button classes on a variety of elements:

{% highlight html %}
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">
{% endhighlight %}

**Do not** use `input`s for buttons due to cross-browser styling issues. Instead, use a `button` with `type="submit"` or a regular `button` depending on the context.

## Variations

Buttons come in six variations:

{% highlight html %}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>
{% endhighlight %}

## Sizes

There are three button size variants in addition the default size:

* `btn-lg`
* `btn-sm`
* `btn-xs`

{% highlight html %}
<button type="button" class="btn btn-default btn-lg">Large</button>
<button type="button" class="btn btn-default">Large</button>
<button type="button" class="btn btn-default btn-sm">Large</button>
<button type="button" class="btn btn-default btn-xs">Large</button>
{% endhighlight %}

## jQuery UI

<div id="example-jquery-ui-button"></div>
{% highlight javascript %}
var myButton = jQuery('#example-jquery-ui-button').button({
    label: 'jQuery UI Button'
});
{% endhighlight %}

## Further Documentation

* [Bootstrap’s button documentation](http://getbootstrap.com/css/#buttons)
* [React-Bootstrap’s `Button` component](https://react-bootstrap.github.io/components.html#buttons)
* jQuery UI’s [button widget documentation](https://api.jqueryui.com/button/)
