import React from "react";
import './Dark.css'

class Dark extends React.Component{
    constructor(props){
        super(props)
        this.state={isDarkMode: true}
    }
    handleClick = ()=>{
        this.setState((prevState)=>({
            isDarkMode: !prevState.isDarkMode
        }))
    }
    
    render(){
        const isDarkMode = this.state.isDarkMode;
        return (
            <>
             {
                isDarkMode ?
            <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ad nemo culpa. Expedita rem sunt molestiae neque provident excepturi, facere rerum ullam laboriosam. Ipsum iste at corporis tempora cupiditate facilis voluptatum quia maiores assumenda mollitia facere obcaecati consectetur vel enim cumque repudiandae temporibus, nobis dicta repellendus velit, fugit deserunt reprehenderit. Quod optio similique vel ut modi, maxime provident natus nesciunt ullam ipsam. Tenetur aspernatur quia in corrupti labore at libero beatae, harum molestias asperiores, omnis nam dolorem error aperiam aut odio excepturi porro nobis iusto. Praesentium iste possimus quisquam incidunt explicabo. Doloremque id distinctio consequuntur aliquid eligendi deleniti, magni reiciendis.
                
            
            </p>:  <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ad nemo culpa. Expedita rem sunt molestiae neque provident excepturi, facere rerum ullam laboriosam. Ipsum iste at corporis tempora cupiditate facilis voluptatum quia maiores assumenda mollitia facere obcaecati consectetur vel enim cumque repudiandae temporibus, nobis dicta repellendus velit, fugit deserunt reprehenderit. Quod optio similique vel ut modi, maxime provident natus nesciunt ullam ipsam. Tenetur aspernatur quia in corrupti labore at libero beatae, harum molestias asperiores, omnis nam dolorem error aperiam aut odio excepturi porro nobis iusto. Praesentium iste possimus quisquam incidunt explicabo. Doloremque id distinctio consequuntur aliquid eligendi deleniti, magni reiciendis.
            </p>
    }
            <button onClick={this.handleClick}> {isDarkMode ? 'Enable Dark Mode':'Enable Light mode'}</button>
            </>

        )
    }
}
export default Dark