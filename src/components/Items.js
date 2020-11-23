import { useState, useEffect } from 'react';
import { getPosts } from "../constants";
import Item from "./Item";
import { Layout } from "./index";
import {AddItem} from "./AddItem";

const Items = () => {
    const [hasError, setErrors] = useState(false);
    const [items, setItems] = useState([]);

    async function fetchData() {
        const res = await fetch(`${getPosts}todos/?_limit=20`);
        res.json()
           .then(res => setItems(res))
           .catch(err => setErrors(err));
    }

    async function deleteItem(item) {
        await fetch(`${getPosts}todos/${item.id}`, { method: 'DELETE' })
    }

    async function doneItem(item) {}

    async function createItem(item) {
        fetch(`${getPosts}todos/${item.id}`, {
            method: 'POST',
            body: JSON.stringify({
                userId: 99,
                id: 99,
                title: item,
                completed: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    async function editItem(item) {
        fetch(`${getPosts}todos/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                userId: item.userId,
                id: item.id,
                title: item.title,
                completed: item.completed,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    useEffect(() => {
        fetchData();
    }, [setItems]);

    return (
        <Layout background={'#ffffff'} boxShadow={'0 2px 7px -2px rgba(0, 0, 0, 0.15)'}>
            { items ? items.map((item, index) =>
                <Item key={index} item={item} deleteItem={deleteItem} doneItem={doneItem} />
            ) : hasError }
            <AddItem createItem={createItem} />
        </Layout>
    );
};

export default Items;
