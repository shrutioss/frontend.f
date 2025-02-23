import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container my-5 p-5" style={{
        width:"500px",
        border:'2px solid yellow',
        borderRadius:'10px',
    }}>
      <h2 className="text-center">Login</h2>
      <form style={{
        width:'420px',
        margin:'auto'
      }}
      className='my-3 p-3'
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div className="container" d-grid col-6 >
        <button type="submit" className="btn btn-primary my-3">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
      

