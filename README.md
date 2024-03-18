# Task Tracker Application
Simple task tracker application with two pages, one for setting the user and another for managing the tasks. Design choice for table, for simplicity and also the possibility for future improvements, such as filters, ordering and pagination. Pages are fully responsive even for small devices.

## Client
- React
- Typescript
- CSS Modules + sass
- socket.io-client
- Jest + react-testing-library
- Vite

### Setup
```
cd client
npm install
npm start
```

## Server
- Node
- Typescript
- socket.io
- Jest

### Setup
```
cd server
npm install
npm start
```

## Performance Analysis:

- Analyze the existing code and identify potential performance bottlenecks.
- Use browser developer tools or any suitable performance profiling tools to gather insights into rendering times and potential areas for improvement.

## Optimizations:

- Implement optimizations to ensure smooth rendering, especially when dealing with a large number of items.
- Demonstrate the impact of your optimizations through performance metrics.

### Optimization Techniques used:
#### 1. Code Splitting:
   - Split your application code into smaller chunks using dynamic imports or tools like `React.lazy` and `Suspense` to load only the necessary code for the current view, reducing initial bundle size and improving loading times.

#### 2. Minification and tree-shaking:
   - Bundle is minified and splitted into various chunks to improve performance
   - Utilized also tree-shaking and minification techniques to reduce the size of the bundle.

### Performance Metrics:

Used Lighthouse to measure performance. Initially scores were below 100 on all categories. Some improvements on the compression, serving the production bundle correctly increased the score to 100. On accessibility, some ids, alt tag for images were missing and by fixing that score was improved to 100.

## Future improvements

### Security:
- Fully implement CSP
- Sanitize all inputs
- Enable https
