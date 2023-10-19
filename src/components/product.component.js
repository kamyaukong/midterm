import axios from "axios";
import React, { Component } from "react";

export default class NewProduct extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.triggerFileUpload = this.triggerFileUpload.bind(this);
        this.fileInputRef = React.createRef();

        this.state={
            name:'',
            description:'',
            category:'',
            quantity:'',
            price:''
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
    
    onChangeCategory(e){
        this.setState({
            category:e.target.value
        })
    }

    onChangeQuantity(e){
        this.setState({
            quantity:e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price:e.target.value
        })
    }

    onSubmit(e){
       e.preventDefault();

       console.log(this.state.name)
       console.log(this.state.description)
       console.log(this.state.category)
       console.log(this.state.quantity)
       console.log(this.state.price)

        const newproduct = {
            name:this.state.name,
            description:this.state.description,
            category:this.state.category,
            quantity:this.state.quantity,
            price:this.state.price
        }

        console.log("New Product: ", newproduct)
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
            description: '',
            category: '',
            quantity: '',
            price: ''
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
                  <div className="form-group">
                    <label htmlFor="descriptionInput">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="descriptionInput"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categoryInput">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryInput"
                      value={this.state.category}
                      onChange={this.onChangeCategory}
                    />
                  </div>                  
                  <div className="form-group">
                    <label htmlFor="quantityInput">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantityInput"
                      value={this.state.quantity}
                      onChange={this.onChangeQuantity}
                    />
                  </div>                  
                  <div className="form-groupm  mb-4">
                    <label htmlFor="priceInput">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="priceInput"
                      value={this.state.price}
                      onChange={this.onChangePrice}
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