---
layout: default
title: "Offers"
description: "Follow or Bounce — a one-person studio for AI and agentic systems, AI integration, technical advisory, and fast web builds."
permalink: /offers/
---

{% assign o = site.data.offers %}

<div class="page-hero">
  <p class="eyebrow">Offers — Follow or Bounce</p>
  <h1>What I build</h1>
  <p class="subtitle">{{ o.intro }}</p>
</div>

<section class="offers" aria-label="Services">
  {% for s in o.services %}
  <article class="offer">
    <div class="offer__head">
      <h2 class="offer__name">{{ s.name }}</h2>
      <p class="offer__meta">
        {% if s.price and s.price != "" %}<span>{{ s.price }}</span> · {% endif %}<span>{{ s.timing }}</span>
      </p>
    </div>
    <p class="offer__summary">{{ s.summary }}</p>
    <ul class="offer__list">
      {% for i in s.includes %}<li>{{ i }}</li>{% endfor %}
    </ul>
  </article>
  {% endfor %}
</section>

<section class="offers-addons">
  <h2 class="section-label">Add-ons</h2>
  <ul class="tag-list">
    {% for a in o.addons %}<li>{{ a }}</li>{% endfor %}
  </ul>
</section>

<section class="offers-process">
  <h2 class="section-label">How it goes</h2>
  <ol class="process">
    {% for p in o.process %}
    <li class="process__step">
      <span class="process__num">{{ forloop.index }}</span>
      <div>
        <h3 class="process__name">{{ p.step }}</h3>
        <p>{{ p.text }}</p>
      </div>
    </li>
    {% endfor %}
  </ol>
</section>

<section class="offers-not">
  <h2 class="section-label">What I don't do</h2>
  <ul class="no-list">
    {% for n in o.not_doing %}<li>{{ n }}</li>{% endfor %}
  </ul>
</section>

<section class="offers-proof">
  <h2 class="section-label">Recent work</h2>
  <div class="pf-grid">
    {% assign proof = site.data.work | where: "featured", true %}
    {% for item in proof limit:3 %}
      {% include portfolio-card.html project=item %}
    {% endfor %}
  </div>
  <p class="offers-proof__link"><a href="{{ '/work/' | relative_url }}">All work →</a></p>
</section>

<section class="offers-faq">
  <h2 class="section-label">FAQ</h2>
  <dl class="faq">
    {% for f in o.faq %}
    <dt>{{ f.q }}</dt>
    <dd>{{ f.a }}</dd>
    {% endfor %}
  </dl>
</section>

<section class="section-cta" id="inquiry">
  <p class="eyebrow">Start a project</p>
  <h2>Tell me what you're building</h2>
  <form class="contact-form contact-form--brief" data-email="{{ site.email }}" data-subject="Project inquiry — followorbounce.com">
    <input class="form-field" type="text" name="name" placeholder="Your name" required>
    <input class="form-field" type="email" name="email" placeholder="Your email" required>
    <select class="form-field" name="project_type" required>
      <option value="" disabled selected>Project type</option>
      <option>Custom agents &amp; automations</option>
      <option>AI integration for an existing product</option>
      <option>Technical advisory / audit</option>
      <option>Static site or interactive build</option>
      <option>Not sure yet</option>
    </select>
    <select class="form-field" name="budget">
      <option value="" disabled selected>Rough budget (optional)</option>
      <option>Under $5k</option>
      <option>$5k–$15k</option>
      <option>$15k–$40k</option>
      <option>$40k+</option>
      <option>Retainer / ongoing</option>
    </select>
    <input class="form-field" type="text" name="timeline" placeholder="Timeline (optional)">
    <textarea class="form-field" name="message" placeholder="What are you building, and what does done look like?" rows="5" required></textarea>
    <button class="form-submit" type="submit">Send inquiry →</button>
  </form>
  <div class="form-success" style="display:none;">
    <p class="eyebrow">Sent</p>
    <h2>Got it.</h2>
    <p>I'll reply within two business days — usually sooner.</p>
  </div>
</section>
