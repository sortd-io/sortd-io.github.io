import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Form, Button, Input, Icon, Result } from 'antd';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomizedForm = Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      email: Form.createFormField({
        ...props.email,
        value: props.email.value,
      }),
      name: Form.createFormField({
        ...props.name,
        value: props.name.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})(props => {
  const { getFieldDecorator } = props.form;
  console.log(props);
  return (
    <Form layout="horizontal">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Email Address is required!' }],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="email"
            placeholder="Email Address"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('name')(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="name"
            placeholder="Name"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button loading={props.submitting} type="primary" onClick={() => props.onSubmit({ props })}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
});

class MailChimpForm extends React.Component {
  state = {
    fields: {
      email: {
        value: '',
      },
      name: {
        value: '',
      },
    },
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  _handleSubmit = async e => {
    e.preventDefault();
    const { form } = this.props;

    form.validateFields(async (err, fieldsValue) => {
      if (err) return;
      const result = await addToMailchimp(fieldsValue.email);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const url =
      'https://rockt.us17.list-manage.com/subscribe/post?u=f11728abdca6d9c4e72f748bf&amp;id=3e22517e03';
    const { form } = this.props;
    const { fields } = this.state;

    return (
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            {status !== 'error' && status !== 'success' && (
              <CustomizedForm
                {...fields}
                submitting={status === 'sending'}
                onChange={this.handleFormChange}
                onSubmit={() => subscribe({EMAIL: fields.email.value, NAME: fields.name.value || '' })}
              />
            )}
            {status === 'error' && (
              <Result
                status="error"
                title="Error signing up"
                subTitle={message}
                extra={<Button onClick={() => (status = null)}>Try Again</Button>}
              />
            )}
            {status === 'success' && (
              <Result
                status="success"
                title="We'll be in touch shortly!"
                extra={<Button type="primary">Back</Button>}
              />
            )}
          </div>
        )}
      />
    );
  }
}

export default Form.create({ name: 'signup_form' })(MailChimpForm);
