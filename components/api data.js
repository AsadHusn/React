<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        
        function App(){
            const [starWars, setStarWars] = React.useState({})
            const [count, setCount] = React.useState(1)

            React.useEffect(()=>{
                // fetch(`https://swapi.dev/api/people/${count}`)
                //     .then(res=> res.json())
                //     .then(data => setStarWars(data))

                const xhr = new XMLHttpRequest()
                xhr.open('GET', `https://swapi.dev/api/people/${count}`)
                xhr.onload = ()=>{
                    const res = JSON.parse(xhr.response)
                    setStarWars(res)
                }
                xhr.send()

                console.log(count)
            }, [count])


            return (
                <>
                <button onClick={()=> setCount(count+1)}>Get Next Character</button>
                <pre> {JSON.stringify(starWars, undefined, 4)} </pre>
                </>
            )
        }
        
        root.render(<App/>)
    </script>