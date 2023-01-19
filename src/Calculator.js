
import React from 'react';
>>>>>>> parent of fff959e (deleted)
import './cal.css';
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { result: '0', input: '', num: '' }
    this.change = this.change.bind(this);
    this.cal = this.cal.bind(this);
    this.clear = this.clear.bind(this);
    this.changeop = this.changeop.bind(this);

  }
  cal(e) {
    this.setState({ input: this.state.input + this.state.num })
    this.setState({ result: eval(this.state.input) })
    this.setState({ input: eval(this.state.input) })
    this.setState({ num: '' })

  }
  clear() {
    this.setState({ result: '0', input: '', num: '' })
  }
  changeop(e) {
    if (this.state.result == '0') { this.setState({ result: '' }); }
    if (e.target.value != '-')
      this.setState({ result: e.target.value, num: '' })
    else if (this.state.result == '+' || this.state.result == '/' || this.state.result == '*')
      this.setState({ result: this.state.result + e.target.value, num: '' })
    else
      this.setState({ result: e.target.value, num: '' })
  }
  change(e) {
    if (this.state.num.includes('.') && e.target.value == '.')
      this.setState({})
    else {
      if (this.state.num == '0') {
        this.setState({ result: '0', num: '' })
      }
      else {
        if (this.state.result == '0') {
          this.setState({ result: '' })
        }
        if (this.state.result[0] == '+' || this.state.result[0] == '-' || this.state.result[0] == '/' || this.state.result[0] == '*')
          this.setState({ input: this.state.input + this.state.result + e.target.value, num: this.state.num += e.target.value, result: this.state.num })
        else
          this.setState({ input: this.state.input + e.target.value, num: this.state.num += e.target.value, result: this.state.num })
      }
    }
  }
  render() {
    return (<div id="full" class="grid-container">
      <button onClick={this.cal} id="equals">=</button>
      <button value='0' onClick={this.change} id="zero">0</button>
      <button value='1' onClick={this.change} id="one">1</button>
      <button value='2' onClick={this.change} id="two">2</button>
      <button value='3' onClick={this.change} id="three">3</button>
      <button value='4' onClick={this.change} id="four">4</button>
      <button value='5' onClick={this.change} id="five">5</button>
      <button value='6' onClick={this.change} id="six">6</button>
      <button value='7' onClick={this.change} id="seven">7</button>
      <button value='8' onClick={this.change} id="eight">8</button>
      <button value='9' onClick={this.change} id="nine">9</button>
      <button value='.' onClick={this.change} id="decimal">.</button>
      <button value='*' onClick={this.changeop} id="multiply">*</button>
      <button value='/' onClick={this.changeop} id="divide">/</button>
      <button value='+' onClick={this.changeop} id="add">+</button>
      <button value='-' onClick={this.changeop} id="subtract">-</button>
      <button onClick={this.clear} id="clear">AC</button>
      <div class="show">

        <p id="screen">{this.state.input}</p>

        <p id="display">{this.state.result}</p>

      </div>
    </div>)
  }
}
export default Calculator;
