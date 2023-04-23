"use client"
import "@aws-amplify/ui-react/styles.css"
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navigate from './navigate'
import { Amplify } from 'aws-amplify'
import awsconfig from "./aws-exports"

import { AmplifyProvider, Authenticator, Button, Flex, Image, Text, View, withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure({...awsconfig, ssr:true})

function App() {
  return(
    <AmplifyProvider>
      <Authenticator>
        {({signOut, user})=>(
          <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
          textAlign="center"
        >
          <View width="100%">
            logo
            {/* <Image src={logo} alt="logo" width={240} height={240} /> */}
          </View>

          {user && (
            <View width="100%">
              <Text>Hello {user.username}</Text>
              <Button onClick={signOut}>
                <Text>Sign Out</Text>
              </Button>
            </View>
          )}

          <View width="100%">
            <Text>
              Edit <code>src/App.tsx</code> and save to reload.
            </Text>
          </View>
        </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  )
}

export default withAuthenticator(App)