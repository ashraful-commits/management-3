
import React from 'react'
import AuthProvider from "/components/superAdmin/MainComponent"
import SuperAdmin from './../SuperAdmin';
import AdminIA from './../../app/AdminIA';
import SalesOne from './../../app/SalesOne';




const MainComponent = ({role}) => {
 

  return (
    <div>
      <AuthProvider>
      <div className="container-fluid  mt-5 min-w-[1536px]">
        {role == "SuperAdmin" && <SuperAdmin />}
        {role == "Sales1" && <SalesOne />}
        {role == "Sales2" && <SalesTwo />}
      </div>
      </AuthProvider>
    </div>
  )
}

export default MainComponent
