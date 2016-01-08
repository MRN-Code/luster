---
layout: docs
title: Tooltips
---

Clarify content with a “tip” that appears when a user hovers.

* Replaced by kramdown’s table of contents
{:toc}

They look like this:

<div class="luster-example luster-example-tooltips">
    <div class="tooltip left" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">Tooltip on the left</div>
    </div>
    <div class="tooltip top" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">Tooltip on the top</div>
    </div>
    <div class="tooltip bottom" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">Tooltip on the bottom</div>
    </div>
    <div class="tooltip right" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">Tooltip on the right</div>
    </div>
</div>

<div id="luster-example-toolips" class="luster-example luster-example-tooltips">
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
</div><!-- .luster-example -->

{% highlight html %}
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
{% endhighlight %}

<script>
(function() {
    jQuery('#luster-example-tooltips [data-toggle="tooltip"]').tooltip();
})();
</script>

## Further Documentation

* [Bootstrap’s tooltips documentation](http://getbootstrap.com/javascript/#tooltips)
* [React Bootstrap’s `Tooltip` component](https://react-bootstrap.github.io/components.html#tooltips)
