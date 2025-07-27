// Test Recipe Converter - Can be run independently to test the conversion
// Copy this into a Node.js environment or browser console to test

// Sample recipe data (from your file.txt) - nested structure
const inputData = {
  "output": {
    "title": "Classic Margherita Pizza",
    "date": "2023-10-07 15:00:00 -0700",
    "slug": "classic-margherita-pizza",
    "layout": "recipe",
    "content": {
      "mainIngredients": [
        "1 pizza dough ball (about 12 inches)",
        "1/2 cup tomato sauce",
        "8 oz fresh mozzarella, sliced",
        "Fresh basil leaves",
        "2 tbsp olive oil",
        "Salt to taste"
      ],
      "sideIngredients": [],
      "steps": [
        {
          "title": "Preheat oven and prepare dough",
          "instructions": "Preheat oven to 475°F (245°C). On a floured surface, roll out pizza dough to a 12-inch circle."
        },
        {
          "title": "Add toppings",
          "instructions": "Spread tomato sauce evenly over dough, leaving a small border. Arrange mozzarella slices on top of sauce."
        },
        {
          "title": "Bake pizza",
          "instructions": "Bake pizza in preheated oven for 10-12 minutes or until crust is golden and cheese is bubbly."
        },
        {
          "title": "Finish and serve",
          "instructions": "Remove from oven, top with fresh basil leaves, drizzle olive oil, and sprinkle salt to taste. Slice and serve hot."
        }
      ],
      "notes": [
        "For a crispier crust, preheat a pizza stone in the oven before baking."
      ]
    }
  }
};

// Handle nested structure where recipe data is in output property
const recipeData = inputData.output || inputData;

// Validate required fields
if (!recipeData.title || !recipeData.date || !recipeData.slug) {
  throw new Error('Missing required fields: title, date, or slug');
}

// Generate the markdown content
function generateMarkdown(recipe) {
  const { title, date, slug, layout, content } = recipe;
  
  // Front matter
  let markdown = `---
title: ${title}
date: ${date}
slug: ${slug}
layout: recipe
---

# ${title}

`;

  // Main ingredients
  if (content.mainIngredients && content.mainIngredients.length > 0) {
    markdown += `## ${title} Ingredients\n`;
    content.mainIngredients.forEach(ingredient => {
      markdown += `- ${ingredient}\n`;
    });
    markdown += '\n';
  }

  // Side ingredients (if any)
  if (content.sideIngredients && content.sideIngredients.length > 0) {
    markdown += `## Side Dish Ingredients\n`;
    content.sideIngredients.forEach(ingredient => {
      markdown += `- ${ingredient}\n`;
    });
    markdown += '\n';
  }

  // Preparation steps
  if (content.steps && content.steps.length > 0) {
    markdown += `## Preparation Steps\n`;
    content.steps.forEach((step, index) => {
      markdown += `${index + 1}. **${step.title}**: ${step.instructions}\n`;
    });
    markdown += '\n';
  }

  // Notes
  if (content.notes && content.notes.length > 0) {
    markdown += `## Notes\n`;
    content.notes.forEach(note => {
      markdown += `- ${note}\n`;
    });
  }

  return markdown;
}

// Generate the markdown content
const markdownContent = generateMarkdown(recipeData);

// Generate filename based on date and slug
const dateObj = new Date(recipeData.date);
const dateStr = dateObj.toISOString().split('T')[0]; // YYYY-MM-DD format
const filename = `${dateStr}-${recipeData.slug}.md`;

// Output results
console.log('Generated Filename:', filename);
console.log('Full Path:', `_recipes/${filename}`);
console.log('\n--- Generated Markdown ---\n');
console.log(markdownContent);
console.log('\n--- End Markdown ---');

// For n8n compatibility, return the same structure
const result = {
  markdown: markdownContent,
  filename: filename,
  fullPath: `_recipes/${filename}`,
  recipe: recipeData,
  success: true
};

console.log('\n--- Result Object ---');
console.log(JSON.stringify(result, null, 2)); 