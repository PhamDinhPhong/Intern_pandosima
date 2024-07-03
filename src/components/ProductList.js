import { FlatList, RefreshControl, View } from "react-native"
import Product from "./Product"


const ProductList = ({ data }) => {
    const renderItem = ({ item }) => {
        return <Product id={item.id} name={item.name} price={item.price} image={item.image} description={item.description} />
    }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('refreshing')}
                    />
                }
            />
        </View>
    )
}

export default ProductList;