'use client'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from '@/Store/store'
import {Provider} from 'react-redux'
import { useEffect } from 'react';
import { asyncquery } from '@/Store/Actions/queryaction';

const Wrapper = ({children}) => {

  
  return (
    <>
    <Provider store={store}>
    {children}
    <ToastContainer />
    </Provider>
    </>
  )
}

export default Wrapper