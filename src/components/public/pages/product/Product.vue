<template>
    <section class="product p-t-50 p-b-50">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                    <div class="product-image">
                        <img :src="'http://localhost/api/uploads/products/'+product.image" :alt="product.name">
                    </div>
                </div>

                <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                    <div class="product-data">
                        <div class="product-name">
                            <span>{{ product.name }}</span>
                        </div>

                        <div class="product-price">
                            <span>${{ product.price }}</span>
                        </div>

                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Description
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <p>
                                            {{ product.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Details
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        <div class="category-name">
                                            <label>Category: </label> <router-link :to="{ name: 'Home' }">{{ product.category_name }}</router-link>
                                        </div>
                                        <div class="brand-name">
                                            <label>Brand: </label> <router-link :to="{ name: 'Home' }">{{ product.brand_name }}</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="product-actions">
                            <button type="button" class="add-to-wish-list-btn" @click="addToShoppingCart()">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>Add to shopping cart</span>
                            </button>
                            <button type="button" class="add-to-shopping-cart-btn" @click="addToWishList()">
                                <i class="fa-regular fa-heart"></i>
                                <span>Add to wish list</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Product",
    props: ["product"],
    methods: {
        addToShoppingCart() {
            this.$store.dispatch("addToShoppingCart", {
                product: this.product,
                quantity: 1
            });
            // Message
            this.$snotify.success("Added to shopping cart");
        },
        addToWishList() {
            this.$store.dispatch('addProductToWishList', {
                product: this.product,
            });
            // Message
            this.$snotify.success("Added to wish list");
        }
    }
}
</script>