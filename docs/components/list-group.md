---
layout: docs
title: List Group
---

* Replaced by kramdown’s table of contents
{:toc}

Have a bunch of similiar content? Throw it in a list.

{% example html %}
<ul class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
    <li class="list-group-item">Item 4</li>
    <li class="list-group-item">Item 5</li>
</ul>
{% endexample %}

## Badges

Badges are automatically aligned to the right:

<div class="luster-example">
<ul class="list-group">
    <li class="list-group-item">
        <span class="badge">4</span>
        My first item
    </li>
    <li class="list-group-item">
        <span class="badge">12</span>
        Second item
    </li>
    <li class="list-group-item">
        <span class="badge">7</span>
        Third item 
    </li>
</ul>
</div><!-- .luster-example -->

{% highlight html %}
<ul class="list-group">
    <li class="list-group-item">
        <span class="badge">4</span>
        My first item
    </li>
</ul>
{% endhighlight %}

## Links

Change the markup to include links:

{% example html %}
<div class="list-group">
    <a href="#" class="list-group-item">Link 1</a>
    <a href="#" class="list-group-item">Link 2</a>
    <a href="#" class="list-group-item">Link 3</a>
</div>
{% endexample %}

## Buttons

You can even use buttons. Fauncy.

{% example html %}
<div class="list-group">
    <button type="button" class="list-group-item">Link 1</button>
    <button type="button" class="list-group-item">Link 2</button>
    <button type="button" class="list-group-item">Link 3</button>
</div>
{% endexample %}

## Contextual Classes

List group items support the following contextual alternatives:

* success: `list-group-item-success` class
* info: `list-group-item-info` class
* warning: `list-group-item-warning` class
* danger: `list-group-item-danger` class

You can use these on regular `li`-style items, or even `a` or `button` list items.

{% example html %}
<ul class="list-group">
    <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
    <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
    <li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
    <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
</ul>
{% endexample %}

## States

Feel free to throw some shit in there:

<div class="luster-example">
    <ul class="list-group">
        <li class="list-group-item">
            <h4 class="list-group-item-heading">More complicated lists</h4>
            <p class="list-group-item-text">Phasellus suscipit ipsum nec purus luctus ut euismod nisi dapibus. Vestibulum eget metus in lorem dignissim condimentum mattis non lorem.</p>
        </li>
        <li class="list-group-item">
            <h4 class="list-group-item-heading">Additional content</h4>
            <p class="list-group-item-text">Fusce fringilla lectus ut ipsum condimentum a egestas odio pretium. Fusce vehicula erat a eros fermentum vestibulum. In a nisi eu dolor adipiscing facilisis sed et est. Suspendisse potenti.</p>
        </li>
        <li class="list-group-item">
            <h4 class="list-group-item-heading">Such markup</h4>
            <p class="list-group-item-text">Praesent nec nulla elit, sit amet molestie metus. Curabitur consectetur, ipsum sit amet fringilla imperdiet, nisi nulla pharetra nunc, et consectetur nulla nisl a dolor.</p>
        </li>
    </ul>
</div>

{% highlight html %}
<ul class="list-group">
    <li class="list-group-item">
        <h4 class="list-group-item-heading">More complicated lists</h4>
        <p class="list-group-item-text">Phasellus suscipit ipsum nec purus luctus ut euismod nisi dapibus. Vestibulum eget metus in lorem dignissim condimentum mattis non lorem.</p>
    </li>
    ...
</ul>
{% endhighlight %}

## Further Documentation

* [Bootstrap’s list group documentation](http://getbootstrap.com/components/#list-group)
* [React Bootstrap’s `ListGroup` and `ListGroupItem` component documentation](https://react-bootstrap.github.io/components.html#listgroup)

