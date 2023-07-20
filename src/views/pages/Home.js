import React, {useState,useEffect} from "react";

import { Config } from "../../model/config";


const Home=()=>{

    
    const[error,setError]=useState(null);

    const[isLoaded,setIsLoaded]=useState(false);

    const[members,setMembers]=useState([]);


    useEffect(()=>{
        fetch(`${Config.baseUrl}/MemberApi`)
        .then((res)=>res.json())
        .then((result)=>{
            setIsLoaded(true);
            setMembers(result.members);
        }).catch((err)=>{
            setError(err);
        });
    },[]);

        if (error) return <div>Error:{error.message}</div>;
        if (!isLoaded)return<div>Loading</div>;

    return(
<>
<h1>Manage Customer</h1>
        <table style={{borderCollapse:"collapse"}}>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>relation</th>
                
            </thead>

            <tbody>
                {members.map(member=>(
                    <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.relation}</td>
                        
                    </tr>
                ))}
                <tr></tr>
            </tbody>
        </table>
</>
    );

};
export default Home;