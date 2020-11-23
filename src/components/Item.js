import { useState } from 'react';
import {Layout, Text} from "./index";
import IsDone from "./IsDone";
import { FiEdit2, RiDeleteBin6Line } from "react-icons/all";

const Item = (props) => {
    const [hoveredItem, setHoveredItem] = useState(false);

    function editItem(currentItem) {
        console.log(currentItem)
    }

    function deleteItem(currentItem) {
        props.deleteItem(currentItem)
    }

    function doneItem(item) {
        props.doneItem(item)
    }

    const text = (isCompleted) => {
        if (isCompleted) {
            return <Text color={'gray'} textDecoration={'line-through'} fontSize={'22'} > { props.item.title } </Text>;
        } else {
            return <Text fontSize={'22'} color={'gray'}> { props.item.title } </Text>;
        }
    }

    return (
        <>
            <Layout display={'flex'} justifyContent={'space-between'} padding={'15px'}>
                <Layout onClick={() => doneItem(props.item)}>
                    <IsDone done={props.item.completed} />
                </Layout>
                { text(props.item.completed) }
                <Layout display={'flex'} justifyContent={'space-between'}>
                    <Layout padding={'0 5px'} onClick={() => editItem(props.item)}>
                        <FiEdit2 color={'gray'}/>
                    </Layout>
                    <Layout padding={'0 5px'} onClick={() => deleteItem(props.item)}>
                        <RiDeleteBin6Line color={'gray'} />
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default Item;
