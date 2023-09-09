import { adminProps } from "../types/Types";


const Admin = ({msg, isAdmin, isUser}: adminProps) => {
  return (
    <div>
        <h1>{msg}</h1>
        <h3>{isAdmin && 'I am Admin'}</h3>
        <h3>{isUser && 'I am user'}r</h3>
    </div>
  )
}

export default Admin;