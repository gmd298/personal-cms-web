import axios from 'axios'
import React, { useEffect } from 'react'

//probably delete this since the home page will render the content and the website itself is the portfolio


function Portfolio() {

  const fetchPost = () => {
    axios.get("http://localhost:3000/v1/posts")
    .then((res) => {
      console.log(res.data)
    })
  }
  useEffect(() => {
    fetchPost()
    console.log("fetchPost attempt")
  }, [])

  return (
    <div>Portfolio</div>
  )
}

export default Portfolio