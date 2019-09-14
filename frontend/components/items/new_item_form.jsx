import React from 'react';
import { Link } from 'react-router-dom';

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seller_id: 1,
      description: "",
      price: "",
      photoFiles: null,
      sold: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)  
    this.handleFile = this.handleFile.bind(this)  
  }
  
  update(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleFile(e) {
    this.setState({photoFiles: e.currentTarget.files});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const { photoFiles } = this.state;
    formData.append('item[seller_id]', this.state.seller_id)
    formData.append('item[description]', this.state.description)
    formData.append('item[price]', this.state.price)

    for (let i = 0; i < photoFiles.length; i++) {
      formData.append('item[photos][]', photoFiles[i]);
    }

    formData.append('item[sold]', this.state.sold)
    $.ajax({
      url: '/api/items',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      error: (err) => console.log(err)
    });
    // this.props.createItem(formData)
      // .then(() => { this.props.history.push('/feed/') })
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className='create-item-master'>
        <form className='create-item-form' onSubmit={this.handleSubmit}>
          <h1 className='signup-h1 create-item-h1'>READY TO SELL?</h1>   
          <p className='signup-p'>Enter your item details and be on your way.</p>

          <fieldset className='create-item-item-photos'>
            <legend>UPLOAD PHOTOS</legend>
            <div className='item-photos-container'>
              <input multiple onChange={this.handleFile} type="file"/>
            </div>
          </fieldset>

          <fieldset className='create-item-item-details'>
            <legend>DESCRIPTION</legend>
              <div className='create-item-description'>
                <textarea
                  placeholder='Description (max 1,000 char.)'
                  value={this.state.description}
                  onChange={this.update('description')}
                  cols="32" rows="10"
                  maxLength='1000'
                  autoFocus='autofocus'
                ></textarea>
              </div>
          </fieldset>

          <fieldset className='create-item-price'>
            <legend>PRICE</legend>
            <div className='item-price-container'>
              <p>$</p>
              <div className='item-price-input-container'>
                <input
                  className='item-price-input'
                  placeholder='Enter a number'
                  type="number"
                  value={this.state.price}
                  onChange={this.update('price')}
                />
              </div>
            </div>
          </fieldset>

          <div className='errors-div'>
            {this.renderErrors()}
          </div>

          <div className='create-item-button-container'>
            <input className='create-account-button create-item-button' type="submit"/>
          </div>
        </form>
      </div>
    );
  };
}

export default NewItemForm;