import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
`;

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seller_id: null,
      description: "",
      price: "",
      file1: null, file2: null, file3: null, file4: null,
      file1Url: null, file2Url: null,
      file3Url: null, file4Url: null,
      sold: false,
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)  
    this.handleFile1 = this.handleFile1.bind(this)  
    this.handleFile2 = this.handleFile2.bind(this)  
    this.handleFile3 = this.handleFile3.bind(this)  
    this.handleFile4 = this.handleFile4.bind(this)  
  }
  
  update(field) {
    return (e) => (this.setState({ [field]: e.target.value }));
  }

  handleFile1(e) {
    this.setState({file1: e.currentTarget.files});
    this.setState({file1Url: URL.createObjectURL(e.target.files[0])}); // from Egor Egorov @650egor on Medium
  }

  handleFile2(e) {
    this.setState({file2: e.currentTarget.files});
    this.setState({file2Url: URL.createObjectURL(e.target.files[0])}); // from Egor Egorov @650egor on Medium
  }

  handleFile3(e) {
    this.setState({file3: e.currentTarget.files});
    this.setState({file3Url: URL.createObjectURL(e.target.files[0])}); // from Egor Egorov @650egor on Medium
  }

  handleFile4(e) {
    this.setState({file4: e.currentTarget.files});
    this.setState({file4Url: URL.createObjectURL(e.target.files[0])}); // from Egor Egorov @650egor on Medium
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const formData = new FormData();
    const { file1, file2, file3, file4 } = this.state;
    formData.append('item[seller_id]', this.props.user)
    formData.append('item[description]', this.state.description)
    formData.append('item[price]', this.state.price)
    formData.append('item[sold]', this.state.sold)

    if (file1 !== null) {
        formData.append('item[photos][]', file1[0])
    }
    if (file2 !== null) {
        formData.append('item[photos][]', file2[0])
    }
    if (file3 !== null) {
        formData.append('item[photos][]', file3[0])
    }
    if (file4 !== null) {
        formData.append('item[photos][]', file4[0])
    }

    this.props.createItem(formData)
      .then(() => { this.props.history.push('/items/') })
      .fail(() => this.setState({ loading: false }))
  }

  componentWillUnmount() {
    this.props.clearItems();
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
                      src={(!!this.state.file1) ? (this.state.file1Url) : (
                        window.uploadItemIconURL)
                      }
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile1}/>
                  </div>
                </div>

                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src={(!!this.state.file2) ? (this.state.file2Url) : (
                        window.uploadItemIconURL)
                      }
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
                      src={(!!this.state.file3) ? (this.state.file3Url) : (
                        window.uploadItemIconURL)
                      }
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
                      src={(!!this.state.file4) ? (this.state.file4Url) : (
                        window.uploadItemIconURL)
                      }
                      alt=""
                      />
                      <input type="file" onChange={this.handleFile4} />
                    </div>
                </div>
              </div>
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
            <input
              className='create-account-button create-item-button'
              type="submit"
              value={(this.state.loading) ? 
                     ("") : 
                     ('Submit')}/>
            <div className='submit-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={16}
                color={'white'}
                loading={this.state.loading}
              />
            </div>
          </div>
        </form>
      </div>
    );
  };
}

export default NewItemForm;