---
layout: default
title: "Work"
description: "Client and studio projects by Follow or Bounce — identity, static sites, and interactive builds."
permalink: /work/
---

<div class="page-hero">
  <p class="eyebrow">Work</p>
  <h1>Work</h1>
  <p class="subtitle">Client and studio projects — identity systems, one-page sites, and interactive builds. For current services, see <a href="{{ '/offers/' | relative_url }}">Offers</a>.</p>
</div>

<section class="pf-grid-section" aria-label="Projects">
  <div class="pf-grid">
    {% assign items = site.data.work %}
    {% for item in items %}
      {% include portfolio-card.html project=item %}
    {% endfor %}
  </div>
</section>

<section class="section-cta">
  <p class="eyebrow">Start a project</p>
  <h2>Have something in mind?</h2>
  <a class="section-cta__btn" href="{{ '/offers/' | relative_url }}">See what I offer →</a>
</section>
