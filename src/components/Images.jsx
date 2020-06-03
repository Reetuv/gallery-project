import React from  'react';
//import { Component } from "react";
const url = 'http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0';
class Images extends React.Component{
        constructor(props) {
            super(props) 
            this.state = {
                imageList: [],
                modalImageUrl: '',
                showModal: false,
            }
        }

        componentDidMount() {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({imageList: data});
                console.log('data---',data);
            })
        }

        onImageClick = (imageObj)=>  {
            this.setState({modalImageUrl: imageObj.urls.full, showModal: true})
        }

        render(){
                return (
                    <div style={{display: 'flex', flexWrap:'wrap'}} className="wrapper">
                    {
                        this.state.imageList.map((imageItem, index) => {

                            return (
                                <div key={index} onClick={()=>{this.onImageClick(imageItem)}}>
                                    <img src={imageItem.urls.full} alt={imageItem.alt_description}  width="500" height="600"/>
                                </div>
                            )
                        })
                    }

                    {
                        this.state.showModal && 
                    
                        <div style={{position: 'absolute' ,top:0 ,width:'100%', height:'100vh', display:'flex',backgroundColor:'rgba(0,0,0,0.3)', justifyContent:'center', alignItems:'center'}}>
                            <div style={{width:'75%', height:500 , backgroundColor:'#ffffff',borderRadius:10, display:'flex',justifyContent:'center',alignItems:'center' }}>
                                <img src={require('../img/image1.jpg')} alt="test" width="100" height="100"/>
                            </div>
                        </div>
                    }

                    </div>
                );

        }
}
export default Images;