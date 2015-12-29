---
layout: docs
title: Buttons
---

* Replaced by kramdown’s table of contents
{:toc}

Buttons are used to expose interaction to the user. You can use button classes on a variety of elements:

{% example html %}
<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">
{% endexample %}

**Do not** use `input`s for buttons due to cross-browser styling issues. Instead, use a `button` with `type="submit"` or a regular `button` depending on the context.

## Variations

Buttons come in six variations:

{% example html %}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

## Sizes

There are three button size variants in addition the default size:

* `btn-lg`
* `btn-sm`
* `btn-xs`

{% example html %}
<button type="button" class="btn btn-default btn-lg">Large</button>
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-default btn-sm">Small</button>
<button type="button" class="btn btn-default btn-xs">Extra Small</button>
{% endexample %}

## Block Button

Make a button take up the full width of its parent by adding the `btn-block` class:

{% example html %}
<button type="button" class="btn btn-default btn-block">Block Button</button>
<button type="button" class="btn btn-primary btn-block">Block Button</button>
{% endexample %}

## States

Buttons have a few states:

### Active

{% example html %}
<button type="button" class="btn btn-primary active">Primary button</button>
<button type="button" class="btn btn-default active">Button</button>
{% endexample %}

### Disabled

Use the `disabled` property to add “disabled” styling to a `button` element:

{% example html %}
<button type="button" class="btn btn-primary" disabled="disabled">Disabled primary button</button>
<button type="button" class="btn btn-default" disabled="disabled">Disabled default button</button>
{% endexample %}

Use the `disabled` class for anchors:

{% example html %}
<a href="#" class="btn btn-primary disabled">Disabled primary anchor</a>
<a href="#" class="btn btn-default disabled">Disabled default anchor</a>
{% endexample %}

## jQuery UI

jQuery UI provides a proxy element for `a`, `button` or `input` tags.

<div class="luster-example">
    <button id="example-jquery-ui-button">Regular button</button>
</div>

{% highlight javascript %}
var myButton = jQuery('#example-jquery-ui-button').button({
    label: 'jQuery UI Button'
});
{% endhighlight %}

<script>
jQuery(document).ready(function() {
    var myButton = jQuery('#example-jquery-ui-button').button({
        label: 'jQuery UI Button'
    });
});
</script>

## Further Documentation

* [Bootstrap’s button documentation](http://getbootstrap.com/css/#buttons)
* [React-Bootstrap’s `Button` component](https://react-bootstrap.github.io/components.html#buttons)
* jQuery UI’s [button widget documentation](https://api.jqueryui.com/button/)
