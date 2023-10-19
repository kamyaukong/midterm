import axios from "axios";
import React, { Component } from "react";

export default class AddTodo extends Component {

    constructor(props){
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state={
            description:'',
            responsible:'',
            priority: '',
            isCompleted: false
        }
    }

    onChangePriority(e){
        this.setState({
            priority:e.target.value
        })
    }

    onChangeResponsible(e){
        this.setState({
            responsible:e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    
    onSubmit(e){
       e.preventDefault();
       console.log(this.state.description)
       console.log(this.state.isCompleted)
       console.log(this.state.priority)
       console.log(this.state.responsible)

        const todo = {
            description:this.state.description,
            responsible:this.state.responsible,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        }

        axios.post('http://localhost:8081/add',todo)
            .then(res=>
                console.log(res.data))




       this.setState({
        description:'',
        responsible:'',
        priority: '',
        isCompleted: false
     })
    }
    
    

    render() {
        return (
            <div class="container">
                <div class="col-lg-4"></div>
                <div class="col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Description</label>
                            <input type="text" class="form-control" value={this.state.description} onChange={this.onChangeDescription}  />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Responsible</label>
                            <input type="text" class="form-control" value={this.state.responsible} onChange={this.onChangeResponsible}/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">priority</label>
                            <input type="text" class="form-control" value={this.state.priority} onChange={this.onChangePriority} />
                        </div>

                        {/* <div class="form-check">
                        <label for="exampleFormControlInput1">Is Complited</label> <br></br>
                            <input class="form-check-input" type="radio"  value="option1" checked/>
                                <label class="form-check-label" for="exampleRadios1">
                                   True
                                </label>
                                <br/>
                                <input class="form-check-input" type="radio" value="option2" />
                                <label class="form-check-label" for="exampleRadios3">
                                    False
                                </label>
                        </div> */}
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}