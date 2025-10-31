import { useState } from "react"
import Loader from "./Loader"

function Login() {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleLogin(e) {
        e.preventDefault()


        setUser('')
        setPass('')
        setLoading(true)

        const response = await fetch('https://lidetainnovation.gov.et/api/login')

        const data = await response.json()

        if (data.status == 200) setError(data.message)
        else setError(data.error)

        console.log(await data)

        setLoading(data? false : true)
    }
    

    return (
        <form onSubmit={(e) => handleLogin(e)} className="w-100 h-100 bg-white rounded-xl shadow-2xl shadow-slate-300 flex flex-col items-center justify-evenly " >

            <div className="flex flex-col justify-center items-center" >
                <h1 className=" font-bold text-3xl text-slate-600" >Login</h1>
                <p>Login into admin page</p>
            </div>


            <div className="flex flex-col justify-center items-center gap-5" >
                <input type="text" onChange={(e) => setUser(e.target.value)} value={user} required placeholder="username" className="w-80 h-13 border border-slate-300 rounded-lg px-2 focus:outline-none"  />
                <input type="text" onChange={(e) => setPass(e.target.value)} value={pass} required placeholder="password" className="w-80 h-13 border border-slate-300 rounded-lg px-2 focus:outline-none "  />
            </div>

            <p className="text-red-500" >{ error }</p>

            <button type="submit" className="w-80 h-10 bg-slate-800 text-white font-bold rounded-lg cursor-pointer flex justify-center items-center active:w-79 active:bg-slate-700 " >
                {
                    loading ?
                        <Loader />
                        :
                        <p>Login</p>
                }
            </button>

        </form>
    )
}

export default Login