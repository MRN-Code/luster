---
layout: docs
title: Badges
---

* Replaced by kramdown’s table of contents
{:toc}

Call attention to items’ quantities with a badge:

{% example html %}
<a href="#">Inbox <span class="badge">42</span></a>

<button class="btn btn-primary" type="button">
    Messages <span class="badge">4</span>
</button>
{% endexample  %}

## In Navs

You can also throw badges into nav components:

{% example html %}
<ul class="nav nav-pills" role="tablist">
    <li role="presentation" class="active">
        <a href="#">Home <span class="badge">42</span></a></li>
    <li role="presentation">
        <a href="#">Profile</a>
    </li>
    <li role="presentation">
        <a href="#">Messages <span class="badge">3</span></a>
    </li>
</ul>
{% endexample %}

## Further Documentation

* [Bootstrap’s badges documentation](http://getbootstrap.com/components/#badges)
* [React Bootstrap’s `Badge` component documentation](https://react-bootstrap.github.io/components.html#badges)
