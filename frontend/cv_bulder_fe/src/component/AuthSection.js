import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '../redux/SliceReducer'

const AuthSection = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    const G_Provider = new GoogleAuthProvider();
    const P_Provider = new FacebookAuthProvider();
    const Github_Provider = new GithubAuthProvider();
    function signInWithGoogle(){
       signInWithPopup(auth,G_Provider)
       .then((data)=>{
          dispatch(setUserDetails({
            Name:data.user.displayName,
            Email:data.user.email,
            PhotoUrl:data.user.photoURL
          }))
       })
    }

    function signInWithFacebook(){
        signInWithPopup(auth,P_Provider)
        .then((res)=>{
            dispatch(setUserDetails({
                Name:res.user.displayName,
                Email:res.user.email,
                PhotoUrl:res.user.photoURL
            }))
        })
    }
    function signInWithGithub(){
        signInWithPopup(auth,G_Provider)
        .then((res)=>{
            dispatch(setUserDetails({
                Name:res.user.displayName,
                Email:res.user.email,
                PhotoUrl:res.user.photoURL
            }))
        })
    }
    const element = React.createElement(
        'h1',
        {className:'Title'},
        'Hello'
    )
  return (
    <Container>
       <div className='form-box'>
        <div className="start">
            <img src='/images/resume.png'/>
            <h2>Canvas Resume Builder</h2>
        </div>
           <div className='bottom'>
           <h2>Sign Up with Google,Facebook or Github Accounts</h2>
           <button onClick={signInWithGoogle}><img src='/images/google.png'/> SignUp With Google</button>
           <button onClick={signInWithFacebook}><img src='/images/fb.png'/> SignUp With Facebook</button>
           <button onClick={signInWithGithub}><img src='/images/github.png'/> SignUp With Github</button>
           </div>
       </div>
    </Container>
  )
}

export default AuthSection

let Container = styled.div`
width:100%;
height:100vh;
background-color:#fff;
top:0;
left:0;
position:fixed;
z-index:20;
.form-box{
    width:300px;
    height:max-height;
    background-color:#fff;
    border-radius:4px;
    box-shadow:4px 4px 8px #000;
    top:50%;
    left:50%;
    position:absolute;
    transform:translate(-50%,-50%);
    overflow:hidden;
    .start{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        background-color:#000;
        color:#fff;
        width:100%;
        img{
            width:50px;
            height:50px;
        }
        h2{
            font-weight:bold;
            font-size:20px;
        }
    }
    .bottom{
        display:flex;
        justify-content:space-between;
        align-items:center;
        overflow:hidden;
        flex-direction:column;
        padding:10px;
        button{
            display:flex;
            justify-content:left;
            align-items:center;
            border:none;
            outline:none;
            cursor:pointer;
            border-radius:10px;
            width:80%;
            height:45px;
            box-shadow:4px 4px 9px #000;
            margin:2% 0;
            padding:3px;
            background-color:#fff;
            img{
                width:20px;
                height:20px;
            }
        }
        h2{
            font-size:15px;
        }
    }
}
`