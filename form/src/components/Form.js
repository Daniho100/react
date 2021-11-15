import React, { useState } from 'react'
import Card from './Card'
import './Form.css'
const Form = () => {

    
    
            const [submitting, setSubmitting] = useState(false);
            
            const [data, setData] = useState({
                firstName: "",
                lastName: "",
                bank: "",
                cardNumber: "",
                valid: "",
                cvs: "",
            })

       const [submittedData, setSubmittedData ] = useState(null);


      const onChangeHandler =(event)=> {
          const {value, name} = event.target
          
          setData({
             ...data,
             [name]: value
          })

        }

        // console.log(data)

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true)
                   setSubmittedData(data)
console.log(submittedData);  setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }
    return (
        
         
      <div className="container" >
          <div className="row">
              <div className="px-4 py-5 my-5 text-center">
                  <h1 className="display-5 fw-bold header"> HBANK Card Payment</h1>
                  
                  {submitting &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">Submitting form...</span>
                      </p>
                      }
                        
                  <form onSubmit={handleSubmit} className=" row g-3 shadow-sm p-3 mb-5 bg-body rounded form">
                      
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">First name</label>
                          <input type="text" className="form-control" id="firstname" placeholder='First name' name="firstName" value={data.firstName} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Last name</label>
                          <input type="text" className="form-control" id="firstname" placeholder='Last name' name="lastName" value={data.lastName} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Bank Name</label>
                          <input type="text" className="form-control" id="firstname" placeholder='Bank name' name="bank" value={data.bank} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6">
                      <label htmlFor='cardNumber' className="form-label">Card Number</label>
                     <input type="text" className="form-control" id="lastname" placeholder='**** **** **** ****' name="cardNumber" value={data.cardNumber} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-4 vue">
                          <label htmlFor='valid' className="form-label">Valid Till</label>
                          <input type="text" className="form-control" id="email" placeholder='15/22' name="valid" value={data.valid} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-4 veu">
                          <label htmlFor='cvs' className="form-label">Cvs</label>
                          <input type="text" className="form-control" id="inputAddress" placeholder='***' name="cvs" value={data.cvs} onChange={onChangeHandler}/>
                      </div>

                      <div className="col-12" >
                          <button type="submit" className=" btn btn-primary button">Pay Now</button>
                      </div>
                  </form>
                  </div>
                
                  
                  {submittedData !== null && <Card data={submittedData}/> }
             
             
             </div>
             </div>
            
         
    )
}

export default Form