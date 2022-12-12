<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        
        function App(){
            const [show, setShow] = React.useState(true)

            return (
            <>
            <button onClick={()=>setShow(!show)}>Toggle WindowTracker</button>
            {show && <Width/>}
            </>
            )
        }

        function Width(){
            const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

            React.useEffect(()=>{
                function watchWidth(){
                    console.log('trigger')
                    setWindowWidth(window.innerWidth)
                }
                
                window.addEventListener('resize', watchWidth)

                return () => window.removeEventListener('resize', watchWidth)

            }, [])

            return (
                <h1>{windowWidth}</h1>
            )
        }
        
        root.render(<App/>)
    </script>