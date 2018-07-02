import { observable, computed, action } from "mobx";

export default class FormStore {
  @observable name = '';
  @observable email = '';

  @observable submitted = false;

  @computed
  get errors() {
    let err = {};
    if (!this.submitted) {
      return err;
    }

    if (this.name == '') {
      err['name'] = "Name is required"
    }

    if (this.email == '') {
      err['email'] =  "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err['email'] =  "Email is not valid"
    }

    return err;
  }

  @action
  handleChange(key, value) {
    this[key] = value;
  }

  @action
  handleFormSubmit() {
    this.submitted = true;
    if (!Object.keys(store.errors).length) {
      alert('Form submitted');
    }
  };
}
