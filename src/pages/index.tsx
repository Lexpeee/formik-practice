import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

import {
  Grid,
  TextField, 
  Button,
  Card,
  CardContent
} from '@mui/material'
import { 
  Formik, 
  useFormik
} from 'formik'

export default function Home() {

  const submit = (formData: any) => {
    console.log("formdata", formData)
  }

  // can be declared as a separate object
  const initialValues = {
    username: "",
    password: "",
  }

  const { 
    handleSubmit,
    values, 
    errors, 
    handleChange
  } = useFormik({
    initialValues, 
    validate: (values: any) => {
      const errors:any = {}

      if (!values?.username || values?.username === "") { 
        errors.username = "Username is required"
      }

      if (!values?.password || values?.password === "") { 
        errors.password = "Password is required"
      }

      if (values?.username.length < 8) {
        errors.username = "Username must be more than 8 characters"
      }
      
      return errors
    },
    onSubmit: values => submit(values)
  })

  useEffect(()=>{
    console.log("errors", errors)
  }, [errors])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit}>
          <Grid 
            container 
            spacing={2}
            justifyContent={'center'}
          >
            <Grid item xs={12}>
              <TextField
                name="username"
                label="Username"
                value={values?.username}
                onChange={handleChange}
                helperText={errors?.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                value={values?.password}
                onChange={handleChange}
                helperText={errors?.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
              >Submit</Button>
            </Grid>
          </Grid>
        </form>
      </main>
    </>
  )
}
