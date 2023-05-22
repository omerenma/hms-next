import { useSession, signIn, signOut } from "next-auth/react"
import {Button, Box} from '@mui/material'

const  Login = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Box>
        Signed in as {session?.user?.name as string} <br />
        <Button variant={'contained'} color="success" onClick={() => signOut()}>Sign out</Button>
      </Box>
    )
  }
  return (
    <Box>
     <Box sx={{color:'black'}}>
     Not signed in 
      </Box> 
      <Button variant={'contained'} color="success" onClick={() => signIn()}>Sign in</Button>
    </Box>
  )
}
export default Login