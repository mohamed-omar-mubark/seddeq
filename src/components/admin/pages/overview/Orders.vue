<template>
    <section class="latest-orders">
        <div class="title">
            <span>Upcoming 10 orders</span>
        </div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Buyer's name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Total bill</th>
                        <th scope="col">More info</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.id">
                        <td>{{ order.id }}</td>
                        <td>{{ order.client_name }}</td>
                        <td>{{ order.client_phone }}</td>
                        <td>{{ order.total }} LE</td>
                        <td>
                            <button class="admin-action" type="button" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop-order-info'+order.id">
                                <i class="fa-solid fa-circle-info"></i>
                            </button>
                            <!-- Order info modal -->
                            <div class="modal fade" :id="'staticBackdrop-order-info'+order.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Order details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Code</th>
                                                            <th>Quantity</th>
                                                            <th>Sub total</th>
                                                        </tr>
                                                        <tr v-for="item in JSON.parse(order.cart)" :key="item.id">
                                                            <td>{{ item.product.id }}</td>
                                                            <td>{{ item.product.name }}</td>
                                                            <td>{{ item.product.price }} LE</td>
                                                            <td>{{ item.product.code }}</td>
                                                            <td>{{ item.quantity }}</td>
                                                            <td>{{ item.quantity * item.product.price }} LE</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="5">Total</td>
                                                            <td>{{ order.total }} LE</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th>Governorate</th>
                                                            <td>{{ order.client_governorate }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Address</th>
                                                            <td>{{ order.client_address }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th>Email</th>
                                                        </tr>
                                                        <tr>
                                                            <td>{{ order.client_email }}</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <th>Notes</th>
                                                        </tr>
                                                        <tr>
                                                            <td>{{ order.order_notes }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="db-modal-cancel-btn" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <button class="admin-action">
                                <i class="fa-solid fa-handshake"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: "Orders",
    data() {
        return {
            orders: null,
        }
    },
    mounted() {
        // Get all orders
        this.axios.get(process.env.VUE_APP_API_URL+`order/read.php`).then((response) => {
            this.orders = response.data.orders;
            console.log(response.data.orders);
        })
        .catch((error) => {
            console.log(error);
        });
    },
}
</script>