import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
`;

class EditItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId)
    
      .then(() => {
        this.setState({ id: this.props.item.id, 
          seller_id: this.props.user, 
          description: this.props.item.description, 
          price: this.props.item.price, 
          sold: false, loading: false });
      });
  }

  update(field) {
    return (e) => (this.setState({ [field]: e.target.value }));
  }



  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = new FormData();

    formData.append('item[id]', this.props.item.id);
    formData.append('item[seller_id]', this.state.seller_id);
    formData.append('item[description]', this.state.description);
    formData.append('item[price]', this.state.price);
    formData.append('item[sold]', this.state.sold);

    this.props.updateItem(formData)
      .then(() => { this.props.history.push(`/items/${this.state.id}/`) })
      .fail(() => this.setState({ loading: false }))
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
    if (!this.state || !this.props.item) {
      this.state = {
        id: null,
        seller_id: null,
        description: "",
        price: "",

        sold: false,
        loading: false
      }
      return (
        <div className='page-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={42}
            color={'#282828'}
            loading={true}
          />
        </div>
      );
    }

    return (
      <div className='create-item-master'>
        <form className='create-item-form' onSubmit={this.handleSubmit}>
          <h1 className='signup-h1 create-item-h1'>UPDATE YOUR ITEM</h1>
          <p className='signup-p'>Adjust your post and get back to selling.</p>

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
                  autoComplete='section-edit-item'
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

export default EditItemForm;