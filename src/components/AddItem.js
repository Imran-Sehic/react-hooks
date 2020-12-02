import { useState } from 'react';
import {Btn, InputField, Layout} from "./index";
import {getUser} from "../redux/ducks/user";
import { useSelector, useDispatch } from "react-redux";

export function AddItem(props) {
    const [addNew, setAddNew] = useState("")
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch();

    function createItem() {
        setAddNew(!addNew);
        props.createItem(inputValue)
    }

    function setUsers() {
        dispatch(getUser())
    }

    if (!addNew) {
        return (
            <>
                <Btn onClick={() => setUsers()}>Set</Btn>
                <Btn
                background={'#af7eeb'}
                padding={'12px 32px 11px'}
                borderRadius={'22.5px'}
                color={'white'}
                border={'1px solid white'}
                position={'relative'}
                top={'30px'}
                onClick={() => { setAddNew(!addNew) }}
            >
                + New Task
            </Btn>
            </>
        );
    } else {
        return (
            <Layout margin={'20px 50px'} minWidth={"300px"}>
                <Layout>
                    <InputField
                        type='text'
                        width={'100%'}
                        fontSize={'22px'}
                        border={'2px solid #949cbc'}
                        borderRadius={'5px'}
                        onChange={event => setInputValue(event.target.value)}
                        background={'#f9f9f8'}
                    />
                </Layout>
                <Layout>
                    <Btn
                        background={'#af7eeb'}
                        padding={'12px 32px 11px'}
                        borderRadius={'22.5px'}
                        color={'white'}
                        border={'1px solid white'}
                        position={'relative'}
                        top={'30px'}
                        onClick={ createItem }
                    >
                        + Add Task
                    </Btn>
                </Layout>
            </Layout>
        );
    }
}
