import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import NewItemButton from "./new_item_form/item_upload_button";

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
      file1: null,
      file2: null,
      file3: null,
      file4: null,
      sold: false,
      loading: false
    };

    this.returnFileToParent = this.returnFileToParent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  returnFileToParent = (file, id) => {
    this.setState({ [id]: file });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const formData = new FormData();
    const { file1, file2, file3, file4 } = this.state;
    formData.append("item[seller_id]", this.props.user);
    formData.append("item[description]", this.state.description);
    formData.append("item[price]", this.state.price);
    formData.append("item[sold]", this.state.sold);

    if (file1 !== null) {
      formData.append("item[photos][]", file1[0]);
    }
    if (file2 !== null) {
      formData.append("item[photos][]", file2[0]);
    }
    if (file3 !== null) {
      formData.append("item[photos][]", file3[0]);
    }
    if (file4 !== null) {
      formData.append("item[photos][]", file4[0]);
    }

    this.props
      .createItem(formData)
      .then(() => {
        this.props.history.push("/items/");
      })
      .fail(() => this.setState({ loading: false }));
  }

  componentWillUnmount() {
    this.props.clearItems();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='create-item-master'>
        <form className='create-item-form' onSubmit={this.handleSubmit}>
          <h1 className='signup-h1 create-item-h1'>READY TO SELL?</h1>
          <p className='signup-p'>
            Enter your item details and be on your way.
          </p>

          <fieldset className='create-item-item-photos'>
            <legend id='upload-photos'>UPLOAD PHOTOS</legend>

            <div className='item-photos-upload-container'>
              <div className='item-photos-top-row'>
                <NewItemButton
                  id='file1'
                  returnFileToParent={this.returnFileToParent}
                />

                <NewItemButton
                  id='file2'
                  returnFileToParent={this.returnFileToParent}
                />
              </div>

              <div className='item-photos-bottom-row'>
                <NewItemButton
                  id='file3'
                  returnFileToParent={this.returnFileToParent}
                />

                <NewItemButton
                  id='file4'
                  returnFileToParent={this.returnFileToParent}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className='create-item-item-details'>
            <legend>DESCRIPTION</legend>
            <div className='create-item-description'>
              <textarea
                placeholder='Description (max 1,000 char.)'
                value={this.state.description}
                onChange={this.update("description")}
                cols='32'
                rows='10'
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
                  type='number'
                  value={this.state.price}
                  onChange={this.update("price")}
                />
              </div>
            </div>
          </fieldset>

          <div className='errors-div'>{this.renderErrors()}</div>

          <div className='create-item-button-container'>
            <input
              className='create-account-button create-item-button'
              type='submit'
              value={this.state.loading ? "" : "Submit"}
            />
            <div className='submit-loading'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={16}
                color={"white"}
                loading={this.state.loading}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewItemForm;
