import Link from 'next/link'
import {simpltGet} from '../lib/auth'
class example extends React.Component {
    handlesubmit = () => {
        console.log("Clicked")
        simpltGet()
    }
    render() {
        return (
            <div>
                <button onClick={this.handlesubmit}>Click here</button>
            </div>
        )
    }

}
export default (example);