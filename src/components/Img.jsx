import React, { Component } from 'react'

 class Img extends Component {
    render() {
        return (
            <div classNam='img-holder'>
                <h2>This is title</h2>
                <p>This is details of our image</p>
                <img src="../img/image2.jpg" alt=""/>                
            </div>
        )
    }
}
export default Img;