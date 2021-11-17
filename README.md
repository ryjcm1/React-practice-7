# React Practice 7

### Understanding React cycle and how React updates the real dom


## state/ props

Background - Single state management for toggling a paragraph tag

Case 1. 
- on toggle, paragraph tag flashes in dev tools
- on removal, whole dom flashes in dev tools
- Whole, dom re-renders on removal

Case 2. Component rendering via state passed as a prop value
- on toggle, paragraph tag flashes
- on removal, paragraph flashes
- app.js and child component are re-run, but only paragraph tag in dom is changed

Case 3. Component where the prop is set to a fixed value of false
- on unrelated state change in app.js, both parent and child component are run however no changes are seen in dom

### conclusion - if parent is re-evaluated, children element/ components will also be re-evaluated independent

React.memo