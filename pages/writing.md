---
layout: default
title: "Writing"
description: "Essays and interactive editorial pieces on technology, consciousness, theology, and design."
permalink: /writing/
---

<div class="page-hero">
  <p class="eyebrow">Writing</p>
  <h1>Writing</h1>
  <p class="subtitle">Essays and interactive pieces on technology, consciousness, theology, and the design of belief. Each one is a self-contained page — built, not blogged.</p>
</div>

<section class="content-list" aria-label="Essays">
  {% assign items = site.data.writing | sort: "year" | reverse %}
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
