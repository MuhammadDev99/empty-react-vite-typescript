import { signal } from "@preact/signals-react"
import "./App.css"
const count = signal<number>(0)
function App() {
    return (
        <>
            <img className="cat" src="/images/cat.png" />
            <div className="container">
                <p>Hello, World!</p>
                <button onClick={() => count.value++}>Count: {count}</button>
            </div>
        </>
    )
}

export default App
