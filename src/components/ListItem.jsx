import React from 'react'
import { FaRegTrashCan, FaCheck } from "react-icons/fa6";
import { MdOutlineRefresh } from "react-icons/md";

const ListItem = ({ id, title, done, deleteHandler, doneHandler }) => {

    return (
        <li className={`list-group-item d-flex justify-content-between ${done ?  'bg-light-success text-success': ''}`} >
            {done ? <del>{title}</del> : title}
            <div>
                <button onClick={() => deleteHandler(id)} className='btn btn-small ms-2 text-white btn-danger'>
                    <FaRegTrashCan fontSize="16px" />
                </button>

                <button onClick={() => doneHandler(id)} className={done ? 'btn btn-small btn-success' : 'btn btn-small btn-primary'}>
                    {
                        done ? <FaCheck fontSize="16px" /> : <MdOutlineRefresh fontSize="18px" />
                    }
                </button>
            </div>
        </li>
    )
}

export default ListItem
