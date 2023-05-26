import {
  useLogoutFunction,
  useRedirectFunctions,
  withAuthInfo,
} from '@propelauth/react'
import Image from 'next/image'

const YourApp = withAuthInfo((props) => {
  const { redirectToLoginPage, redirectToAccountPage } =
    useRedirectFunctions()
  const logoutFunction = useLogoutFunction()

  // isLoggedIn and user are injected automatically from withAuthInfo

  if(!props.isLoggedIn){
    redirectToLoginPage()
  }
  if (props.isLoggedIn) {
    return (
      <div>
        <p>You are logged in as {props.user.userId}</p>
        <button onClick={redirectToAccountPage}>
          {' '}
          <img src={props.user.pictureUrl} alt="Picture of the author" />
        </button>
        <button onClick={logoutFunction}>Logout</button>
      </div>
    )
  } 
})

export default YourApp
