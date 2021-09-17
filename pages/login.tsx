// @ts-check
import Link from 'next/link';
import Router from "next/router";
import React, { useContext, useState } from "react";

import { Context } from "../components/StateProvider";
const Login: React.FC = () => {
    const context = useContext(Context)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [alert, setAlert] = useState("")

    const Login = (event: any) => {
        event.preventDefault();
        if (username === "" || password === "") {
            setAlert("Please Fill the Value")
        } else {
            if (username === "admin" && password === "admin") {
                Router.push("/product")
                localStorage.setItem("username", username)
                context.username = username
            }else{
                setAlert("Invalid Credentials")
            }
            //  dbCon.get().then((promise) => {
            //      promise.forEach(result =>{
            //          if (result.data().username === username && result.data().password === password) 
            //          {

            //              Router.push("/product")
            //              localStorage.setItem("username", username)
            //              context.username = username
            //          }else{
            //              Router.push("/")
            //          }
            //      })
            //  })



        }

    }
    return (
        <div className="grid  h-screen place-items-center ">

            <form>
                <div className="place-items-center grid bg-yellow-500 rounded-lg p-5" >
                    <h1>{alert}</h1>
                    <input type="text" className="my-2 rounded-md p-1 outline-none" placeholder="Name"
                        value={username}
                        onChange={(event) => setusername(event.target.value)}
                    />
                    <input type="password" className="my-2 rounded-md p-1 outline-none" placeholder="Password"
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}
                    />
                    <button className="mt-2 bg-blue-600 p-2  hover:bg-blue-400 rounded-md"
                        onClick={(event) => Login(event)}
                    >
                        Login
                    </button>
                    <Link href="/register">
                        <p className="cursor-pointer"> Create new account</p>
                    </Link>
                </div>
            </form>

        </div>
    )




}

export default Login