import React from "react";
// import './filelist.less'
import Item from './item/Item'
import { Container, Row, Col, Navbar } from "react-bootstrap"
import { useSelector, useDispatch} from "react-redux";

const NewsList = () => {
    
    const items = useSelector(state => state.news.news).map( item =>
        <Item key={item._id} item={item} />
    )
    return (
        <div style={{ marginTop: '20px', padding: '4px' }}>
            <Row>
                <Col md={6} sm={6} lg={6} xs={6}
                    className='text-start'
                    style={{ fontSize: '18px' }}>Жаңалық</Col>
                
                <Col md={6} sm={6} lg={6} xs={6}
                    className='text-end'
                    style={{ fontSize: '18px' }}>Опция</Col>
            </Row>
            <hr style={{
                marginBottom: '0px'
            }} />
            {items}
        </div>
    )
}

export default NewsList