import { useState } from 'react';
import {Layout, Text} from "./index";
import IsDone from "./IsDone";
import { FiEdit2, RiDeleteBin6Line } from "react-icons/all";

const Item = (props) => {
    const [deleting, setDeleting] = useState(null);

    function editItem(e, currentItem) {
        props.editItem(currentItem)
    }

    function sureForDeleting(e, currentItem) {
        setDeleting(currentItem.id)
    }

    function deleteItem(e, currentItem) {
        props.deleteItem(currentItem)
    }

    function doneItem(item) {
        props.doneItem(item)
    }

    function focusEdit(e) {
        e.target.style.backgroundColor = '#eaebec'
    }

    function blurEdit(e) {
        e.target.style.backgroundColor = '#fff'
    }

    function focusDelete(e) {
        e.target.style.backgroundColor = '#eaebec'
    }

    function blurDelete(e) {
        e.target.style.backgroundColor = '#fff'
    }

    const text = (isCompleted) => {
        if (isCompleted) {
            return <Text color={'gray'} textDecoration={'line-through'} fontSize={'22'} > { props.item.title } </Text>;
        } else {
            return <Text fontSize={'22'} color={'gray'}> { props.item.title } </Text>;
        }
    }

    const itemAction = (isCompleted) => {
        if (isCompleted) {
            {
                if(deleting === props.item.id) {
                    return (
                        <Layout display={'flex'} justifyContent={'space-between'}>
                            <Layout padding={'5px'} onClick={($event) => editItem($event, props.item)} onMouseEnter={($event) => focusEdit($event)} onMouseLeave={($event) => blurEdit($event)} borderRadius={'3px'}>
                                <FiEdit2 color={'#8e96b8'}/>
                            </Layout>
                            <Layout onClick={($event) => sureForDeleting($event, props.item)} padding={'5px'}  onMouseEnter={($event) => focusDelete($event)} onMouseLeave={($event) => blurDelete($event)} borderRadius={'3px'}>
                                <Layout>
                                    <RiDeleteBin6Line color={'#8e96b8'} />
                                </Layout>
                                <Layout zIndex={'2'} background={'fff'} borderRadius={'4px'} padding={'11px 13px 11px 14px'} width={'119px'} height={'60px'} position={'absolute'} border={'2px solid #949cbc'}>
                                    <Layout>
                                        <Text>Are you sure?</Text>
                                    </Layout>
                                    <Layout display={'flex'} justifyContent={'space-around'}>
                                        <Text color={'#949cbc'} onClick={($event) => deleteItem($event, props.item)} margin={'5px'}>
                                            Yes
                                        </Text>
                                        <Text color={'#949cbc'} onClick={() => setDeleting(null)} margin={'5px'}>
                                            No
                                        </Text>
                                    </Layout>
                                </Layout>
                            </Layout>
                        </Layout>
                    )
                } else {
                    return (
                        <Layout display={'flex'} justifyContent={'space-between'}>
                            <Layout padding={'5px'} onClick={($event) => editItem($event, props.item)} onMouseEnter={($event) => focusEdit($event)} onMouseLeave={($event) => blurEdit($event)} borderRadius={'3px'}>
                                <FiEdit2 color={'#8e96b8'}/>
                            </Layout>
                            <Layout onClick={($event) => sureForDeleting($event, props.item)} padding={'5px'}  onMouseEnter={($event) => focusDelete($event)} onMouseLeave={($event) => blurDelete($event)} borderRadius={'3px'}>
                                <Layout>
                                    <RiDeleteBin6Line color={'#8e96b8'} />
                                </Layout>
                            </Layout>
                        </Layout>
                    );
                }
            }

        } else {
            return <Layout />;
        }
    }

    return (
        <>
            <Layout display={'flex'} justifyContent={'space-between'} padding={'15px'} minWidth={"320px"}>
                <Layout onClick={() => doneItem(props.item)}>
                    <IsDone done={props.item.completed} />
                </Layout>
                { text(props.item.completed) }
                { itemAction(props.item.completed) }
            </Layout>
        </>
    );
};

export default Item;
