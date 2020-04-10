import { Button, Form, Steps } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Last from './Verify';
import axios from 'axios';
import route from '../constants/settings';





class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      visble: false,
      infos: [],
      questions: [],
    };
  }
    componentDidMount() {
      axios.get(route.get_questions+document.getElementById("quiz_id").value,)
        .then(res => {
         console.log(res);
         
        })
    let questions = [
      {
        "number": 1,
        "question": "What do you understand by the nature of a plasma membrane?",
        "answers": [
          {
            "id": "A",
            "answer": "The was no war"
          },
          {
            "id": "B",
            "answer": "I don't know"
          },
          {
            "id": "C",
            "answer": "There is another way"
          },
          {
            "id": "D",
            "answer": "Actually i don't think so"
          },
        ],
        "correct": "A",
      },
      {
        "number": 2,
        "question": "Explain the theory of Relativity",
        "answers": [
          {
            "id": "A",
            "answer": "Albert Einstein"
          },
          {
            "id": "B",
            "answer": "Micheal Faraday"
          },
          {
            "id": "C",
            "answer": "Albert Newton"
          },
          {
            "id": "D",
            "answer": "Tefaafrik"
          },
        ],
        "correct": "B",
      },
      {
        "number": 3,
        "question": "What is Artificial Inteligence?",
        "answers": [
          {
            "id": "A",
            "answer": "Magnets"
          },
          {
            "id": "B",
            "answer": "I don't know"
          },
          {
            "id": "C",
            "answer": "Neural Nets"
          },
          {
            "id": "D",
            "answer": "Machine Learning"
          },
        ],
        "correct": "C",
      },
    ]
    // Shuffling the array to produce random questions
    Array.prototype.shuffle = function () {
      let m = this.length, i;
      while (m) {
        i = (Math.random() * m--) >>> 0;
        [this[m], this[i]] = [this[i], this[m]]
      }
      return this;
    }
    questions.shuffle();
    let display = []
    let max = 2 //THIS VALUE SHOULD COME FROM THE API
    for (let index = 0; index < max; index++) {
     display.push(questions[index]);
      
    }
    this.setState({ questions:display })
  }
  next() {

    const current = this.state.current + 1;
    this.setState({ current });

  }
  prev() {
    const current = this.state.current - 1;
    // console.log(current)
    this.setState({ current });
  }
  render() {
    const { Step } = Steps;
    const { current } = this.state;
    let steps = []
    this.state.questions.map((item, index) => {
      steps.push(
        {
          title: "Step x",
          content: <Question form={this.props.form} item={item} index={index+1} total={this.state.questions.length} />
        }
      )
    })
    steps.push(
      {
        title: "Step 4",
        content: <Last form={this.props.form} questions={this.state.questions} />
      }
    )
    return (
      <div className="steps" >
        {/* <Steps current={current}>
          {steps.map((item ,index) => (
            <Step key={index} title={item.title} />
          ))}
        </Steps> */}
        {steps.map(({ title, content }, i) => (
          <div
            key={title + i}
            className={i === this.state.current ? "foo fade-in" : "foo"}
          >
            {content}
          </div>
        ))}
        <div className="steps-action">
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()} className="but">
              Previous
            </Button>
          )}
          {current < steps.length - 2 && (
            <Button type="primary" onClick={() => this.next()} id="suivant" className="but">
              Next
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button type="primary" onClick={() => this.next()} id="suivant" className="but">
              Finish
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button style={{ marginRight: 8 }} type="primary" onClick={() => this.getAllData()} id="suivant" className="but">
              Sumit
            </Button>
          )}
        </div>

      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => new Promise(
      resolve => {
        dispatch({ type: 'ADD', payload: data });
        resolve()
      })
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
const MainForm = Form.create({})(Main);

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
