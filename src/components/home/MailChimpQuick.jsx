import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Form, Button, Input, Icon, Result, Typography, Tag } from 'antd';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const { Text } = Typography;

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
  onValuesChange(_, values) {},
})(props => {
  const { getFieldDecorator } = props.form;
  const { status, message } = props;

  return (
    <Form layout="inline">
      <Form.Item style={{ marginRight: 0 }}>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Email Address is required!' }],
        })(
          <Input
            className="mainInput"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email Address"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button loading={props.submitting} type="primary" onClick={() => props.onSubmit({ props })}>
          Get Early Access
        </Button>
      </Form.Item>
      {status === 'error' && (
        <Tag style={{ marginTop: '12px' }} color="volcano">
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </Tag>
      )}
      {status === 'success' && (
        <Tag style={{ marginTop: '12px' }} color="geekblue">
          Thanks! We'll be in touch shortly.
        </Tag>
      )}
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
            <CustomizedForm
              {...fields}
              submitting={status === 'sending'}
              onChange={this.handleFormChange}
              onSubmit={() =>
                subscribe({ EMAIL: fields.email.value, NAME: fields.name.value || '' })
              }
              status={status}
              message={message}
            />
          </div>
        )}
      />
    );
  }
}

export default Form.create({ name: 'signup_form' })(MailChimpForm);
