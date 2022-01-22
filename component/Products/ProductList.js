import { Fragment } from "react/cjs/react.production.min";

const ProductList = props => {
    const imgsrc = props.img;
    return (
        <Fragment>
            <ul>
                <div>Title: {props.title}</div>
                <div>
                    <img src={imgsrc} alt="products" />
                </div>
                <div>Price: {props.price}</div>
            </ul>
        </Fragment>
    );
};

export default ProductList;