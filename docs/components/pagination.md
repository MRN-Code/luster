---
layout: docs
title: Pagination
---

* Replaced by kramdown’s table of contents
{:toc}

Pagination is a control to help users navigate through long lists of
information. Be sure to wrap in a `nav` element.

{% example html %}
<nav>
    <ul class="pagination">
        <li>
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</nav>
{% endexample %}

## States

Make pagination items “active” or “disabled” by adding the `active` or `disabled` class name to the parent `li`:

<div class="luster-example">
    <nav>
        <ul class="pagination">
            <li class="disabled">
                <span>
                    <span aria-hidden="true">&laquo;</span>
                </span>
            </li>
            <li class="active">
                <span>1 <span class="sr-only">(current)</span></span>
            </li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</div><!-- .luster-example -->

{% highlight html %}
<nav>
    <ul class="pagination">
        <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
        <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
        ...
    </ul>
</nav>
{% endhighlight %}

## Further Documentation

* [Bootstrap’s pagination documentation](http://getbootstrap.com/components/#pagination)
* [React Bootstrap’s `Pagination` component](https://react-bootstrap.github.io/components.html#pagination)

