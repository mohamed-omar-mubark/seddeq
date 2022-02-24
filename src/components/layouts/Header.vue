<template>
    <header class="app-header" id="app-haeder">
        <div class="container">
            <router-link :to="{ name: 'Home' }" class="logo">
                <img src="@/assets/images/logo/seddeq.png" alt="Seddeq logo">
                <span>Seddeq</span>
            </router-link>

            <button class="menu-btn d-xl-none d-lg-none d-md-block d-sm-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-main-menu" aria-controls="offcanvasExample">
                <img src="@/assets/images/layouts/header/home.gif" alt="Main menu list">
            </button>

            <div class="main-menu d-xl-block d-lg-block" tabindex="-1" id="offcanvas-main-menu" aria-labelledby="offcanvasExampleLabel">
                <ul class="pages">
                    <li>
                        <router-link :to="{ name: 'Home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Shop</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Product</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Sale</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Home' }">Blog</router-link>
                    </li>
                </ul>
            </div>

            <div class="shopping">
                <div class="wish-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-wish-list" aria-controls="offcanvasExample">
                    <i class="far fa-heart"></i>
                    <span>21</span>
                </div>
                <!-- Offcanvas wish-list -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-wish-list" aria-labelledby="offcanvasExampleLabel">
                    My wish list here
                </div>

                <div class="shopping-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-shopping-cart" aria-controls="offcanvasExample">
                    <i class="fas fa-shopping-cart"></i>
                    <span>2</span>
                </div>
                <!-- Offcanvas shopping-cart -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-shopping-cart" aria-labelledby="offcanvasExampleLabel">
                    My shopping cart here
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import $ from "jquery";
export default {
    name: "Header",
    mounted() {
        // Sticky header in scroll
        let header = document.getElementById("app-haeder");

        window.addEventListener("scroll", function() {

            if(window.scrollY > 50) {

                header.classList.add("sticky-header");
                document.getElementById("app").style.paddingTop = "50px";
            } 
            if(window.scrollY <= 1) {

                header.classList.remove("sticky-header");
                document.getElementById("app").style.paddingTop = "0";
            }
            
        })

        // Main menu in small screens
        function myFunction(screenWidth) {
            if (screenWidth.matches) { // If media query matches
                $(".main-menu").addClass("offcanvas offcanvas-start");
            } else {
                $(".main-menu").removeClass("offcanvas offcanvas-start");
                $(".main-menu").css("display", "block");
            }
        }
        let screenWidth = window.matchMedia("(max-width: 991px)");
        myFunction(screenWidth) // Call listener function at run time
        screenWidth.addListener(myFunction) // Attach listener function on state changes
    }
}
</script>