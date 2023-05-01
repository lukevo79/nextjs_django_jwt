"use client"

import { useState } from "react"

const initialState: {
  username: string,
  password: string,
} = {
  username: '',
  password: '',
}

export default function Login() {

const [state, setState] = useState(initialState);


    return (
      <>
        <div className="container border-2 border-neutral-900 mx-auto mt-4 p-4 w-64 bg-neutral-200 rounded-md">
          <form>
            <div className="flex flex-col">
              <label className="text-xs mt-2 mb-1">Username:</label>
              <input type="text" onChange={(e)=>{setState({...state, username: e.target.value})}} className="border-2 border-neutral-400 rounded-md"></input>
              <label className="text-xs mt-2 mb-1">Password:</label>
              <input type="password" onChange={(e)=>{setState({...state, password: e.target.value})}} className="border-2 border-neutral-400 rounded-md"></input>
              <input type="button" value="Login" className="border border-neutral-700 mt-4 bg-neutral-500 rounded-lg text-neutral-400 hover:bg-slate-200"></input>
            </div>
          </form>
        </div>
      </>
    )
  }