<template>
    <section class="slider">
        <div class="container">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/images/pages/home/slider/slider-01.jpg" class="d-block w-100" alt="Slider image">
                        <div class="content">
                            <h2>Relaxed</h2>
                            <span>Simple and basic</span>
                            <router-link :to="{ name: 'Home' }">Shop Now</router-link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/images/pages/home/slider/slider-02.jpg" class="d-block w-100" alt="Slider image">
                        <div class="content">
                            <h2>Trendy</h2>
                            <span>DAILY NEW ARRIVALS</span>
                            <router-link :to="{ name: 'Home' }">Shop Now</router-link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Slider",
}
</script>