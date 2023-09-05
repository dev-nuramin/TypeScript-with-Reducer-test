import { infoProps } from "../types/Types";



const Info = ({title, desc, amount, isAdmin, devs, users}: infoProps) => {
  return (
    <>
    <h1>{title}</h1>
    <p>{desc}</p>
    <span>{amount}</span>
    <p>{isAdmin && 'I am Admin'}</p>
     <div className="devs_info">
        <h4>Name: {devs?.name}</h4>
        <p>Age: {devs?.age}</p>
        <span>Skill: {devs?.skill && 'I am a devs'}</span>
     </div>
     <div className="user-info">
        <ul>{users?.map((item, index) => {
            return <li key={index}>{item.name}</li>
        })}</ul>
     </div>
    </>
    
  )
}

export default Info;