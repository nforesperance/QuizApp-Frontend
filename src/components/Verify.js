import React, { Component } from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux'

class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  getScore() {
    let store = this.props.data
    let questions = this.props.questions
    let score = 0;
    questions.forEach(elt1 => {
      store.forEach(elt2 => {
        if ((elt1.number === elt2.number) && (elt1.correct === elt2.id)) {
          score++;
        }
      });
    });
    return score;
  }
  render() {
    let questions = this.props.questions
    return (
      <div id="container">
        <center><h4 className="tittle" >Results</h4>
          <div className="card">
            <div className="card-header">
              <h4>{this.getScore()}/{questions.length}</h4>
            </div>
          </div>
        </center>


      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
const MainForm = Form.create({})(Third);

export default connect(mapStateToProps)(MainForm);