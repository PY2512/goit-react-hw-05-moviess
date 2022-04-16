import {Component} from "react";
import Buttons from "./Buttons/Buttons";
import SectionTitle from "./Title/SectionTitle"
import Statistics from "./Statiatics/Statistics";
import Notification from "./Notification/Notification";



class App extends Component {
  
  state = { good: 0, neutral:0, bad:0 };

  handleIncrement = (event) => { 
    const {id} = event.target; 
    this.setState((prevstate) => ({[id]:prevstate[id] + 1})
    )};

    countTotalFeedback = () => {
      const {good, neutral, bad} = this.state;
      return good + neutral + bad;
    };
    
    countPositiveFeedbackPercentage = () => {
      const {good, neutral, bad} = this.state;
      const sum = good + neutral + bad;
      const result = (good * 100) / sum;
      return result ? Math.floor(result) : "0"
    };

  render() {
    return (
      <>
        <SectionTitle />
        <Buttons handleIncrement={this.handleIncrement}/>
        {this.countTotalFeedback() === 0 ? (<Notification message="No feedback given" />) : 
        (<Statistics
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />)}
        {/* if (this.countTotalFeedback() === 0) {
          return <h2>No feedback given</h2>
        }
        return
         */}
        {/* <Statistics
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        /> */}
      </>
      
    );
  }
}

export default App;