<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        const Link = ReactRouterDOM.Link;
        const Route = ReactRouterDOM.Route;
        const BrowserRouter = ReactRouterDOM.BrowserRouter
        const Switch = ReactRouterDOM.Switch
        //  NOTE: BrowserRouter does not work with a file:// path due to security reasons.
        
        const App = () => (
        <BrowserRouter>
            <Layout/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
            </Switch>
        </BrowserRouter>
        )
        
        const Layout = ()=>{
            return (
            <>    
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            </>
        )}
        const Home = () => <h1>Home</h1>
        const Login = () => <h1>Login</h1>
        const Register = () => <h1>Register</h1>
        
        root.render(<App/>)
    </script>