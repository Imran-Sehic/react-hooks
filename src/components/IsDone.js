import {Layout} from "./index";
import CheckBox from "rc-checkbox";

const IsDone = (props) => {
    function onChange() {}

    if (props.done) {
        return (
            <Layout>
                <Layout width={'10px'} height={'10px'} border={'solid 1px #8e96b8'} background={'#af7eeb'} borderRadius={'50%'}/>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <Layout width={'10px'} height={'10px'} border={'solid 1px #8e96b8'} background={'#f8f8fb'} borderRadius={'50%'}/>
            </Layout>
        )
    }
}

export default IsDone;
