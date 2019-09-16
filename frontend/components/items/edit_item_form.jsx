import React from 'react';
import { Link } from 'react-router-dom';

class EditItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile1 = this.handleFile1.bind(this);
    this.handleFile2 = this.handleFile2.bind(this);
    this.handleFile3 = this.handleFile3.bind(this);
    this.handleFile4 = this.handleFile4.bind(this)
  }

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId)
    
      .then(() => {
        // console.log(this.props.item.photos); 
        this.setState({ id: this.props.item.id, 
          seller_id: this.props.item.seller_id, 
          description: this.props.item.description, 
          price: this.props.item.price, 
          files: this.props.item.photos, 
          file1: this.props.item.photos[0], 
          file2: this.props.item.photos[1], 
          file3: this.props.item.photos[2], 
          file4: this.props.item.photos[3], 
          file1Url: this.props.item.photos[0].photoUrl, 
          file2Url: this.props.item.photos[1].photoUrl, 
          file3Url: this.props.item.photos[2].photoUrl, 
          file4Url: this.props.item.photos[3].photoUrl, 
          sold: false });
      });
  }

  componentDidUpdate() {
    // console.log('did update!');    
    // console.log(this.state);    
    // console.log('this.props.item!:');    
    // console.log(this.props.item);    
  }

  update(field) {
    return (e) => (this.setState({ [field]: e.target.value }));
  }

  handleFile1(e) {
    this.setState({ file1: e.currentTarget.files });
    this.setState({ file1Url: URL.createObjectURL(e.target.files[0]) }); // from Egor Egorvov @650egor on Medium
  }

  handleFile2(e) {
    this.setState({ file2: e.currentTarget.files });
    this.setState({ file2Url: URL.createObjectURL(e.target.files[0]) }); // from Egor Egorvov @650egor on Medium
  }

  handleFile3(e) {
    this.setState({ file3: e.currentTarget.files });
    this.setState({ file3Url: URL.createObjectURL(e.target.files[0]) }); // from Egor Egorvov @650egor on Medium
  }

  handleFile4(e) {
    this.setState({ file4: e.currentTarget.files });
    this.setState({ file4Url: URL.createObjectURL(e.target.files[0]) }); // from Egor Egorvov @650egor on Medium
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // const { file1, file2, file3, file4 } = this.state;
    formData.append('item[id]', this.props.item.id);
    formData.append('item[seller_id]', this.state.seller_id);
    formData.append('item[description]', this.state.description);
    formData.append('item[price]', this.state.price);
    formData.append('item[sold]', this.state.sold);

    // // if (file1 !== null) {
    //   formData.append('item[photos][]', file1) // || this.props.item.)
    // // }
    // // if (file2 !== null) {
    //   formData.append('item[photos][]', file2) // || this.props.item.)
    // // }
    // // if (file3 !== null) {
    //   formData.append('item[photos][]', file3) // || this.props.item.)
    // // }
    // // if (file4 !== null) {
    //   formData.append('item[photos][]', file4) // || this.props.item.)
    // // }

    this.props.updateItem(formData)
      .then(() => { this.props.history.push(`/items/${this.state.id}/`) })
  }

  renderErrors() {
    console.log(this.props.errors);
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
    if (!this.state || !this.props.item) {
      this.state = {
        id: null,
        seller_id: null,
        description: "",
        price: "",
        // file1: null, file2: null,
        // file3: null, file4: null,
        // file1Url: null, file2Url: null,
        // file3Url: null, file4Url: null,
        sold: false
      }
      return null; // returning react-spinner loader (component)
    }

    return (
      <div className='create-item-master'>
        <form className='create-item-form' onSubmit={this.handleSubmit}>
          <h1 className='signup-h1 create-item-h1'>UPDATE YOUR ITEM</h1>
          <p className='signup-p'>Adjust your post and get back to selling.</p>

          {/* <fieldset className='create-item-item-photos'>
            <legend id='upload-photos'>UPLOAD PHOTOS</legend>

            <div className='item-photos-upload-container'>
              <div className='item-photos-top-row'>
                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src={this.state.file1Url}
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile1} />
                  </div>
                </div>

                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src={this.state.file2Url}
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile2} />
                  </div>
                </div>
              </div>

              <div className='item-photos-bottom-row'>
                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src={this.state.file3Url}
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile3} />
                  </div>
                </div>

                <div className='item-photo-upload-button'>
                  <div className='item-photo-holder'>
                    <img
                      className='upload-photo'
                      src={this.state.file4Url}
                      alt=""
                    />
                    <input type="file" onChange={this.handleFile4} />
                  </div>
                </div>
              </div>
            </div>
          </fieldset> */}

          {/* <div className='errors-div'>
            {this.renderImageRequirements()}
        </div>*/}

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
            <input className='create-account-button create-item-button' type="submit" />
          </div>
        </form>
      </div>
    );
  };
}

export default EditItemForm;