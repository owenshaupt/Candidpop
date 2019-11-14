import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
`;

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      location: "",
      file: null,
      fileUrl: null,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleFile(e) {
    this.setState({ file: e.currentTarget.files });
    this.setState({ fileUrl: URL.createObjectURL(e.target.files[0]) }); // from Egor Egorov @650egor on Medium
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = new FormData();

    formData.append("user[first_name]", this.state.first_name);
    formData.append("user[last_name]", this.state.last_name);
    formData.append("user[email]", this.state.email);
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[location]", this.state.location);

    if (this.state.file !== null) {
      formData.append("user[profile_pic]", this.state.file[0]);
    }

    this.props
      .signup(formData)
      .then(() => {
        this.props.history.push("/items/");
      })
      .fail(() => this.setState({ loading: false }));
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
      <div className='signup-master'>
        <form
          noValidate='noValidate'
          className='signup-form'
          onSubmit={this.handleSubmit}
        >
          <h1 className='signup-h1'>GET READY</h1>
          <p className='signup-p'>
            Enter a few details to join the Candidpop community.
          </p>

          <fieldset className='add-profile-pic'>
            <div className='profile-pic-legend-container'>
              <legend>Profile picture</legend>
            </div>
            <div className='add-pic-button'>
              <img
                className='profile-photo'
                src={
                  !!this.state.file
                    ? this.state.fileUrl
                    : window.uploadProfilePicURL
                }
                alt=''
              />
              <input type='file' onChange={this.handleFile} />
            </div>
          </fieldset>

          <fieldset className='signup-form-your-details'>
            <legend>Your details</legend>
            <div className='signup-form-top-row'>
              <div className='signup-first-name'>
                <input
                  className='signup-inputs'
                  type='text'
                  value={this.state.first_name}
                  placeholder='First name'
                  onChange={this.update("first_name")}
                  autoComplete='section-signup-first-name'
                />
              </div>
              <div className='signup-last-name'>
                <input
                  className='signup-inputs'
                  type='text'
                  value={this.state.last_name}
                  placeholder='Last name'
                  onChange={this.update("last_name")}
                  autoComplete='section-signup-last-name'
                />
              </div>
            </div>

            <div className='signup-form-bottom-row'>
              <div className='signup-email'>
                <input
                  className='signup-inputs'
                  type='text'
                  value={this.state.email}
                  placeholder='Email'
                  onChange={this.update("email")}
                  autoComplete='section-signup-email'
                />
              </div>
            </div>
          </fieldset>

          <fieldset className='signup-form-userpass'>
            <legend>Create your username and password</legend>
            <div className='signup-userpass-username'>
              <div className='signup-username'>
                <input
                  className='signup-inputs userpass-inputs'
                  type='text'
                  value={this.state.username}
                  placeholder='Username'
                  onChange={this.update("username")}
                  autoComplete='section-signup-username'
                />
              </div>
            </div>
            <div className='signup-userpass-password'>
              <div className='signup-password'>
                <input
                  className='signup-inputs userpass-inputs'
                  type='password'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.update("password")}
                  autoComplete='section-signup-password'
                />
              </div>
            </div>
          </fieldset>

          <fieldset className='signup-form-location'>
            <legend>Your location</legend>
            <div className='country-select'>
              <select
                required
                className='select'
                name='location'
                onChange={this.update("location")}
              >
                <option hidden value=''>
                  Country
                </option>
                <option value='Afghanistan'>Afghanistan</option>
                <option value='Albania'>Albania</option>
                <option value='Algeria'>Algeria</option>
                <option value='American Samoa'>American Samoa</option>
                <option value='Andorra'>Andorra</option>
                <option value='Angola'>Angola</option>
                <option value='Anguilla'>Anguilla</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Antigua &amp; Barbuda'>
                  Antigua &amp; Barbuda
                </option>
                <option value='Argentina'>Argentina</option>
                <option value='Armenia'>Armenia</option>
                <option value='Aruba'>Aruba</option>
                <option value='Ascension Island'>Ascension Island</option>
                <option value='Australia'>Australia</option>
                <option value='Austria'>Austria</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Bahamas'>Bahamas</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Barbados'>Barbados</option>
                <option value='Belarus'>Belarus</option>
                <option value='Belgium'>Belgium</option>
                <option value='Belize'>Belize</option>
                <option value='Benin'>Benin</option>
                <option value='Bermuda'>Bermuda</option>
                <option value='Bhutan'>Bhutan</option>
                <option value='Bolivia'>Bolivia</option>
                <option value='Bosnia &amp; Herzegovina'>
                  Bosnia &amp; Herzegovina
                </option>
                <option value='Botswana'>Botswana</option>
                <option value='Bouvet Island'>Bouvet Island</option>
                <option value='Brazil'>Brazil</option>
                <option value='British Indian Ocean Territory'>
                  British Indian Ocean Territory
                </option>
                <option value='British Virgin Islands'>
                  British Virgin Islands
                </option>
                <option value='Brunei'>Brunei</option>
                <option value='Bulgaria'>Bulgaria</option>
                <option value='Burkina Faso'>Burkina Faso</option>
                <option value='Burundi'>Burundi</option>
                <option value='Cambodia'>Cambodia</option>
                <option value='Cameroon'>Cameroon</option>
                <option value='Canada'>Canada</option>
                <option value='Canary Islands'>Canary Islands</option>
                <option value='Cape Verde'>Cape Verde</option>
                <option value='Caribbean Netherlands'>
                  Caribbean Netherlands
                </option>
                <option value='Cayman Islands'>Cayman Islands</option>
                <option value='Central African Republic'>
                  Central African Republic
                </option>
                <option value='Ceuta &amp; Melilla'>Ceuta &amp; Melilla</option>
                <option value='Chad'>Chad</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Christmas Island'>Christmas Island</option>
                <option value='Clipperton Island'>Clipperton Island</option>
                <option value='Cocos (Keeling) Islands'>
                  Cocos (Keeling) Islands
                </option>
                <option value='Colombia'>Colombia</option>
                <option value='Comoros'>Comoros</option>
                <option value='Congo  Brazzaville'>Congo Brazzaville</option>
                <option value='Congo  Kinshasa'>Congo Kinshasa</option>
                <option value='Cook Islands'>Cook Islands</option>
                <option value='Costa Rica'>Costa Rica</option>
                <option value='Croatia'>Croatia</option>
                <option value='Cuba'>Cuba</option>
                <option value='Curaçao'>Curaçao</option>
                <option value='Cyprus'>Cyprus</option>
                <option value='Czechia'>Czechia</option>
                <option value='Côte d’Ivoire'>Côte d’Ivoire</option>
                <option value='Denmark'>Denmark</option>
                <option value='Diego Garcia'>Diego Garcia</option>
                <option value='Djibouti'>Djibouti</option>
                <option value='Dominica'>Dominica</option>
                <option value='Dominican Republic'>Dominican Republic</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='Egypt'>Egypt</option>
                <option value='El Salvador'>El Salvador</option>
                <option value='Equatorial Guinea'>Equatorial Guinea</option>
                <option value='Eritrea'>Eritrea</option>
                <option value='Estonia'>Estonia</option>
                <option value='Ethiopia'>Ethiopia</option>
                <option value='Falkland Islands'>Falkland Islands</option>
                <option value='Faroe Islands'>Faroe Islands</option>
                <option value='Fiji'>Fiji</option>
                <option value='Finland'>Finland</option>
                <option value='France'>France</option>
                <option value='French Guiana'>French Guiana</option>
                <option value='French Polynesia'>French Polynesia</option>
                <option value='French Southern Territories'>
                  French Southern Territories
                </option>
                <option value='Gabon'>Gabon</option>
                <option value='Gambia'>Gambia</option>
                <option value='Georgia'>Georgia</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Gibraltar'>Gibraltar</option>
                <option value='Greece'>Greece</option>
                <option value='Greenland'>Greenland</option>
                <option value='Grenada'>Grenada</option>
                <option value='Guadeloupe'>Guadeloupe</option>
                <option value='Guam'>Guam</option>
                <option value='Guatemala'>Guatemala</option>
                <option value='Guernsey'>Guernsey</option>
                <option value='Guinea'>Guinea</option>
                <option value='GuineaBissau'>GuineaBissau</option>
                <option value='Guyana'>Guyana</option>
                <option value='Haiti'>Haiti</option>
                <option value='Heard &amp; McDonald Islands'>
                  Heard &amp; McDonald Islands
                </option>
                <option value='Honduras'>Honduras</option>
                <option value='Hong Kong (China'>Hong Kong (China)</option>
                <option value='Hungary'>Hungary</option>
                <option value='Iceland'>Iceland</option>
                <option value='India'>India</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Iran'>Iran</option>
                <option value='Iraq'>Iraq</option>
                <option value='Ireland'>Ireland</option>
                <option value='Isle of Man'>Isle of Man</option>
                <option value='Israel'>Israel</option>
                <option value='Italy'>Italy</option>
                <option value='Jamaica'>Jamaica</option>
                <option value='Japan'>Japan</option>
                <option value='Jersey'>Jersey</option>
                <option value='Jordan'>Jordan</option>
                <option value='Kazakhstan'>Kazakhstan</option>
                <option value='Kenya'>Kenya</option>
                <option value='Kiribati'>Kiribati</option>
                <option value='Kosovo'>Kosovo</option>
                <option value='Kuwait'>Kuwait</option>
                <option value='Kyrgyzstan'>Kyrgyzstan</option>
                <option value='Laos'>Laos</option>
                <option value='Latvia'>Latvia</option>
                <option value='Lebanon'>Lebanon</option>
                <option value='Lesotho'>Lesotho</option>
                <option value='Liberia'>Liberia</option>
                <option value='Libya'>Libya</option>
                <option value='Liechtenstein'>Liechtenstein</option>
                <option value='Lithuania'>Lithuania</option>
                <option value='Luxembourg'>Luxembourg</option>
                <option value='Macau (China'>Macau (China)</option>
                <option value='Macedonia'>Macedonia</option>
                <option value='Madagascar'>Madagascar</option>
                <option value='Malawi'>Malawi</option>
                <option value='Malaysia'>Malaysia</option>
                <option value='Maldives'>Maldives</option>
                <option value='Mali'>Mali</option>
                <option value='Malta'>Malta</option>
                <option value='Marshall Islands'>Marshall Islands</option>
                <option value='Martinique'>Martinique</option>
                <option value='Mauritania'>Mauritania</option>
                <option value='Mauritius'>Mauritius</option>
                <option value='Mayotte'>Mayotte</option>
                <option value='Mexico'>Mexico</option>
                <option value='Micronesia'>Micronesia</option>
                <option value='Moldova'>Moldova</option>
                <option value='Monaco'>Monaco</option>
                <option value='Mongolia'>Mongolia</option>
                <option value='Montenegro'>Montenegro</option>
                <option value='Montserrat'>Montserrat</option>
                <option value='Morocco'>Morocco</option>
                <option value='Mozambique'>Mozambique</option>
                <option value='Myanmar (Burma'>Myanmar (Burma)</option>
                <option value='Namibia'>Namibia</option>
                <option value='Nauru'>Nauru</option>
                <option value='Nepal'>Nepal</option>
                <option value='Netherlands'>Netherlands</option>
                <option value='New Caledonia'>New Caledonia</option>
                <option value='New Zealand'>New Zealand</option>
                <option value='Nicaragua'>Nicaragua</option>
                <option value='Niger'>Niger</option>
                <option value='Nigeria'>Nigeria</option>
                <option value='Niue'>Niue</option>
                <option value='Norfolk Island'>Norfolk Island</option>
                <option value='North Korea'>North Korea</option>
                <option value='Northern Mariana Islands'>
                  Northern Mariana Islands
                </option>
                <option value='Norway'>Norway</option>
                <option value='Oman'>Oman</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='Palau'>Palau</option>
                <option value='Palestinian Territories'>
                  Palestinian Territories
                </option>
                <option value='Panama'>Panama</option>
                <option value='Papua New Guinea'>Papua New Guinea</option>
                <option value='Paraguay'>Paraguay</option>
                <option value='Peru'>Peru</option>
                <option value='Philippines'>Philippines</option>
                <option value='Pitcairn Islands'>Pitcairn Islands</option>
                <option value='Poland'>Poland</option>
                <option value='Portugal'>Portugal</option>
                <option value='Puerto Rico'>Puerto Rico</option>
                <option value='Qatar'>Qatar</option>
                <option value='Romania'>Romania</option>
                <option value='Russia'>Russia</option>
                <option value='Rwanda'>Rwanda</option>
                <option value='Réunion'>Réunion</option>
                <option value='Samoa'>Samoa</option>
                <option value='San Marino'>San Marino</option>
                <option value='Saudi Arabia'>Saudi Arabia</option>
                <option value='Senegal'>Senegal</option>
                <option value='Serbia'>Serbia</option>
                <option value='Seychelles'>Seychelles</option>
                <option value='Sierra Leone'>Sierra Leone</option>
                <option value='Singapore'>Singapore</option>
                <option value='Sint Maarten'>Sint Maarten</option>
                <option value='Slovakia'>Slovakia</option>
                <option value='Slovenia'>Slovenia</option>
                <option value='So. Georgia &amp; So. Sandwich Isl'>
                  So. Georgia &amp; So. Sandwich Isl.
                </option>
                <option value='Solomon Islands'>Solomon Islands</option>
                <option value='Somalia'>Somalia</option>
                <option value='South Africa'>South Africa</option>
                <option value='South Korea'>South Korea</option>
                <option value='South Sudan'>South Sudan</option>
                <option value='Spain'>Spain</option>
                <option value='Sri Lanka'>Sri Lanka</option>
                <option value='St. Barthélemy'>St. Barthélemy</option>
                <option value='St. Helena'>St. Helena</option>
                <option value='St. Kitts &amp; Nevis'>
                  St. Kitts &amp; Nevis
                </option>
                <option value='St. Lucia'>St. Lucia</option>
                <option value='St. Martin'>St. Martin</option>
                <option value='St. Pierre &amp; Miquelon'>
                  St. Pierre &amp; Miquelon
                </option>
                <option value='St. Vincent &amp; Grenadines'>
                  St. Vincent &amp; Grenadines
                </option>
                <option value='Sudan'>Sudan</option>
                <option value='Suriname'>Suriname</option>
                <option value='Svalbard &amp; Jan Mayen'>
                  Svalbard &amp; Jan Mayen
                </option>
                <option value='Swaziland'>Swaziland</option>
                <option value='Sweden'>Sweden</option>
                <option value='Switzerland'>Switzerland</option>
                <option value='Syria'>Syria</option>
                <option value='São Tomé &amp; Príncipe'>
                  São Tomé &amp; Príncipe
                </option>
                <option value='Taiwan'>Taiwan</option>
                <option value='Tajikistan'>Tajikistan</option>
                <option value='Tanzania'>Tanzania</option>
                <option value='Thailand'>Thailand</option>
                <option value='TimorLeste'>TimorLeste</option>
                <option value='Togo'>Togo</option>
                <option value='Tokelau'>Tokelau</option>
                <option value='Tonga'>Tonga</option>
                <option value='Trinidad &amp; Tobago'>
                  Trinidad &amp; Tobago
                </option>
                <option value='Tristan da Cunha'>Tristan da Cunha</option>
                <option value='Tunisia'>Tunisia</option>
                <option value='Turkey'>Turkey</option>
                <option value='Turkmenistan'>Turkmenistan</option>
                <option value='Turks &amp; Caicos Islands'>
                  Turks &amp; Caicos Islands
                </option>
                <option value='Tuvalu'>Tuvalu</option>
                <option value='U.S. Outlying Islands'>
                  U.S. Outlying Islands
                </option>
                <option value='U.S. Virgin Islands'>U.S. Virgin Islands</option>
                <option value='Uganda'>Uganda</option>
                <option value='Ukraine'>Ukraine</option>
                <option value='United Arab Emirates'>
                  United Arab Emirates
                </option>
                <option value='United Kingdom'>United Kingdom</option>
                <option value='United States'>United States</option>
                <option value='Uruguay'>Uruguay</option>
                <option value='Uzbekistan'>Uzbekistan</option>
                <option value='Vanuatu'>Vanuatu</option>
                <option value='Vatican City'>Vatican City</option>
                <option value='Venezuela'>Venezuela</option>
                <option value='Vietnam'>Vietnam</option>
                <option value='Wallis &amp; Futuna'>Wallis &amp; Futuna</option>
                <option value='Western Sahara'>Western Sahara</option>
                <option value='Yemen'>Yemen</option>
                <option value='Zambia'>Zambia</option>
                <option value='Zimbabwe'>Zimbabwe</option>
                <option value='Åland Islands'>Åland Islands</option>
              </select>
            </div>
          </fieldset>

          <fieldset className='signup-form-checkbox'>
            <label className='signup-form-left'>
              <input type='checkbox' name='email_list' value='true' />
              Get emails from Candidpop, including special promotions and
              selling tips.
            </label>
          </fieldset>

          <h2 className='signup-h2'>CANDIDPOP TERMS</h2>

          <div className='terms-holder'>
            <p className='signup-terms'>
              Your use of Candidpop is subject to our Terms of Service and our
              Privacy Policy which sets out how we use your personal data
            </p>
          </div>

          <div className='errors-div'>{this.renderErrors()}</div>

          <div className='create-button-container'>
            <input
              className='create-account-button'
              type='submit'
              value={this.state.loading ? "" : "Sign up"}
            />
            <div className='submit-loading submit-signup'>
              <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={16}
                color={"white"}
                loading={this.state.loading}
              />
            </div>
          </div>
          <p className='signup-terms h6'>
            By continuing you accept Candidpop's Terms of Service
          </p>
        </form>
      </div>
    );
  }
}

export default SignupForm;
