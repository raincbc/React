import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';
import { formData } from '../../data/FormData';
import FormBtn from './FormBtn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useFormik } from 'formik';
import { loginValidationSchema, passwordValidationSchema } from '../../data/FormData';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../base';
import { FoodContext } from '../../context/context';

const Form = ({ btnText }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentUser, setLoader, loader } = useContext(FoodContext)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [loader])
    
    const { handleSubmit, handleChange, values, touched, errors } = useFormik({
        initialValues: {
            login: '',
            password: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object(location.pathname === '/login' ?
            loginValidationSchema : { ...loginValidationSchema, ...passwordValidationSchema }),

        onSubmit: async (values) => {            
            if (location.pathname === '/login') {                
                await signInWithEmailAndPassword(auth, values.login, values.password)
                    .then((result) => {
                        const user = result.user;
                        setCurrentUser(user.email);

                        if (user) {
                            setLoader(true)
                            navigate('/loader')
                        }

                        setTimeout(() => {
                            navigate('/main') 
                        }, 1500)
                                              
                    }).catch((error) => {
                        console.log(error)
                    })
            }

            if (location.pathname === '/register') {
                try {
                    await createUserWithEmailAndPassword(auth, values.login, values.password) 
                    
                    navigate('/login')
                } catch (error) {
                    alert(error)
                }
            } 
        }
    })

    const handleRegister = () => {
        navigate('/register')
    }

  return (
      <FormPlace onSubmit={handleSubmit}>
          {formData.map(({ id, title, type, placeholder, name}) => (            
              <FormInput    
                  name={name}
                  key={id}
                  title={title}                  
                  placeholder={placeholder}  
                  location={location.pathname}
                  handleChange={handleChange}
                  values={values}
                  isTouched={touched[name]}
                  error={errors[name]}
                  type={type}
              />              
          ))}
          <FormBtn
              btnText={btnText}
              type={'submit'}
          />
          <CreateAccount
              location={location.pathname}
              onClick={handleRegister}
          >
              <button type='button'>don't have an account</button>
          </CreateAccount>
      </FormPlace>
  )
}

export default Form;

const FormPlace = styled.form`
    margin:0 auto;
    max-width:578px;
    padding:50px;
    background-color: white;
    border-radius: 35px;
    margin-top: 17px;

    @media (max-width: 768px) {
        padding:40px;
        max-width:450px;
    }

    @media (max-width: 550px) {
        padding:10px
    }

    @media (max-width: 400px) {
        max-width:350px;
        padding:30px 10px
    }
`;

const CreateAccount = styled.div`
    text-align:center;
    margin-top:10px;

    ${(props) => props.location === "/register" ? 'display:none;' : 'display:block;'};

    button{
        border: none;
        background-color: transparent;
        text-decoration: underline;
        color: black;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        cursor:pointer;
    }
`;