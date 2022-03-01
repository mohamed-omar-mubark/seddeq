<template>
    <header class="dashboard-header" id="dashboard-haeder">
        <div class="search">
            <div class="bars">
                <i class="fa-solid fa-bars"></i>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search...">
                <div class="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>

        <div class="user-part">
            <div class="notifications">
                <div class="icon">
                    <i class="fa-solid fa-bell"></i>
                    <span>2</span>
                </div>
            </div>

            <div class="user-profile">
                <div class="user-avatar">
                    <img src="@/assets/images/layouts/header/circle.png" alt="User Avatar">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    mounted() {
        // Sticky header in scroll
        let header = document.getElementById("dashboard-haeder");
        window.addEventListener("scroll", function() {
            if (window.scrollY > 78) {
                header.classList.add("sticky-dashboard-header");
                document.getElementById("main-content").style.paddingTop = "78px";
            } 
            if (window.scrollY < 1) {
                header.classList.remove("sticky-dashboard-header");
                document.getElementById("main-content").style.paddingTop = "0";
            }
        });
    }
}
</script>