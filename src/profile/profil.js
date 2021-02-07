import React from 'react'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Profil = ({fullName,bio,profession,children,handleName}) => {
  

    return (
        <div  style={{display:'flex',flexDirection:'column', color:'black',alignItems:'center',fontFamily:'monospace' }}>
        
           <div className='image' style={{marginTop:'40px' ,borderRadius:'20px', boxShadow:'-30px 20px 15px rgba(0,0,0,0.3)'}}>{children} </div>  
          
           <h1 style={{color:'#FFB627', margin:'20px'}}>{fullName} </h1>
            <h3 style={{margin:'20px 100px', lineHeight:'40px'}}>{bio} </h3>

            <h2 style={{fontWeight:'bolder', margin:'10px', }}>Profession : <span>{profession}</span> </h2>
            
            <Button className='btn'  variant="outline-info" onClick={()=>handleName(fullName)} >more info</Button>

        </div>
    )
}

export default Profil



/****default props*** */
Profil.defaultProps={
    fullName : 'Default user',
    profession: 'Programmer',
    bio:'bio is empty'
}

/********propTypes*****/
Profil.propTypes ={
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string.isRequired,
    handleName: PropTypes.func,   
}