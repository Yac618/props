    


const Profile = ({FullName,bio,profession,children,handleClick}) => {
    return (
        <div>
            <h1> FullName : {FullName}</h1>
            <button onClick={()=> handleClick(FullName)}>hello</button>
            <h3> bio : {bio}</h3>
            <h3> profession : {profession}</h3>
            <img src = {children} style={{ textAlign:'center',width:'50%',height:'50%',position:'absolute'}} alt=""/>   
        <button >jhijf </button>
        </div>

    )
}
export default Profile