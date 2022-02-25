<template>
    <section class="bread-crumb">
        <div class="container">
            <span class="uppercase">{{ breadcrumbData.pageName }}</span>

            <div class="links">
                <router-link :to="{ name: breadcrumbData.lastPageLink }">{{ breadcrumbData.lastPage }}</router-link> / <label>{{ breadcrumbData.currentPage }}</label>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BreadCrumb",
    props: ["breadcrumbData"]
}
</script>