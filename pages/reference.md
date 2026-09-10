---
layout: default
title: "Reference"
description: "Practical guides and interactive tools for radio, marine communication, and access control."
permalink: /reference/
---

<div class="page-hero">
  <p class="eyebrow">Reference</p>
  <h1>Reference</h1>
  <p class="subtitle">Practical guides and interactive tools I keep maintained — radio, marine communication, and access control. Free to use.</p>
</div>

<section class="content-list" aria-label="Reference guides and tools">
  {% assign items = site.data.reference | sort: "year" | reverse %}
  {% for item in items %}
  <article class="content-row">
    <a class="content-row__link" href="{{ item.link | relative_url }}">
      <span class="content-row__year">{{ item.year }}</span>
      <span class="content-row__body">
        <span class="content-row__title">{{ item.title }}</span>
        {% if item.summary %}<span class="content-row__summary">{{ item.summary }}</span>{% endif %}
      </span>
      {% if item.tags %}<span class="content-row__tags">{{ item.tags | join: " · " }}</span>{% endif %}
    </a>
  </article>
  {% endfor %}
</section>
