import { useDispatch } from "react-redux"
import { memo } from "react"
import "../style/header.css"
import { handleSearch, handleTextChange } from "../utils/helper"
import { textChange } from "../utils/textSlice"
import { useState } from "react"


const Header=memo(function Header() {
    const [queryText,setQueryText]=useState("")
    const dispatch=useDispatch()

  return (
    <header className="header">
    <span className="btn_span">
    <input type="text" value={queryText} placeholder="search on your fingertip" name="textbox_btn" onChange={(e)=>handleTextChange(e,setQueryText)}/>
    <button onClick={()=>handleSearch(queryText,dispatch,textChange)}>Search</button>
    </span>
    </header>
  )
})

export default Header
