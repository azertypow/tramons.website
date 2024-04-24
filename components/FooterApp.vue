<template>
    <footer class="v-footer-app" >

        <div
            class="v-footer-app__adresse"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg" width="17.322" height="23.096" viewBox="0 0 17.322 23.096">
                <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M7.771,22.63C1.217,13.128,0,12.153,0,8.661a8.661,8.661,0,0,1,17.322,0c0,3.492-1.217,4.467-7.771,13.969a1.083,1.083,0,0,1-1.78,0Zm.89-10.36A3.609,3.609,0,1,0,5.052,8.661,3.609,3.609,0,0,0,8.661,12.27Z"/>
            </svg>
            <a
                target="_blank"
                href="https://maps.app.goo.gl/Sp27UbEHm7aRQjuL7"
            >Route de la Galaise, 23a
                <br>1228 Plan-Les-Ouates</a>
        </div>

        <div
            class="v-footer-app__licence"
        >
            sous licence creative commons | CC•BY•SA
        </div>
    </footer>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()
</script>





<style lang="scss" scoped >
.v-footer-app {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: auto;

    @media (min-width: 900px) {
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        gap: normal;
        height: 3rem;
    }
}

.v-footer-app__adresse {
    display: flex;
    align-items: baseline;
    gap: .5rem;

    > svg {
        height: 1.5ex;
    }
}

.v-footer-app__licence {
    font-size: .75rem;
    opacity: .5;
    padding-left: 1.65rem;


    @media (min-width: 900px) {
        padding: 0;
    }
}
</style>
