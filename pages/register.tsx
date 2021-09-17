import React, { useContext, useState } from "react";
import Link from 'next/link'
// import { db } from "../components/firebase";
import Router from "next/router";


const Register: React.FC = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [alert, setAlert] = useState("")
    // let dbCon = db.collection("user")
    const Register = (event: any) => {
        event.preventDefault();
        if (username === "" || password === "" || confirmpassword === "") {
            setAlert("Please Fill the Value")
        } else if (password !== confirmpassword) {
            setAlert("Password mismatch")
        }
        else {
            // dbCon.add({
            //     username: username,
            //     password: confirmpassword
            // }).then((promise) => Router.push("/login"))
        }

    }
    return (
        <div className="grid h-screen place-items-center ">

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
                    <input type="password" className="my-2 rounded-md p-1 outline-none" placeholder="retype-Password"
                        value={confirmpassword}
                        onChange={(event) => setconfirmpassword(event.target.value)}
                    />
                    <button className="mt-2 bg-blue-600 p-2  hover:bg-blue-400 rounded-md"
                        onClick={(event) => Register(event)}
                    >
                        Register
                    </button>
                    <Link href="/login">
                        <p className="cursor-pointer">I already have an account</p>
                    </Link>
                </div>
            </form>
        </div>
    )




}

export default Register