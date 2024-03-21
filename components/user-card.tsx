interface CardProps {
    name: string
    email: string
    modifyBtn: React.ReactNode
    deleteBtn: React.ReactNode
}

const Card = ({name, email, modifyBtn, deleteBtn}: CardProps) => {
  return (
    <div className="flex justify-between">
        <div>
            {name}
        </div>
        <div>
            {email}
        </div>
        <div>
            {modifyBtn}
            {deleteBtn}
        </div>
    </div>
  )
}

export default Card