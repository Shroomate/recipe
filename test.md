---
layout: page
title: Test Page
---

# Test Page

This is a test page to verify the Jekyll setup is working.

## Recipe Collection Test

{% assign recipe_count = site.recipes | size %}
Number of recipes: {{ recipe_count }}

{% for recipe in site.recipes %}
- [{{ recipe.title }}]({{ recipe.url }})
{% endfor %} 