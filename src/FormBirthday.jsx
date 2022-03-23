import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const FormBirthday = () => {
    const [newBirthday, setNewBirthday] = useState({
        name: '',
        day: 1,
        month: 1,

    })


    return (
        <div className="form_wrapper">
            <form className="form-birthday">
                <input
                    type="text"
                    placeholder="Enter name"
                    value={newBirthday.name}
                    onChange={e => setNewBirthday({...newBirthday, name: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Enter Day"
                    value={newBirthday.day}
                    onChange={e => setNewBirthday({...newBirthday, day: +e.target.value})}
                    max={31}
                    min={1}
                />
                <select value={newBirthday.month} onChange={e => setNewBirthday({...newBirthday, month: +e.target.value})}>
                    <option defaultValue value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </select>
                <Link
                    to={`birthday/${newBirthday.name === '' ? 'Anonymous' : newBirthday.name}/${newBirthday.day}/${newBirthday.month}`}>
                    <button>
                        Accept
                    </button>
                </Link>
            </form>
        </div>


    );
};

export default FormBirthday;