// N8N Code Node: Recipe JSON to Markdown Converter
// This node converts recipe JSON from your chatbot into proper markdown format for GitHub Pages

// Input: JSON object with recipe data
// Output: Markdown string and filename

// Get the input JSON from the previous node
const inputData = $input.first().json;

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

// Return the results
return [
  {
    json: {
      markdown: markdownContent,
      filename: filename,
      fullPath: `_recipes/${filename}`,
      recipe: recipeData,
      success: true
    }
  }
]; 