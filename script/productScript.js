let productList = "";
const cartModalBodyElement = document.getElementById("modal-body");


function addProduct(product) {
    cartProducts += `
        <span class="selectedProduct" >
            <div style="display: flex; align-items: center">
                <img src="../assets/product/iphone11.jpg" alt="${product?.name}" width="auto" height="100px" />
                <productName style="margin: 0 0 0 1.6em"><p>${product?.name}</p></productName>
            </div>
            <p>$${product?.price}</p>
        </span> `
    cartModalBodyElement.innerHTML = cartProducts;
    alert("already added to cart")
}

data?.product?.forEach((product) => {
    productList += `
        <span class="productEach" >
            <img src="../assets/product/iphone11.jpg" alt="${product?.name}" width="auto" height="140em" />
            <div class="product-detail">
                <productName><p>${product?.name}</p></productName>
                <div>
                    <p>$${product?.price}</p>
                    <div id="orderButton" class="base-button" onclick='addProduct(${JSON.stringify(product)})'><p>Order</p></div>
                </div>
            </div> 
        </span>
    `
})

document.getElementById("productList").innerHTML = productList