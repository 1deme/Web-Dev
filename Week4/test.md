# HTML Selectors, Cascade, and Inheritance Questions

### 1. Universal Selector
- How can you select **all elements** in the HTML document using a universal selector?
- Write a selector to target all `<p>` tags in the document.
- Suppose an ID `profile-card` is added to the `<div>` containing the profile card. How would you select this `<div>` using an ID selector?
- If a class `comment` is added to each comment in the social media post section, how would you select all elements with the class `comment`?
- Write a selector to target only the immediate `<h3>` child elements inside the `<div>` elements.
- How can you select all `<h3>` tags that are nested within `<div>` elements, regardless of depth?
- How can you select the `<hr>` element that immediately follows the profile card `<div>`?
- How can you select all `<hr>` elements that are siblings of the profile card `<div>`?
- Write a selector to target the `<input>` element of type `email` in the "Contact Us Form" section.
- How can you write a single selector to target both `<h2>` and `<h3>` elements?
- How can you select the first `<li>` in the audio playlist section?
- How can you select all `<p>` elements that are not inside the "Contact Us Form"?
- How can you target only the `<ul>` element directly inside the `<div>` for the "Social Media Post" section, without affecting other `<ul>` elements?
- How can you select all `<iframe>` elements that have both a `width` attribute of `300` and a `height` attribute of `200`?
- If an `<h3>` tag has both an inline style and a rule defined in a linked CSS file, which rule will take precedence? Explain why.
# Inheritance and Cascading Questions

### CSS Code
```css
/* Universal selector */
* {
  font-family: Arial, sans-serif;
}

/* Type selector */
h3 {
  color: blue;
}

/* Class selector */
.comment {
  font-size: 14px;
  color: gray;
}

/* ID selector */
#profile-card {
  border: 2px solid black;
  padding: 10px;
}

/* Descendant selector */
div ul {
  list-style-type: square;
}

/* Child selector */
div > p {
  font-style: italic;
}

/* Attribute selector */
input[type="email"] {
  border: 1px solid green;
  padding: 5px;
}

/* Inline style override */
.inline-style {
  color: red !important;
}

/* Specificity example */
#specific h3 {
  color: green;
}
```

- Which property will be inherited by child elements from the universal selector `* { font-family: Arial; }`?
- If an inline style `font-style: normal;` is applied to a `<p>`, will it override the `font-style: italic;` from a CSS rule?
- Which rule will apply to an `<h3>` inside a `div` with the ID `specific`—`h3 { color: blue; }` or `#specific h3 { color: green; }`?
- Will the universal `font-family` apply to an `<iframe>`? Why or why not?
- If a `<p>` has a class `comment` and an inline style `color: red;`, which color will be used?
- Does the `font-style: italic;` from the child selector apply to a `<p>` inside a `div`, or does the descendant rule for `div ul` apply?
- Will `input[type="email"]` style affect other input fields, like `input[type="text"]`?
- If a `div` has both an ID `#profile-card` and a class `.highlight`, which rule will apply to the `border`?
- If an inline style `color: red;` is applied to a `<h3>`, but the CSS rule has `color: blue !important;`, which will be used?
- If no `font-size` is set for a `<p>`, what size will it use? Does it inherit or use the browser's default?

