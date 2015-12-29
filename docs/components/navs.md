---
layout: docs
title: Navs
---

* Replaced by kramdown’s table of contents
{:toc}

Luster comes with several navigation components.

## Tabs

{% example html %}
<ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
</ul>
{% endexample %}

## Pills

Use the `nav-pills` class to use button-like navigation elements:

{% example html %}
<ul class="nav nav-pills">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
</ul>
{% endexample %}

## Justified

To make either tab-style or pill-style navs appear to have equal width, use the `nav-justified` class:

<div class="luster-example">
    <ul class="nav nav-tabs nav-justified">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
    </ul>
    <ul class="nav nav-pills nav-justified">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
    </ul>
</div><!-- .luster-example -->

{% highlight html %}
<ul class="nav nav-tabs nav-justified">
  ...
</ul>
<ul class="nav nav-pills nav-justified">
  ...
</ul>
{% endhighlight %}

## jQuery UI

jQuery UI comes with [tabs](https://jqueryui.com/tabs/):

{% example html %}
    <div id="example-tabs">
        <ul>
            <li><a href="#example-tabs-1">Tab 1</a></li>
            <li><a href="#example-tabs-2">Tab 2</a></li>
            <li><a href="#example-tabs-3">Tab 3</a></li>
        </ul>
        <div id="example-tabs-1">
        </div>
        <div id="example-tabs-2">
        </div>
        <div id="example-tabs-3">
        </div>
    </div>
{% endexample %}

{% highlight js %}
var myTabs = jQuery('#example-tabs').tabs();
{% endhighlight %}

<script>
(function() {
    var myTabs = jQuery('#example-tabs').tabs();
})();
</script>

## Further Documentation

* [Bootstrap’s navs documentation](http://getbootstrap.com/components/#nav)
* [React Bootstrap’s `Nav` and `NavItem` components documentation](https://react-bootstrap.github.io/components.html#navs)
* [jQuery UI’s Tabs Widget documentation](http://api.jqueryui.com/tabs/)
