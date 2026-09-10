---
layout: default
title: "Contact"
description: "Get in touch with Follow or Bounce."
permalink: /contact/
---

<div class="page-hero">
  <p class="eyebrow">Contact</p>
  <h1>Get in touch</h1>
  <p class="subtitle">For project inquiries, use the brief on <a href="{{ '/offers/' | relative_url }}">Offers</a> — it gets you a faster, more useful reply. For anything else, this reaches me directly.</p>
</div>

<form class="contact-form" id="contact-form" data-email="{{ site.email }}" data-subject="followorbounce.com — contact">
  <input class="form-field" type="text" name="name" placeholder="Your name" required>
  <input class="form-field" type="email" name="email" placeholder="Your email" required>
  <textarea class="form-field" name="message" placeholder="Your message" rows="6" required></textarea>
  <button class="form-submit" type="submit">Send →</button>
</form>

<div class="form-success" id="contact-success" style="display:none;">
  <p class="eyebrow">Message sent</p>
  <h2>Thanks.</h2>
  <p>I'll get back to you soon.</p>
</div>

<p class="contact-direct">Or email <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
