<template>
  <div class="hello" >
    <div class="container">
      <div class="row">
        <form class="form-horizontal" @submit.prevent="search">


          <h3>Leader</h3>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('title1')}">
            <label class="control-label col-sm-2" for="title1">title</label>
            <div class="col-sm-10">
              <select v-model="title1" class="form-control" name="title1" options="titles" v-validate="'required'">
                <option disabled value="">Select title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title1')" class="fa fa-warning"></i>
              <span v-show="errors.has('title1')" class="help text-error">{{ errors.first('title1') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('firstName1')}">
            <label class="control-label col-sm-2" for="firstName1">First Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="firstName1" v-validate="'required'" name="firstName1" class="input form-control" type="text" placeholder="firstName">
                <i v-show="errors.has('firstName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName1')" class="help text-error">{{ errors.first('firstName1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('middleName1')}">
            <label class="control-label col-sm-2" for="middleName1">Middle Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="middleName1" v-validate="'required'" name="middleName1" class="input form-control" type="text" placeholder="middleName">
                <i v-show="errors.has('middleName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName1')" class="help text-error">{{ errors.first('middleName1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true, 'required':true, 'has-error': errors.has('lastName1')}">
            <label class="control-label col-sm-2" for="lastName1">Last Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
                <input v-model="lastName1" v-validate="'required'" name="lastName1" class="input form-control" type="text" placeholder="lastName">
                <i v-show="errors.has('lastName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName1')" class="help text-error">{{ errors.first('lastName1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('email1')}">
            <label class="control-label col-sm-2" for="email1">Email</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="email1" name="email1" v-validate="'required|email'" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email1')" class="fa fa-warning"></i>
              <span v-show="errors.has('email1')" class="help text-error">{{ errors.first('email1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('phone1')}">
            <label class="control-label col-sm-2" for="phone1">Phone No</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="phone1" name="phone1" v-validate="'required'" class="input form-control" type="text" placeholder="phone no" required>
              <i v-show="errors.has('phone1')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone1')" class="help text-error">{{ errors.first('phone1') }}</span>
              </p>
            </div>
          </div>   
          <h3>Second member</h3>
          <div :class="{'form-group':true,'required':false,'has-error': errors.has('title2')}">
            <label class="control-label col-sm-2" for="title2">Title</label>
            <div class="col-sm-10">
              <select v-model="title2" class="form-control" name="title2" options="titles">
                <option disabled value="">Select title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title2')" class="fa fa-warning"></i>
              <span v-show="errors.has('title2')" class="help text-error">{{ errors.first('title2') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('firstName2')}">
            <label class="control-label col-sm-2" for="firstName2">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName2" name="firstName2" class="input form-control" type="text" placeholder="First Name" required>
              <i v-show="errors.has('firstName2')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName2')" class="help text-error">{{ errors.first('First Name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName2')}">
            <label class="control-label col-sm-2" for="middleName2">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName2" name="middleName2" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName2')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName2')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName2')}">
            <label class="control-label col-sm-2" for="lastName2">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName2" name="lastName2" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName2')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName2')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email2')}">
            <label class="control-label col-sm-2" for="email2">Email</label>
            <div class="col-sm-10">
              <input v-model="email2" name="email2" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email2')" class="fa fa-warning"></i>
              <span v-show="errors.has('email2')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone2')}">
            <label class="control-label col-sm-2" for="phone2">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone2" name="phone2" class="input form-control" type="text" placeholder="phone No" required>
              <i v-show="errors.has('phone2')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone2')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <h3>Third member</h3>
          <div :class="{'form-group':true,'required':false,'has-error': errors.has('title3')}">
            <label class="control-label col-sm-2" for="title3">title</label>
            <div class="col-sm-10">
              <select v-model="title3" class="form-control" name="title3" options="titles">
                <option disabled value="">Select title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title3')" class="fa fa-warning"></i>
              <span v-show="errors.has('title3')" class="help text-error">{{ errors.first('title3') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('firstName3')}">
            <label class="control-label col-sm-2" for="firstName3">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName3" name="firstName3" class="input form-control" type="text" placeholder="First Name" required>
              <i v-show="errors.has('firstName3')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName3')" class="help text-error">{{ errors.first('First Name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName3')}">
            <label class="control-label col-sm-2" for="middleName3">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName3" name="middleName3" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName3')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName3')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName3')}">
            <label class="control-label col-sm-2" for="lastName3">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName3" name="lastName3" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName3')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName3')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email3')}">
            <label class="control-label col-sm-2" for="email3">Email</label>
            <div class="col-sm-10">
              <input v-model="email3" name="email3" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email3')" class="fa fa-warning"></i>
              <span v-show="errors.has('email3')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone3')}">
            <label class="control-label col-sm-2" for="phone3">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone3" name="phone3" class="input form-control" type="text" placeholder="phone No" required>
              <i v-show="errors.has('phone3')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone3')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <h3>Fourth member</h3>
          <div :class="{'form-group':true,'required':false,'has-error': errors.has('title4')}">
            <label class="control-label col-sm-2" for="title4">title</label>
            <div class="col-sm-10">
              <select v-model="title4" class="form-control" name="title4" options="titles">
                <option disabled value="">Select title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title4')" class="fa fa-warning"></i>
              <span v-show="errors.has('title4')" class="help text-error">{{ errors.first('title4') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('firstName4')}">
            <label class="control-label col-sm-2" for="firstName4">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName4" name="firstName4" class="input form-control" type="text" placeholder="First Name" required>
              <i v-show="errors.has('firstName4')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName4')" class="help text-error">{{ errors.first('First Name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName4')}">
            <label class="control-label col-sm-2" for="middleName4">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName4" name="middleName4" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName4')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName4')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName4')}">
            <label class="control-label col-sm-2" for="lastName4">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName4" name="lastName4" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName4')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName4')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email4')}">
            <label class="control-label col-sm-2" for="email4">Email</label>
            <div class="col-sm-10">
              <input v-model="email4" name="email4" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email4')" class="fa fa-warning"></i>
              <span v-show="errors.has('email4')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone4')}">
            <label class="control-label col-sm-2" for="phone4">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone4" name="phone4" class="input form-control" type="text" placeholder="phone No" required>
              <i v-show="errors.has('phone4')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone4')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <h3>Fifth member</h3>
          <div :class="{'form-group':true,'required':false,'has-error': errors.has('title5')}">
            <label class="control-label col-sm-2" for="title5">title</label>
            <div class="col-sm-10">
              <select v-model="title5" class="form-control" name="title5" options="titles">
                <option disabled value="">Select title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title5')" class="fa fa-warning"></i>
              <span v-show="errors.has('title5')" class="help text-error">{{ errors.first('title5') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('firstName5')}">
            <label class="control-label col-sm-2" for="firstName5">First Name</label>
            <div class="col-sm-10">
              <input v-model="firstName5" name="firstName5" class="input form-control" type="text" placeholder="First Name" required>
              <i v-show="errors.has('firstName5')" class="fa fa-warning"></i>
              <span v-show="errors.has('firstName5')" class="help text-error">{{ errors.first('First Name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('middleName5')}">
            <label class="control-label col-sm-2" for="middleName5">Middle Name</label>
            <div class="col-sm-10">
              <input v-model="middleName5" name="middleName5" class="input form-control" type="text" placeholder="middle name" required>
              <i v-show="errors.has('middleName5')" class="fa fa-warning"></i>
              <span v-show="errors.has('middleName5')" class="help text-error">{{ errors.first('middle name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('lastName5')}">
            <label class="control-label col-sm-2" for="lastName5">Last Name</label>
            <div class="col-sm-10">
              <input v-model="lastName5" name="lastName5" class="input form-control" type="text" placeholder="last name" required>
              <i v-show="errors.has('lastName5')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastName5')" class="help text-error">{{ errors.first('last name') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('email5')}">
            <label class="control-label col-sm-2" for="email5">Email</label>
            <div class="col-sm-10">
              <input v-model="email5" name="email5" class="input form-control" type="text" placeholder="email" required>
              <i v-show="errors.has('email5')" class="fa fa-warning"></i>
              <span v-show="errors.has('email5')" class="help text-error">{{ errors.first('email') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('phone5')}">
            <label class="control-label col-sm-2" for="phone5">Phone No</label>
            <div class="col-sm-10">
              <input v-model="phone5" name="phone5" class="input form-control" type="text" placeholder="phone No" required>
              <i v-show="errors.has('phone5')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone5')" class="help text-error">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <br>
          <h3>General Infomation</h3>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('teamName')}">
            <label class="control-label col-sm-2" for="teamName">Team Name</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="teamName" name="teamName" v-validate="'required'" class="input form-control" type="text" placeholder="teamName" required>
              <i v-show="errors.has('teamName')" class="fa fa-warning"></i>
              <span v-show="errors.has('teamName')" class="help text-error">{{ errors.first('teamName') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('institution')}">
            <label class="control-label col-sm-2" for="institution">Institution</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="institution" name="institution" v-validate="'required'" class="input form-control" type="text" placeholder="institution" required>
              <i v-show="errors.has('institution')" class="fa fa-warning"></i>
              <span v-show="errors.has('institution')" class="help text-error">{{ errors.first('institution') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('department')}">
            <label class="control-label col-sm-2" for="department">Department</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="department" name="department" v-validate="'required'" class="input form-control" type="text" placeholder="department" required>
              <i v-show="errors.has('department')" class="fa fa-warning"></i>
              <span v-show="errors.has('department')" class="help text-error">{{ errors.first('department') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('maillingAddress1')}">
            <label class="control-label col-sm-2" for="maillingAddress1">Mailling Address 1</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <textarea v-model="maillingAddress1" name="maillingAddress1" v-validate="'required'" class="input form-control" type="text" placeholder="Mailling Address 1" required rows=3>
              </textarea>
              <i v-show="errors.has('maillingAddress1')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress1')" class="help text-error">{{ errors.first('Mailling Address 1') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'has-error': errors.has('maillingAddress2')}">
            <label class="control-label col-sm-2" for="maillingAddress2">Mailling Address 2</label>
            <div class="col-sm-10">
              <input v-model="maillingAddress2" name="maillingAddress2" class="input form-control" type="text" placeholder="Mailling Address 2" required>
              <i v-show="errors.has('maillingAddress2')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress2')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('city')}">
            <label class="control-label col-sm-2" for="city">City</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="city" name="city" v-validate="'required'" class="input form-control" type="text" placeholder="City" required>
              <i v-show="errors.has('city')" class="fa fa-warning"></i>
              <span v-show="errors.has('city')" class="help text-error">{{ errors.first('city') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('province')}">
            <label class="control-label col-sm-2" for="province">State/Province/District</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="province" name="province" v-validate="'required'" class="input form-control" type="text" placeholder="Province" required>
              <i v-show="errors.has('province')" class="fa fa-warning"></i>
              <span v-show="errors.has('province')" class="help text-error">{{ errors.first('province') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('postalCode')}">
            <label class="control-label col-sm-2" for="postalCode">Postal Code</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="postalCode" name="postalCode" v-validate="'required|numeric'" class="input form-control" type="text" placeholder="postalCode" required>
              <i v-show="errors.has('postalCode')" class="fa fa-warning"></i>
              <span v-show="errors.has('postalCode')" class="help text-error">{{ errors.first('postalCode') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('country')}">
            <label class="control-label col-sm-2" for="country">Country</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input v-model="country" name="country" v-validate="'required'" class="input form-control" type="text" placeholder="country" required>
              <i v-show="errors.has('country')" class="fa fa-warning"></i>
              <span v-show="errors.has('country')" class="help text-error">{{ errors.first('country') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('paperTitle')}">
            <label class="control-label col-sm-2" for="paperTitle">Paper Title</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <textarea  rows="5" v-model="paperTitle" name="paperTitle" v-validate="'required'" class="input form-control" type="text" placeholder="paperTitle" required></textarea>
              <i v-show="errors.has('paperTitle')" class="fa fa-warning"></i>
              <span v-show="errors.has('paperTitle')" class="help text-error">{{ errors.first('paperTitle') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('abstract')}">
            <label class="control-label col-sm-2" for="abstract">Abstract</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <textarea  rows="5" v-model="abstract" name="abstract" v-validate="'required'" class="input form-control" type="text" placeholder="abstract" required></textarea>
              <i v-show="errors.has('abstract')" class="fa fa-warning"></i>
              <span v-show="errors.has('abstract')" class="help text-error">{{ errors.first('abstract') }}</span>
              </p>
            </div>
          </div>
          <div :class="{'form-group':true,'required':true,'has-error': errors.has('keywords')}">
            <label class="control-label col-sm-2" for="keywords">Keywords</label>
            <div class="col-sm-10 columns is-multiline">
              <p class="control has-icon has-icon-right">
              <input-tag :tags.sync="keywords" :limit="10" validate="text" v-model="keywords" name="keywords"  v-validate="'required'" required></input-tag>
              <!-- <textarea  rows="5"  class="input form-control" type="text" placeholder="keywords" required></textarea> -->
              <i v-show="errors.has('keywords')" class="fa fa-warning"></i>
              <span v-show="errors.has('keywords')" class="help text-error">{{ errors.first('keywords')}}</span>
              </p>
              <span class="small">
              * tab to add new keyword (max 10)
            </span>
            </div>
          </div>
            <div :class="{'form-group':true,'required':true,'has-error': errors.has('attachment')}">
            <label class="control-label col-sm-2" for="keywords">Attachments</label>
            <div class="col-sm-10 columns is-multiline">
              <div class="control has-icon has-icon-right">
              <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" v-model="attachment" name="attachment"  v-validate="''" required></vue-dropzone> -->
              <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone> -->
              <!-- <input type="file" name="fileToUpload" id="fileToUpload"> -->
              <div class="dropbox">
                <input type="file" multiple @change="filesChange($event.target.name, $event.target.files)" class="input-file">
                    <p v-if="!haveFile">
                    Drag your file(s) here to begin<br> or click to browse
                    </p>
                    <div v-if="haveFile" >
                      <ul classs="list-group list-group-body">
                        <li class="list-group-item" v-for="file in this.currentFiles" v-bind:key="file.name">
                            <div class="col-xs-6 text-left" style=" "> <a><span class="glyphicon glyphicon-file" aria-hidden="true"></span>{{file.name}} </a> </div>
                            <div class="col-xs-3" style="">{{file.size/1000}} KB</div>
                            <div class="col-xs-3" style="">{{formatDate(file.lastModified)}}</div>
                        </li>
                        <li >
                          
                        </li>
                      </ul>
                    </div>
                </div>
              <i v-show="errors.has('attachment')" class="fa fa-warning"></i>
              <span v-show="errors.has('attachment')" class="help text-error">{{ errors.first('attachment')}}</span>
              </div>
            </div>
          </div>
        </form>
      </div>
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="submit()">Submit</button>
    </div>
    introduction
    contribution

  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import axios from 'axios'
import moment from 'moment'
import InputTag from 'vue-input-tag'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

const BASE_URL = 'http://128.199.88.139:11111/api/submissions'

export default {
  name: 'hello',
  data () {
    return {
      participantCategory: '',
      participantCategories: {
      },
      titles: [
        { text: 'Prof', value: 'Prof' },
        { text: 'Dr', value: 'Dr' },
        { text: 'Mr', value: 'Mr' },
        { text: 'Mrs', value: 'Mrs' },
        { text: 'Miss', value: 'Miss' }
      ],
      title1: '1',
      firstName1: '1',
      middleName1: '1',
      lastName1: '1',
      email1: 'asd@asd.afa',
      phone1: '1',
      title2: '1',
      firstName2: '1',
      middleName2: '1',
      lastName2: '',
      email2: '',
      phone2: '',
      title3: '',
      firstName3: '',
      middleName3: '',
      lastName3: '',
      email3: '',
      phone3: '',
      title4: '',
      firstName4: '',
      middleName4: '',
      lastName4: '',
      email4: '',
      phone4: '',
      title5: '',
      firstName5: '',
      middleName5: '',
      lastName5: '',
      email5: '',
      phone5: '',
      teamName: 'aaa',
      institution: 'aaa',
      department: 'aaa',
      maillingAddress1: 'aaa',
      maillingAddress2: '',
      city: 'aaa',
      province: 'aaa',
      postalCode: '111',
      country: 'aa',
      abstract: 'aaa',
      paperTitle: 'aaa',
      keywords: ['asd', 'asd'],
      attachment: '',
      currentFiles: [],
      option: {
        format: 'DD-MM-YYYY'
      },
      submitForm: null,
      dropzoneOptions: {
        url: 'http://128.199.88.139:11115/upload',
        thumbnailWidth: 150,
        maxFilesize: 500,
        headers: {
          'Cache-Control': '',
          'X-Requested-With': ''
        },
        addRemoveLinks: true,
        autoProcessQueue: true,
        params: {
          teamName: '',
          university: ''
        }
      },
      haveFile: false
    }
  },
  computed: {
    currentTeamName () {
      return this.teamName
    }
  },
  props: {
    loggingIn: {
      default: false
    }
  },
  components: {
    'date-picker': myDatepicker,
    InputTag,
    'vue-dropzone': vue2Dropzone
  },
  // Pushes posts to the server when called.
  methods: {
    formatDate (date) {
      return moment(date).format('MMMM Do YYYY')
    },
    postPost () {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('in')
          axios.post(BASE_URL, {
            title1: this.title1,
            firstName1: this.firstName1,
            middleName1: this.middleName1,
            lastName1: this.lastName1,
            email1: this.email1,
            phone1: this.phone1,
            title2: this.title2,
            firstName2: this.firstName2,
            middleName2: this.middleName2,
            lastName2: this.lastName2,
            email2: this.email2,
            phone2: this.phone2,
            title3: this.title3,
            firstName3: this.firstName3,
            middleName3: this.middleName3,
            lastName3: this.lastName3,
            email3: this.email3,
            phone3: this.phone3,
            title4: this.title4,
            firstName4: this.firstName4,
            middleName4: this.middleName4,
            lastName4: this.lastName4,
            email4: this.email4,
            phone4: this.phone4,
            title5: this.title5,
            firstName5: this.firstName5,
            middleName5: this.middleName5,
            lastName5: this.lastName5,
            email5: this.email5,
            phone5: this.phone5,
            teamName: this.teamName,
            institution: this.institution,
            department: this.department,
            maillingAddress1: this.maillingAddress1,
            maillingAddress2: this.maillingAddress2,
            city: this.city,
            province: this.province,
            postalCode: this.postalCode,
            country: this.country,
            abstract: this.abstract,
            paperTitle: this.paperTitle,
            keywords: this.keywords
          })
            .then(response => {
              console.log(response)
              console.log('send')
            })
            .catch(e => {
              console.log(e)
            })
          return
        }
      })
    },
    submit () {
      this.postPost()
      // this.upload(this.submitForm)
    },
    upload (formData) {
      let url = `http://128.199.88.139:11115/upload`
      this.uploading = true
      axios.post(url, formData, {
        timeout: 50000000
      })
      // get data
      .then(response => {
        console.log(response.data)
      })
    },
    filesChange (fieldName, fileList) {
      this.currentFiles = fileList
      console.log(fileList)
      // handle file changes
      const formData = new FormData()

      if (!fileList.length) {
        this.haveFile = false
        return
      }
      this.haveFile = true
      // append the files to FormData
      Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append('files', fileList[x], fileList[x].name)
      })
      formData.append('teamName', this.teamName)
      formData.append('university', this.institution)
      // save it
      this.submitForm = formData
    }
  },
  watch: {
    teamName () {
      this.dropzoneOptions.params.teamName = this.teamName
    },
    institution () {
      this.dropzoneOptions.params.university = this.institution
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.text-error {
  color: red;
}

.form-group.required .control-label:after { 
   content:" *";
   color:red;
}
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
