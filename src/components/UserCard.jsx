import React from 'react'

const UserCard = ({ user, deleteUserById, setupdateInfo, handleOpen }) => {

    const handleDelete =() => {
        deleteUserById(user.id)
    }
    const handleUpdate =() => {
      setupdateInfo(user)
      handleOpen()
    }
  return (
    <article className='box'>
        <h2 className='title_name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
           <li className='box__list'><span>Email: </span>{user.email}</li>
           <li className='box__list'><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <button className='boton-per1' onClick={handleDelete}>Delete</button>
        <button className='boton-per2' onClick={handleUpdate}>Updates</button>
    </article>
  )
}

export default UserCard