
1. my-Dve-stack


2. Description = Dev stack is a React web application that helps developer explore different technologies and create their own personalized technology stack.Users can browse technology cards, add technologies to their stack, and remove its after the added.


3. .React
   .TypeScript
   .Tailwind CSS
   .React Toastify
   .Vite
   .JSON
   .LocalStorage


   4. .Explore Technologies
       Browse different technologies with their name, category, description, difficulty level, badge, and rating.

       .Build Your Own Stack
        Add technologies to your personal stack without allowing duplicate selections. Users can also remove individual technologies or remove all technologies.

        .Notifications
         Toast notifications provide feedback when technologies are added, removed, or duplicated.



1. What is JSX, and why is it used in React?
  Ans: JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make it easier to create and understand the UI.


2. What is the difference between props and state?
  Ans: Props: are data passed from a parent component to a child component.
  State: is data managed inside a component that can change over time.



3. What does the useState hook do, and where did you use it in this project?
Ans: useState creates and manages changing data inside a React component. In this project, I used it to store the selected    technologies in the stack and also to store the loaded  technology data.


4. What does the useEffect hook do, and why did you need it to load the JSON data?
  Ans: useEffect runs code after a component renders. I used it to fetch the JSON data when the Technologies component loads.


5. Why does every item in a .map() list need a unique key prop?
  Ans: The key helps React identify each item in a list. It allows React to understand which item was added, removed, or changed.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}


6. What is conditional rendering? Show one place you used it.
  Ans: Conditional rendering means showing different UI depending on a condition.

I used it to show an empty message when there are no technologies in the stack:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // show selected technologies
)}


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
 Ans: A parent sends data to a child using props.

For example:

<TechnologyCard technology={technology} />

The child can send information back to the parent by calling a function passed through props.

For example:

<TechnologyCard
  technology={technology}
  onAdd={addToStack}
/>

Here, the parent gives the addToStack function to the child, and the child calls it when the user clicks Add to Stack.

