
import React, { useState } from 'react';
import Departmens from './Departmens'

export default function DepartmensList() {
    // const [name, setName] = useState();
    // const [location, setocation] = useState();

    // const [location, setLocation] = useStat("mm");
    const [dpList, setDpList] = useState([
        {
            id: 1,
            name: "IT",
            location: "Notth-east",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        },
        {
            id: 2,
            name: "Managment",
            location: "West",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        },
        {
            id: 3,
            name: "Accontant",
            location: "South_West",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        },
        {
            id: 4,
            name: "Managment",
            location: "West",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        },
        {
            id: 5,
            name: "Accontant",
            location: "South_West",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        },
        {
            id: 6,
            name: "Managment",
            location: "West",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        },
        {
            id: 7,
            name: "Accontant",
            location: "South_West",
            img: 'https://i1.delgarm.com/i/849/030403/667835b711cc3.jpeg'
        }
    ]);
    const showDpList = true;


    return (
        
        <div>
            {showDpList ? (
                <>
                    {/* <input
                        type='text'
                        onChange={(e) => {
                            set(e.target.value)
                        }}
                    /> */}
                    <div className='flex flex-wrap'>
                        {dpList.map((items) => {

                            return (
                            <div key={items.id}>
                            <Departmens
                                name={items.name}
                                location={items.location}
                                img={items.img}
                                
                            />
                            </div>);
                        })}
                    </div>
                </>
            ) :
                <p>Cannot showDpList</p>}
        </div>
    );

}
