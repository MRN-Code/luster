---
layout: docs
title: Dropdowns
---

* Replaced by kramdown’s table of contents
{:toc}

<div class="luster-example">
    <div class="dropdown open clearfix">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
        </ul>
    </div>
</div><!-- .luster-example -->

{% highlight html %}
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
    </ul>
</div>
{% endhighlight %}

## Alignment

Add a class of `menu-dropdown-right` to make the dropdown area right-aligned:



## Further Documentation

* [Bootstrap’s dropdowns documentation](http://getbootstrap.com/components/#dropdowns)
* [React Bootstrap’s `NavDropdown` component documentation](https://react-bootstrap.github.io/components.html#navs-dropdown)
