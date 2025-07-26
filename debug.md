---
layout: page
title: Debug Page
---

# Debug Information

## Collections
{% raw %}
- site.collections: {{ site.collections | map: "label" | join: ", " }}
- site.recipes size: {{ site.recipes | size }}
{% endraw %}

## Recipe Details
{% for recipe in site.recipes %}
### Recipe: {{ recipe.title }}
- URL: {{ recipe.url }}
- Path: {{ recipe.path }}
- Layout: {{ recipe.layout }}
- Slug: {{ recipe.slug }}
- Collection: {{ recipe.collection }}
{% endfor %}

## Site Configuration
- Base URL: {{ site.baseurl }}
- URL: {{ site.url }} 