<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        const Link = ReactRouterDOM.Link;
        const Route = ReactRouterDOM.Route;
        const HashRouter = ReactRouterDOM.HashRouter
        const BrowserRouter = ReactRouterDOM.BrowserRouter

        const App = () => (
        <HashRouter>
            <Layout/>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
        </HashRouter>
        )
        
        const Layout = ()=>{
            return <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        }
        const Home = () => <h1>Home</h1>
        const Login = () => <h1>Login</h1>
        const Register = () => <h1>Register</h1>
        
        root.render(<App/>)
        // "https://www.pluralsight.com/guides/using-react-router-with-cdn-links"
    </script>