<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        const Context = React.createContext()
        function App() {
            const [user, setUser] = React.useState("Jesse Hall");
            
            return (
            <Context.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2/>
            </Context.Provider>
            
            );
        }
        
        function Component2() {
            return (
            <>
            <h1>Component 2</h1>
            <Component3 />
            </>
            );
        }
        
        function Component3() {
            return (
            <>
            <h1>Component 3</h1>
            <Component4 />
            </>
            );
        }
        
        function Component4() {
            return (
            <>
            <h1>Component 4</h1>
            <Component5 />
            </>
            );
        }
        
        function Component5() {
            const user = React.useContext(Context);
            
            return (
            <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
            </>
            );
        }
        
        root.render(<App/>)
        
    </script>