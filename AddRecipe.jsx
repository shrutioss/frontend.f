import React from 'react'

const AddRecipe = () => {
  return (
    <>
    <div className="container my-5 p-5" style={{
        width:"500px",
        border:'2px solid yellow',
        borderRadius:'10px',
    }}>
      <h2 className="text-center">Add</h2>
      <form style={{
        width:'400px',
        margin:'auto'
      }}
      className='my-3 p-3'
      >
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="userHelp" />
          <div id="userHelp" className="form-text">We'll never share your Username with anyone else.</div>
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">instruction</label>
          <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="userHelp" />
          <div id="userHelp" className="form-text">We'll never share your Username with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ing1</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ing1</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ing2</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ing3</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">ing4</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Qty1</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Qty2</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Qty3</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Qty4</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">/Img-Url</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div className="container" d-grid col-6 >
        <button type="submit" className="btn btn-primary my-3">Register</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddRecipe;
      

