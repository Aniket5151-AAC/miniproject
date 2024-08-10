import { useState } from "react"

const Todo = () =>{
    const [input,setinput]=useState('')
    const [todo,setTodo]=useState([])
    const addItem =() =>{
        if(input.trim() === ''){
            alert('add Valid data!!!')
        }else{
            setTodo([...todo,input])
            setinput('')
        }
    }
    const deleteItem =(index) =>{
        const newTodo =[...todo]
        newTodo.splice(index,1)
       
        setTodo(newTodo)
    }
    const editItem=(index) =>{
        const abc=todo[index]
        setinput(abc)
        deleteItem(index)
    }
    return(
        <div className="bg-secondary w-50 mx-auto p-5 rounded-4 mt-5">
            <h1 className="text-warning">TODO APP</h1>
            <input
            type="text"
            className="form-control w-75 mx-auto mb-3"
            value={input}
            onChange={(event)=>setinput(event.target.value)}
            />
            <button className="btn btn-success" onClick={addItem}>ADD</button>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Item List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index +1 }</td>
                                    <td>{item}</td>
                                    <td>
                                        <button className="btn btn-warning me-2"
                                        onClick={()=>editItem(index)}>EDIT</button>
                                    
                                        <button className="btn btn-danger" onClick={()=>deleteItem(index)}>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Todo