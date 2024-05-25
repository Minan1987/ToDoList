import React from 'react'

const Form = ({work, change, submit, error}) => {
    return (
        <form onSubmit={submit} className='py-3'>
            <div className="row form-group justify-content-between">
                <div className="col-md-9">
                    <input 
                    type="text" 
                    className='form-control'
                    value={work}
                    onChange={change}
                    />
                    {error && <span className='text-danger fs-6 mt-2'>{error}</span>}
                </div>
                <div className="col-md-3">
                    <button type='submit' className='btn btn-primary w-100'>افزودن کار</button>
                </div>
            </div>
        </form>
    )
}

export default Form
