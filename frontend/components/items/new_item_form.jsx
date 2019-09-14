import React from 'react';
import { Link } from 'react-router-dom';

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seller_id: 1,
      description: "",
      price: "",
      photoFiles1: null, photoFiles2: null,
      photoFiles3: null, photoFiles4: null,
      sold: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)  
    this.handleFile1 = this.handleFile1.bind(this)  
    this.handleFile2 = this.handleFile2.bind(this)  
    this.handleFile3 = this.handleFile3.bind(this)  
    this.handleFile4 = this.handleFile4.bind(this)  
  }
  
  update(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleFile1(e) {
    this.setState({photoFiles1: e.currentTarget.files});
  }

  handleFile2(e) {
    this.setState({photoFiles2: e.currentTarget.files});
  }

  handleFile3(e) {
    this.setState({photoFiles3: e.currentTarget.files});
  }

  handleFile4(e) {
    this.setState({photoFiles4: e.currentTarget.files});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const { photoFiles1, photoFiles2, photoFiles3, photoFiles4 } = this.state;
    formData.append('item[seller_id]', this.state.seller_id)
    formData.append('item[description]', this.state.description)
    formData.append('item[price]', this.state.price)

    if (photoFiles1 !== null) {
      for (let i = 0; i < photoFiles1.length; i++) {
        formData.append('item[photos][]', photoFiles1[i]);
      }
    }

    if (photoFiles2 !== null) {
      for (let i = 0; i < photoFiles2.length; i++) {
        formData.append('item[photos][]', photoFiles2[i]);
      }
    }

    if (photoFiles3 !== null) {
      for (let i = 0; i < photoFiles3.length; i++) {
        formData.append('item[photos][]', photoFiles3[i]);
      }
    }

    if (photoFiles4 !== null) {
      for (let i = 0; i < photoFiles4.length; i++) {
        formData.append('item[photos][]', photoFiles4[i]);
      }
    }

    formData.append('item[sold]', this.state.sold)

    this.props.createItem(formData)
      .then(() => { this.props.history.push('/feed/') })

    // $.ajax({
    //   url: '/api/items',
    //   method: 'POST',
    //   data: formData,
    //   contentType: false,
    //   processData: false,
    //   error: (err) => console.log(err)
    // })
    // .fail(error => dispatch(receiveErrors(error.responseJSON)));
    
    
    // .then(() => { this.props.history.push('/feed/') })
    // console.log("errors?")
    // console.log(this.props.errors)
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

  renderImageRequirements() {
    if (this.state.photoFiles1 === null &&
        this.state.photoFiles1 === null &&
        this.state.photoFiles1 === null &&
        this.state.photoFiles1 === null) {
          return (
            <p>Must upload at least 1 photo</p>
          )
        }
  }

  render() {
    console.log(this.state);
    return (
      <div className='create-item-master'>
        <form className='create-item-form' onSubmit={this.handleSubmit}>
          <h1 className='signup-h1 create-item-h1'>READY TO SELL?</h1>   
          <p className='signup-p'>Enter your item details and be on your way.</p>

          <fieldset className='create-item-item-photos'>
            <legend id='upload-photos'>UPLOAD PHOTOS</legend>

            <div className='item-photos-upload-container'>
              <div className='item-photos-top-row'>
                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src="assets/upload_item_icon.jpg"
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile1}/>
                  </div>
                </div>

                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src="assets/upload_item_icon.jpg"
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile2} />
                  </div>
                </div>  
              </div>

              <div className='item-photos-bottom-row'>
                <div className='item-photo-upload-button'><div className='item-photo-holder'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src="assets/upload_item_icon.jpg"
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile3} />
                  </div>
                </div>
                </div>
                  <div className='item-photo-upload-button'>
                    <div className='item-photo-holder'>
                      <img
                        className='upload-photo'
                        src="assets/upload_item_icon.jpg"
                        alt=""
                      />
                      <input type="file" onChange={this.handleFile4} />
                    </div>
                </div>
              </div>
          </div>
          </fieldset>

          <div className='errors-div'>
              {this.renderImageRequirements()}
          </div>

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