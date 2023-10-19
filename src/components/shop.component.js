import axios from "axios";
import React, { Component } from "react";

export default class NewShop extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.triggerFileUpload = this.triggerFileUpload.bind(this);
        this.fileInputRef = React.createRef();

        this.state={
            name:'',
            description:''
        }
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    
    onSubmit(e){
       e.preventDefault();

       console.log(this.state.name)
       console.log(this.state.description)

        const newshop = {
            name:this.state.name,
            description:this.state.description,
        }

        console.log("New Shop: ", newshop)
        this.clearForm();
    }

    triggerFileUpload() {
        this.fileInputRef.current.click();
    }

    onFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            console.log("Selected file:", file.name);
        }
    }    
    
    clearForm() {
        this.setState({
            name: '',
            description: ''
        });
    }
    
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-6">
              <div className="form-group">
                    <input
                      type="file"
                      ref={this.fileInputRef}
                      style={{ display: "none" }}
                      onChange={this.onFileChange}
                    />
                    <button
                      type="button"
                      className="btn btn-primary mb-2"
                      onClick={this.triggerFileUpload}
                    >
                      Upload Logo
                    </button>
                  </div>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="nameInput">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="descriptionInput">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="descriptionInput"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.clearForm}
                  >Cancel</button>
                </form>
              </div>
            </div>
          </div>
        )
    }
}