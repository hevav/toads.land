<script>
    export let vertical, className, noLine
    let elem
    let pos = {top: 0, left: 0, x: 0, y: 0};

    const mouseDownHandler = function (e) {
        pos = {
            left: elem.scrollLeft,
            top: elem.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        elem.style.cursor = 'grabbing';
    };

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
        elem.scrollTop = pos.top - dy;
        elem.scrollLeft = pos.left - dx;

        elem.style.cursor = 'grab';
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
</script>

<div class={"flex text-neutral-600 select-none max-w-full overflow-hidden cursor-grab w-full items-stretch " + className}
     class:overflow-x-auto={!vertical && !noLine} class:flex-row={!vertical} class:overflow-y-auto={vertical && !noLine} class:flex-col={vertical}
     on:mousedown={mouseDownHandler}
     bind:this={elem}>
    <slot/>
</div>