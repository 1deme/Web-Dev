### Answers to HTML Selectors, Cascade, and Inheritance Questions

1. **Universal Selector**
   - `* { }`

2. **Type Selector**
   - `p { }`

3. **ID Selector**
   - `#profile-card { }`

4. **Class Selector**
   - `.comment { }`

5. **Child Selector**
   - `div > h3 { }`

6. **Descendant Selector**
   - `div h3 { }`

7. **Adjacent Sibling Selector**
   - `div + hr { }`

8. **General Sibling Selector**
   - `div ~ hr { }`

9. **Attribute Selector**
   - `input[type="email"] { }`

10. **Grouping Selector**
    - `h2, h3 { }`

11. **Pseudo-class Selector**
    - `li:first-of-type { }`

12. **Negation Pseudo-class Selector**
    - `p:not(div p) { }`

13. **Child Combinator Specificity**
    - `div > ul { }`

14. **Selecting Multiple Attributes**
    - `iframe[width="300"][height="200"] { }`

15. **Cascading Rules**
    - The inline style will take precedence, as inline styles have higher specificity than rules in an external CSS file.


### Answers to Inheritance and Cascading Questions

1. **Inheritance**  
   The `font-family` property will be inherited by child elements.

2. **Cascading Order**  
   Yes, the inline style `font-style: normal;` will override the `font-style: italic;` from a CSS rule because inline styles have higher priority.

3. **Specificity**  
   The `#specific h3 { color: green; }` rule will apply because ID selectors have higher specificity than type selectors.

4. **Universal Selector**  
   No, the universal `font-family` will not apply to an `<iframe>` because `iframe` content is a separate document and styles from the parent document do not affect it.

5. **Class vs. Inline Style**  
   The inline style `color: red;` will be used, as inline styles have higher priority than class selectors.

6. **Child vs. Descendant Selector**  
   The `font-style: italic;` from the child selector applies to the `<p>` inside the `div` because it's directly a child of `div`.

7. **Attribute Selector**  
   No, the `input[type="email"]` style will only affect `<input>` fields with the `type="email"` attribute, not others like `input[type="text"]`.

8. **ID vs. Class**  
   The `#profile-card` rule will apply to the `border` because ID selectors have higher specificity than class selectors.

9. **Inline Style and `!important`**  
   The `color: blue !important;` rule will be used because `!important` overrides the inline style.

10. **Default Styles**  
    The `<p>` will use the browser's default `font-size`. If no `font-size` is set, it will not inherit it from the parent, as `font-size` is not an inherited property.
