import * as React from 'react';
import { Container } from '../components/Container';
import NextLink from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react'

interface Isignup {

}


const Signup:React.FC<Isignup> =() => {
    const {data: session} = useSession();

    const handleSignin = (e: any) => {
      e.preventDefault()
      signIn()
    }    
    
    const handleSignout = (e:any) => {
      e.preventDefault()
      signOut()
    }

    return (
    <Container className='header'>
    <NextLink href='/'>
        <a className='logo'>NextAuth.js</a>
      </NextLink>
           {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
           {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  } 
    </Container>
    );
}

export default Signup;