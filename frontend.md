## React Assignment

1. How can you implement shared functionality across a component tree?
Shared functionality across a component tree can be implemented using:

Context API: Provides a way to share data or functions globally without prop drilling.
Render Props: Uses a function as a child to share state or logic between components.
Custom Hooks: Encapsulates reusable logic in a hook, allowing multiple components to share behavior.

2. Why is the `useState` hook appropriate for handling state in a complex component?

The useState hook is appropriate for handling state in a complex component because it:

Encapsulates Local State: Manages state within individual components, making it easier to handle complex logic locally without affecting other parts of the application.
Enables Dynamic Updates: Allows for dynamic and responsive state changes based on user interactions or other events, essential for complex UI behavior.
Supports Multiple State Variables: You can use multiple useState hooks to manage different pieces of state, keeping the logic clean and organized.
Integrates with Functional Components: Works seamlessly with React's functional components, promoting a simpler and more declarative code style that's easy to maintain and reason about.


cd ../frontend then run command - npm run start
