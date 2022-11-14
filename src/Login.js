import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a9f0cf1b53f44e0fa8b86caad2e537ee&response_type=code&ridirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: "100vh"}}
    >
        <a className='btn btn-success btn-lg' href={AUTH_URL}>Login With Spotify</a>
    </Container>
  )
}
