import React from "react";
import axios from "axios";

let token = localStorage.getItem("token")

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            details:[],
            user_id:"",
        }
    }
    componentDidMount = () =>{
        axios.get("http://127.0.0.1:5000/all_videos")
        .then(response =>{
        console.log(response)
            this.setState({
                details:response.data,
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        console.log(this.state.details)
    return(
        <div className = "container">
            <table class="table mt-4">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Video</th>
                <th scope="col">tags</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                </tr>
            </thead>
            <tbody>
                {this.state.details.map((e) =>{
                    return(
                        <tr>
                            <td>{e[0]}</td>
                            <td>{e[1]}</td>
                            <td>
                                <video controls width="200px" height = "150px">
                                    <source  src = {`http://127.0.0.1:5000/${e[2]}`}  />
                                </video>
                            </td>
                            <td>{e[3]}</td>
                            <td>{e[4]}</td>
                            <td>{e[5]}</td>
                            <td>{e[6]}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
    </div>
    )
    }
}