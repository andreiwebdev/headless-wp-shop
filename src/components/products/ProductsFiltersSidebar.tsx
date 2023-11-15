type Brand = {
    id: string;
    name: string;
    map: Function;
};

type Props = {
    brands: Brand;
};

const ProductsFiltersSidebar = (props: any) => {
    // const prices = [
    //     {
    //         id: 1,
    //         price: "$0.00 - $1,000.00",
    //     },
    //     {
    //         id: 2,
    //         price: "$1,000.00 - $2,000.00",
    //     },
    //     {
    //         id: 3,
    //         price: "Over $2,000.00",
    //     },
    // ];

    return (
        <div className="products-filters">
            <h3>Filters</h3>
            <div className="btn btn--1" onClick={props.resetFilter}>
                Clear All
            </div>
            <div className="filter">
                <h4>Brands</h4>
                {props.brands?.map((brand: Brand) => (
                    <p
                        key={brand.id}
                        onClick={() => props.onBrandSelect(brand.name)}
                    >
                        <span>{brand.name}</span>
                    </p>
                ))}
            </div>
            {/* <div className="filter">
                <h4>Price</h4>
                {prices?.map((item) => (
                    <p key={item.id}>
                        <span>{item.price}</span>
                    </p>
                ))}
            </div> */}
        </div>
    );
};

export default ProductsFiltersSidebar;
