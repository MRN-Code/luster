---
layout: docs
title: Progress Bar
---

Visualize advancement with a progress bar.

* Replaced by kramdown’s table of contents
{:toc}

{% example html %}
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
	<span class="sr-only">65% Complete</span>
    </div>
</div>
{% endexample %}

## Label

Add an explicit label by removing the assistive text `span` and including the label as raw text:

{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
    65%
  </div>
</div>
{% endexample %}

## Variations

{% example html %}
<div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
        <span class="sr-only">40% Complete (success)</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
        <span class="sr-only">20% Complete</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
        <span class="sr-only">80% Complete (danger)</span>
    </div>
</div>
{% endexample %}

## Further Documentation

* [Bootstrap’s progress bar documentation](http://getbootstrap.com/components/#progress)
* [React Bootstrap’s `Progress` component](https://react-bootstrap.github.io/components.html#progress)
