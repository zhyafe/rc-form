import { createForm, formShape } from "rc-form";
import React from "react";

interface Props {
  form: any;
}

class Form extends React.Component<Props, any> {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  };

  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;
    console.log(getFieldProps("tt"));

    return (
      <div>
        <input {...getFieldProps("normal")} />
        <input
          {...getFieldProps("required", {
            onChange() {}, // have to write original onChange here if you need
            rules: [{ required: true }],
          })}
        />
        {this.props.form.getFieldDecorator("demo", {
          rules: [{ required: true }],
        })(<input />)}
        {(errors = getFieldError("required")) ? errors.join(",") : null}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default createForm()(Form);
