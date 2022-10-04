import { React, useEffect } from 'react'
import axios from 'axios'



//pull from backend and display admin info
//enable admins to edit their personal information
//


function Profile() {

  // this just prints the Profile.js comp to my console
  const fetchUser = () => {
    axios.get("http://localhost:3000/v1/admins")
    .then((res) => {
      console.log(res.data)
    })
  }
  useEffect(() => {
    fetchUser()
    console.log("fetchUser attempt")
  }, [])


  return (
    <div>
      <h2>
        Profile
      </h2>
    <div>
      <h3>
        Name
      </h3>
      <div>

      </div>
    </div>
      
    </div>
  )
}

export default Profile