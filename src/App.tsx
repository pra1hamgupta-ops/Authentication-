import './App.css'
import AuthenticationForm from './AuthenticationForm'
// import AuthenticationContent from './AuthenticationContent'

function App() {

  return (
    <>
    {/* <AuthenticationContent text1={'Sign in to'} text2={'If you donot have an account register'} text3={'You can'} text4={'Register here!'}></AuthenticationContent> */}
    <AuthenticationForm text={'Sign up'} labels={["Enter email", "Create User name", "Contact number", "Password", "Confirm Password"]}></AuthenticationForm>
    </>
  )
}

export default App
