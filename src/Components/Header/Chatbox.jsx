import React, { useEffect, useState } from 'react'




const LocalItem = () => {


    const list = localStorage.getItem('lists')

    // console.log(list)

    if (list) {

        return JSON.parse(localStorage.getItem('lists'))

    } else {
        return [];

    }
}



const Todo = () => {
    const [InputData, SetinputData] = useState('')
    const [items, setitems] = useState(LocalItem())


    const addItem = () => {

        if (!InputData) {


        } else {
            setitems([...items, InputData])
            console.log(InputData)
            SetinputData('')
        }

    }


    const deleteItems = (id) => {

        const updateItems = items.filter((elem, ind) => {
            return ind !== id


        })
        setitems(updateItems)
    }

    const Remove = () => {

        setitems([])

    }










    useEffect(() => {

        localStorage.setItem('lists', JSON.stringify(items))




    }, [items])




    return (
        <>   
         <div className='main-div'>
            <div className='dataContainer'>

            </div>
            <div className='inputContainer chat '>
                {
                    items.map((e, i) => {
                        return (
                        
                        <div className='Item' key={i}>
                            <div className='row'>
                            <div className='col-sm-2'>
                            <img src='../images/avatar.png' alt="chat" />
                            </div>
                            <div className='col-sm-10'>
                                <h2 className='titlename'>Rina  <span className='num'>12</span> <span className='just'>Just Now</span> </h2>
                             <p>{e}</p>
                             </div>
                            {/* <button onClick={() => deleteItems(i)}>Delete </button> */}
                            </div>
                        </div>
                        )
                    })
                }
            
            </div>
            <span className='mychat'>
                <input placeholder='add... ' value={InputData} onChange={(e) => SetinputData(e.target.value)} />

                <button onClick={addItem}><img src='../images/send.png' alt="chat" /></button>
                </span>


            {/* <div><button onClick={Remove} style={{ marginTop: '33px', width: '12rem' }}>Remove All</button>
            </div> */}

        </div>
        </>

    )
}

export default Todo