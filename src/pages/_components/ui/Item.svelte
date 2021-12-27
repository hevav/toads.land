<script>
    export let limSize, inactive
</script>

<div class="bg-gradient-to-tl cursor-pointer p-8 rounded-xl m-4 transform hover:-translate-y-1 transition duration-200 text-lime-50"
     class:flex-1={!limSize} class:min-w-max={limSize} class:shadow-xl={!inactive}
     class:from-lime-600={!inactive} class:to-lime-900={!inactive} class:from-neutral-600={inactive} class:to-neutral-900={inactive}>
    <slot/>
</div>