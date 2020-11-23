import { Layout, Text } from "./index";
import { FaAlignJustify } from "react-icons/all";

function Header() {
    return (
        <>
            <Layout background={'#af7eeb'} padding={'20px'} margin={'0 0 15px 0'} boxShadow={'0 2px 7px -2px rgba(0, 0, 0, 0.15);'} justifyContent={'space-between'} display={'flex'}>
                <Text color={'white'}>
                    <FaAlignJustify />
                </Text>
                <Text fontSize={'16px'} color={'white'}>
                    Motoff To-do List
                </Text>
                <Text>
                </Text>
            </Layout>
        </>
    );
}

export default Header;
