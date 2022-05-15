import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>{`Что-то пошло не так! Возникла ошибка ${error}`}</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
