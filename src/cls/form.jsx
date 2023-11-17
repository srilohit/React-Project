import React, { useState } from 'react';

function Formlist() {
    var [forms, setForms] = useState([]);
    var [rad, setRad] = useState('');

    var addc = () => {

        var obj = {
            name: document.getElementById('fn').value,
            contact: document.getElementById('cn').value,
            email: document.getElementById('ei').value,
        };
        setForms([...forms, obj]);
    };
    
    function handleRadio(e) {
        setRad(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='border border-5 m-2 p-2 border-sucess'>
            <h1>Forms</h1>
            <form onSubmit={submitHandler}>
                <label className='me-3'>Name:</label>
                <input type="text" id="fn" className=' ms-5 mb-3 rounded' /> <br />
                <label>Contact NO:</label>
                <input type="number" id="cn" className='ms-4 mb-3 rounded' /> <br />
                <label>Email ID:</label>
                <input type="email" id="ei" className='ms-5 mb-3 rounded' /> <br />
                <label className='me-3'>Gender:</label>
                <input type="radio" name="gender" id="m" value="male" className='me-2 ms-2' onChange={handleRadio} />male
                <input type="radio" name="gender" id="f" value="female" className='me-2 ms-2' onChange={handleRadio} />female
                <input type="radio" name="gender" id="o" value="others" className='me-2 ms-2' onChange={handleRadio} />others <br />
                <button onClick={addc} className='btn btn-primary mb-3 w-25 rounded'>Add Contact</button>
            </form>

            <table className='table table-bordered border-dark w-50'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Email ID</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        forms.map((value) => {
                            return (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.contact}</td>
                                    <td>{value.email}</td>
                                    <td>{rad}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
};

export default Formlist;