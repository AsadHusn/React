<script type="text/babel">
        const root = ReactDOM.createRoot(document.getElementById('root'))
        
        function App(){
            const [formData, setFormData] = React.useState({
                email: "",
                password: "",
                repeatpassword: "",
                join: true,
                comments: '',
                gender: '',
                color: ''
                
            })
            
            function handleClick(event){
                const {name, value, type, checked} = event.target
                setFormData(prevData=>{
                    return {
                        ...prevData,
                        [name] : type === 'checkbox' ? checked : value
                    }
                })
            }
            
            function handleSubmit(event){
                event.preventDefault()
                if(formData.password === formData.repeatpassword ){
                    console.log("welcome")
                }else{
                    console.log("password not matched")
                    return
                }
                if(formData.join){
                    console.log("Subscribed to the newsletter")
                }
            }
            
            return (
            <>
            <form onSubmit={handleSubmit}>
                Email:
                <input type="email" name="email" onChange={handleClick} value={formData.email}/>
                Password:
                <input type="password" name="password" onChange={handleClick} value={formData.password}/>
                Repeat Password:
                <input type="password" name="repeatpassword" onChange={handleClick} value={formData.repeatpassword}/>
                Join Newsletter:
                <input type="checkbox" name="join" onChange={handleClick} checked={formData.join}/>
                Textarea:
                <textarea name="comments" cols="30" rows="10" onChange={handleClick} value={formData.comments}/>
                <fieldset>
                    <legend>Gender</legend>
                    Male <input type="radio" name="gender" value='male' onChange={handleClick} checked={formData.gender == 'male'}/>
                    Female <input type="radio" name="gender" value='female' onChange={handleClick} checked={formData.gender == 'female'}/>
                </fieldset>
                <select name="color" value={formData.color} onChange={handleClick}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <br/>
                <button>Sign Up</button>
            </form>
            {console.log(formData)}
            </>
            )
        }
        
        root.render(<App/>)
    </script>