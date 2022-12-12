<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        let boxes = [
                { id: 1, on: false},
                { id: 2, on: true},
                { id: 3, on: false},
                { id: 4, on: true},
                { id: 5, on: false},
                { id: 6, on: true},
            ]
        
        
        function App(){
            const [squares, setSquares] = React.useState(boxes)

            const mySquares = squares.map(box => <Box
                key={box.id}
                id={box.id}
                on={box.on}
                toggle={(id)=>setSquares(prev => prev.map(square=> square.id==id ? {...square, on:!square.on} : square))}
            />)
            return <div> {mySquares} </div>
        }

        function Box(props){
            return (
                <div className="box" style={{backgroundColor: props.on && '#222222'}} key={props.id} onClick={()=>props.toggle(props.id)}></div>
            )
        }
        
        
        root.render(<App/>)
    </script>