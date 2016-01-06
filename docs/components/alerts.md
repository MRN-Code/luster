---
layout: docs
title: Alerts
---

* Replaced by kramdown’s table of contents
{:toc}

Use an alert to display notifications, alerts, error messages or otherwise blocking feedback to the user. Four flavors are available:

* **Success:** Use when providing feedback on a successful action. Add the `alert-success` modifying class.
* **Info:** Use when notifying the user of non-destructive changes. Add the `alert-info` modifying class.
* **Warning:** Use to alert the user of potentially destructive changes. Add the `alert-warning` modifying class.
* **Danger:** Use to alert the user of an error or removal of data. Add the `alert-danger` modifying class.

<div class="luster-example">
    <div class="alert alert-success" role="alert">
        <strong>Nice move!</strong> This is a “success” alert.
    </div>
    <div class="alert alert-info" role="alert">
        <strong>Your attention, please!</strong> This is an “info” alert.
    </div>
    <div class="alert alert-warning" role="alert">
        <strong>Watch Out!</strong> This is a “warning” alert.
    </div>
    <div class="alert alert-danger" role="alert">
        <strong>D-d-danger zone!</strong> This is a “danger” alert.
    </div>
</div><!-- .luster-example -->

{% highlight html %}
<div class="alert alert-success" role="alert">...</div>
<div class="alert alert-info" role="alert">...</div>
<div class="alert alert-warning" role="alert">...</div>
<div class="alert alert-danger" role="alert">...</div>
{% endhighlight %}

## Dismissible alerts

Make an alert removeable by adding the `alert-dismissible` class and the associated close `button`:

{% example html %}
<div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Hello!</strong> You can dismiss this alert.
</div>
{% endexample %}

You can also use multiple dismiss buttons:

{% example html %}
<div class="alert alert-info alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4>For your information</h4>
    <p>Hey. Hi.</p>
    <button type="button" class="btn btn-primary">Misc. Button</button>
    <button type="button" class="btn btn-default" data-dismiss="alert">Close</button>
</div>
{% endexample %}

## Links

Perhaps you need to redirect a user. Use an anchor with an `alert-link` class.

{% example html %}
<div class="alert alert-danger" role="alert">
    <strong>Big bugs.</strong> Oh, boy. You better <a href="#" class="alert-link">navigate to this page</a>.
</div>
{% endexample %}

## Further Documentation

* [Bootstrap’s alert documentation](http://getbootstrap.com/components/#alerts)
* [React Bootstrap’s `Alert` component](https://react-bootstrap.github.io/components.html#alerts)
