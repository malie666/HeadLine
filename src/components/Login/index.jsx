import React, { PureComponent } from 'react';
import styles from './index.less';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.login}>Login</div>
    );
  }
}

export default Login;