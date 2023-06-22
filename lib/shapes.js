class Shape { 
    constructor () {
        this.color = ""
        this.text = ""
        this.textColor = ""
    }
    
    setColor(color) {
        this.color = color;
      }

      setTextColor(textColor) {
        this.textColor = textColor;
      }

      setText(text) {
        this.text = text;
      }

      render() {
        throw new Error('The render() method must be implemented by the subclass');
      }
    
}

class Triangle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      <rect x="73" y="40" width="160" height="160" fill="${this.color}" />
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      <circle cx="150" cy="115" r="80" fill="${this.color}" />
    </svg>`;
  }
}

  module.exports = { Triangle, Square, Circle };