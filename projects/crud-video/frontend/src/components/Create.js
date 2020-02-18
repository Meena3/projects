import React from "react";
import axios from "axios";

export default class Create extends React.Component{
    constructor(props){
        super(props);
        this.state={
            video_title:"",
            tags:"",
            description:"",
            category:"",
            video_location:""

        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleImage = (e) =>{
        this.setState({
            [e.target.name]:e.target.files[0]
        })
    }
    handleClick = (e) =>{
        e.preventDefault()
        var formdata = new FormData()
        formdata.append("video_location",this.state.video_location)
        axios.post("http://127.0.0.1:5000/upload_video",formdata,{
            headers:{
                video_title:this.state.video_title,
                tags:this.state.tags,
                description:this.state.description,
                category:this.state.category,
            }
        })
        .then(response =>{
            console.log(response)
            alert("Added")
            this.props.history.push('/login')
        })
        .catch(error =>{
            console.log(error)
        });
    }

    render(){
        // console.log(this.state.details)
        return(
            <div style = {{marginLeft:"500px"}}>
                <form className = "col-6 mt-5">
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Video Title</label>
                        <input type="email" name = "video_title" className="form-control" placeholder="Video title"
                             value = {this.state.video_title} onChange = {(e) =>{this.handleChange(e)}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Tags</label>
                        <input type="text" name = "tags" className="form-control"
                             value = {this.state.tags} onChange = {(e) =>{this.handleChange(e)}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" rows="3" name = "description"
                            value = {this.state.description} onChange = {(e) =>{this.handleChange(e)}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Category</label>
                        <input type="text" name = "category" className="form-control"
                             value = {this.state.category} onChange = {(e) =>{this.handleChange(e)}}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Video</label>
                        <input type="file" name = "video_location" className="form-control"
                             onChange = {(e) =>{this.handleImage(e)}}
                        />
                    </div>
                    <button className = "btn btn-outline-danger" onClick = {(e) =>{this.handleClick(e)}}>Upload</button>
                </form>
            </div>
        )
    }
}