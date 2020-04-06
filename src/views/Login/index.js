import React, { PureComponent } from 'react'
import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'
import { Button, Row, Input, message } from 'antd'
import { connect } from 'react-redux'
import styles from './index.module.styl'
import logo from '../../assets/logo.png'
import { REG } from '../../consts'
import { API_CODE } from '../../consts/apiCode'
const FormItem = Form.Item

class Login extends PureComponent {
  handleOk = async () => {
    const { form, login, history, getUser } = this.props
    const { validateFields } = form
    validateFields(async (errors, values) => {
      if (errors) {
        return
      }
      const data = await login({ type: 'Admin', ...values })

      if (data) {
        const { code } = data
        if (code === API_CODE.AUTHENTICATE) {
          message.error('抱歉，该用户没有访问权限')
        } else {
          localStorage.setItem('fems-user', JSON.stringify(data.data))
          const res = await getUser()
          console.log(res, 'res')
          localStorage.setItem('user-detail', JSON.stringify(res))
          history.push('/app/home')
        }
      } else {
        message.error('用户名或密码错误')
      }
    })
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form

    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt="logo" src={logo} />
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  pattern: REG.EMAIL,
                  max: 100,
                  message: '请输入有效的邮箱',
                },
              ],
            })(<Input onPressEnter={this.handleOk} placeholder="邮箱" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  max: 50,
                  message: '请输入密码',
                },
              ],
            })(
              <Input
                type="password"
                onPressEnter={this.handleOk}
                placeholder="密码"
              />
            )}
          </FormItem>
          <Row>
            <Button type="primary" onClick={this.handleOk}>
              登录
            </Button>
          </Row>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    loginToken: state.loginToken,
    userDataDetail: state.userDataDetail,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch.app.login(payload),
    updateState: payload => dispatch.app.updateState(payload),
    getUser: () => dispatch.app.getUser(),
  }
}

const LoginForm = Form.create()(Login)
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
