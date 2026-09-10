---
layout: default
title: "Interests"
description: "Ongoing areas of interest — aerospace, the Maya calendar, radio, and the nature of time and consciousness."
permalink: /interests/
---

{% assign d = site.data.interests %}

<div class="page-hero">
  <p class="eyebrow">Interests</p>
  <h1>Interests</h1>
  <p class="subtitle">{{ d.intro }}</p>
</div>

<section class="interests" aria-label="Areas of interest">
  {% for a in d.areas %}
  <article class="interest">
    <h2 class="interest__area">{{ a.area }}</h2>
    <p class="interest__note">{{ a.note }}</p>
    <ul class="interest__links">
      {% for l in a.links %}
      <li class="interest__link interest__link--{{ l.kind }}">
        {% if l.kind == "soon" or l.url == "" %}
          <span class="interest__tag">soon</span><span>{{ l.title }}</span>
        {% else %}
          <a href="{{ l.url | relative_url }}"{% if l.url contains "://" %} target="_blank" rel="noopener"{% endif %}>
            <span class="interest__tag">{% case l.kind %}{% when "hub" %}hub{% when "ext" %}ext ↗{% else %}open{% endcase %}</span>
            <span>{{ l.title }}</span>
          </a>
        {% endif %}
      </li>
      {% endfor %}
    </ul>
  </article>
  {% endfor %}
</section>
