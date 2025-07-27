# Recipe Template for GitHub Pages Workflow

## File Naming Convention
Save recipes as: `_recipes/YYYY-MM-DD-[RECIPE_SLUG].md`

## Front Matter (Required)
```yaml
---
title: [RECIPE_TITLE]
date: [YYYY-MM-DD HH:MM:SS -0700]
slug: [RECIPE_SLUG]
layout: recipe
---
```

## Content Structure
```markdown
# [RECIPE_TITLE]

## [MAIN_DISH] Ingredients
- [QUANTITY] [INGREDIENT]
- [QUANTITY] [INGREDIENT]
- [QUANTITY] [INGREDIENT]

## [SIDE_DISH/SAUCE] Ingredients (if applicable)
- [QUANTITY] [INGREDIENT]
- [QUANTITY] [INGREDIENT]

## Preparation Steps
1. **[STEP_TITLE]**: [DETAILED_INSTRUCTIONS]
2. **[STEP_TITLE]**: [DETAILED_INSTRUCTIONS]
3. **[STEP_TITLE]**: [DETAILED_INSTRUCTIONS]

## Notes
- [COOKING_TIP_OR_SUGGESTION]
- [VARIATION_OR_SUBSTITUTION]
- [SERVING_SUGGESTION]
- [NUTRITION]
```

## Example Recipe
```markdown
---
title: Pulled Pork Sandwiches with Creamy Cole Slaw
date: 2025-07-26 08:50:00 -0700
slug: pulled-pork
layout: recipe
---

# Pulled Pork Sandwiches with Creamy Cole Slaw

## Pulled Pork Sandwich Ingredients
- 3 lbs pork shoulder (bone-in or boneless)
- 1 tbsp brown sugar
- 1 tbsp smoked paprika
- 1 tbsp chili powder
- 1 tsp garlic powder
- 1 tsp onion powder
- 1 tsp salt
- 1/2 tsp black pepper
- 1/2 cup apple cider vinegar
- 1/4 cup BBQ sauce (plus extra for sandwiches)
- Soft sandwich buns

## Creamy Cole Slaw Ingredients
- 4 cups shredded green cabbage
- 1 cup shredded carrot
- 1/2 cup mayonnaise
- 2 tbsp apple cider vinegar
- 1 tbsp honey
- Salt and pepper to taste

## Preparation Steps
1. **Rub the pork**: Mix brown sugar, smoked paprika, chili powder, garlic powder, onion powder, salt, and pepper. Rub all over pork shoulder.
2. **Slow cook**: Place pork in slow cooker. Add apple cider vinegar. Cook on low for 8 hours or until pork is tender and shreddable.
3. **Shred pork**: Remove pork, shred with forks, mix in BBQ sauce.
4. **Make cole slaw**: Toss cabbage and carrot in a bowl. In a separate bowl, mix mayo, vinegar, honey, salt, and pepper. Combine with veggies.
5. **Build sandwiches**: Pile pulled pork on buns, top with cole slaw, and add extra BBQ sauce if desired.

## Notes
- Great for meal prep or parties.
- Optionally toast buns for crunch.
- Add pickles or jalapeños for extra zest.
```

## Important Notes for Workflow
1. **Date format**: Must be `YYYY-MM-DD HH:MM:SS -0700` (Pacific time)
2. **Slug format**: Use lowercase, hyphens for spaces, no special characters
3. **File location**: Must be in `_recipes/` directory
4. **Layout**: Always use `layout: recipe`
5. **Markdown formatting**: Use proper markdown syntax for headers, lists, and emphasis 