---
layout: docs
title: Button dropdown
---

{% comment %} Replaced by kramdown’s table of contents {% endcomment %}
{:toc}

Easily create dropdown menus that are toggle-able with a button.

{% highlight html %}
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
{% endhighlight %}

## Further Documentation

* [Bootstrap’s Dropdown documentation](http://getbootstrap.com/components/#btn-dropdowns)
* [React-Bootstrap’s `DropdownButton` component](https://react-bootstrap.github.io/components.html#btn-dropdowns)
