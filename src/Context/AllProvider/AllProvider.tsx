import ProductsLoadProvider from "../../Providers/ProductsLoadProvider/ProductsLoadProvider";

const AllProvider = ({children}) => {
    return (
        <AllProvider>
            <ProductsLoadProvider>
                {children}
            </ProductsLoadProvider>
        </AllProvider>
    );
};

export default AllProvider;