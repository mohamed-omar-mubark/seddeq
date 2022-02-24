<template>
    <footer class="app-footer p-t-50 p-b-50">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="logo">
                            <router-link :to="{ name: 'Home' }" class="logo">
                                <img src="@/assets/images/logo/seddeq.png" alt="Seddeq logo">
                                <span>Seddeq</span>
                            </router-link>
                        </div>

                        <div class="email">
                            <a href="mailto:support@seddeq.com">
                                <i class="fa-solid fa-envelope"></i>
                                <span>support@seddeq.com</span>
                            </a>
                        </div>

                        <div class="phone">
                            <a href="tel:201559660633">
                                <i class="fa-solid fa-phone"></i>
                                <span>+201559660633</span>
                            </a>
                        </div>

                        <div class="whatsapp">
                            <a href="https://wa.me/201559660633" target="_blank">
                                <i class="fa-brands fa-whatsapp"></i>
                                <span>Whatsapp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>Categories</span>
                        </div>

                        <ul class="links-list">
                            <li>
                                <router-link :to="{ name: 'Home' }">Mens</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'Home' }">Womens</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>Information</span>
                        </div>

                        <ul class="links-list">
                            <li>
                                <router-link :to="{ name: 'Home' }">Contact Us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="column">
                        <div class="title">
                            <span>Useful links</span>
                        </div>

                        <ul class="links-list">
                            <li>
                                <router-link :to="{ name: 'Home' }">Collections</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'Home' }">Brands</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- to-top-btn -->
        <button type="button" class="to-top-btn" id="to-top-btn">
            <i class="fa-solid fa-chevron-up"></i>
        </button>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    mounted() {
        // To top button
        let toTop = document.getElementById("to-top-btn");

        window.addEventListener("scroll", function() {

            if(window.scrollY > 50) {

                toTop.style.display = "block";
            } 
            if(window.scrollY <= 1) {

                toTop.style.display = "none";
            }
            
        })
    }
}
</script>