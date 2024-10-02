const { useState } = React;
const EmbeddedReact = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Embedded React Component</h1>
            <p>This is an embedded React component.</p>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
}
const root = ReactDOM.createRoot(document.querySelector('.react-root'));
root.render(<EmbeddedReact />);