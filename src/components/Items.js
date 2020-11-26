import React, { useState, useEffect } from 'react';
import { getPosts } from "../constants";
import Item from "./Item";
import {  InputField, Layout } from "./index";
import {AddItem} from "./AddItem";
import { useSelector, useDispatch } from "react-redux";
import {addItem, deleteItem, editItem, loadItems, toggleItem} from "../redux/ducks/todosItems";
import IsDone from "./IsDone";

const Items = () => {
    const [hasError, setErrors] = useState(false);
    const [items, setItems] = useState([]);
    const [editing, setEditing] = useState(null);
    const [editingInputValue, setEditingInputValue] = useState(null);

    const todoItems = useSelector(state => state.todosItems.items);
    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch(`${getPosts}todos/?_limit=20`);
        res.json()
           .then(res => {
               loadStore(res)
           })
           .catch(err => setErrors(err));
    }

    function loadStore(res) {
        dispatch(loadItems(res));
    }

    function handleDeleteItem(item) {
        dispatch(deleteItem(item.id));
    }

    function handleToggleItem(item) {
        dispatch(toggleItem(item.id))
    }

    function toggleEditItem(item) {
        setEditing(item.id)
    }

    function createItem(item) {
        dispatch(addItem(
            {
                "userId": 1,
                "id": todoItems.length + 1,
                "title": item,
                "completed": false
            })
        )
    }

    function handleEnter(e, item) {
        if (e.key === 'Enter') {
            setEditing(null);
            dispatch(editItem({
                ...item,
                title: editingInputValue
            }));
        }
    }

    useEffect(() => {
        fetchData()
    }, [setItems]);

    const err = () => {
        return (
            <Layout>
                { hasError }
            </Layout>
        )
    }

    return (
        <Layout background={'#ffffff'} boxShadow={'0 2px 7px -2px rgba(0, 0, 0, 0.15)'} minWidth={"320px"}>
            { todoItems ? todoItems.map((item, index) =>
                {
                    if (item.id !== editing) {
                        return <Item key={index} item={item} deleteItem={handleDeleteItem} doneItem={handleToggleItem} editItem={toggleEditItem} />;
                    } else {
                        return (
                            <Layout display={'flex'} key={index}>
                                <Layout padding={'15px'}>
                                    <IsDone done={item.completed} />
                                </Layout>
                                <Layout width={'100%'}>
                                    <InputField value={item.title} onKeyDown={e => handleEnter(e, item)} onChange={event => setEditingInputValue(event.target.value)} width={'80%'} height={'36px'} fontSize={'22px'} placeholder={'Send wireframes'} borderRadius={'4px'} background={'#f9f9f8'} border={'1px solid #949cbc'}  />
                                </Layout>
                            </Layout>
                        )
                    }
                }
            ) : err }
            <AddItem createItem={createItem} />
        </Layout>
    );
};

export default Items;
